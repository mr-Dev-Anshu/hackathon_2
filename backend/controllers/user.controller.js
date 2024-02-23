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
    subject: "For verification mail ",
    html:
      "<p>Hey  " +
      username +
      ' Please click very link for varification <a href="http://localhost:8000/api/v1/users/verify?id=' +
      id +
      '">Verify </a> your mail </p>',
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
  console.log("accessToken: ", accessToken);
  console.log("RefreshToken: ", refreshToken);
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
    generateTokens(id);

    res.json("your email is verified now  ");
    return true;
  } catch (error) {
    console.log(error.message, "yaha se ");
    res.json("you are cute ");
  }
  // console.log(id);
};

export const signin = (req, res) => {
  console.log("this is signin ");
  res.status(200).json("this is sign  ...");
};
