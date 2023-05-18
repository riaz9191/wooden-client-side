import React from "react";
import logo1 from "../../assets/images/logo/fd.png";
import logo2 from "../../assets/images/logo/bag.png";
import logo3 from "../../assets/images/logo/gfpng.png";
import logo4 from "../../assets/images/logo//Screenshot 2023-05-18 125633 (1).png";

const FreeShipping = () => {
  return (
    <div>
      <div className="pl-10 pr-10 mx-auto grid md:grid-cols-4 gap-6 mt-6 mb-6">
        <div className=" rounded-none  card flex items-center gap-4 flex-row bg-base-100 shadow-xl pl-2 pr-6 pt-3 pb-3">
          <div className="logo">
            <img src={logo1} className="h-14 w-18 transform transition-transform duration-500 hover:rotate-180" alt="" />
          </div>
          <div className="text justify-center items-center">
            <p className="font-bold textxl">FREE SHIPPING</p>
            <p className="text-xs">For all order over $100</p>
          </div>
        </div>
        <div className="rounded-none card flex items-center gap-4 flex-row bg-base-100 shadow-xl pl-2 pr-6 pt-3 pb-3">
          <div className="logo">
            <img src={logo2} className="h-16 w-13 transform transition-transform duration-500 hover:rotate-180" alt="" />
          </div>
          <div className="text justify-center items-center">
            <p className="font-bold">CASH ON DELIVERY</p>
            <p className="text-xs">100% money back</p>
          </div>
        </div>
        <div className=" rounded-none card flex items-center gap-4 flex-row bg-base-100 shadow-xl pl-2 pr-6 pt-3 pb-3">
          <div className="logo">
            <img src={logo3} className="h-20 w-13 mt-2 transform transition-transform duration-500 hover:rotate-180" alt="" />
          </div>
          <div className="text justify-center items-center">
            <p className="font-bold">SPECIAL GIFT  CARD</p>
            <p className="text-xs">Offer special bonuses</p>
          </div>
        </div>
        <div className="rounded-none card flex items-center gap-4 flex-row bg-base-100 shadow-xl pl-2 pr-6 pt-3 pb-3">
          <div className="logo">
            <img src={logo4} className="h-16 w-16 transform transition-transform duration-500 hover:rotate-180" alt="" />
          </div>
          <div className="text justify-center items-center">
            <p className="font-bold">24/7 SUPPORT</p>
            <p className="text-xs">Answer for Quection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeShipping;
