import mongoose from "mongoose";

const likedProductSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

 export const likedProduct = mongoose.model("likedProduct", likedProductSchema);
