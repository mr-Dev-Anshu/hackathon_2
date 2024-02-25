import axios from "axios";
import React, { useState } from "react";

const UploadProduct = () => {
  const [productData, setProductData] = useState();

  const handlechange = (e) => {
    if (e.target.id === "productImg") {
      setProductData({ ...productData, productImg: e.target.files[0] });
    } else {
      setProductData({ ...productData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(productData);

      const res = await axios.post("api/v1/products/add", productData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (error) {
      console.log("bhag bsdk !");
    }
  };
  return (
    <div className="pt-20 flex justify-center items-center h-screen">
      <div className=" h-fit w-fit p-8">
        <form
          className=" flex flex-col outline rounded-xl p-4 gap-4"
          action=""
          method="POST"
        >
          <input
            className="outline p-2 rounded-lg "
            type="text"
            placeholder="Username"
            onChange={handlechange}
            id="username"
          />
          <input
            className="outline p-2 rounded-lg "
            type="text"
            placeholder="category"
            onChange={handlechange}
            id="category"
          />
          <input
            className="outline p-2 rounded-lg "
            type="text"
            placeholder="Name of the product"
            onChange={handlechange}
            id="name"
          />
          <input
            className="outline p-2 rounded-lg "
            type="text"
            placeholder="Description"
            onChange={handlechange}
            id="description"
          />
          <input
            className="outline p-2 rounded-lg "
            type="number"
            placeholder="Price"
            onChange={handlechange}
            id="price"
          />
          <input
            className="outline p-2 rounded-lg "
            type="number"
            min={1}
            max={500}
            placeholder="Quantity"
            onChange={handlechange}
            id="quantity"
          />
          <input
            className="outline p-2 rounded-lg "
            type="file"
            id="productImg"
            onChange={handlechange}
            name="img"
            accept="image/*"
          />

          <button onClick={handleSubmit} className="outline p-2 rounded-lg  ">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
