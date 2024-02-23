import { createContext, useState } from "react";

export const WishlistContext = createContext(null);

export const WishlistProvider = (props) => {
  const [wishlist, setWishlist] = useState([]);
  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {props.children}
    </WishlistContext.Provider>
  );
};
