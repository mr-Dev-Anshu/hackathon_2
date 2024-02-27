import { Router } from "express";
import {
  currentuser,
  logout,
  setVerify,
  signin,
  signup,
} from "../controllers/user.controller.js";
import { jwtVerify } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/verify").get(setVerify);
router.route("/currentuser").get(jwtVerify,currentuser);
router.route("/logout").get(jwtVerify, logout);

export default router;
