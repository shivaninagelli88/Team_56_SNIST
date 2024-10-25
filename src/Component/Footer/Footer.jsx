import React from "react";
import logo from "../../assests/logo1.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around font-sans items-start p-6 lg:p-20 bg-slate-800">
        <div className="flex items-center lg:mr-24">
        <img src={logo} alt="logo" className="mr-3 w-10 h-10" />
          <h1 className="text-3xl font-bold text-slate-300">SNISTeve.</h1>
        </div>
        <div className="lg:flex flex-col mt-6 lg:mt-0 lg:flex-row gap-6 lg:gap-28 grid grid-cols-2 ml-8">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-slate-300">Events</h1>
            <ul className="text-slate-500">
              <li className="cursor-pointer hover:text-slate-400">
                <Link to="/Events">Upcoming Events</Link>
              </li>
              <li className="cursor-pointer hover:text-slate-400">
                <Link to="/Events">Workshops</Link>
              </li>
              <li className="cursor-pointer hover:text-slate-400">
                <Link to="/Events">Cultural Fest</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-slate-300">Resources</h1>
            <ul className="text-slate-500">
              <li className="cursor-pointer hover:text-slate-400">
                <Link to="/About">Student Clubs</Link>
              </li>
              <li className="cursor-pointer hover:text-slate-400">
                <Link to="/About">Volunteer</Link>
              </li>
              <li className="cursor-pointer hover:text-slate-400">
                <Link to="/About">Sponsorship</Link>
              </li>
              <li className="cursor-pointer hover:text-slate-400">
                <Link to="/Feedback">Feedback</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-slate-300">Support</h1>
            <ul className="text-slate-500">
              <li className="cursor-pointer hover:text-slate-400">
                <Link to="/FAQs">FAQs</Link>
              </li>
              <li className="cursor-pointer hover:text-slate-400">
                <Link to="/FAQs">Technical Support</Link>
              </li>
              <li className="cursor-pointer hover:text-slate-400">
                <Link to="/FAQs">Event Guidelines</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-slate-300">Stay Connected</h1>
            <ul className="text-slate-500">
              <li className="cursor-pointer hover:text-slate-400">Facebook</li>
              <li className="cursor-pointer hover:text-slate-400">Instagram</li>
              <li className="cursor-pointer hover:text-slate-400">Twitter</li>
              <li className="cursor-pointer hover:text-slate-400">LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 text-slate-600 p-3 text-center">
        <h1 className="text-sm lg:text-md">
          Copyright &copy; 2024 Created by Team_56. All Rights Reserved.
        </h1>
      </div>
    </>
  );
};

export default Footer;
