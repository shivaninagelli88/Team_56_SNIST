import React, { useState } from "react";

const UserFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send feedback to an API or service
    console.log("Feedback submitted:", formData);
    // Reset the form
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="p-10">
      <h1 className="font-semibold text-4xl mb-6 text-center">User Feedback</h1>

      <form onSubmit={handleSubmit} className="mx-20">
        <div className="mb-5">
          <label className="block mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded-lg w-full p-3"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-400 rounded-lg w-full p-3"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2" htmlFor="feedback">
            Feedback:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            rows="4"
            className="border border-gray-400 rounded-lg w-full p-3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default UserFeedback;
