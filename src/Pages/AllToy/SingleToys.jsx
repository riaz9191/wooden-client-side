import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import { AuthContext } from "../../Provider/AuthProvider";

const SingleToys = ({ toy,index }) => {
  const {loading} = useContext(AuthContext)
  const {
    _id,
    pictureURL,
    name,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    description,
    
  } = toy;
  if (loading) {
    return (
      <Spinner className="text-center" animation="border" variant="primary" />
    );
  }
  return (
    <tr>
      <td>
        {index+1}
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={pictureURL} alt="Toy Image" />
            </div>
          </div>
          
        </div>
      </td>
      <td>{name ? name : "N/A"}</td>
      <td>{sellerName ? sellerName : "N/A"}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
       <Link to={`/toyinfo/${_id}`}> <button className="btn btn-primary btn-xs">View Details</button></Link>
      </td>
    </tr>
  );
};

export default SingleToys;
