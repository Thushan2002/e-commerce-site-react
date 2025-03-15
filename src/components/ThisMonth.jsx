import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import item_5 from "../assets/image/items/item-5.png";
import item_6 from "../assets/image/items/item-6.png";
import item_7 from "../assets/image/items/item-7.png";
import item_8 from "../assets/image/items/item-8.png";

const ThisMonth = () => {
  const products = [
    {
      id: 1,
      title: "The north coat",
      image: item_5,
      price: "$260",
      rating: 5,
      reviews: 88,
    },
    {
      id: 2,
      title: "RGB liquid CPU Cooler",
      image: item_6,
      price: "$80",
      rating: 5,
      reviews: 78,
    },
    {
      id: 3,
      title: "Gucci duffle bag",
      image: item_7,
      price: "$300",
      rating: 5,
      reviews: 88,
    },
    {
      id: 4,
      title: "Small BookSelf",
      image: item_8,
      price: "$100",
      rating: 5,
      reviews: 88,
    },
    // Add more products as needed
  ];

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section_category">
            <p className="section_category_p">This Month</p>
          </div>
          <div className="section_header">
            <h3 className="section_title">Best Selling Products</h3>
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
                    {/* <div className="card_tag">{product.discount}</div> */}
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
        </div>
      </section>
    </div>
  );
};

export default ThisMonth;
