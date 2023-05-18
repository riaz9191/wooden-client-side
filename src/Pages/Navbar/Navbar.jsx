import React from "react";
import logo from "../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a className="text-white">Home</a>
      </li>
  
      <li>
        <a className="text-white">All Toy</a>
      </li>
      <li>
        <a className="text-white">My Toy</a>
      </li>
      <li>
        <a className="text-white">Add A Toy</a>
      </li>
      <li>
        <a className="text-white">Blog</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#252525]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#B27A5A] rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end ">
            <img src="" alt="" />
          <Link to='/login'><a className="btn bg-[#B27A5A] rounded-md">Login</a></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;