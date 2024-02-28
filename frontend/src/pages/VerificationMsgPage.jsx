import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
<MdOutlineMarkEmailRead />

const VerificationMsgPage = () => {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center text-4xl text-green-600 ">
        <div className="flex flex-col justify-center items-center gap-6">
          <MdOutlineMarkEmailRead size={96} />
          Please Verify Your Email.
        </div>
      </div>
    </div>
  );
};

export default VerificationMsgPage;
