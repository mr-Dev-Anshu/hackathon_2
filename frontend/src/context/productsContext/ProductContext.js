import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const productContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await axios.get("api/v1/products/all-products");
      const fetchedProduct = product?.data?.data;
      setProduct(fetchedProduct);
    };
    fetchProduct();
  }, [product]);

  return (
    <productContext.Provider value={{ product }}>
      {children}
    </productContext.Provider>
  );
};
