import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { productContext } from "../context/productsContext/ProductContext";

const ProductPage = () => {
  const { product } = useContext(productContext);

  return (
    <div className="w-full p-2 lg:p-8 h-fit grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center gap-3 ">
      {product.map((item) => (
        <div key={item.id}>
          <ProductCard
            category={item.category}
            name={item.name}
            price={item.price}
            src={item.productImg}
            id={item._id}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
