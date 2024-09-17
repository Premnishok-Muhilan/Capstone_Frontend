import React, { useState, useEffect } from "react";
import adminServices from "../services/adminServices";

const CreateAnEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    time: "",
    location: "",
    ticketPriceVIP: "",
    ticketPriceGeneral: "",
    maxAttendees: "",
    availableSeats: [],
    seatRangeFrom: "",
    seatRangeTo: "",
  });

  function convertToMongooseDate(dateString) {
    // Parse the input date string into a JavaScript Date object
    const date = new Date(dateString);

    // Return the date in ISO string format
    return date.toISOString();
  }

  // Update availableSeats whenever seatRangeFrom or seatRangeTo changes
  useEffect(() => {
    handleSeatRangeChange();
  }, [formData.seatRangeFrom, formData.seatRangeTo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSeatRangeChange = () => {
    const { seatRangeFrom, seatRangeTo } = formData;
    const from = parseInt(seatRangeFrom, 10);
    const to = parseInt(seatRangeTo, 10);

    if (!isNaN(from) && !isNaN(to) && from <= to) {
      const seats = [];
      for (let i = from; i <= to; i++) {
        seats.push(i.toString());
      }
      setFormData({
        ...formData,
        availableSeats: seats,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);

    adminServices
      .createAnEvent({
        Title: formData.title,
        Description: formData.description,
        Category: formData.category,
        Date: convertToMongooseDate(formData.date),
        Time: formData.time,
        Location: formData.location,
        Ticket_Price_VIP: parseInt(formData.ticketPriceVIP, 10),
        Ticket_Price_General: parseInt(formData.ticketPriceGeneral, 10),
        Maximum_Attendees_Possible: parseInt(formData.maxAttendees, 10),
        Available_Seat_Nos: formData.availableSeats,
      })
      .then((response) => {
        alert(response.data.message);

        setTimeout(() => {
          // You might need to use the `useNavigate` hook if you want to navigate programmatically
          // import { useNavigate } from 'react-router-dom';
          // const navigate = useNavigate();
          // navigate("/admin-dashboard");
        }, 500);
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message ||
          "An unknown error occurred. Please try again.";
        alert(errorMessage);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Event Details</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Event Title"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Event Description"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a Category</option>
            <option value="Theater">Theater</option>
            <option value="Music">Music</option>
            <option value="Dance">Dance</option>
            <option value="Comedy">Comedy</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Event Location"
          />
        </div>

        <div>
          <label
            htmlFor="ticketPriceVIP"
            className="block text-sm font-medium text-gray-700"
          >
            Ticket Price (VIP)
          </label>
          <input
            type="number"
            id="ticketPriceVIP"
            name="ticketPriceVIP"
            value={formData.ticketPriceVIP}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="VIP Ticket Price"
            step="0.01"
          />
        </div>

        <div>
          <label
            htmlFor="ticketPriceGeneral"
            className="block text-sm font-medium text-gray-700"
          >
            Ticket Price (General)
          </label>
          <input
            type="number"
            id="ticketPriceGeneral"
            name="ticketPriceGeneral"
            value={formData.ticketPriceGeneral}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="General Ticket Price"
            step="0.01"
          />
        </div>

        <div>
          <label
            htmlFor="maxAttendees"
            className="block text-sm font-medium text-gray-700"
          >
            Maximum Attendees
          </label>
          <input
            type="number"
            id="maxAttendees"
            name="maxAttendees"
            value={formData.maxAttendees}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Max Attendees"
          />
        </div>

        <div>
          <label
            htmlFor="seatRangeFrom"
            className="block text-sm font-medium text-gray-700"
          >
            Seat Range From
          </label>
          <input
            type="number"
            id="seatRangeFrom"
            name="seatRangeFrom"
            value={formData.seatRangeFrom}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Start Seat Number"
          />
        </div>

        <div>
          <label
            htmlFor="seatRangeTo"
            className="block text-sm font-medium text-gray-700"
          >
            Seat Range To
          </label>
          <input
            type="number"
            id="seatRangeTo"
            name="seatRangeTo"
            value={formData.seatRangeTo}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="End Seat Number"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAnEvent;
