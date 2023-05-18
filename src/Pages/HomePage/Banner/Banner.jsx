import React from "react";
import img1 from "../../../assets/images/banner/main-banner-1.png";
import img2 from "../../../assets/images/banner/main-banner-2.png";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="w-full">
              <h2 className="text-[#252525]  text-xl ps-28">
                MORE LUXURY & TRENDING
              </h2>
              <h2 className="text-[#252525] font-bold text-4xl ps-28 mt-3">
                Wooden Crafts <br /> And Arts Toys For Kids
              </h2>
              <button className="btn ms-28 mt-8 bg-[#AC7D56] border-0">SHOP NOW</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-square btn-sm bg-[#AC7D56] border-0">
              ❮
            </a>
            <a href="#slide2" className="btn btn-square btn-sm bg-[#AC7D56] border-0">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="w-full">
              <h2 className="text-[#252525]  text-xl ps-28">
                MORE LUXURY & TRENDING
              </h2>
              <h2 className="text-[#252525] font-bold text-4xl ps-28 mt-3">
                Wooden Crafts <br /> And Arts Toys For Kids
              </h2>
              <button className="btn ms-28 mt-8 bg-[#AC7D56] border-0">SHOP NOW</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            
            <a href="#slide1" className="btn btn-square btn-sm bg-[#AC7D56] border-0">
              ❮
            </a>
            <a href="#slide3" className="btn btn-square btn-sm bg-[#AC7D56] border-0">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            
          <div className="w-full">
              <h2 className="text-[#252525]  text-xl ps-28">
                MORE LUXURY & TRENDING
              </h2>
              <h2 className="text-[#252525] font-bold text-4xl ps-28 mt-3">
                Wooden Crafts <br /> And Arts Toys For Kids
              </h2>
              <button className="btn ms-28 mt-8 bg-[#AC7D56] border-0">SHOP NOW</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            
            <a href="#slide2" className="btn btn-square btn-sm bg-[#AC7D56] border-0">
              ❮
            </a>
            <a href="#slide4" className="btn btn-square btn-sm bg-[#AC7D56] border-0">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            
          <div className="w-full">
              <h2 className="text-[#252525]  text-xl ps-28">
                MORE LUXURY & TRENDING
              </h2>
              <h2 className="text-[#252525] font-bold text-4xl ps-28 mt-3">
                Wooden Crafts <br /> And Arts Toys For Kids
              </h2>
              <button className="btn ms-28 mt-8 bg-[#AC7D56] border-0">SHOP NOW</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            
            <a href="#slide3" className="btn btn-square btn-sm bg-[#AC7D56] border-0">
              ❮
            </a>
            <a href="#slide1" className="btn btn-square btn-sm bg-[#AC7D56] border-0">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
