import React from "react";
import i1 from "../assets/img.jpg";
import i2 from "../assets/imggg.jpg";
import i3 from "../assets/imgggg.jpg";
import i4 from "../assets/imgggggg.jpg";
import i5 from "../assets/images.jpg";
import i6 from "../assets/imgimg.jpg"

const Collage = () => {
  return (
    <div className=" p-2 lg:p-8 grid lg:grid-cols-2 grid-cols-1 gap-4">
      <div className=" grid grid-cols-2 gap-1">
        <div>
          <img className="h-full w-full object-cover" src={i1} alt="" />
        </div>
        <div>
          <img className="h-full w-full object-cover" src={i2} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div>
          {" "}
          <img className=" h-48 w-full object-cover hover:scale-105 transition-all duration-100" src={i1} alt="" />
        </div>
        <div>
          {" "}
          <img className=" h-48 w-full object-cover hover:scale-105 transition-all duration-100" src={i2} alt="" />
        </div>
        <div>
          {" "}
          <img className=" h-48 w-full object-cover hover:scale-105 transition-all duration-100" src={i3} alt="" />
        </div>
        <div>
          {" "}
          <img className=" h-48 w-full object-cover hover:scale-105 transition-all duration-300" src={i4} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <div>
          {" "}
          <img className="h-full w-full object-cover" src={i3} alt="" />
        </div>
        <div>
          {" "}
          <img className="h-full w-full object-cover" src={i4} alt="" />
        </div>
        <div>
          {" "}
          <img className="h-full w-full object-cover" src={i5} alt="" />
        </div>
      </div>
      <div className="w-full object-cover"><img className=" w-full object-cover" src={i6} alt="" /></div>
    </div>
  );
};

export default Collage;
