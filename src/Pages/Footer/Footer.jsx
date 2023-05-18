import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-base-200">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <img src="" alt="" />
            <p className="mt-4">
              We are a leading provider of high-quality wooden toys, dedicated
              to promoting creativity and imagination in children.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#">Wooden Blocks</a>
              </li>
              <li>
                <a href="#">Puzzles</a>
              </li>
              <li>
                <a href="#">Building Sets</a>
              </li>
              <li>
                <a href="#">Toy Vehicles</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Customer Service</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Shipping &amp; Returns</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className="mt-4 flex space-x-4">
              <ul className="mt-4 flex space-x-4">
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaPinterest className="h-6 w-6" />
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <hr className="border-gray-300 my-8" />
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Wooden Toy Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
