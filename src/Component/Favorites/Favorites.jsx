import React from "react";
import Roboveda from "../../assests/rg1.png.jpg";
import sv from "../../assests/rigoled.jpg";
import sports from "../../assests/sportsev.jpg";
import dandiya from "../../assests/dandiya.jpg";
import adastra from "../../assests/adastra.jpg";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <div className="p-10 bg-pink-800 text-black">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl text-white">Upcoming Events</h1>
        <span>
          <Link
            to="/Events"
            className="flex items-center font-semibold gap-1 text-white-500"
          >
            Browse all Favorites <IoIosArrowDropright />
          </Link>
        </span>
      </div>
      <div className="lg:flex items-center gap-12 py-10">
        {[{ title: 'Roboveda', image: Roboveda }, { title: 'Sreevision', image: sv }, { title: 'Ashwathama', image: sports }, { title: 'Sreeotsav', image: dandiya },{ title: 'Adastra', image: adastra }].map((event, index) => (
          <div key={index} className="w-60 h-80 mb-10 rounded overflow-hidden shadow-lg bg-white flex flex-col">
            <div className="overflow-hidden h-2/3">
              <img
                className="w-full h-full object-cover transition-transform ease-in-out duration-500 transform hover:scale-110"
                src={event.image}
                alt={`${event.title} Event`}
              />
            </div>
            <div className="px-6 py-4 flex flex-col items-center justify-between h-1/3">
              <div className="font-semibold text-lg mb-2 text-center">
                {event.title}
              </div>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                SNIST
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
