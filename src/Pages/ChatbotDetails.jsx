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
      nodeLink: "/myPackages?type=node"
    },

    {
      title: "Profile Card UI",

      code: `<div className="card">
  <img src="user.png" />
  <h2>Praveen Kumar</h2>
</div>`,

      javaLink: "/myPackages?type=java",
      nodeLink: "/myPackages?type=node"
    },

    {
      title: "Dashboard Card",

      code: `<div className="box">
  <h3>Total Users</h3>
  <span>1450</span>
</div>`,

      javaLink: "/myPackages?type=java",
      nodeLink: "/myPackages?type=node"
    },

    {
      title: "Navbar UI",

      code: `<nav>
  <a href="/">Home</a>
  <a href="/projects">Projects</a>
</nav>`,

      javaLink: "/myPackages?type=java",
      nodeLink: "/myPackages?type=node"
    }

  ];



  // copy code button
  const copyCode = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied Successfully");
  };



  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* ===============================
          TOP HEADER
      =============================== */}
      <div className="flex flex-wrap justify-between gap-4 items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold">
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
      <div className="bg-zinc-900 rounded-xl p-6 mb-8 border border-zinc-800">

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
      <div className="flex gap-4 flex-wrap mb-8">

        <button
          onClick={() => setTab("about")}
          className={`px-4 py-2 rounded ${
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

          <div className="grid md:grid-cols-2 gap-5">

            {uiComponents.map((item, index) => (

              <div
                key={index}
                className="bg-zinc-900 rounded-xl p-5 border border-zinc-700"
              >

                {/* title */}
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                {/* code box */}
                <pre className="bg-black p-4 rounded text-green-400 text-sm overflow-auto">
{item.code}
                </pre>

                {/* buttons */}
                <div className="flex gap-3 flex-wrap mt-4">

                  {/* copy code */}
                  <button
                    onClick={() => copyCode(item.code)}
                    className="bg-blue-600 px-4 py-2 rounded"
                  >
                    Copy Code
                  </button>

                  {/* java backend */}
                  <button
                    onClick={() => navigate(item.javaLink)}
                    className="bg-green-600 px-4 py-2 rounded"
                  >
                    Java Backend
                  </button>

                  {/* node backend */}
                  <button
                    onClick={() => navigate(item.nodeLink)}
                    className="bg-purple-600 px-4 py-2 rounded"
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