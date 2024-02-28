import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";
import { likedProduct } from "../models/likedProduct.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getLikedProduct = async (req, res) => {
  const userId = req.params.userId;

  try {
    const products = await likedProduct.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product",
      },
    ]);
    res
      .status(200)
      .json(
        products
      );
  } catch (error) {
    console.error("Error fetching liked products:", error);
    res
      .status(500)
      .json(new ApiResponse(500, null, "Failed to fetch liked products"));
  }
};

const addLike = async (req, res) => {
  const { userId, productId } = req.body;
  console.log(req.body);
  console.log("userId:", userId, "Product Id:", productId);

  try {
    if (!userId || !productId) {
      throw new ApiError(400, "userId or ProductId not found!");
    }
    const liked = await likedProduct.create({ userId, productId });
    console.log(liked);
    res.status(200).json(liked);
  } catch (error) {
    console.log("Error while adding into liked products!", error.message);
  }
};

export { getLikedProduct, addLike };
