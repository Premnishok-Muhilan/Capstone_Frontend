// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCalendarAlt,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const AdminSidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-gray-800 text-white">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-2xl font-semibold">Admin</span>
      </div>
      <nav className="flex-1 mt-4">
        <ul>
          <li>
            <Link
              to="/admin-dashboard/dashboard"
              className="block px-4 py-2 hover:bg-gray-700 flex items-center"
            >
              <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="create-an-event"
              className="block px-4 py-2 hover:bg-gray-700 flex items-center"
            >
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Create an Event
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="block px-4 py-2 hover:bg-gray-700 flex items-center"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Profile
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="block px-4 py-2 hover:bg-gray-700 flex items-center"
            >
              <FontAwesomeIcon icon={faCog} className="mr-2" />
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard/logout"
              className="block px-4 py-2 hover:bg-gray-700 flex items-center"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </Link>
            {/* <button className="logout-button">
             
            </button> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
