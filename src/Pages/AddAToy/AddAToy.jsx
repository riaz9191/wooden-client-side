import React, { useContext, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hook/useTitle";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const [pictureURL, setPictureURL] = useState("");
  const [name, setName] = useState("");
  const sellerName = user?.displayName || "";
  const sellerEmail = user?.email || "";
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  useTitle('AddAToy')

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
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
    fetch("https://toy-marketplace-server-side-one.vercel.app/postToys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postToys),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        toast.success(`${name} added to your Toy List!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // Reset form fields
        setPictureURL("");
        setName("");
        setSubCategory("");
        setPrice("");
        setRating("");
        setQuantity("");
        setDescription("");

        form.reset();
      });
  };

  return (
    <div className="bg-base-300 pb-10">
      <h2 className="text-center text-3xl font-bold p-5">Add a Toy</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 bg-white p-8 rounded shadow-md">
        <div className="mb-8 ">
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
            Toy Name:
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
            value={user.displayName}
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
            <option value="Wooden Blocks">Wooden Blocks</option>
            <option value="Wooden Puzzles">Wooden Puzzles</option>
            <option value="Wooden Dollhouses">Wooden Dollhouses</option>
            <option value="Wooden Train Sets">Wooden Train Sets</option>
            <option value="Wooden Building Sets">Wooden Building Sets</option>
            <option value="Wooden Animal Figures">Wooden Animal Figures</option>
            <option value="Wooden Musical Instruments">
              Wooden Musical Instruments
            </option>
            <option value="Wooden Kitchen Playsets">
              Wooden Kitchen Playsets
            </option>
            <option value="Wooden Vehicles">Wooden Vehicles</option>
            <option value="Wooden Stacking Toys">Wooden Stacking Toys</option>
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
    </div>
  );
};

export default AddAToy;
