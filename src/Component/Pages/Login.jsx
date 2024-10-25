import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const submit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email !== " ") {
      alert(`Successfully Logined with ${email}`);
    } else {
      alert("Enter the values");
    }
  };

  return (
    <div className="lg:p-20 py-10 flex justify-center">
      <div className="bg-slate-200 shadow-lg lg:px-20 px-5 py-4 rounded-lg">
        <h1 className="text-2xl font-semibold text-center my-10"> Admin LogIn</h1>
        <form className="flex flex-col gap-3" onSubmit={submit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="p-2 rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="p-2 rounded-md"
            required
          />
          <div className="flex justify-end ">
            <p className="text-gray-700 cursor-pointer">Forgot password?</p>
          </div>
          <div className="flex">
            <input type="checkbox" />
            <p className="ml-2">I agree to the terms and conditions</p>
          </div>

          <button
            className="bg-pink-900 w-full font-medium text-white p-2 rounded-md mt-7 hover:bg-pink-500"
            type="submit"
          >
            Continue
          </button>
        </form>
        <p className="p-3 text-center">
          Don't have an Account?
          <Link to="/signup">
            <span className="font-medium text-pink-500 ml-1">
              Create Account
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
