import React from "react";
import { Link } from "react-router-dom";
import sports from "../../assests/sports.jpg";
import tech from "../../assests/tech.jpg";
import seminars from "../../assests/seminars.jpg";
import foodstalls from "../../assests/stalls.jpg";
import music from "../../assests/music.png";

const Categories = () => {
  return (
    <div className="p-10">
      <h1 className="font-semibold text-2xl">Our Events</h1>
      <div className="lg:flex items-center gap-12 py-10">
        <div className="max-w-sm mb-10 rounded overflow-hidden shadow-lg bg-pink-600 text-white">
          <Link to="/MostFav">
            <div className="overflow-hidden">
              <img
                className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
                src={sports}
                alt="Image Clothing"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2 text-center">
                Sports
              </div>
            </div>
          </Link>
        </div>
        <div className="max-w-sm mb-10 rounded overflow-hidden shadow-lg bg-pink-600 text-white">
          <Link to="/MostFav">
            <div className="overflow-hidden">
              <img
                className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
                src={tech}
                alt="Image Clothing"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2 text-center">
                Technical
              </div>
            </div>
          </Link>
        </div>
        {/* <div class="max-w-sm mb-10 rounded overflow-hidden shadow-lg">
          <Link to="/MostFav">
            <div className="overflow-hidden">
              <img
                className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
                src={seminars}
                alt="Image Clothing"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2 text-center">
                Workshops
              </div>
            </div>
          </Link>
        </div> */}

        <div className="max-w-sm mb-10 rounded overflow-hidden shadow-lg bg-pink-600 text-white">
          <Link to="/MostFav">
            <div className="overflow-hidden">
              <img
                className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
                src={music}
                alt="Image Clothing"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2 text-center">
                Concerts
              </div>
            </div>
          </Link>
        </div>

        <div className="max-w-sm mb-10 rounded overflow-hidden shadow-lg bg-pink-600 text-white">
          <Link to="/MostFav">
            <div className="overflow-hidden">
              <img
                className="w-full transition-transform ease-in-out duration-500 transform hover:scale-110"
                src={foodstalls}
                alt="Image Clothing"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2 text-center">
                Food Festivals
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
