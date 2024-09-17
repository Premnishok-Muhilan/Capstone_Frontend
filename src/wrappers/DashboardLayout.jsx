// src/components/DashboardLayout.js
import React, { useState } from "react";
import AdminDashboardNav from "../components/AdminDashboardNav";
import AdminSidebar from "../components/AdminSideBar";

import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen w-screen">
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 z-20">
          <AdminSidebar />
        </div>
      )}
      <div className={`flex-1 ${isSidebarOpen ? "ml-64" : ""}`}>
        <AdminDashboardNav toggleSidebar={toggleSidebar} />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
