import React from "react";

const SingleToys = ({ toy }) => {
  const {
    pictureURL,
    name,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = toy;
  console.log(toy)
  return (
    <div>
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default SingleToys;
