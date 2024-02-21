import React from "react";
import i1 from "../assets/img.jpg";

const ProductCard = (props) => {
  return (
    <div className="h-68 w-52 outline p-1 rounded-md">
      <img
        className="h-48 w-full object-cover rounded-sm mb-2"
        src={i1}
        alt=""
      />
      <div className="w-full flex flex-col gap-1">
        <p className=" text-xl">{props.name}</p>
        <p className=" text-xs text-slate-400 font-semibold">
          {props.category}
        </p>
        <p className="text-xl w-fit font-bold bg-[#ace7da] px-2 rounded-lg">{`Rs ${props.price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
