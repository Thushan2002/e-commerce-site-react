import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  return (
    <div>
      <Navbar />
      <section className="section">
        <div className="container">
          <div className="cart">
            <div className="cart_header">
              <p className="cart_header_id">Product ID</p>
              <p className="cart_header_title">Product Title</p>
              <p className="cart_header_image">Product Image</p>
              <p className="cart_header_price">Price</p>
              <p className="cart_header_delete">Delete</p>
            </div>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart_item">
                  <p className="cart_id">{item.id}</p>
                  <p className="cart_title">{item.title}</p>
                  <img src={item.image} alt={item.title} className="cart_img" />
                  <p className="cart_price">{item.price}</p>
                  <p className="cart_delete">Delete</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
