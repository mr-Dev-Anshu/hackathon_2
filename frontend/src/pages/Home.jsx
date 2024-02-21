import React from "react";
import Swiper from "../components/Swiper";
import Policy from "../components/Policy";
import Collage from "../components/Collage";
import ProductPage from "./ProductPage";

const Home = () => {
  return (
    <div className="h-screen">
      <Swiper />
      <Policy />
      <Collage />
      <ProductPage />
    </div>
  );
};

export default Home;
