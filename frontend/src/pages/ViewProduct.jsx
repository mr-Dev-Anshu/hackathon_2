import React, { useContext, useState } from "react";
import {productContext} from '../context/productsContext/ProductContext'
import {useParams} from 'react-router-dom'
import ProductCard from "../components/ProductCard";

const ViewProduct = () => {
  const params = useParams()
  const {product} = useContext(productContext)
  const [prodct, setProdct] = useState(product?.filter(product=> (product._id===params.id)))[0]
  console.log(params)
  console.log(prodct)
  return (
  <div className="pt-24">
    <ProductCard
    category = {prodct.category}
    name = {prodct.name}
    id = {prodct._id}
    src = {prodct.productImg}
    price = {prodct.price}
    />
  </div>
  )
};

export default ViewProduct;
