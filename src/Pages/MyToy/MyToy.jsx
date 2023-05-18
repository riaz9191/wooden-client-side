import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SingleToys from "./SingleToys";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const url = `http://localhost:5000/alltoys?sellerEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/alltoys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Delete successfully");
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining)
          }
        });
    }
  };
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
              <SingleToys
                key={toy._id}
                toy={toy}
                index={index}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
