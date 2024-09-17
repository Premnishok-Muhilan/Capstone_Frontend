import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-bold">
            Event Management Platform
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-200 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
            >
              Login
            </Link>
            <Link
              to="/admin-login"
              className="block text-gray-200 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
            >
              Admin login
            </Link>
            <Link
              to="/register"
              className="text-gray-200 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
            >
              Register
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 ${
            isOpen ? "block" : "hidden"
          } bg-gray-800 p-4 rounded-md`}
        >
          <Link
            to="/login"
            className="block text-gray-200 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
          >
            Login
          </Link>
          <Link
            to="/admin-login"
            className="block text-gray-200 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
          >
            Admin login
          </Link>
          <Link
            to="/register"
            className="mt-2 block text-gray-200 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
          >
            Register
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
