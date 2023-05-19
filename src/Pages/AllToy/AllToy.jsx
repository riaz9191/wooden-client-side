import React, { useContext, useEffect, useState } from "react";
import SingleToys from "./SingleToys";
import { toast } from "react-toastify";
import useTitle from "../../hook/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import Spinner from "../../Spinner/Spinner";

const AllToy = () => {
  const{loading} = useContext(AuthContext)
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useTitle('AllToy')

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/searchtoy/${searchText}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setToys(data);
          setSearchText("")
        } else {
          toast.error(`No Data Found`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };
  if (loading) {
    return (
      <Spinner className="text-center" animation="border" variant="primary" />
    );
  }

  return (
    <div>
      {toys.length > 0 ? (
        <div>
          <h2 className="text-center text-4xl mt-4 mb-4 font-bold">
            Total Toys: {toys.length}
          </h2>
          <div className="flex justify-end max-w-6xl">
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Type here"
              className="input input-bordered input-success w-full max-w-xs"
            />
            <button onClick={handleSearch} className="btn">
              Search
            </button>
          </div>
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
                {toys.length > 0 ? (
                  toys.map((toy, index) => (
                    <SingleToys key={toy._id} toy={toy} index={index} />
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No data found.
                    </td>
                  </tr>
                )}
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
