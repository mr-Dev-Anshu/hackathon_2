import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  discreption: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  productImg:{
     type:String , 
     require:true 
  }
});

export const Product = mongoose.model("Product", productSchema);
