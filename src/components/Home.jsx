import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import FlashSale from "./Flashsale";
import Categories from "./Categories";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <FlashSale />
      <Categories />
    </div>
  );
};

export default Home;
