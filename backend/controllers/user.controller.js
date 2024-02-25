import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import nodemailer from "nodemailer";

const sendVeriryEmail = async (username, email, id) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    requireTLS: true,
    auth: {
      user: "anshuies31@gmail.com",
      pass: "mvuargxubgcgeyio",
    },
  });
  const mailOption = {
    from: "anshuies31@gmail.com",
    to: email,
    subject: "Made for me Verification email !",
    html:
      "<p>Hey \n" +
      username +
      'Please click verify link for verification <button> <a href="http://localhost:8000/api/v1/users/verify?id=' +
      id +
      '">Verify</a></button> your mail </p>',
  };

  await transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(" there is error", error);
    } else {
      console.log("Email has been send ");
    }
  });
};

const generateTokens = async (id) => {
  const user = await User.findById(id);

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  return { accessToken, refreshToken };
};

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if ([username, email, password].some((item) => item?.trim() === "")) {
      console.log("All fields arr required ");
      throw new ApiError(404, "All fields are required ");
    }
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      throw new ApiError(400, "Username / Email is  already exist  ");
    }

    const user = await User.create({
      username: username.toLowerCase(),
      email,
      password,
    });

    if (!user) {
      throw new ApiError(
        500,
        "Some thing went wrong while registring the user "
      );
    }

    sendVeriryEmail(username, email, user._id);

    return res
      .status(200)
      .json(new ApiResponse(200, user, "User registerd successfully ::::)))"));
  } catch (error) {
    console.log("this is erorr : ", error?.message);
    res.status(error.statusCode).json(error.message);
  }
};

export const setVerify = async (req, res) => {
  const id = req.query.id;
  try {
    const updateUser = await User.updateOne(
      { _id: id },
      { $set: { isVerified: 1 } }
    );
    const { accessToken, refreshToken } = await generateTokens(id);

    console.log(" this is access token :  ", accessToken);
    console.log(" this is refresh  token :  ", refreshToken);
    res.cookie("accessToken", accessToken, { httpOnly: true });
    res.cookie("refereshToken", refreshToken, { httpOnly: true });

    res.json("your email is verified now  ");
    return true;
  } catch (error) {
    console.log(error.message, "yaha se ");
    res.json("you are cute ");
  }
  // console.log(id);
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new ApiError(400, "Email is required ");
    }

    const user = await User.findOne({ email });
    const isPasswordCorrect = await user.isCorrectPassword(password);

    if (!isPasswordCorrect) {
      throw new ApiError(401, "Password is incorrect ");
    }

    const loggedInUser = await User.findById(user._id).select("-password");

    console.log(loggedInUser);

    const option = {
      httpOnly: true,
    };

    const { accessToken, refreshToken } = await generateTokens(user._id);
    return res
      .status(200)
      .cookie("accessToken ", accessToken, option)
      .cookie("refereshToken", refreshToken, option)
      .json(
        new ApiResponse(
          200,
          { users: loggedInUser },
          "User Logedin successfully"
        )
      );
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const currentuser = async (req, res) => {
  res.status(200).json(req.user);
};
