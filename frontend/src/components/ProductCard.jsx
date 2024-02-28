import React, { useContext, useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import { CartContext } from "../context/Cart";

import toast, { Toaster } from "react-hot-toast";
import { currentUserContext } from "../context/userContext/CurrentUserProvider";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const { currUser } = useContext(currentUserContext);
  const { items, setItems } = useContext(CartContext);


  const [likedData, setLikedData] = useState();

  // toast
  const notifySuccess = (message) => toast.success(message, { duration: 1000 });
  const warning = () => toast("Please Login!", { duration: 1000 });

  const addToCart = () => {
    if (!currUser) {
      warning();
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      setItems([
        ...items,
        { name: props.name, price: props.price, src: props.src },
      ]);
      notifySuccess("Added to Cart!");
    }
  };

  useEffect(() => {
    setLikedData({ ...likedData, userId: currUser?._id, productId: props?.id });
  }, []);

  const addToWishlist = async () => {
    if (!currUser) {
      console.log(props.id);
      warning();
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      return;
    }

    console.log(likedData);

    try {
      const res = await axios.post("api/v1/products/addLike", likedData);
      console.log(res.status);
    } catch (error) {
      console.log(error);
    }
    notifySuccess("Added to Wishlist!");
  };

  return (
    <div className="h-fit w-64 p-1 rounded-md shadow-xl">
      <HashLink to={`/${props.id}`}>
        <img
          className="h-52 w-full object-cover rounded-sm mb-2"
          src={props.src}
          alt=""
        />
        <div className="w-full flex flex-col gap-2 p-1">
          <p className=" text-xl font-semibold">{props.name}</p>
          <p className=" text-md text-slate-500">{props.category}</p>
          <p className="text-xl w-fit font-bold ">{`₹ ${props.price}`}</p>
        </div>
      </HashLink>
      <div className="w-full flex justify-between p-2">
        <button
          className="outline w-[75%] outline-slate-300  rounded-lg p-2 flex justify-around hover:bg-[#BEE3DB] transition-all duration-100"
          onClick={addToCart}
        >
          <p className="text-lg font-semibold">Add To Cart</p>
          <BsCartPlus size={24} />
        </button>
        <button
          onClick={addToWishlist}
          className="outline outline-slate-300  p-2 rounded-lg  hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          <FaRegHeart size={24} />
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default ProductCard;
