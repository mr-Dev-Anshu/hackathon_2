import React, { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";

import { CiHeart } from "react-icons/ci";
import { HashLink } from "react-router-hash-link";
import { CartContext } from "../context/Cart";
import { WishlistContext } from "../context/Wishlist";
import toast, { Toaster } from "react-hot-toast";
import { currentUserContext } from "../context/userContext/CurrentUserProvider";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const { currUser } = useContext(currentUserContext);
  const navigate = useNavigate();
  const { items, setItems } = useContext(CartContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);

  // toast
  const notifySuccess = () =>
    toast.success("Added to Cart!", { duration: 1000 });
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
      notifySuccess();
    }
  };

  const addToWishlist = () => {
    if (!currUser) {
      warning();
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      setWishlist([
        ...wishlist,
        { name: props.name, src: props.src, price: props.price },
      ]);
    }
  };

  console.log(props.id);

  return (
    <div className="h-fit w-64 p-1 rounded-md shadow-xl">
      <HashLink to={`/${props.id}`}>
        <img
          className="h-52 w-full object-cover rounded-sm mb-2"
          src={props.src}
          alt=""
        />
        <div className="w-full flex flex-col gap-2 p-2">
          <p className=" text-xl">{props.name}</p>
          <p className=" text-xs text-slate-400 font-semibold">
            {props.category}
          </p>
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
          className="outline outline-slate-300  p-2 rounded-lg"
        >
          <CiHeart size={24} />
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default ProductCard;
