import axios from "axios";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import logo from "../assets/logoweb.png";
import { currentUserContext } from "../context/userContext/CurrentUserProvider";

const UploadProduct = () => {
  const { currUser } = useContext(currentUserContext);
  const user = currUser?.username;

  const [uploading, setUploading] = useState(false);

  const [productData, setProductData] = useState({
    username: user,
    category: "",
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    productImg: "",
  });

  console.log(productData);

  const handlechange = (e) => {
    if (e.target.id === "productImg") {
      setProductData({ ...productData, productImg: e.target.files[0] });
    } else {
      setProductData({ ...productData, [e.target.id]: e.target.value });
    }
  };

  const notifySuccess = () => toast.success("Product uploaded successfully!");
  const notifyError = () => toast.error("Product not uploaded!");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUploading(true);

      await axios.post("api/v1/products/add", productData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      notifySuccess();
      setUploading(false);
    } catch (error) {
      setUploading(false);
      console.log("Error occured while uploading product ");
      notifyError();
    }
  };

  return (
    <div className="pt-12 flex justify-center items-center">
      <div className=" h-fit w-fit p-8">
        <form
          className=" flex flex-col shadow-xl rounded-xl p-6 gap-4"
          action=""
          method="POST"
        >
          <img className="" src={logo} alt="" />
          <p className="text-center text-xl font-bold uppercase shadow-xl rounded-lg p-1 ">
            Upload Product
          </p>
          <input
            required
            className=" p-2 rounded-lg  shadow-xl capitalize "
            type="text"
            placeholder="Category"
            onChange={handlechange}
            id="category"
          />
          <input
            required
            className=" p-2 rounded-lg  shadow-xl capitalize"
            type="text"
            placeholder="Name of the product"
            onChange={handlechange}
            id="name"
          />
          <input
            required
            className="p-2 rounded-lg   shadow-xl "
            type="text"
            placeholder="Description"
            onChange={handlechange}
            id="description"
          />
          <input
            required
            className="p-2 rounded-lg   shadow-xl"
            type="number"
            placeholder="Price"
            onChange={handlechange}
            id="price"
          />
          <input
            required
            className="p-2 rounded-lg shadow-xl"
            type="number"
            min={1}
            max={500}
            placeholder="Quantity"
            onChange={handlechange}
            id="quantity"
          />
          <input
            required
            className="p-2 rounded-lg shadow-xl"
            type="file"
            id="productImg"
            onChange={handlechange}
            name="img"
            accept="image/*"
          />

          <button
            onClick={handleSubmit}
            className=" p-2 rounded-lg shadow-xl text-xl bg-green-200 font-bold font-serif  "
          >
            {uploading ? <p>Uploading...</p> : <p>Upload</p>}
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
