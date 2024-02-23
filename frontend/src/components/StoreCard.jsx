import React from "react";

export const StoreCard = (props) => {
  return (
    <div className="shadow-lg p-2 flex gap-8">
      <img className="h-48 w-72 rounded-md" src={props.src} alt="" />
      <div>
        <p className="text-4xl font-serif font-bold ">{props.name}</p>
        <p className="py-2">{props.description}</p>
        <button className="outline p-2 w-48 rounded-lg my-6">Explore</button>
      </div>
    </div>
  );
};
