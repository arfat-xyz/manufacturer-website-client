import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import HomeReviews from "./HomeReviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <BusinessSummary />
      <HomeReviews />
    </div>
  );
};

export default Home;
