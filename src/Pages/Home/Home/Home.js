import React from "react";
import HappyCustomer from "../HappyCustomer/HappyCustomer";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeServices from "../HomeServices/HomeServices";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeServices></HomeServices>
      <HappyCustomer></HappyCustomer>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
