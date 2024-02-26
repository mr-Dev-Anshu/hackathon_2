import axios from "axios";
import { createContext, useEffect, useState } from "react";

const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await axios.get("api/v1/products/all-products");
      const fetchedProduct = product.data;
      console.log(fetchProduct);
      setProduct(fetchedProduct);
      setLoading(false);
    };
    fetchProduct();
  });

  return <productContext.Provider></productContext.Provider>;
};
