import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
export const uploadProduct = async (req, res) => {
  try {
    const { name, price, category, discreption, quantity } = req.body;
    if (
      [name, price, category, discreption, quantity].some(
        (field) => field.trim() == ""
      )
    ) {
      throw new ApiError(404, "all fields are requared ::: ");
    }
    const path = req.file?.path;

    if (!path) {
      throw new ApiError(404, "please Upload the product image  ");
    }

    const img = await uploadOnCloudinary(path);
    if (!img) {
      throw new ApiError(500, "Error while uploading image on cloudinary !!!");
    }

    const imageUrl = img?.url;

    const product = await Product.create({
      name,
      price,
      category,
      quantity,
      discreption,
      productImg: imageUrl,
    });

    res
      .status(200)
      .json(new ApiResponse(200, { product }, "Product added successfully "));
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

  export const getProducts = async (req,res) => {
         try {
        const products = await Product.find({}) ; 
        //  console.log (products) ;
        return res.status(200).json(new ApiResponse(200 , products , "Product fetched successfully " )) ; 
         } catch (error) {
           console.log (error);
         } 
  }
