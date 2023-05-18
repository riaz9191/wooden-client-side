import React, { useEffect, useState } from "react";
import SingleToys from "./SingleToys";

const AllToy = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  return (
    <div>
      <h2>Available Toys: {toys.length}</h2>
      <div className="overflow-x-auto w-full container mx-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <SingleToys key={toy._id} toy={toy} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
