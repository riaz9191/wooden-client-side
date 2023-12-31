import React, { useEffect } from "react";
import img1 from "../../../assets/images/gallery/sub-banner-3.jpg";
import img2 from "../../../assets/images/gallery/sub-banner-4.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

const ShopNow = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <div>
      <div data-aos="zoom-in-up">
        <h2 className="text-center text-4xl mt-10 font-bold">Shop Now</h2>
        <div className="grid md:grid-cols-2 container mx-auto gap-6 mt-14 mb-6">
          <div data-aos="fade-right" className="card card-side bg-base-100 shadow-xl rounded-none ">
            <div className="card-body w-full">
              <h2 className="card-title flex-grow">Handmade Wooden Vase</h2>
              <p>Get 40% Off On Sale</p>
              <div className="card-actions justify">
                <button className="btn bg-orange-500 border-0 ">
                  Shop Now
                </button>
              </div>
            </div>
            <figure className="relative">
              <img
                src={img1}
                alt="Movie"
                className="transition-transform duration-300 hover:scale-110"
              />
            </figure>
          </div>
          <div data-aos="fade-left" className="card card-side bg-base-100 shadow-xl rounded-none">
            <div className="card-body w-full">
              <h2 className="card-title">Wooden Educational Toys</h2>
              <p>Get 25% Off On Sale</p>
              <div className="card-actions ">
                <button className="btn bg-orange-500 border-0 mt-3">
                  Shop Now
                </button>
              </div>
            </div>
            <figure className="relative">
              <img
                src={img2}
                alt="Movie"
                className="transition-transform duration-300 hover:scale-110"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
