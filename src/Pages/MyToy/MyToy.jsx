import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import SingleToys from './SingleToys';

const MyToy = () => {
    const {user} =useContext(AuthContext)
    const [toys,setToys] = useState([])
    
    const url = `http://localhost:5000/alltoys?sellerEmail=${user?.email}`
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>setToys(data))
    },[])
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

export default MyToy;