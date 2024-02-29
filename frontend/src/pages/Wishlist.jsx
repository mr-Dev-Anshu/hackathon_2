import React, { useContext } from "react";
import { WishlistContext } from "../context/Wishlist";
import { IoMdHeartEmpty } from "react-icons/io";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="pt-20">
      <div className="p-2 bg-slate-300">
        <p className="px-8 text-3xl flex items-center gap-4 justify-start">
          WishList <IoMdHeartEmpty size={36} />
        </p>
      </div>
      <hr />
      {wishlist &&
        wishlist.map((item) => (
          <li
            className=" flex p-3 shadow-md w-full rounded-lg"
            key={item.product._id}
          >
            <img
              className="h-36 min-w-[250px] rounded-lg"
              src={item.product.productImg}
              alt=""
            />
            <div className=" w-full flex flex-row justify-between p-2 px-5">
              <div className="flex flex-col w-[40%] justify-between">
                <p className="text-xl font-semibold">{item.product.name}</p>
                <div className="flex flex-row justify-between">
                  <button className="outline outline-slate-300 rounded-lg p-2 w-[30%] ">
                    Add To Cart
                  </button>
                  <button className="outline outline-slate-300 rounded-lg p-2 w-[30%] ">
                    View
                  </button>
                  <button className="outline outline-slate-300 rounded-lg p-2 w-[30%] ">
                    Remove
                  </button>
                </div>
              </div>
              <p className="text-xl font-semibold w-fit">
                ₹ {item.product.price}
              </p>
            </div>
          </li>
        ))}
    </div>
  );
};

export default Wishlist;
