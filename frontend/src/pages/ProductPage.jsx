import React from "react";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  return (
    <div className="w-full p-8 h-screen flex justify-center items-center">
      <ProductCard category="Phone cover" name="Iphone 13" price="399" />
    </div>
  );
};

export default ProductPage;
