import React, { useState } from "react";
import img from "../assets/logoweb.png";
import img3 from "../assets/cart.jpg";
import axios from "axios";
import { HashLink } from "react-router-hash-link";
import { FcGoogle } from "react-icons/fc";
import { FaSkype } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  // toast ----->
  const navigate = useNavigate();
  const notifySuccess = () => toast.success("User logged in successfully!");
  // toast ----->

  const [formData, setFormData] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    console.log(email, password);
    try {
      setLoggingIn(true);
      const response = await axios.post("api/v1/users/signin", {
        email,
        password,
      });
      notifySuccess();
      setLoggingIn(false);
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1500);
      console.log(response);
      setError(false);
    } catch (error) {
      setError(true);
      setLoggingIn(false);
      console.log(error.response.status);
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center pt-24 p-6">
      <div className="flex h-full w-[60%] rounded-xl shadow-2xl overflow-hidden">
        <div className=" w-[50%] p-10 px-12 flex flex-col gap-4 outline">
          <img className="w-28" src={img} alt="" />
          <div className="flex flex-col justify-center gap-2 ">
            <div className="mb-4">
              <h1 className="text-3xl font-bold ">Login to your Account!</h1>
              <p className="font-light text-slate-500">
                welcome back! choose a method to login.
              </p>
            </div>
            <div className="flex gap-2 justify-between items-center mb-4">
              <HashLink className="outline outline-slate-200 px-4 w-[50%] p-2 rounded-md flex justify-around items-center">
                <FcGoogle size={24} />
                <p>Google</p>
              </HashLink>
              <HashLink className="outline outline-slate-200 px-4 w-[50%] p-2 rounded-md flex justify-around items-center">
                <FaSkype size={24} />
                <p>skype</p>
              </HashLink>
            </div>
            <div className="py-1 w-full flex justify-center items-center">
              <span className="outline outline-slate-200 outline-1 w-[20%] "></span>
              <p className="px-2 font-light text-slate-500">
                or continue with email
              </p>
              <span className="outline outline-slate-200 outline-1 w-[20%]"></span>
            </div>
            <div className="py-3">
              <form
                className="flex flex-col gap-4"
                action=""
                onSubmit={handleSubmit}
              >
                <input
                  className="outline p-3 rounded-md outline-slate-200"
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <input
                  className="outline p-3 rounded-md outline-slate-200"
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <button
                  className="outline p-3 rounded-md outline-slate-200 bg-blue-600 text-white font-semibold text-xl"
                  type="submit"
                >
                  {loggingIn ? <p>Please Wait...</p> : <p>Log in</p>}
                </button>
                <Toaster />
              </form>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <p>Don't have an account ?</p>
              <HashLink to="/register">
                <p className="text-blue-700 hover:underline">
                  Create an account
                </p>
              </HashLink>
            </div>
            {error ? (
              <p className="text-center text-red-700 ">
                Wrong Email or Password!
              </p>
            ) : null}
          </div>
        </div>
        <div className=" w-[50%] overflow-hidden">
          <img className=" object-cover w-full" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
