// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-300 via-white to-pink-300 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-white to-pink-300 opacity-60"></div>
      <div className="relative z-10 text-center p-6 sm:p-8 bg-white rounded-lg shadow-lg max-w-lg mx-4 sm:mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
          Please Log In to Grab Your Tickets!
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Access exclusive events and book your seats by logging in to your
          account. Don’t miss out on our amazing offers!
        </p>
        <Link to={"/login"}>
          <button className="bg-red-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
