import React, { useEffect, useState } from "react";
import SingleToys from "./SingleToys";

const AllToy = () => {
  // const [toys,setToys] = useEffect([])
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
      <h2>Available Toys :{toys.length}</h2>
      {toys.map((toy) => 
        <SingleToys
        key={toy._id}
        toy={toy}
        ></SingleToys>
      )}
    </div>
  );
};

export default AllToy;
