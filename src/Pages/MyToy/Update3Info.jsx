import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update3Info = () => {
    const { id } = useParams();
    const [toy, setToy] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:5000/alltoys/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setToy(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const pictureURL = form.pictureURL.value;
      const name = form.name.value;
      const sellerName = form.sellerName.value;
      const sellerEmail = form.sellerEmail.value;
      const subCategory = form.subCategory.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const quantity = form.quantity.value;
      const description = form.description.value;
      const updatedToy = {
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
  
      fetch(`http://localhost:5000/alltoys/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedToy),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
  
          toast.success(`${name} Updated Successfully`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
  
          form.reset();
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    if (!toy) {
      return <div>Loading...</div>;
    }
//   console.log(toys);
  return (
    <div className="bg-base-300">
      <h2 className="text-center text-3xl font-bold p-5">Add a Toy</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 bg-white p-8 rounded shadow-md"
      >
        <div className="mb-8">
          <label
            htmlFor="pictureURL"
            className="text-gray-700 font-semibold mb-2 block"
          >
            Picture URL of the toy:
          </label>
          <input
            type="text"
            id="pictureURL"
            defaultValue={toy.pictureURL}
            name="pictureURL"
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
            name="name"
            defaultValue={toy.name}
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
            name="sellerName"
            defaultValue={toy.sellerName}
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
            name="sellerEmail"
            value={toy.sellerEmail}
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
            defaultValue={toy.subCategory}
            name="subCategory"
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
            defaultValue={toy.price}
            name="price"
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
            defaultValue={toy.rating}
            name="rating"
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
            defaultValue={toy.quantity}
            name="quantity"
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
            defaultValue={toy.description}
            name="description"
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

export default Update3Info;
