import React from "react";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  return (
    <div className="w-full p-2 lg:p-8 h-fit grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center gap-3 ">
      <ProductCard category="Kitchenware" name="Kitchen Set" price="399" id="abc" />
      <ProductCard category="Kitchenware" name="Kitchen Set" price="399" id="abc" />
      <ProductCard category="Kitchenware" name="Kitchen Set" price="399" id="abc" />
      <ProductCard category="Kitchenware" name="Kitchen Set" price="399" id="abc" />
      <ProductCard category="Kitchenware" name="Kitchen Set" price="399" id="abc" />
      <ProductCard category="Kitchenware" name="Kitchen Set" price="399" id="abc" />
      <ProductCard category="Kitchenware" name="Kitchen Set" price="399" id="abc" />
      <ProductCard category="Kitchenware" name="Kitchen Set" price="399" id="abc" />
      <ProductCard category="Kitchenware" name="Kitchen Set" price="399" id="abc" />
      <ProductCard category="Kitchenware" name="Kitchen Set" price="399" id="abc" />
    </div>
  );
};

export default ProductPage;
