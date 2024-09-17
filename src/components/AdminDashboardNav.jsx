// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const AdminDashboardNav = ({ toggleSidebar }) => {
  return (
    <div className="bg-gray-800 text-white h-16 flex items-center px-4">
      <button className="text-2xl mr-4" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />{" "}
        {/* Font Awesome icon for sidebar toggle */}
      </button>
      <div className="flex-1">
        <Link to="/admin-dashboard" className="text-lg font-semibold">
          Admin Dashboard
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
          <FontAwesomeIcon icon={faBell} />{" "}
          {/* Font Awesome icon for notifications */}
        </button>
        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
          <FontAwesomeIcon icon={faUser} />{" "}
          {/* Font Awesome icon for user profile */}
        </button>
      </div>
    </div>
  );
};

export default AdminDashboardNav;
