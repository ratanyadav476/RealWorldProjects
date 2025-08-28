
import React, { useState } from 'react'
import image1 from "../images/image1.jpg"
import { IoEyeSharp, IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Signin() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [confshowPass, setConfShowPass] = useState(false)
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPass: ""
  })

  function changeHandler(e) {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData);
    navigate("/")
    toast.success("sign-in successfully")



    // ✅ Reset form after submit
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPass: ""
    })
    setShowPass(false)
    setConfShowPass(false)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center  justify-center bg-gray-900 px-4 py-6 gap-6">

      {/* ===== Left Side Image (hide on small screens) ===== */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <img
          src={image1}
          alt="signin"
          className="w-full max-w-md rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* ===== Right Side Form ===== */}
      <div className="w-full shadow-lg shadow-white md:w-1/2 max-w-md bg-gray-800 text-white rounded-2xl  p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Sign In</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* First + Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={changeHandler}
              value={formData.firstname}
              className="w-full p-3 rounded-xl bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={changeHandler}
              value={formData.lastname}
              className="w-full p-3 rounded-xl bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={changeHandler}
            value={formData.email}
            className="w-full p-3 rounded-xl bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password with Eye Icon */}
          <div className="relative w-full">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={changeHandler}
              className="w-full p-3 rounded-xl bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-xl"
              onClick={() => setShowPass(prev => !prev)}
            >
              {showPass ? <IoEyeSharp /> : <IoEyeOff />}
            </span>
          </div>

          {/* Confirm Password with Eye Icon */}
          <div className="relative w-full">
            <input
              type={confshowPass ? "text" : "password"}
              name="confirmPass"
              placeholder="Confirm password"
              value={formData.confirmPass}
              onChange={changeHandler}
              className="w-full p-3 rounded-xl bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-xl"
              onClick={() => setConfShowPass(prev => !prev)}
            >
              {confshowPass ? <IoEyeSharp /> : <IoEyeOff />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-white transition duration-300"
          >
            Submit
          </button>

          <div className='flex items-center justify-center gap-6 m-5'>
            <span> <FcGoogle size={30} /></span>
            <span><FaSquareInstagram size={30} /></span>
            <span><BsLinkedin size={30} /></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin



