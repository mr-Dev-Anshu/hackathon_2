import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const productContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await axios.get("api/v1/products/all-products");
      const fetchedProduct = product?.data?.data;
      setProduct(fetchedProduct);
      setLoading(false);
    };
    fetchProduct();
  }, [product]);

  return (
    <productContext.Provider value={{ product }}>
      {!loading ? (
        children
      ) : (
        <div className=" w-full h-screen flex justify-center items-center text-6xl">
          Loading...
        </div>
      )}
    </productContext.Provider>
  );
};
