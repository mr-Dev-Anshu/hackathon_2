import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/Cart";
import { WishlistProvider } from "./context/Wishlist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </CartProvider>
);
