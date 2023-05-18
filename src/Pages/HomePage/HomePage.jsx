import React from "react";
import Banner from "./Banner/Banner";
import FreeShipping from "./FreeShipping";
import Gallery from "./Gallery/Gallery";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import ShopNow from "./ShopNow/ShopNow";
import UserFeedback from "./UserFeedback/UserFeedback";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      {/* extra section 1  */}
      <FreeShipping></FreeShipping>
      {/* extra section 1  */}
      <Gallery></Gallery>
      <ShopNow></ShopNow>
      <ShopByCategory></ShopByCategory>
      <UserFeedback></UserFeedback>

    </div>
  );
};

export default HomePage;
