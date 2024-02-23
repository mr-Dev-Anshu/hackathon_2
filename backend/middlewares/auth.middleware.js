import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";

export const jwtVerify = async (req, res, next) => {
  const token = req.cookies?.accessToken;

  try {
    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decode.id).select("-password");
    if (!user) {
      throw new ApiError(401, "invalid access Token :::");
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
