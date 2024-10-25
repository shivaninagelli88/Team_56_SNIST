import React, { useState } from "react";
import rg1 from "../../assests/rg1.png.jpg";
import rigoled from "../../assests/rigoled.jpg";
import sportsev from "../../assests/sportsev.jpg";
import dandiya from "../../assests/dandiya.jpg";
import adastra from "../../assests/adastra.jpg";
import careerfair from "../../assests/carrerfair.jpg";

const images = {
  1: rg1,
  2: rigoled,
  3: sportsev,
  4: dandiya,
  5: adastra,
  6: careerfair,
};

const EventCard = ({ event }) => {
  const [showForm, setShowForm] = useState(false);

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful!");
    setShowForm(false); // Close form after submission
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="overflow-hidden rounded">
        <img
          className="object-cover transition-transform ease-in-out duration-500 rounded transform hover:scale-110"
          src={images[event.id]}
          alt={event.name}
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{event.name}</h2>
        <p className="text-gray-600 text-sm mb-2">{event.date}</p>
        <p className="text-gray-700 text-base">{event.description}</p>
        <div className="mt-5">
          <p className="text-gray-400">999+ Registered</p>
        </div>
      </div>
      <div>
        <button
          className="bg-pink-900 w-full font-medium text-white p-2 rounded-md hover:bg-pink-500"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg p-8 w-full max-w-md mx-4">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Register for {event.name}</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="Number"
                  placeholder="Enter your Mobile Number"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                 Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your Address"
                  required
                />
              </div>
              <button
                className="bg-pink-900 text-white font-bold py-2 px-4 rounded hover:bg-pink-500 w-full"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;