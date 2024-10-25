import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assests/logo1.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick((prev) => !prev);

  // Define all navbar items, including "Admin Dashboard"
  const navItems = ["Home", "Events", "About","Gallery", "FAQs", "Feedback", "AdminDashboard"];

  return (
    <nav className="relative">
      <div className="flex justify-between items-center z-50 shadow-xl bg-slate-900 text-white px-5 lg:px-20 py-4">
        <div className="flex items-center font-semibold">
          <img src={logo} alt="logo" className="mr-3 w-10 h-10" />
          <h1 className="text-3xl font-bold">SNISTeve.</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center font-semibold">
          <ul className="flex gap-8 mr-16">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.replace(/\s+/g, "")}`}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-400 ease-in ${
                      isActive
                        ? "text-pink-600 hover:border-b-2 border-white"
                        : "text-white"
                    } border-b-2 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                  }
                >
                  {item === "AdminDashboard" ? "Admin Dashboard" : item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Login Button */}
        <div className="hidden lg:flex items-center font-semibold">
          <Link to="/Login">
            <button
              type="button"
              className="bg-transparent hover:bg-pink-700 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
            >
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden block transition text-2xl"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {click && (
        <div className="lg:hidden absolute top-26 w-full z-50 left-0 right-0 bg-orange-500 text-white transition">
          <ul className="text-center text-xl p-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="my-4 py-2 border-b border-white hover:bg-orange-400 hover:rounded"
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.replace(/\s+/g, "")}`}
                  onClick={handleClick}
                >
                  {item === "AdminDashboard" ? "Admin Dashboard" : item}
                </Link>
              </li>
            ))}
            <li className="my-4 py-2">
              <Link to="/Login" onClick={handleClick}>
                <button
                  type="button"
                  className="w-full py-2 rounded-lg bg-white text-black hover:bg-yellow-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-white"
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
