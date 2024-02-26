import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/Cart";
import { WishlistProvider } from "./context/Wishlist";
import { CurrentUserProvider } from "./context/userContext/CurrentUserProvider";
import { ProductContextProvider } from "./context/productsContext/ProductContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContextProvider>
    <CurrentUserProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </CurrentUserProvider>
  </ProductContextProvider>
);
