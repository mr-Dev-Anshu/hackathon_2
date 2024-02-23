import { Router } from "express";
import { currentuser, setVerify, signin, signup  } from "../controllers/user.controller.js";
import {jwtVerify} from "../middlewares/auth.middleware.js";

const router = Router();



router.route("/signup").post(signup );
router.route("/verify").get(setVerify); 
router.route("/signin").post(signin);
router.route("/currentuser").get(jwtVerify , currentuser)


export default router ;