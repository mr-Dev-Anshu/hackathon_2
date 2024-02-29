import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const productContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await axios.get("api/v1/products/all-products", {
        params: {
          category: query
        }
      });
      const fetchedProduct = product?.data?.data;
      setProduct(fetchedProduct);
    };
    fetchProduct();
  }, [query]);

  return (
    <productContext.Provider value={{ product , setQuery}}>
      {children}
    </productContext.Provider>
  );
};
