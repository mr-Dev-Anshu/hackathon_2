import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { currentUserContext } from "./userContext/CurrentUserProvider";

export const WishlistContext = createContext(null);

export const WishlistProvider = (props) => {
  const [wishlist, setWishlist] = useState([]);
  const { currUser } = useContext(currentUserContext);

  useEffect(() => {
    const fetchWishList = async () => {
      if (currUser) {
        try {
          const res = await axios.post(
            `api/v1/products/likedproducts/${currUser._id}`
          );

          setWishlist(res.data);
        } catch (error) {
          console.log("Error while fetching liked Products!");
        }
      }
    };

    fetchWishList();
  }, [currUser, wishlist]);
  return (
    <WishlistContext.Provider value={{ wishlist }}>
      {props.children}
    </WishlistContext.Provider>
  );
};
