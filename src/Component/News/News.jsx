import React from "react";

const News = () => {
  return (
    <div className="p-10">
      <div className="bg-slate-300 p-5 text-center rounded-lg shadow-lg">
        <h1 className="lg:text-5xl text-3xl m-3 font-poppins font-bold lg:m-8">
          Don’t Miss Out on Upcoming Campus Events!
        </h1>
        <p className="lg:text-2xl m-6 font-sans text-slate-600">
          Join us for exclusive events, workshops, and seminars designed just for you.
          <br />
          Register now to secure your spot and make the most of your college experience!
        </p>
        <button className="bg-orange-500 p-3 text-slate-900 rounded-xl font-semibold hover:bg-orange-300 transition">
          Register for Events
        </button>
      </div>
    </div>
  );
};

export default News;
