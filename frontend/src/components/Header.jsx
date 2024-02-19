import React from "react";
import v1 from "../assets/logoweb.png";
import { FaHeart, FaRegUser, FaSearch, FaShoppingBag } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {

  return (
    <div className="dark fixed w-full z-10">
      <div className="w-full h-fit md:px-10 p-4 flex justify-between items-center">
        <HashLink to="/">
          <img className="h-12 " src={v1} alt="" />
        </HashLink>
        <div className="sm:flex hidden text-lg justify-center items-center gap-16">
          <HashLink to="/">Home</HashLink>
          <HashLink to="/shop">Shop</HashLink>
          <HashLink to="/blog">Blog</HashLink>
          <HashLink to="/vendors">Vendors</HashLink>
        </div>
        <div className="sm:flex hidden justify-center items-center gap-12">
          <HashLink>
            <FaSearch size={18} />
          </HashLink>
          <HashLink to="/user">
            <FaRegUser size={18} />
          </HashLink>
          <HashLink to="wishlist">
            <FaHeart size={18} />
          </HashLink>
          <HashLink to="orders">
            <FaShoppingBag size={18} />
          </HashLink>
        </div>
        <HashLink className="md:hidden block">
          <RiMenu3Fill />
        </HashLink>
      </div>
    </div>
  );
};

export default Header;
