import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadProduct } from "../controllers/product.controller.js";

const router = Router();

router.route("/add").post(upload.single("productImg"), uploadProduct);

export default router;
