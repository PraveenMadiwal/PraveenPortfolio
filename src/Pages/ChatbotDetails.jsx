// src/Pages/ChatbotDetails.jsx

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ChatbotDetails = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("about");

  const uiComponents = [
    {
      title: "React Login UI",
      code: `<div className="login-box">
  <input placeholder="Email" />
  <input placeholder="Password" />
  <button>Login</button>
</div>`
    },
    {
      title: "Profile Card UI",
      code: `<div className="card">
  <img src="user.png" />
  <h2>Praveen Kumar</h2>
  <p>Full Stack Developer</p>
</div>`
    },
    {
      title: "Dashboard Card",
      code: `<div className="box">
  <h3>Total Users</h3>
  <span>1450</span>
</div>`
    },
    {
      title: "Navbar UI",
      code: `<nav>
  <a href="/">Home</a>
  <a href="/projects">Projects</a>
</nav>`
    }
  ];

  const copyCode = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied Successfully");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* Top Header */}
      <div className="flex flex-wrap justify-between gap-4 items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Portfolio Chatbot</h1>
          <p className="text-zinc-400 mt-2">
            Smart assistant for portfolio users
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
        >
          ← Home
        </button>
      </div>

      {/* Intro Section */}
      <div className="bg-zinc-900 rounded-xl p-6 mb-8 border border-zinc-800">
        <h2 className="text-2xl font-semibold mb-3">
          Chatbot Quick Info
        </h2>

        <p className="text-zinc-300 leading-7">
          This chatbot helps visitors explore your portfolio instantly.
          It can answer questions about your skills, projects, resume,
          contact details, tools, experience, packages and services.
        </p>

        <button
          onClick={() => setTab("ui")}
          className="mt-5 bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Open UI Components
        </button>
      </div>

      {/* Tabs */}
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
          Questions It Can Answer
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

      {/* ABOUT */}
      {tab === "about" && (
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">
            About Chatbot
          </h2>

          <p className="text-zinc-300 leading-7">
            This chatbot is designed to improve user interaction
            inside portfolio websites. It gives instant replies,
            helps visitors navigate quickly, and increases engagement.
          </p>

          <p className="text-zinc-400 mt-4">
            Can be connected with AI APIs, backend servers,
            databases and custom workflows.
          </p>
        </div>
      )}

      {/* QUESTIONS */}
      {tab === "questions" && (
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">
            Questions Chatbot Can Answer
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-zinc-300">
            <p>• Tell me about your skills</p>
            <p>• Show React projects</p>
            <p>• Download resume</p>
            <p>• What technologies do you use?</p>
            <p>• Show Java packages</p>
            <p>• Contact details</p>
            <p>• Experience details</p>
            <p>• Available for freelance?</p>
            <p>• Show UI components</p>
            <p>• Open GitHub profile</p>
          </div>
        </div>
      )}

      {/* UI COMPONENTS */}
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
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <pre className="bg-black p-4 rounded text-green-400 text-sm overflow-auto">
{item.code}
                </pre>

                <button
                  onClick={() => copyCode(item.code)}
                  className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                >
                  Copy Code
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotDetails;