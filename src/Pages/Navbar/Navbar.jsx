import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Spinner from "../../Spinner/Spinner";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return (
      <Spinner className="text-center" animation="border" variant="primary" />
    );
  }

  const navItems = (
    <>
    
    <NavLink
      to="/"
      className={ ({ isActive }) => (isActive ? "active" : "default ") }
    >
      Home
    </NavLink>
    <NavLink
      to="/alltoy"
      className={({ isActive }) => (isActive ? "active" : "default")}
    >
      All Toy
    </NavLink>
    {user?.email && (
      <NavLink
        to="/mytoy"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        My Toy
      </NavLink>
    )}
    {user?.email && (
      <NavLink
        to="/addatoy"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Add A Toy
      </NavLink>
    )}
    <NavLink
      to="/blog"
      className={({ isActive }) => (isActive ? "active" : "default")}
    >
      Blog
    </NavLink>
  </>
  );

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-[#252525] px-4 py-4 lg:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className={`btn btn-ghost lg:hidden ${
                isDropdownOpen ? "active" : ""
              }`}
              onClick={handleDropdownToggle}
            >
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-600 rounded-box w-24"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl">
              <img src={logo} alt="" />
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.email && (
            <img
              src={user?.photoURL}
              className="w-12 rounded-lg mr-1"
              alt=""
              title={user?.displayName}
            />
          )}
          {user?.email ? (
            <Link to="/">
              <a
                onClick={handleLogOut}
                className="btn bg-gradient-to-r from-[#c48755] to-[#79573a] 
                      hover:from-[#90633e] hover:to-[#483423] transition-all duration-300 shadow-xl rounded-md">
                Logout
              </a>
            </Link>
          ) : (
            <Link to="/login">
              <a className="btn bg-orange-400 rounded-md">Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
