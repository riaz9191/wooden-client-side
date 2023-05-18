import React, { useState } from 'react';

const AddAToy = () => {
  const [pictureURL, setPictureURL] = useState('');
  const [name, setName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the form data using the state values
    // For example: { pictureURL, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description }
  };

  return (
   <div className='card shadow-xl'>
     <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="pictureURL" className="block text-gray-700">Picture URL of the toy:</label>
          <input type="text" id="pictureURL" value={pictureURL} onChange={(e) => setPictureURL(e.target.value)} className="form-input mt-1 w-full" required />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-input mt-1 w-full" required />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="sellerName" className="block text-gray-700">Seller Name:</label>
          <input type="text" id="sellerName" value={sellerName} onChange={(e) => setSellerName(e.target.value)} className="form-input mt-1 w-full" />
        </div>
        <div>
          <label htmlFor="sellerEmail" className="block text-gray-700">Seller Email:</label>
          <input type="email" id="sellerEmail" value={sellerEmail} onChange={(e) => setSellerEmail(e.target.value)} className="form-input mt-1 w-full" required />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="subCategory" className="block text-gray-700">Sub-category:</label>
        <select id="subCategory" value={subCategory} onChange={(e) => setSubCategory(e.target.value)} className="form-select mt-1 w-full" required>
          <option value="">Select a sub-category</option>
          <option value="Math Toys">Math Toys</option>
          <option value="Language Toys">Language Toys</option>
          <option value="Science Toys">Science Toys</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="price" className="block text-gray-700">Price:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-input mt-1 w-full" required />
        </div>
        <div>
          <label htmlFor="rating" className="block text-gray-700">Rating:</label>
          <input type="number" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} step="0.1" min="0" max="5" className="form-input mt-1 w-full" required />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="quantity" className="block text-gray-700">Available Quantity:</label>
          <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-input mt-1 w-full" required />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="description" className="block text-gray-700">Detail Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-textarea mt-1 w-full" rows="4" required></textarea>
      </div>

      <div className="mt-6">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
   </div>
  );
};

export default AddAToy;
