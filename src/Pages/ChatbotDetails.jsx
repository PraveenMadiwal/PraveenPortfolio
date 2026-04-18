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
  code: `<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
    
    <h2 className="text-3xl font-bold text-center mb-6">
      Login Account
    </h2>

    <p className="text-gray-500 text-center mb-6">
      Enter your credentials to continue
    </p>

    <form className="space-y-4">

      <input
        type="email"
        placeholder="Email Address"
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-3 rounded-lg"
      />

      <div className="flex justify-between text-sm">
        <label>
          <input type="checkbox" /> Remember Me
        </label>

        <a href="/forgot-password">
          Forgot Password?
        </a>
      </div>

      <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
        Login
      </button>

      <button className="w-full border p-3 rounded-lg">
        Login with Google
      </button>

      <p className="text-center text-sm mt-4">
        Don't have an account?
        <a href="/signup"> Sign Up</a>
      </p>

    </form>
  </div>
</div>`,

      // buttons route
      javaLink: "/myPackages?type=java",
      nodeLink: "/myPackages?type=node",

    preview: (
      <div className="bg-gray-100 p-6 rounded-xl">
        <div className="bg-white max-w-md mx-auto rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-center text-black mb-3">
            Login Account
          </h2>

          <p className="text-gray-500 text-center mb-4">
            Enter your credentials
          </p>

          <input
            placeholder="Email Address"
            className="w-full border p-3 rounded mb-3 text-black"
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full border p-3 rounded mb-3 text-black"
          />

          <div className="flex justify-between text-sm text-black mb-4">
            <label>
              <input type="checkbox" /> Remember
            </label>

            <span className="text-blue-600 cursor-pointer">
              Forgot?
            </span>
          </div>

          <button className="w-full bg-blue-600 text-white p-3 rounded mb-3">
            Login
          </button>

          <button className="w-full border p-3 rounded text-black">
            Google Login
          </button>
        </div>
      </div>
    ),
    },

    {
      title: "Profile Card UI",

      code: `<div className="card p-6 bg-white rounded-lg shadow-lg text-center">
  <img src="user.png" />
  <h2>Praveen Kumar</h2>
  <p>Full Stack Developer</p>
  <div className="socials flex gap-4 mt-4 justify-center md:justify-start">
    <a href="#" className="text-blue-500 hover:text-blue-700">
      LinkedIn
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-700">
      GitHub
    </a>
    <div className="flex gap-3 mt-4 justify-center md:justify-start">
    <a href="/files/PraveenResume.pdf" download="Praveen_Kumar_MS-Cv.pdf">
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Download CV
      </button>
    </a>
    <a href="/contact">
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Contact Me  
      </button>
    </a>
  </div> 
</div>`,

      javaLink: "/myPackages?type=java",
      nodeLink: "/myPackages?type=node",

    preview: (
      <div className="bg-white text-black rounded-xl shadow-xl p-6 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          className="w-20 h-20 mx-auto rounded-full mb-4"
        />

        <h2 className="text-xl font-bold">
          Praveen Kumar
        </h2>

        <p className="text-gray-500 mb-4">
          Full Stack Developer
        </p>

        <div className="flex justify-center gap-3 mb-4">
          <button className="text-blue-600">
            LinkedIn
          </button>

          <button className="text-gray-700">
            GitHub
          </button>
        </div>

        <div className="flex gap-3 justify-center">
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Download CV
          </button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Contact
          </button>
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
      <div className="bg-white text-center items-center justify-center rounded-xl shadow-xl p-3 sm:p-6 overflow-hidden ">
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

      code: `<nav className="navbar bg-white p-4 rounded-lg shadow-lg flex justify-center gap-6">
  <a href="/" className="text-blue-600 hover:text-blue-800">
    Home
  </a>
  <a href="/projects" className="text-blue-600 hover:text-blue-800">
    Projects
  </a>
  <a href="/about" className="text-blue-600 hover:text-blue-800">
    About
  </a>  
  <a href="/contact" className="text-blue-600 hover:text-blue-800">
    Contact
  </a>
  <a href="/blog" className="text-blue-600 hover:text-blue-800">
    Blog
  </a>
  <button className="bg-green-600 text-white px-4 py-2 rounded">
    Sign Up
  </button>
</nav>`,

      javaLink: "/myPackages?type=java",
      nodeLink: "/myPackages?type=node",

      preview: (
      <div className="bg-white rounded-xl shadow-xl p-3 sm:p-6 overflow-hidden">
        <nav className="flex flex-wrap gap-4 justify-center items-center text-black">

          <button className="text-blue-600">
            Home
          </button>

          <button className="text-blue-600">
            Projects
          </button>

          <button className="text-blue-600">
            About
          </button>

          <button className="text-blue-600">
            Contact
          </button>

          <button className="text-blue-600">
            Blog
          </button>

          <button className="bg-green-600 text-white px-4 py-2 rounded">
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