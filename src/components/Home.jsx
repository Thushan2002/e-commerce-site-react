import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import FlashSale from "./Flashsale";
import Categories from "./Categories";
import ThisMonth from "./ThisMonth";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <FlashSale />
      <Categories />
      <ThisMonth />
    </div>
  );
};

export default Home;
