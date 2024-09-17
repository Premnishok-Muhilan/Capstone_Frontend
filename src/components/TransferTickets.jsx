import React, { useState } from "react";
import userServices from "../services/userServices";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TransferTicketsForm = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const { eventId } = useParams();
  //   eventId
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    userServices
      .transfer_tickets_to_username({
        Transfer_Username: username,
        Event_Id: eventId,
      })
      .then((response) => {
        alert(response.data.message);

        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      })
      .catch((error) => {
        // Safely access error.response
        const errorMessage =
          error.response?.data?.message ||
          "An unknown error occurred. Please try again.";
        alert(errorMessage);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Transfer Tickets
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-300 text-lg font-semibold mb-2"
            >
              Username to whom the tickets has to be transferred to
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out bg-gray-900 text-white"
              required
            />
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-green-500 hover:to-blue-600 transition ease-in-out duration-300"
          >
            Transfer Tickets!
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferTicketsForm;
