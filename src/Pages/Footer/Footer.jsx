import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import logo from '../../assets/images/logo/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white mx-auto px-4">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="pr-6">
            <h3 className="text-lg font-bold text-center">About</h3>
            <img className="mx-auto mt-4" src={logo} alt="" />
            <p className="mt-4 text-center">
              We are a leading provider of high-quality wooden toys, dedicated to promoting creativity and imagination in children.
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
              <li>
                <a href="#">Dolls</a>
              </li>
              {/* Add more options here */}
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
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              {/* Add more options here */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
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
              {/* Add more social media icons here */}
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
