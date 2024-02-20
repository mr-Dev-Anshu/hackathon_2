import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
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
      throw ApiError(400, "Username / Email is  already exist  ");
    }

    const user = await User.create({
      username: username.toLowerCase(),
      email,
      password,
    });

    if (!user) {
      throw ApiError(500, "Some thing went wrong while registring the user ");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, user, "User registerd successfully ::::)))"));
  } catch (error) {
    console.log("this is erorr : ", error?.message);
    res.status(error.statusCode).json(error.message);
  }
};

export const signin = (req, res) => {
  console.log("this is signin ");
  res.status(200).json("this is sign  ... ");
};