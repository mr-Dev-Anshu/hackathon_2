import React from "react";
import i1 from "../assets/img.jpg";
import { BsCartPlus } from "react-icons/bs";

import { CiHeart } from "react-icons/ci";
import { HashLink } from "react-router-hash-link";

const ProductCard = (props) => {
  return (
    <div className="h-fit w-fit p-1 rounded-md shadow-xl">
      <HashLink to={`/${props.id}`}>
        <img
          className="h-52 w-full object-cover rounded-sm mb-2"
          src={i1}
          alt=""
        />
        <div className="w-full flex flex-col gap-2 p-2">
          <p className=" text-xl">{props.name}</p>
          <p className=" text-xs text-slate-400 font-semibold">
            {props.category}
          </p>
          <p className="text-xl w-fit font-bold ">{`Rs ${props.price}`}</p>
        </div>
      </HashLink>
      <div className="w-full flex justify-between p-2">
        <button className="outline outline-1 w-[60%] rounded-lg p-2">
          Buy now
        </button>
        <button>
          <BsCartPlus size={24} />
        </button>
        <button>
          <CiHeart size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
