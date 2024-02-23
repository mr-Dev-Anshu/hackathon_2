import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const cart = useContext(CartContext);

  const total = cart.items.reduce((a, b) => a + b.price, 0);
  const shippingCharges = total >= 499 ? 0 : Math.round(0.1*total);
  const gst = Math.round(0.2 * total);

  return (
    <div className="pt-20 p-6">
      <div className=" px-2 p-2 shadow-xl rounded-lg">
        <p className="text-2xl mb-2">Shopping Cart</p>
        <hr />
        <div className="flex flex-col gap-3">
          {cart &&
            cart.items.map((item) => (
              <li
                className=" flex p-3 shadow-md w-full rounded-lg"
                key={item.id}
              >
                <img className="h-36 rounded-lg" src={item.src} alt="" />
                <div className=" w-full flex flex-row justify-between p-2 px-5">
                  <div className="flex flex-col w-[40%] justify-between">
                    <p className="text-xl font-semibold">{item.name}</p>
                    <div className="flex flex-row justify-between">
                      <button className="outline outline-slate-300 rounded-lg p-2 w-[45%] ">
                        View
                      </button>
                      <button className="outline outline-slate-300 rounded-lg p-2 w-[45%] ">
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="text-xl font-semibold w-fit">₹ {item.price}</p>
                </div>
              </li>
            ))}
        </div>
        <div className="p-4 px-8 shadow-lg grid grid-rows-2 gap-1">
          <div className="w-full flex justify-between">
            <p className="text-xl">Total Amount</p>
            <p className="text-2xl">₹ {total}</p>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-xl">Shipping Charges</p>
            <p className="text-2xl">₹ {shippingCharges}</p>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-xl">GST</p>
            <p className="text-2xl">₹ {gst}</p>
          </div>
          <hr />
          <div className="w-full flex justify-between mb-4">
            <p className="text-xl font-bold">Grand Total</p>
            <p className="text-2xl font-semibold">₹ {total + shippingCharges + gst}</p>
          </div>
          <div>
            <button className="outline outline-slate-300 p-2 rounded-lg w-full text-lg bg-[#ff9f29] ">
              Proceed & Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
