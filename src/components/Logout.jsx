import { useEffect, useState } from "react";
import userServices from "../services/userServices";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    userServices.logout()
      .then(() => {
        setLoading(false);
        setTimeout(() => {
          navigate('/');
        }, 500);
      })
      .catch((error) => {
        setLoading(false);
        setError("There was a problem logging out. Please try again.");
        setTimeout(() => {
          navigate('/');
        }, 2000);
      });
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        {loading ? (
          <div className="text-white text-lg font-semibold">
            Logging out, please wait...
          </div>
        ) : (
          <div className="text-white text-lg font-semibold">
            {error ? error : "You have been logged out successfully!"}
          </div>
        )}
      </div>
    </div>
  );
}

export default Logout;
