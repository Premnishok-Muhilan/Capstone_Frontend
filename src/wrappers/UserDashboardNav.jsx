import { Link, Outlet, useLoaderData } from "react-router-dom";

const UserDashboardNav = () => {
  const user = useLoaderData(); // Ensure user object is correctly fetched
  console.log(user);

  // Function to handle logout (you need to implement this)
  const handleLogout = () => {
    // Your logout logic here
  };

  return (
    <div>
      <nav className="bg-black p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="text-white text-lg font-semibold flex-1">
            Welcome to Event Management Platform
          </div>
          <div className="flex items-center space-x-4">
            {/* Welcome message and logout button */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-white text-sm">
                Welcome,{" "}
                <strong>
                  {user.First_Name} {user.Last_Name}
                </strong>
              </span>
              <Link className="nav-link" to="events">
                <button
                  //onClick={handleLogout}
                  className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                >
                  All Events
                </button>
              </Link>
              <Link className="nav-link" to="/dashboard/registrations">
              <button
                //onClick={handleLogout}
                className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                View Registrations
              </button>
            </Link>
              <Link className="nav-link" to="logout">
                <button
                  //onClick={handleLogout}
                  className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                >
                  Logout
                </button>
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() =>
                document
                  .getElementById("mobile-menu")
                  .classList.toggle("hidden")
              }
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
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="md:hidden hidden mt-4 bg-gray-800 p-4 rounded-md"
        >
          <div className="flex flex-col items-start space-y-2">
            <span className="text-white text-sm">
              Welcome,{" "}
              <strong>
                {user.First_Name} {user.Last_Name}
              </strong>
            </span>
            <Link className="nav-link" to="events">
              <button
                //onClick={handleLogout}
                className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                All Events
              </button>
            </Link>
            <Link className="nav-link" to="/dashboard/registrations">
              <button
                //onClick={handleLogout}
                className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                View Registrations
              </button>
            </Link>
            <Link className="nav-link" to="/logout">
              <button
                //onClick={handleLogout}
                className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default UserDashboardNav;
