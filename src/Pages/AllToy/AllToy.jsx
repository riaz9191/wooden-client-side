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
      {toys.length > 0 ? (
        <div>
          <h2 className="text-center text-4xl mt-4 mb-4 font-bold">
            Total Toys: {toys.length}
          </h2>
          <div className="overflow-x-auto w-full max-w-6xl mx-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Picture</th>
                  <th>Toy Name</th>
                  <th>Seller Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
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
      ) : (
        <h2 className="text-center text-4xl mt-4 mb-4 font-bold">
          No toys yet.
        </h2>
      )}
    </div>
  );
};

export default AllToy;
