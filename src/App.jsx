// src/App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import userLoader from "./loaders/userLoader";
// import Loading from "./components/Loading";

// Directly import components instead of using lazy loading
import HomeNav from "./wrappers/HomeNav";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import EventCards from "./components/EventCards";
import UserDashboardNav from "./wrappers/UserDashboardNav";
import EventDetails from "./components/EventDetails";
import BookingPage from "./components/BookingPage"; // Import BookingPage
import HeroSection from "./components/HeroSection";
import ViewRegistrations from "./components/ViewRegistrations";
import TransferTickets from "./components/TransferTickets";
import AdminLogin from "./components/AdminLogin";
import AdminDashboardNav from "./components/AdminDashboardNav";
import AdminSidebar from "./components/AdminSideBar";
import DashboardLayout from "./wrappers/DashboardLayout";
import CreatAnEvent from "./components/CreateAnEvent";
import ChartComponent from "./components/ChartComponent";
// Define routes directly without Suspense
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      {
        path: "",
        element: <HeroSection />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin-login",
        element: <AdminLogin />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "create-an-event",
        element: <CreatAnEvent />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "dashboard",
        element: <ChartComponent/>,
      },
    ],
    // element: <AdminDashboardNav />,
    // children: [{ path: "", element: <AdminSidebar /> }],
  },
  {
    path: "dashboard",
    element: <UserDashboardNav />,
    loader: userLoader,
    children: [
      {
        path: "events",
        element: <EventCards />,
      },
      {
        path: "registrations",
        element: <ViewRegistrations />,
      },
      {
        path: "registrations/:eventId/transfer-tickets",
        element: <TransferTickets />,
      },

      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "event/:id",
        element: <EventDetails />,
      },
      {
        path: "event/:id/book-tickets",
        element: <BookingPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
