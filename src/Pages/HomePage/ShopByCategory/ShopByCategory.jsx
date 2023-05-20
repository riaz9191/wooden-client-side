import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaStar } from "react-icons/fa";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import "aos/dist/aos.css";
import AOS from "aos";

const ShopByCategory = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  const [toys, setToys] = useState([]);
  const navigate = useNavigate();
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
    <div data-aos="zoom-in-up" className="max-w-6xl mx-auto">
      <h2 className="text-center text-4xl mt-20 mb-14 font-bold">
        Shop by category
      </h2>
      <Tabs data-aos="fade-down" className="text-center">
        <TabList className="shopByCata ">
          <Tab >
            <span className="font-bold ">Wooden Blocks</span>
          </Tab>
          <Tab>
            <span className="font-bold">Wooden Puzzles</span>{" "}
          </Tab>
          <Tab>
            <span className="font-bold">Wooden Building Sets</span>{" "}
          </Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            {toys
              .filter((toy) => toy.subCategory === "Wooden Blocks")
              .map((toy) => (
                <div
                  className="card card-compact w-72 bg-base-100 shadow-xl flex flex-col"
                  key={toy._id}
                >
                  <figure className="flex justify-center">
                    <img
                      src={toy.pictureURL}
                      alt={toy.title}
                      className="object-contain h-48 w-full"
                    />
                  </figure>
                  <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-lg text-center mt-2">
                      {toy.name}
                    </h2>
                    <p className="text-gray-700 font-bold">${toy.price}</p>
                    <div className="flex">
                      {renderRating(toy.rating)}
                    </div>
                    <button
                      onClick={() => handleViewDetails(toy._id)}
                      className="btn btn-primary mt-2"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            {toys
              .filter((toy) => toy.subCategory === "Wooden Puzzles")
              .map((toy) => (
                <div
                  className="card card-compact w-64 bg-base-100 shadow-xl flex flex-col"
                  key={toy._id}
                >
                  <figure className="flex justify-center">
                    <img
                      src={toy.pictureURL}
                      alt={toy.title}
                      className="object-contain h-48 w-full"
                    />
                  </figure>
                  <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-lg text-center mt-2">
                      {toy.name}
                    </h2>
                    <p className="text-gray-700 font-bold">${toy.price}</p>
                    <div className="flex">
                      {renderRating(toy.rating)}
                    </div>
                    <button
                      onClick={() => handleViewDetails(toy._id)}
                      className="btn btn-primary mt-2"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            {toys
              .filter((toy) => toy.subCategory === "Wooden Building Sets")
              .map((toy) => (
                <div
                  className="card card-compact w-64 bg-base-100 shadow-xl flex flex-col"
                  key={toy._id}
                >
                  <figure className="flex justify-center">
                    <img
                      src={toy.pictureURL}
                      alt={toy.title}
                      className="object-contain h-48 w-full"
                    />
                  </figure>
                  <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-lg text-center mt-2">
                      {toy.name}
                    </h2>
                    <p className="text-gray-700 font-bold">${toy.price}</p>
                    <div className="flex">
                      {renderRating(toy.rating)}
                    </div>
                    <button
                      onClick={() => handleViewDetails(toy._id)}
                      className="btn btn-primary mt-2"
                    >
                      View Details
                    </button>
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
