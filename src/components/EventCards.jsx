// src/components/EventCard.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import adminServices from "../services/adminServices";

const EventCard = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await adminServices.getAllEventsInfo();
        setEvents(response.data.all_event_details); // Ensure this is the correct path to your events array
      } catch (err) {
        setError(err.message || "An error occurred while fetching events.");
      } finally {
        setLoading(false); // Set loading to false after data fetching
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="text-white text-center p-4">Loading events...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 transition-all duration-300 ease-in-out">
      {/* Container for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.length > 0 ? (
          events.map((event) => (
            <Link
              key={event._id || event.Title} // Ensure unique key; use Title as a fallback if _id is not available
              to={`/dashboard/event/${event._id}`}
              className="block bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-6"
            >
              {/* Event Title */}
              <h2 className="text-2xl font-bold text-white mb-4">
                {event.Title}
              </h2>
              {/* Additional event details (optional) */}
              <p className="text-gray-300">
                {event.description}{" "}
                {/* Show some brief description if available */}
              </p>
            </Link>
          ))
        ) : (
          <div className="text-white text-center col-span-full">
            No events available
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
