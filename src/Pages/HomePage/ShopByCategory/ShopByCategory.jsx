import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaStar } from "react-icons/fa";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
//   const location = useLocation();
  const navigate = useNavigate();
  //   const id= useParams(id)
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://toy-marketplace-server-side-one.vercel.app/allToys")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  const handleViewDetails = (id) => {
    console.log(id);
    navigate(`/toyinfo/${id}`);
    if (user?.email) {
     
      navigate(`/toyinfo/${id}`);
    } else {
      toast.success(`Please Login First`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/login");
     
    }
  };

  const renderRating = (rating) => {
    const starIcons = [];

    for (let i = 0; i < rating; i++) {
      starIcons.push(<FaStar key={i} className="h-5 w-5 text-yellow-400" />);
    }

    return starIcons;
  };
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-4xl mt-20 mb-14 font-bold">
        Browse by category
      </h2>
      <Tabs>
        <TabList>
          <Tab>
            <span className="font-bold">Wooden Blocks</span>
          </Tab>
          <Tab>
            <span className="font-bold">Wooden Puzzles</span>{" "}
          </Tab>
          <Tab>
            <span className="font-bold">Wooden Building Sets</span>{" "}
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Toys in Wooden Blocks</h2>
          <div className="flex gap-5">
            {toys
              .filter((toy) => toy.subCategory === "Wooden Blocks")
              .map((toy) => (
                <div
                  className="card card-compact w-96 bg-base-100 shadow-xl"
                  key={toy._id}
                >
                  <figure>
                    <img src={toy.pictureURL} alt={toy.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>${toy.price}</p>
                    <p className="flex"> {renderRating(toy.rating)}</p>
                   
                    <button
                      onClick={() => handleViewDetails(toy._id)}
                      className="btn btn-primary"
                    >
                      View Details
                    </button>
                    
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Toys in Wooden Puzzles</h2>
          <div className="flex gap-5">
            {toys
              .filter((toy) => toy.subCategory === "Wooden Puzzles")
              .map((toy) => (
                <div
                  className="card card-compact w-96 bg-base-100 shadow-xl"
                  key={toy._id}
                >
                  <figure>
                    <img src={toy.pictureURL} alt={toy.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>${toy.price}</p>
                    <p className="flex"> {renderRating(toy.rating)}</p>
                    <button
                      onClick={() => handleViewDetails(toy._id)}
                      className="btn btn-primary"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Toys in Wooden Building Sets</h2>
          <div className="flex gap-5">
            {toys
              .filter((toy) => toy.subCategory === "Wooden Building Sets")
              .map((toy) => (
                <div
                  className="card card-compact w-96 bg-base-100 shadow-xl"
                  key={toy._id}
                >
                  <figure>
                    <img src={toy.pictureURL} alt={toy.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>${toy.price}</p>
                    <p className="flex"> {renderRating(toy.rating)}</p>
                    <div className="card-actions justify-end">
                    <button
                      onClick={() => handleViewDetails(toy._id)}
                      className="btn btn-primary"
                    >
                      View Details
                    </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;

