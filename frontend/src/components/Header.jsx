import React, { useEffect } from "react";
import v1 from "../assets/logoweb.png";
import { FaHeart, FaRegUser, FaSearch, FaShoppingBag } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { RiMenu3Fill } from "react-icons/ri";
import { useContext } from "react";
import { currentUserContext } from "../context/userContext/CurrentUserContext";

const Header = () => {
  let { currUser } = useContext(currentUserContext);

  return (
    <div className="dark fixed w-full z-10">
      <div className=" bg-white w-full h-fit md:px-10 p-4 flex justify-between items-center">
        <HashLink to="/">
          <img className="h-12" src={v1} alt="" />
        </HashLink>
        <div className="lg:flex hidden text-lg justify-center items-center gap-16">
          <HashLink to="/">Home</HashLink>
          <HashLink to="/category">Category</HashLink>
          <HashLink to="/stores">Stores</HashLink>
          <HashLink to="/offers">Offers</HashLink>
        </div>
        <div className="lg:flex hidden justify-center items-center gap-12">
          <HashLink>
            <FaSearch size={18} />
          </HashLink>
          <HashLink to="/login">
            {currUser ? (
              <p className="text-xl font-bold rounded-[50%] px-3 py-1.5 bg-black text-white   border border-blue-500">
                {currUser.email.charAt(0).toUpperCase()}{" "}
              </p>
            ) : (
              <FaRegUser size={18} />
            )}
          </HashLink>
          <HashLink to="/wishlist">
            <FaHeart size={18} />
          </HashLink>
          <HashLink to="/orders">
            <FaShoppingBag size={18} />
          </HashLink>
        </div>
        <HashLink className="md:hidden block">
          <RiMenu3Fill />
        </HashLink>
      </div>
      <hr />
    </div>
  );
};

export default Header;
