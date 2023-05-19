import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUndoAlt, FaTrash } from "react-icons/fa";
import { RxReader } from "react-icons/rx";


const SingleToys = ({ toy, index,handleDelete }) => {

 
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
  

  return (
    <tr>
      <td>{index + 1}</td>
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
      <td>{sellerEmail}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toyinfo/${_id}`}>
          {" "}
          <button className="btn btn-primary btn-xs">
            <RxReader />
          </button>
        </Link>
        <Link to={`/updateinfo/${_id}`}>
          {" "}
          <button className="btn btn-primary btn-xs">
            <FaUndoAlt />
          </button>
        </Link>
        <>
          {" "}
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-primary btn-xs"
          >
            <FaTrash />
          </button>
        </>
      </td>
    </tr>
  );
};

export default SingleToys;
