import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import item_1 from "../assets/image/items/item-1.png";
import item_2 from "../assets/image/items/item-2.png";
import item_3 from "../assets/image/items/item-3.png";
import item_4 from "../assets/image/items/item-4.png";

const FlashSale = () => {
  const products = [
    {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      image: item_1,
      price: "$120",
      discount: "-40%",
      rating: 5,
      reviews: 88,
    },
    {
      id: 2,
      title: "AK-900 Wired Keyboard",
      image: item_2,
      price: "$80",
      discount: "-40%",
      rating: 5,
      reviews: 78,
    },
    {
      id: 3,
      title: "IPS LCD Gaming Monitor",
      image: item_3,
      price: "$300",
      discount: "-10%",
      rating: 5,
      reviews: 88,
    },
    {
      id: 4,
      title: "S-Series Comfort Chair ",
      image: item_4,
      price: "$100",
      discount: "-20%",
      rating: 5,
      reviews: 88,
    },
    // Add more products as needed
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section_category">
          <p className="section_category_p">Today's</p>
        </div>
        <div className="section_header">
          <h3 className="section_title">Flash Sale</h3>
          <p id="demo"></p>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true }}
          className="mySwiper">
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card">
                <div className="card_top">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card_img"
                  />
                  <div className="card_tag">{product.discount}</div>
                  <div className="card_top_icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="card_top_icon">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="card_top_icon">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="card_body">
                  <h3 className="card_title">{product.title}</h3>
                  <p className="card_price">{product.price}</p>
                  <div className="card_ratings">
                    <div className="card_stars">
                      {[...Array(product.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6">
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="card_rating_numbers">({product.reviews})</p>
                  </div>
                  <button
                    className="add_to_cart"
                    data-id={product.id}
                    data-title={product.title}
                    data-image={product.image}
                    data-price={product.price}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container_btn">
          <a href="#" className="container_btn_a">
            VIEW ALL PRODUCTS
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
