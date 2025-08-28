

import React, { useState } from "react";
import { IoEyeSharp, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function Login() {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate=useNavigate()

  function changeHandler(e) {
    const { value, name, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("Login successfully");
    navigate("/")
    console.log(formData);

    setFormData({
      email: "",
      password: "",
    });
    setShowPass(false);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-10 gap-10">
      
      {/* 🔹 Login Card */}
      <div className="w-full max-w-md border border-green-400 bg-slate-700/90 shadow-xl rounded-2xl p-8 backdrop-blur-md hover:shadow-blue-500/50 transition-shadow duration-300 ease-in-out">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Login
        </h2>
        <form onSubmit={submitHandler} className="space-y-6 text-left">
          
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-gray-200">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter your email"
              id="email"
              className="border border-gray-500 bg-slate-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col relative">
            <label
              htmlFor="password"
              className="mb-1 font-medium text-gray-200"
            >
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
              id="password"
              className="border border-gray-500 bg-slate-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span
              className="absolute right-3 top-9 cursor-pointer text-xl text-gray-300 hover:text-white transition"
              onClick={() => setShowPass((prev) => !prev)}
            >
              {showPass ? <IoEyeSharp /> : <IoEyeOff />}
            </span>
          </div>

          <p className="text-sm text-blue-400 cursor-pointer hover:underline text-right">
            Forget Password?
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Login
          </button>
        </form>
      </div>

      {/* 🔹 Map Section */}
      
    </div>
  );
}

export default Login;


