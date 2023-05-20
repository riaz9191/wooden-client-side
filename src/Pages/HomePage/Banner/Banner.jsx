import React from "react";
import img1 from "../../../assets/images/banner/main-banner-1.png";
import img2 from "../../../assets/images/banner/main-banner-2.png";

const Banner = () => {
  return (
    <div>
      <section className="relative bg-[url(https://i.ibb.co/GT3vV7R/main-banner-2.png)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l "></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl lg:pl-10 text- ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-xl font-normal sm:text-xl text-[#252525]">
              MORE LUXURY & TRENDING
              <strong className="block font-extrabold text-4xl text-[#252525]">
              Wooden Crafts <br /> And Arts Toys For Kids
              </strong>
            </h1>


            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full shadow-xl rounded bg-gradient-to-r from-[#c48755] to-[#79573a] 
                hover:from-[#90633e] hover:to-[#483423]  px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full shadow-xl rounded bg-white px-12 py-3 text-sm font-medium text-rose-600  hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
