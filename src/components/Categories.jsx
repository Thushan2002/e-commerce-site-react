import React from "react";
import cameraIcon from "../assets/image/icons/camera.png"; // Update paths as needed
import computerIcon from "../assets/image/icons/computer.png";
import gamingIcon from "../assets/image/icons/gaming.png";
import headphoneIcon from "../assets/image/icons/headphone.png";
import phoneIcon from "../assets/image/icons/phone.png";
import watchIcon from "../assets/image/icons/watch.png";

const Categories = () => {
  const categories = [
    { id: 1, name: "Cameras", icon: cameraIcon },
    { id: 2, name: "Computers", icon: computerIcon },
    { id: 3, name: "Gaming", icon: gamingIcon },
    { id: 4, name: "Headphones", icon: headphoneIcon },
    { id: 5, name: "Phones", icon: phoneIcon },
    { id: 6, name: "Watches", icon: watchIcon },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section_category">
          <p className="section_category_p">categories</p>
        </div>
        <div className="section_header">
          <h3 className="section_title">Browse by Category</h3>
        </div>
        <div className="categories">
          {categories.map((category) => (
            <div key={category.id} className="category">
              <img
                src={category.icon}
                alt={category.name}
                className="category_icon"
              />
              <p className="category_name">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
