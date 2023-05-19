import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SingleToys from "./SingleToys";
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/alltoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mt-5 mb-32">
      {toys.length > 0 ? (
        <div className="overflow-x-auto w-full max-w-6xl mx-auto">
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
      ) : (
        <div className="mt-">
        <h2 className="text-5xl text-center ">
          <span className="text-transparent bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text">
            You haven't added any toys yet. <br />
            <span className="text-lg text-blue-500">Add some toys to see here</span>
          </span>
        </h2>
      </div>
      
      )}
    </div>
  );
};

export default MyToy;
