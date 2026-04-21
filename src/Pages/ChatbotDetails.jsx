// src/Pages/ChatbotDetails.jsx

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ChatbotDetails = () => {
  const navigate = useNavigate(); // page navigation
  const [tab, setTab] = useState("about"); // active tab

  // ===============================
  // UI COMPONENTS DATA
  // added backend buttons now
  // ===============================
  const uiComponents = [

    {
     title: "React Login UI",
  code: `<div className="bg-gradient-to-br from-gray-100 to-blue-100 p-6 rounded-2xl min-h-screen flex items-center justify-center">

  <div className="bg-white w-full max-w-md mx-auto rounded-2xl shadow-2xl p-6 sm:p-8 hover:shadow-blue-200 transition duration-300">

    {/* TOP ICON */}
    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
      🔐
    </div>

    {/* TITLE */}
    <h2 className="text-3xl font-bold text-center text-black mb-2">
      Login Account
    </h2>

    <p className="text-gray-500 text-center mb-6 text-sm">
      Welcome back! Please enter your credentials
    </p>

    {/* EMAIL */}
    <div className="mb-4">
      <label className="text-sm text-gray-600 mb-1 block">
        Email Address
      </label>

      <input
        type="email"
        placeholder="Enter email"
        className="w-full border border-gray-300 p-3 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>

    {/* PASSWORD */}
    <div className="mb-3">
      <label className="text-sm text-gray-600 mb-1 block">
        Password
      </label>

      <div className="relative">
        <input
          type="password"
          placeholder="Enter password"
          className="w-full border border-gray-300 p-3 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
          👁️
        </span>
      </div>
    </div>

    {/* REMEMBER + FORGOT */}
    <div className="flex justify-between items-center text-sm text-black mb-5">

      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" />
        Remember Me
      </label>

      <span className="text-blue-600 cursor-pointer hover:underline">
        Forgot Password?
      </span>

    </div>

    {/* LOGIN BUTTON */}
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition mb-3">
      Login
    </button>

    {/* GOOGLE BUTTON */}
    <button className="w-full border border-gray-300 hover:bg-gray-100 p-3 rounded-lg text-black font-medium transition mb-4">
      Continue with Google
    </button>

    {/* DIVIDER */}
    <div className="flex items-center gap-3 mb-4">
      <hr className="flex-1 border-gray-300" />
      <span className="text-sm text-gray-400">OR</span>
      <hr className="flex-1 border-gray-300" />
    </div>

    {/* SOCIAL LOGIN */}
    <div className="grid grid-cols-2 gap-3 mb-5">

      <button className="border p-2 rounded-lg hover:bg-gray-100">
        📘 Facebook
      </button>

      <button className="border p-2 rounded-lg hover:bg-gray-100">
        🍎 Apple
      </button>

    </div>

    {/* SIGNUP */}
    <p className="text-center text-sm text-gray-500">
      Don’t have an account?
      <span className="text-blue-600 ml-1 cursor-pointer hover:underline">
        Sign Up
      </span>
    </p>

    {/* EXTRA FEATURES */}
    <div className="mt-6 grid grid-cols-3 gap-2 text-center">

      <div className="bg-blue-50 rounded-lg p-2">
        <p className="text-lg font-bold text-blue-600">24/7</p>
        <p className="text-xs text-gray-500">Support</p>
      </div>

      <div className="bg-green-50 rounded-lg p-2">
        <p className="text-lg font-bold text-green-600">100%</p>
        <p className="text-xs text-gray-500">Secure</p>
      </div>

      <div className="bg-purple-50 rounded-lg p-2">
        <p className="text-lg font-bold text-purple-600">Fast</p>
        <p className="text-xs text-gray-500">Login</p>
      </div>

    </div>

  </div>

</div>`,

      // buttons route
      javaLink: "/myPackages?type=java",
      nodeLink: "/myPackages?type=node",

    preview: (
    <div className="bg-gradient-to-br from-gray-100 to-blue-100 p-6 rounded-2xl min-h-screen flex items-center justify-center">

  <div className="bg-white w-full max-w-md mx-auto rounded-2xl shadow-2xl p-6 sm:p-8 hover:shadow-blue-200 transition duration-300">

    {/* TOP ICON */}
    <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
      🔐
    </div>

    {/* TITLE */}
    <h2 className="text-3xl font-bold text-center text-black mb-2">
      Login Account
    </h2>

    <p className="text-gray-500 text-center mb-6 text-sm">
      Welcome back! Please enter your credentials
    </p>

    {/* EMAIL */}
    <div className="mb-4">
      <label className="text-sm text-gray-600 mb-1 block">
        Email Address
      </label>

      <input
        type="email"
        placeholder="Enter email"
        className="w-full border border-gray-300 p-3 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>

    {/* PASSWORD */}
    <div className="mb-3">
      <label className="text-sm text-gray-600 mb-1 block">
        Password
      </label>

      <div className="relative">
        <input
          type="password"
          placeholder="Enter password"
          className="w-full border border-gray-300 p-3 rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
          👁️
        </span>
      </div>
    </div>

    {/* REMEMBER + FORGOT */}
    <div className="flex justify-between items-center text-sm text-black mb-5">

      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" />
        Remember Me
      </label>

      <span className="text-blue-600 cursor-pointer hover:underline">
        Forgot Password?
      </span>

    </div>

    {/* LOGIN BUTTON */}
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition mb-3">
      Login
    </button>

    {/* GOOGLE BUTTON */}
    <button className="w-full border border-gray-300 hover:bg-gray-100 p-3 rounded-lg text-black font-medium transition mb-4">
      Continue with Google
    </button>

    {/* DIVIDER */}
    <div className="flex items-center gap-3 mb-4">
      <hr className="flex-1 border-gray-300" />
      <span className="text-sm text-gray-400">OR</span>
      <hr className="flex-1 border-gray-300" />
    </div>

    {/* SOCIAL LOGIN */}
    <div className="grid grid-cols-2 gap-3 mb-5">

      <button className="border p-2 rounded-lg hover:bg-gray-100">
        📘 Facebook
      </button>

      <button className="border p-2 rounded-lg hover:bg-gray-100">
        🍎 Apple
      </button>

    </div>

    {/* SIGNUP */}
    <p className="text-center text-sm text-gray-500">
      Don’t have an account?
      <span className="text-blue-600 ml-1 cursor-pointer hover:underline">
        Sign Up
      </span>
    </p>

    {/* EXTRA FEATURES */}
    <div className="mt-6 grid grid-cols-3 gap-2 text-center">

      <div className="bg-blue-50 rounded-lg p-2">
        <p className="text-lg font-bold text-blue-600">24/7</p>
        <p className="text-xs text-gray-500">Support</p>
      </div>

      <div className="bg-green-50 rounded-lg p-2">
        <p className="text-lg font-bold text-green-600">100%</p>
        <p className="text-xs text-gray-500">Secure</p>
      </div>

      <div className="bg-purple-50 rounded-lg p-2">
        <p className="text-lg font-bold text-purple-600">Fast</p>
        <p className="text-xs text-gray-500">Login</p>
      </div>
    </div>
  </div>
</div>
    ),
    },

    {
      title: "Profile Card UI",

      code: `<div className="bg-white text-black rounded-2xl shadow-xl p-6 max-w-md mx-auto hover:shadow-2xl transition duration-300">

  {/* PROFILE IMAGE */}
  <div className="relative w-fit mx-auto">
    <img
      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      className="w-24 h-24 rounded-full border-4 border-blue-500"
    />

    <button className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-full hover:bg-blue-700">
      Edit
    </button>
  </div>

  {/* NAME */}
  <div className="mt-4 text-center">
    <div className="flex justify-center items-center gap-2">
      <h2 className="text-2xl font-bold">
        Praveen Kumar
      </h2>

      <button className="text-blue-600 hover:text-blue-800 text-sm">
        ✏️
      </button>
    </div>

    <div className="flex justify-center items-center gap-2 mt-1">
      <p className="text-gray-500">
        Full Stack Developer
      </p>

      <button className="text-blue-600 hover:text-blue-800 text-sm">
        ✏️
      </button>
    </div>
  </div>

  {/* SOCIAL LINKS */}
  <div className="flex justify-center gap-3 mt-4">
    <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
      LinkedIn
    </button>

    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
      GitHub
    </button>
  </div>

  {/* DETAILS SECTION */}
  <div className="mt-6 space-y-4">

    {/* ADDRESS */}
    <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
      <div>
        <h3 className="text-sm text-gray-500">
          Address
        </h3>

        <p className="font-medium">
          Bangalore, Karnataka
        </p>
      </div>

      <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
        Edit
      </button>
    </div>

    {/* PINCODE */}
    <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
      <div>
        <h3 className="text-sm text-gray-500">
          Pincode
        </h3>

        <p className="font-medium">
          560001
        </p>
      </div>

      <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
        Edit
      </button>
    </div>

    {/* EMAIL */}
    <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
      <div>
        <h3 className="text-sm text-gray-500">
          Email
        </h3>

        <p className="font-medium break-all">
          praveenkumar@gmail.com
        </p>
      </div>

      <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
        Edit
      </button>
    </div>

    {/* PHONE */}
    <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
      <div>
        <h3 className="text-sm text-gray-500">
          Phone
        </h3>

        <p className="font-medium">
          +91 9876543210
        </p>
      </div>

      <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
        Edit
      </button>
    </div>

  </div>

  {/* ACTION BUTTONS */}
  <div className="grid grid-cols-2 gap-3 mt-6">

    <button className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
      Download CV
    </button>

    <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
      Contact
    </button>

  </div>

  {/* EXTRA FEATURES */}
  <div className="mt-5 grid grid-cols-3 gap-2 text-center">

    <div className="bg-blue-50 rounded-lg p-2">
      <p className="text-lg font-bold text-blue-600">25+</p>
      <p className="text-xs text-gray-500">Projects</p>
    </div>

    <div className="bg-green-50 rounded-lg p-2">
      <p className="text-lg font-bold text-green-600">4Y</p>
      <p className="text-xs text-gray-500">Experience</p>
    </div>

    <div className="bg-purple-50 rounded-lg p-2">
      <p className="text-lg font-bold text-purple-600">100%</p>
      <p className="text-xs text-gray-500">Success</p>
    </div>

  </div>

</div>`,

      javaLink: "/myPackages?type=java",
      nodeLink: "/myPackages?type=node",

    preview: (
      <div className="bg-white text-black rounded-2xl shadow-xl p-6 max-w-md mx-auto hover:shadow-2xl transition duration-300">

  {/* PROFILE IMAGE */}
  <div className="relative w-fit mx-auto">
    <img
      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      className="w-24 h-24 rounded-full border-4 border-blue-500"
    />

    <button className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-full hover:bg-blue-700">
      Edit
    </button>
  </div>

  {/* NAME */}
  <div className="mt-4 text-center">
    <div className="flex justify-center items-center gap-2">
      <h2 className="text-2xl font-bold">
        Praveen Kumar
      </h2>

      <button className="text-blue-600 hover:text-blue-800 text-sm">
        ✏️
      </button>
    </div>

    <div className="flex justify-center items-center gap-2 mt-1">
      <p className="text-gray-500">
        Full Stack Developer
      </p>

      <button className="text-blue-600 hover:text-blue-800 text-sm">
        ✏️
      </button>
    </div>
  </div>

  {/* SOCIAL LINKS */}
  <div className="flex justify-center gap-3 mt-4">
    <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
      LinkedIn
    </button>

    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
      GitHub
    </button>
  </div>

  {/* DETAILS SECTION */}
  <div className="mt-6 space-y-4">

    {/* ADDRESS */}
    <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
      <div>
        <h3 className="text-sm text-gray-500">
          Address
        </h3>

        <p className="font-medium">
          Bangalore, Karnataka
        </p>
      </div>

      <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
        Edit
      </button>
    </div>

    {/* PINCODE */}
    <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
      <div>
        <h3 className="text-sm text-gray-500">
          Pincode
        </h3>

        <p className="font-medium">
          560001
        </p>
      </div>

      <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
        Edit
      </button>
    </div>

    {/* EMAIL */}
    <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
      <div>
        <h3 className="text-sm text-gray-500">
          Email
        </h3>

        <p className="font-medium break-all">
          praveenkumar@gmail.com
        </p>
      </div>

      <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
        Edit
      </button>
    </div>

    {/* PHONE */}
    <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
      <div>
        <h3 className="text-sm text-gray-500">
          Phone
        </h3>

        <p className="font-medium">
          +91 9876543210
        </p>
      </div>

      <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
        Edit
      </button>
    </div>

  </div>

  {/* ACTION BUTTONS */}
  <div className="grid grid-cols-2 gap-3 mt-6">

    <button className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
      Download CV
    </button>

    <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
      Contact
    </button>

  </div>

  {/* EXTRA FEATURES */}
  <div className="mt-5 grid grid-cols-3 gap-2 text-center">

    <div className="bg-blue-50 rounded-lg p-2">
      <p className="text-lg font-bold text-blue-600">5+</p>
      <p className="text-xs text-gray-500">Projects</p>
    </div>

    <div className="bg-green-50 rounded-lg p-2">
      <p className="text-lg font-bold text-green-600">2.9Y</p>
      <p className="text-xs text-gray-500">Experience</p>
    </div>

    <div className="bg-purple-50 rounded-lg p-2">
      <p className="text-lg font-bold text-purple-600">100%</p>
      <p className="text-xs text-gray-500">Success</p>
    </div>

  </div>

</div>
    ),
  },

    {
      title: "Dashboard Card",

      code: `<div className="box p-6 bg-white rounded-lg shadow-lg text-center w-full max-w-sm" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <h3>Total Users</h3>
  {map.user(key => (
    <div className="stat flex flex-col items-center justify-center" key={key}>
    <p key={key}>{key}</p>
    <span className="user align-center items-center">{Users}</span>
    <span className="change text-green-500">{Active Users}</span>
    <span className="change text-red-500">{Logged In}</span>
    <span className="time text-gray-500 align-center items-center justify-center">In:{InTime}</span>
    <span className="change text-yellow-500">Out: {OutTime}</span>
    </div>
  ))}
    button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
      View Details
    </button>
  <span>1450</span>
</div>`,

      javaLink: "/myPackages?type=java",
      nodeLink: "/myPackages?type=node",

       preview: (
      <div className="bg-white text-center items-center justify-center rounded-xl shadow-xl p-3 sm:p-6 hover:bg-gray-100 overflow-hidden ">
        <h3 className="text-xl font-bold mb-4">
          Total Users
        </h3>

        <p className="text-4xl font-bold text-blue-600">
          1450
        </p>

        <div className="mt-4 space-y-2">
          <p className="text-green-600">
            Active Users: 1200
          </p>

          <p className="text-red-600">
            Logged In: 530
          </p>

          <p className="text-yellow-500">
            New Today: 45
          </p>
        </div>

        <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded">
          View Details
        </button>
      </div>
    ),
    },

    {
      title: "Navbar UI",

      code: `<div className="bg-white rounded-xl shadow-xl p-3 sm:p-6 overflow-hidden">
        <nav className="flex flex-wrap gap-4 justify-center items-center text-black">

          <button className="text-black hover:text-white hover:bg-gray-600 px-2 py-1 rounded">
            Home
          </button>

          <button className="text-black hover:text-white hover:bg-gray-600 px-2 py-1 rounded">
            Projects
          </button>

          <button className="text-black hover:text-white hover:bg-gray-600 px-2 py-1 rounded">
            About
          </button>

          <button className="text-black hover:text-white hover:bg-gray-600 px-2 py-1 rounded">
            Contact
          </button>

          <button className="text-black hover:text-white hover:bg-gray-600 px-2 py-1 rounded">
            Blog
          </button>

          <button className="bg-green-400 text-white px-4 py-2 hover:bg-green-700 rounded">
            Sign Up
          </button>

        </nav>
      </div>`,

      javaLink: "/myPackages?type=java",
      nodeLink: "/myPackages?type=node",

      preview: (
      <div className="bg-white rounded-xl shadow-xl p-3 sm:p-6 overflow-hidden">
        <nav className="flex flex-wrap gap-4 justify-center items-center text-black">

          <button className="text-black hover:text-white hover:bg-gray-600 px-2 py-1 rounded">
            Home
          </button>

          <button className="text-black hover:text-white hover:bg-gray-600 px-2 py-1 rounded">
            Projects
          </button>

          <button className="text-black hover:text-white hover:bg-gray-600 px-2 py-1 rounded">
            About
          </button>

          <button className="text-black hover:text-white hover:bg-gray-600 px-2 py-1 rounded">
            Contact
          </button>

          <button className="text-black hover:text-white hover:bg-gray-600 px-2 py-1 rounded">
            Blog
          </button>

          <button className="bg-green-400 text-white px-4 py-2 hover:bg-green-700 rounded">
            Sign Up
          </button>

        </nav>
      </div>
    ),

    }

  ];



  // copy code button
  const copyCode = (text) => {
   navigator.clipboard.writeText(text);
console.log("Copied Successfully");
alert("Code copied to clipboard!")
  };



  return (
    <div className="min-h-screen bg-black text-white p-3 sm:p-6 overflow-x-hidden">

      {/* ===============================
          TOP HEADER
      =============================== */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-4 items-start sm:items-center mb-8">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold break-words">
            Portfolio Chatbot
          </h1>

          <p className="text-zinc-400 mt-2">
            Smart assistant for portfolio users
          </p>
        </div>

        {/* home button */}
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 px-4 py-2 rounded-lg"
        >
          ← Home
        </button>

      </div>



      {/* ===============================
          INTRO SECTION
      =============================== */}
      <div className="bg-zinc-900 rounded-xl p-4 sm:p-6 mb-8 border border-zinc-800">


        <h2 className="text-2xl font-semibold mb-3">
          Chatbot Quick Info
        </h2>

        <p className="text-zinc-300 leading-7">
          Explore portfolio UI components and backend packages.
        </p>

        <button
          onClick={() => setTab("ui")}
          className="mt-5 bg-blue-600 px-5 py-2 rounded-lg"
        >
          Open UI Components
        </button>

      </div>



      {/* ===============================
          TABS
      =============================== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">

        <button
          onClick={() => setTab("about")}
          className={`w-full px-4 py-2 rounded text-sm sm:text-base ${
            tab === "about" ? "bg-blue-600" : "bg-zinc-800"
          }`}
        >
          About Bot
        </button>

        <button
          onClick={() => setTab("questions")}
          className={`px-4 py-2 rounded ${
            tab === "questions" ? "bg-green-600" : "bg-zinc-800"
          }`}
        >
          Questions
        </button>

        <button
          onClick={() => setTab("ui")}
          className={`px-4 py-2 rounded ${
            tab === "ui" ? "bg-purple-600" : "bg-zinc-800"
          }`}
        >
          UI Components
        </button>

      </div>



      {/* ===============================
          ABOUT
      =============================== */}
      {tab === "about" && (

        <div className="bg-zinc-900 p-6 rounded-xl">

          <h2 className="text-2xl font-semibold mb-4">
            About Chatbot
          </h2>

          <p className="text-zinc-300">
            Chatbot improves visitor engagement and navigation.
          </p>

        </div>

      )}



      {/* ===============================
          QUESTIONS
      =============================== */}
      {tab === "questions" && (

        <div className="bg-zinc-900 p-6 rounded-xl">

          <h2 className="text-2xl font-semibold mb-4">
            Questions It Can Answer
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-zinc-300">
            <p>• Show my projects</p>
            <p>• Show Java backend</p>
            <p>• Show Node backend</p>
            <p>• Show UI Components</p>
          </div>

        </div>

      )}



      {/* ===============================
          UI COMPONENTS
      =============================== */}
      {tab === "ui" && (

        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Ready UI Components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {uiComponents.map((item, index) => (

              <div
                key={index}
                className="bg-zinc-900 rounded-xl p-3 sm:p-5 border border-zinc-700 overflow-hidden"
              >

                {/* title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-3 break-words">
                  {item.title}
                </h3>

                {/* code box */}
                <pre className="bg-black p-3 rounded text-green-400 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap break-words max-w-full">
                {item.code}
                </pre>

                 {/* SPACE BELOW CODE */}
                <div className="mt-5">
                  <h4 className="text-base sm:text-lg font-semibold mb-3 text-yellow-400">
                    Live Preview:
                  </h4>

                  {item.preview}
                </div>

                {/* buttons */}
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">

                  {/* copy code */}
                  <button
                    onClick={() => copyCode(item.code)}
                    className="bg-blue-600 px-4 py-2 rounded w-full text-sm"
                  >
                    Copy Code
                  </button>

                  {/* java backend */}
                  <button
                    onClick={() => navigate(item.javaLink)}
                    className="bg-green-600 px-4 py-2 rounded w-full text-sm"
                  >
                    Java Backend
                  </button>

                  {/* node backend */}
                  <button
                    onClick={() => navigate(item.nodeLink)}
                    className="bg-purple-600 px-4 py-2 rounded w-full text-sm"
                  >
                    Node Backend
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>
  );
};

export default ChatbotDetails;