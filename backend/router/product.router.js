import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { getProducts, uploadProduct } from "../controllers/product.controller.js";
import {addLike, getLikedProduct} from "../controllers/likedProduct.controller.js";

const router = Router();

router.route("/add").post(upload.single("productImg"), uploadProduct);
router.route("/likedproducts/:userId").post(getLikedProduct);
router.route("/addLike").post(addLike)
router.route("/all-products").get(getProducts);
export default router;
