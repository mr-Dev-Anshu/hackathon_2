import React, { useContext } from "react";
import { currentUserContext } from "../context/userContext/CurrentUserProvider";
import { LuPackageCheck, LuPackageOpen, LuPackageX } from "react-icons/lu";
import { FaMapLocation } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import userprofile from "../assets/User.jpg";
import { FaHandsHelping } from "react-icons/fa";
import axios from "axios";

const UserProfilePage = () => {
  const logout = async () => {
    try {
      const response = axios.get("api/v1/users/logout");
      console.log(response);
    } catch (error) {
      console.log("there is some error while logging out ");
    }
  };
  const { currUser } = useContext(currentUserContext);
  ;
  return (
    <div className="pt-20 w-full">
      <div className=" p-12 flex gap-4 w-full">
        <div className="p-2">
          <div className="flex flex-col justify-center shadow-xl rounded-lg p-2 gap-2">
            <div className="shadow-lg rounded-lg w-full flex flex-col justify-center items-center gap-2 p-2">
              <img
                className="h-48 w-48 shadow-xl object-cover rounded-full"
                src={userprofile}
                alt=""
              />
              <p className="text-2xl capitalize font-bold">
                {currUser.username}
              </p>
            </div>
            <div className="p-2 flex flex-col shadow-xl">
              <p className="font-semibold">Email : </p>
              <p>{currUser.email}</p>
            </div>
            <div className="p-2 flex flex-col shadow-xl">
              <p className="font-semibold">Verified : </p>
              <p>{currUser.isVerified === 1 ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          {" "}
          <div className="grid grid-cols-2 w-full justify-between gap-8 mb-2">
            <button>
              <div className="w-full flex justify-start items-center gap-12 shadow-xl rounded-lg p-4 hover:bg-orange-400 transition-colors duration-200">
                <LuPackageOpen className=" drop-shadow-xl" size={64} />
                <p className="text-3xl font-semibold">Your Orders</p>
              </div>
            </button>
            <button>
              <div className="w-full flex justify-start items-center gap-12 shadow-xl rounded-lg p-4 hover:bg-orange-400 transition-colors duration-200">
                <LuPackageCheck className=" drop-shadow-xl" size={64} />
                <p className="text-3xl font-semibold">Delivered Orders</p>
              </div>
            </button>
            <button>
              <div className=" w-full flex justify-start items-center gap-12 shadow-xl rounded-lg p-4 hover:bg-orange-400 transition-colors duration-200">
                <LuPackageX className=" drop-shadow-xl" size={64} />
                <p className="text-3xl font-semibold">Cancelled Orders</p>
              </div>
            </button>
            <button>
              <div className=" w-full flex justify-start items-center gap-12 shadow-xl rounded-lg p-4 hover:bg-orange-400 transition-colors duration-200">
                <FaHeart className=" drop-shadow-xl" size={64} />
                <p className="text-3xl font-semibold">Wishlist</p>
              </div>
            </button>
            <button>
              <div className=" w-full flex justify-start items-center gap-12 shadow-xl rounded-lg p-4 hover:bg-orange-400 transition-colors duration-200">
                <FaMapLocation className=" drop-shadow-xl" size={64} />
                <p className="text-3xl font-semibold">Saved Address</p>
              </div>
            </button>
            <button>
              <div className=" w-full flex justify-start items-center gap-12 shadow-xl rounded-lg p-4 hover:bg-orange-400 transition-colors duration-200 ">
                <FaHandsHelping className=" drop-shadow-xl" size={64} />
                <p className="text-3xl font-semibold">Help & Support</p>
              </div>
            </button>
          </div>
          <div className="p-4 text-xl font-semibold rounded-lg shadow-xl flex justify-center items-center hover:bg-orange-400 transition-colors duration-200">
            <button onClick={logout} className="w-full">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
