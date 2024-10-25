import React from "react";
import Model_image from "../../assests/wall.jpg";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="bg-slate-100 w-full lg:h-screen flex justify-center items-center p-5 lg:p-10"
      style={{
        backgroundImage: `url(${Model_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="m-5 text-center">
        <h1 className="lg:text-6xl text-4xl font-semibold text-white font-poppins mb-5">
           Your Gateway to College Events
        </h1>
        <p className="text-white mb-5">
          SNISTeve. is a dedicated event management platform designed exclusively for the students of Sreenidhi Institute of Science and Technology (SNIST). Our aim is to streamline the process of organizing, managing, and participating in college events, making it easier for both students and event organizers.
        </p>
        <div className="flex justify-center">
          <Link to="/Events">
            <button
              className="mt-4 px-6 py-2 flex items-center gap-2 rounded-lg bg-slate-700 text-white 
              hover:bg-pink-200 hover:text-black active:bg-orange-300 transition shadow-lg"
            >
              Book Now <IoMdArrowForward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
