// src/components/BookingPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import adminServices from "../services/adminServices"; // Import the service to fetch event details
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

const BookingPage = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await adminServices.getEventInfoById(id); // Fetch event data
        setEvent(response.data.event_info); // Set event data in state
      } catch (err) {
        console.error("Error fetching event details:", err);
      }
    };

    fetchEventDetails();
  }, [id]);

  const handleSeatClick = (seat) => {
    if (!event.Booked_Seat_Nos.includes(seat)) {
      setSelectedSeats((prev) =>
        prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
      );
      console.log(`Seat ${seat} clicked`);
      console.log("Selected Seats:", selectedSeats); // Log the updated selectedSeats s
    }
  };

  const handleEventRegistration = () => {
    userServices
      .register_for_an_event({ Event_Id: id, Selected_Seat_Nos: selectedSeats })
      .then((response) => {
        alert(response.data.message);

        // // Clear the form
        // dispatch(setUsername(""));
        // dispatch(setPassword(""));

        setTimeout(() => {
          navigate("/dashboard/registrations");
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

  if (!event) {
    return (
      <div className="text-white text-center">Loading event details...</div>
    );
  }

  // Generate reversed seat numbers based on the maximum number of attendees
  const generateSeats = () => {
    const seats = [];
    for (let i = event.Maximum_Attendees_Possible; i >= 1; i--) {
      seats.push(i);
    }
    return seats;
  };

  const seats = generateSeats();

  return (
    <div className="min-h-screen bg-gray-900 p-4 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 max-w-full sm:max-w-lg w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          Book Your Seats for {event.Title}
        </h1>
        <p className="text-gray-300 text-center mb-4">{event.Description}</p>

        {/* Seat Layout */}
        <div className="flex flex-col gap-2 items-center">
          {Array.from({ length: 10 }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap gap-2 justify-center"
              style={{ maxWidth: "calc(100% - 1rem)" }} // Ensure seats fit within container
            >
              {Array.from({ length: 2 }, (_, colIndex) => {
                const seatIndex = rowIndex * 2 + colIndex;
                const seatNumber = seats[seatIndex];
                const isBooked = event.Booked_Seat_Nos.includes(seatNumber);
                const isSelected = selectedSeats.includes(seatNumber);

                return (
                  <div
                    key={seatNumber}
                    onClick={() => handleSeatClick(seatNumber)}
                    className={`w-12 h-12 flex items-center justify-center text-white font-semibold rounded-lg cursor-pointer ${
                      isBooked
                        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                        : isSelected
                        ? "bg-green-500 text-white"
                        : "border-2 border-green-500 text-green-500"
                    }`}
                    style={{
                      cursor: isBooked ? "not-allowed" : "pointer",
                      transition: "background-color 0.3s, border-color 0.3s",
                    }}
                  >
                    {seatNumber}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Booking Summary */}
        <div className="text-white text-center mt-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Selected Seats:
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {selectedSeats.length > 0 ? (
              selectedSeats.map((seat) => (
                <span
                  key={seat}
                  className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm sm:text-base"
                >
                  Seat {seat}
                </span>
              ))
            ) : (
              <p className="text-sm sm:text-base">No seats selected</p>
            )}
          </div>
        </div>

        <div className="flex justify-center m-4">
          <button
            className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out"
            onClick={handleEventRegistration}
          >
            Grab Tickets!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
