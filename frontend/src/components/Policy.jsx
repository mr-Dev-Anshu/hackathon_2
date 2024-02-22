import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbPackageImport } from "react-icons/tb";
const Policy = () => {
  return (
    <div className="lg:flex hidden justify-between px-8 py-2">
      <div className="outline outline-slate-300 text-2xl font-semibold bg-[#BEE3DB] hover:bg-[#ace7da] w-[30%] flex justify-around items-center gap-8 h-fit p-8 rounded-lg transition-all duration-200">
        <FaShippingFast size={48} />
        Free Shipping
      </div>

      <div className="outline outline-slate-300 text-2xl font-semibold bg-[#BEE3DB] hover:bg-[#ace7da] w-[30%] flex justify-around items-center gap-8 h-fit p-8 rounded-lg transition-all duration-200">
        <RiSecurePaymentFill size={48} />
        Secure Payments
      </div>
      <div className="outline outline-slate-300 text-2xl font-semibold bg-[#BEE3DB] hover:bg-[#ace7da] w-[30%] flex justify-around items-center gap-8 h-fit p-8 rounded-lg transition-all duration-200">
        <TbPackageImport size={48} />
        14 days return policy
      </div>
    </div>
  );
};

export default Policy;
