import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const { name, email, subject, message } = formData;
    if (name && email && subject && message) {
      const token = Math.floor(Math.random() * 10000);
      alert(`Your token ${token} is Received`);
    } else {
      alert("Please fill out all the fields.");
    }
  };

  return (
    <div className="p-10">
      <h1 className="font-semibold text-2xl text-center mb-8">Contact Us</h1>
      <div className="flex flex-col lg:flex-row mx-auto lg:w-3/4 lg:p-20 items-stretch">
        <div className="bg-orange-400 text-slate-100 w-full lg:w-1/2 p-10 lg:py-36 mb-10 shadow-lg rounded-s-2xl lg:mb-0">
          <div className="mb-4">
            <h1 className="font-semibold text-2xl mb-2">Get In Touch</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis in numquam eos veritatis ut officiis officia possimus
              et, a facere sunt consequatur omnis enim cumque voluptatibus
              soluta amet nisi voluptates?
            </p>
          </div>
          <p>
            <strong>Email :</strong> info@menstore.com
          </p>
          <p>
            <strong>Phone :</strong> +91 123-4567-890
          </p>
          <p>
            <strong>Address :</strong> 123 Main Street, City, Country, ZIP
          </p>
          <p>
            <strong>Business Hours :</strong> Mon-Fri, 9:00 AM - 5:00 PM (IST)
          </p>
        </div>

        <div className="bg-slate-500 w-full lg:w-1/2 p-10 py-10 pt-24 rounded-e-2xl">
          <form className="max-w-sm mx-auto h-full" onSubmit={handleSubmit}>
            <div className="flex flex-col h-full">
              <div className="mb-5">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-slate-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-slate-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@flowbite.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="subject" className="font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="bg-slate-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-14 flex-1">
                <label htmlFor="message" className="font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message.."
                  className="bg-slate-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-full"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-400 p-2 w-full rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
