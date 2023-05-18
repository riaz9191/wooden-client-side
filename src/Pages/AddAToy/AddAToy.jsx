import React, { useState } from "react";
import Select from "react-select";

const AddAToy = () => {
  const [pictureURL, setPictureURL] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postToys = {
      pictureURL,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(postToys);
    fetch("http://localhost:5000/postToys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postToys),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto grid md:grid-cols-2 gap-6 bg-white p-8 rounded shadow-md"
    >
      <div className="mb-6">
        <label
          htmlFor="pictureURL"
          className="text-gray-700 font-semibold mb-2 block"
        >
          Picture URL of the toy:
        </label>
        <input
          type="text"
          id="pictureURL"
          value={pictureURL}
          onChange={(e) => setPictureURL(e.target.value)}
          className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 w-full"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="name"
          className="text-gray-700 font-semibold mb-2 block"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 w-full"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="sellerName"
          className="text-gray-700 font-semibold mb-2 block"
        >
          Seller Name:
        </label>
        <input
          type="text"
          id="sellerName"
          value={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
          className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 w-full"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="sellerEmail"
          className="text-gray-700 font-semibold mb-2 block"
        >
          Seller Email:
        </label>
        <input
          type="email"
          id="sellerEmail"
          value={sellerEmail}
          onChange={(e) => setSellerEmail(e.target.value)}
          className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 w-full"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="subCategory"
          className="text-gray-700 font-semibold mb-2 block"
        >
          Sub-category:
        </label>
        <select
          id="subCategory"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 w-full"
          required
        >
          <option value="">Select a sub-category</option>
          <option value="Math Toys">Math Toys</option>
          <option value="Language Toys">Language Toys</option>
          <option value="Science Toys">Science Toys</option>
        </select>
      </div>

      <div className="mb-6">
        <label
          htmlFor="price"
          className="text-gray-700 font-semibold mb-2 block"
        >
          Price:
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 w-full"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="rating"
          className="text-gray-700 font-semibold mb-2 block"
        >
          Rating:
        </label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          step="0.1"
          min="0"
          max="5"
          className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 w-full"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="quantity"
          className="text-gray-700 font-semibold mb-2 block"
        >
          Available Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 w-full"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="text-gray-700 font-semibold mb-2 block"
        >
          Detail Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 w-full"
          rows="4"
          required
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddAToy;
