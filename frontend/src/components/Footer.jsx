import React from "react";
import logo from "../assets/logoweb.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareThreads, FaXTwitter } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="p-2 lg:px-8">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-2 justify-between">
          <div className="col-md-4">
            <img className="h-12" src={logo} alt="" /> 
            <h4 className="text-xl font-semibold">About Us</h4>
            <p>This e-commerce Website is being build for a hackathon.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <p>Stay connected with us on social media!</p>
            <div className="flex py-2 justify-around lg:justify-between">
              <HashLink to="https://www.instagram.com/mr_95.2/">
                <FaInstagram size={24} />
              </HashLink>
              <HashLink to="https://www.facebook.com/prince.chaurasia.169405/">
                <FaFacebook size={24} />
              </HashLink>
              <HashLink to="https://twitter.com/shutup_prince">
                <FaXTwitter size={24} />
              </HashLink>
              <HashLink to="https://www.threads.net/@mr_95.2">
                <FaSquareThreads size={24} />
              </HashLink>
              <HashLink to="www.whatsapp.com">
                <FaWhatsapp size={24} />
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <p className="text-center">
          &copy; 2024 MadeforMe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
