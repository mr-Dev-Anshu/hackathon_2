import React, { useContext } from "react";
import { WishlistContext } from "../context/Wishlist";
import { IoMdHeartEmpty } from "react-icons/io";

// import { CartContext } from "../context/Cart";

const Wishlist = () => {
  const Wish = useContext(WishlistContext);
  // const { items, setItems } = useContext(CartContext);

  // const addToCart = () => {
  //   setItems([...items, { name: Wish.name, price: Wish.price, src: Wish.src }]);
  // };

  return (
    <div className="pt-20">
      <div className="p-2 bg-slate-300">
        <p className="px-8 text-3xl flex items-center gap-4 justify-start">
          WishList <IoMdHeartEmpty size={36} />
        </p>
      </div>
      <hr />
      {Wish &&
        Wish.wishlist.map((wish) => (
          <li className=" flex p-3 shadow-md w-full rounded-lg" key={wish.id}>
            <img className="h-36 rounded-lg" src={wish.src} alt="" />
            <div className=" w-full flex flex-row justify-between p-2 px-5">
              <div className="flex flex-col w-[40%] justify-between">
                <p className="text-xl font-semibold">{wish.name}</p>
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
              <p className="text-xl font-semibold w-fit">₹ {wish.price}</p>
            </div>
          </li>
        ))}
    </div>
  );
};

export default Wishlist;
