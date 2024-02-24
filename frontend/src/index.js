import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/Cart";
import { WishlistProvider } from "./context/Wishlist";
import { CurrentUserProvider } from "./context/userContext/CurrentUserProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CurrentUserProvider>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </CurrentUserProvider>
);
