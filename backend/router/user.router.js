import { Router } from "express";
import { setVerify, signin, signup  } from "../controllers/user.controller.js";

const router = Router();



router.route("/signup").post(signup );
router.route("/verify").get(setVerify); 
router.route("/signin").post(signin);


export default router ;