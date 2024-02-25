import mongoose from "mongoose";
import { likedProduct } from "../models/likedProduct.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getLikedProduct = async (req, res) => {
  const userId = req.params.userId;

  try {
    const products = await likedProduct.aggregate([
      {
        $match: mongoose.Types.ObjectId(userId),
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
    console.log(products);
    res
      .status(200)
      .json(new ApiResponse(200, products, "Here is the liked products "));
  } catch (error) {
    res.status(400).json("Something went worng in the getting liked products ");
  }
};

const addLike = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const liked = await likedProduct.create({ userId, productId });
    console.log (liked)
    res.status(200).json(liked);
  } catch (error) {}
};

export { getLikedProduct, addLike };
