import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-slate-900 m-10 rounded-lg px-10 py-28 text-white lg:flex justify-around">
      <div>
        <div className="font-semibold text-4xl">
          Stay Updated on Campus Events!<br /> Sign up for our event alerts.
        </div>
      </div>
      <div>
        <div className="flex gap-5 mb-3">
          <input 
            type="email" 
            placeholder="Enter your email" 
            required 
            className="p-2 outline-none text-black rounded-md" 
          />
          <button className="bg-pink-700 p-2 rounded-lg hover:bg-pink-500">Subscribe</button>
        </div>
        <div className="text-sm text-slate-300">
          Get the latest events, workshops, and activities right in your inbox.
          <br />We respect your privacy. Read our <a href="/About" className="underline text-blue-300">privacy policy</a>.
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
