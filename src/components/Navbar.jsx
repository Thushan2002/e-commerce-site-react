import React, { useState } from "react";
import { Link } from "react-router-dom";
import search_icon from "../assets/image/search.png";
import heart_icon from "../assets/image/heart.png";
import cart_icon from "../assets/image/cart.png";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header>
      <div className="top_nav">
        <div className="container top_nav_container">
          <div className="top_nav_wrapper">
            <p className="tap_nav_p">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link to="/shop" className="top_nav_link">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
      <nav className="nav">
        <div className="container nav_container">
          <Link to="/" className="nav_logo">
            EXCLUSIVE
          </Link>
          <ul className="nav_list">
            <li className="nav_item">
              <Link to="/" className="nav_link">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/about" className="nav_link">
                About
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/contact" className="nav_link">
                Contact
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/sign-up" className="nav_link">
                Sign up
              </Link>
            </li>
          </ul>
          <div className="nav_items">
            <form action="#" className="nav_form">
              <input
                type="text"
                className="nav_input"
                placeholder="search here...."
              />
              <img src={search_icon} alt="Search Icon" className="nav_search" />
            </form>
            <img src={heart_icon} alt="Heart Icon" className="nav_heart" />
            <Link to="/cart">
              <img src={cart_icon} alt="Cart Icon" className="nav_cart" />
            </Link>
          </div>
          <button className="hamburger" onClick={toggleMobileNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {/* Mobile navigation */}
        <nav
          className={`mobile_nav ${isMobileNavOpen ? "" : "mobile_nav_hide"}`}>
          <ul className="mobile_nav_list">
            <li className="mobile_nav_item">
              <Link to="/" className="mobile_nav_link">
                Home
              </Link>
            </li>
            <li className="mobile_nav_item">
              <Link to="/about" className="mobile_nav_link">
                About
              </Link>
            </li>
            <li className="mobile_nav_item">
              <Link to="/contact" className="mobile_nav_link">
                Contact
              </Link>
            </li>
            <li className="mobile_nav_item">
              <Link to="/sign-up" className="mobile_nav_link">
                Sign Up
              </Link>
            </li>
            <li className="mobile_nav_item">
              <Link to="/cart" className="mobile_nav_link">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  );
};

export default Navbar;
