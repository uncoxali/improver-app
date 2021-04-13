import React from "react";

import Whatsapp from "common/assets/image/whatsApp.png";
import Telephone from "common/assets/image/telephon.png";
// import Telephone from "common/assets/image/telephone.png";

export default function index() {
  return (
    <div className="w-full h-20 bottom-0 fixed z-10 lg:hidden md:hidden">
      <div className="flex">
        <div
          style={{ backgroundColor: "#25D366" }}
          className="w-1/2 h-20 flex justify-center items-center text-white "
        >
          Chat Us With
          <img className="w-12 h-12 ml-3" src={Whatsapp} />
        </div>
        <div className="bg-black text-white w-1/2 h-20 flex justify-center items-center ">
          Contact Us
          <img className="w-8 h-8 ml-3" src={Telephone} />
        </div>
      </div>
    </div>
  );
}
