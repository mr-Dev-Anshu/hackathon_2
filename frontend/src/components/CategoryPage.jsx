import React from "react";
import i1 from "../assets/apparel&accessories.jpg";
import i2 from "../assets/electonics.jpg";
import i3 from "../assets/electronics&lighting.jpg";
import i4 from "../assets/home&furniture.jpg";
import i5 from "../assets/toys.jpg";
import i6 from "../assets/games.jpg";
import i7 from "../assets/kitchenware.jpg";
import i8 from "../assets/books&stationary.jpg";

const CategoryPage = () => {
  return (
    <div className="pt-24 p-2 lg:p-8 w-full h-fit">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-1">
        <div className="group relative">
          <img className="h-96 w-full object-cover" src={i1} alt="" />
          <div className="w-full h-full bg-slate-400/30 absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 grid place-items-center">
            <p className="text-2xl font-semibold text-white select-none">
              Clothing & Accessories
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
          <div className="group relative">
            <img className="h-full w-full object-cover" src={i2} alt="" />
            <div className="w-full h-full bg-slate-400/30 absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 grid place-items-center">
              <p className="text-2xl font-semibold text-white select-none">
                Technology
              </p>
            </div>
          </div>
          <div className="group relative">
            <img className="h-full w-full object-cover" src={i3} alt="" />
            <div className="w-full h-full bg-slate-400/30 absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 grid place-items-center">
              <p className="text-2xl font-semibold text-white select-none">
                Electronics
              </p>
            </div>
          </div>
        </div>
        <div className="h-64 grid lg:grid-row-2 grid-cols-1 gap-2">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
            <div className="group relative">
              <img className="h-full w-full object-cover" src={i5} alt="" />
              <div className="w-full h-full bg-slate-400/30 absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 grid place-items-center">
                <p className="text-2xl font-semibold text-white select-none">
                  Toys
                </p>
              </div>
            </div>
            <div className="group relative">
              <img className="h-full w-full object-cover" src={i6} alt="" />
              <div className="w-full h-full bg-slate-400/30 absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 grid place-items-center">
                <p className="text-2xl font-semibold text-white select-none">
                  Games
                </p>
              </div>
            </div>
          </div>
          <div className=" h-56 group relative">
            <img className="h-full w-full object-cover" src={i7} alt="" />
            <div className="w-full h-full bg-slate-400/30 absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 grid place-items-center">
              <p className="text-2xl font-semibold text-white select-none">
                Kitchenware
              </p>
            </div>
          </div>
        </div>
        <div className="group relative">
          <img src={i4} alt="" />
          <div className="w-full h-full bg-slate-400/50 absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 grid place-items-center">
            <p className="text-2xl font-semibold text-white select-none">
              Home & Furniture
            </p>
          </div>
        </div>
        <div className="group relative mt-2">
          <img className="w-full h-full object-cover" src={i8} alt="" />
          <div className="w-full h-full bg-slate-400/30 absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 grid place-items-center">
            <p className="text-2xl font-semibold text-white select-none">
              Books & Stationary
            </p>
          </div>
        </div>
        <div>
          <img src={i8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
