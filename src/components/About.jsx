import React from "react";
import Navbar from "./Navbar";
import about_img from "../assets/image/side-img.png";
import tom_cruise from "../assets/image/tom-cruise.png";
import will_smith from "../assets/image/will-smith.png";
import emma_watson from "../assets/image/emma-watson.png";
import icon_shop_img from "../assets/image/icons/icon_shop.png";
import icon_money_img from "../assets/image/icons/icon-money.png";
import icon_shopping_img from "../assets/image/icons/icon-shopping.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about">
        <div className="about-section-1">
          <div className="about-left">
            <h1>Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region. <br />
              <br />
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="about-right">
            <img src={about_img} alt="" />
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <img src={icon_shop_img} alt="" />
            <h2>10.5k</h2>
            <p>Sellers on our site</p>
          </div>
          <div className="stat">
            <img src={icon_shopping_img} alt="" />
            <h2>33k</h2>
            <p>Products for Sale</p>
          </div>
          <div className="stat">
            <img src={icon_shop_img} alt="" />
            <h2>45.5k</h2>
            <p>Customers active on our site</p>
          </div>
          <div className="stat">
            <img src={icon_shop_img} alt="" />
            <h2>25k</h2>
            <p>Annual gross sales on our site</p>
          </div>
        </div>
        <div className="team">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="member">
              <div className="frame">
                <img src={tom_cruise} alt="" />
              </div>
              <h3>Tom Cruise</h3>
              <p>Founder & Chairman</p>
            </div>
            <div className="member">
              <div className="frame">
                <img src={emma_watson} alt="" />
              </div>
              <h3>Emma Watson</h3>
              <p>Managing Director</p>
            </div>
            <div className="member">
              <div className="frame">
                <img src={will_smith} alt="" />
              </div>
              <h3>Will Smith</h3>
              <p>Product Designer</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
