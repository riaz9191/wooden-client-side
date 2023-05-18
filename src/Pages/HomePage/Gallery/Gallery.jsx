import React from "react";
import "./Gallery.css";
import img1 from "../../../assets/images/gallery/main-banner-2.jpg";
import img2 from "../../../assets/images/gallery/Car_3of4_3bae9ac0-ef1e-48ad-8337-cbccbccc0adf_1024x1024.jpg";
import img3 from "../../../assets/images/gallery/p_36_826_1.jpg";

const Gallery = () => {
  const galleryItems = [
    { id: 1, image: img1, name: "Toy Set" },
    { id: 2, image: img2, name: "Car" },
    { id: 3, image: img3, name: "Horse" },
    // Add more gallery items as needed
  ];

  return (
    <div>
      <section className="gallery ">
        <h2 className="text-center font-bold text-3xl mb-3">Gallery Items</h2>
        <div className="gallery-grid ">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item shadow-xl">
              <div className="image-container shadow-xl">
                <img src={item.image} alt={item.name} className="gallery-image shadow-xl" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3 className="toy-name">{item.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
