// src/Pages/MyPackages.jsx

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const MyPackages = () => {
  const location = useLocation(); // get current url
  const navigate = useNavigate(); // page navigation

  const touchStartX = useRef(0); // swipe start
  const touchEndX = useRef(0);   // swipe end

  // get query parameter
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  // mobile swipe back to home
  useEffect(() => {

    const handleTouchStart = (e) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].screenX;

      if (touchEndX.current - touchStartX.current > 80) {
        navigate("/");
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };

  }, [navigate]);



  // ==========================
  // JAVA BACKEND PACKAGES
  // ==========================
  const javaPackages = [

    {
      name: "Spring Boot Login Backend",
      desc: "Java backend for React Login UI using Spring Boot",
      github: "https://github.com/PraveenMadiwal/pr",
      ui: "/chatbot-details" // this ui belongs to this backend
    },

    {
      name: "Java CRUD REST API",
      desc: "Spring Boot CRUD backend package",
      github: "https://github.com/PraveenMadiwal/pr",
      ui: "/chatbot-details"
    },

    {
      name: "Java Utility Services",
      desc: "Reusable helper methods package",
      github: "https://github.com/PraveenMadiwal/pr",
      ui: "/chatbot-details"
    }

  ];



  // ==========================
  // NODE BACKEND PACKAGES
  // ==========================
  const nodePackages = [

    {
      name: "Node Login Backend",
      desc: "Node + Express backend for same Login UI",
      github: "https://github.com/PraveenMadiwal/pr",
      ui: "/chatbot-details"
    },

    {
      name: "Node JWT Auth API",
      desc: "Secure login token package",
      github: "https://github.com/PraveenMadiwal/pr",
      ui: "/chatbot-details"
    },

    {
      name: "Node CRUD Backend",
      desc: "Express CRUD starter package",
      github: "https://github.com/PraveenMadiwal/pr",
      ui: "/chatbot-details"
    }

  ];



  // ==========================
  // REACT TOOLS
  // ==========================
  const reactTools = [
    { name: "React Docs", link: "https://react.dev" },
    { name: "React Router", link: "https://reactrouter.com" },
    { name: "Redux", link: "https://redux.js.org" },
    { name: "React Query", link: "https://tanstack.com/query" },
    { name: "Axios", link: "https://axios-http.com" }
  ];



  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* page title */}
      <h1 className="text-3xl font-bold mb-6">
        My Packages & Resources
      </h1>



      {/* ==========================
          JAVA PACKAGES
      ========================== */}
      {type === "java" && (

        <div className="grid md:grid-cols-2 gap-5">

          {javaPackages.map((pkg, index) => (

            <div
              key={index}
              className="bg-zinc-900 p-5 rounded-xl border border-zinc-700"
            >

              {/* package name */}
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                {pkg.name}
              </h3>

              {/* description */}
              <p className="text-zinc-300 mb-4">
                {pkg.desc}
              </p>

              {/* buttons */}
              <div className="flex gap-3 flex-wrap">

                {/* github download */}
                <a
                  href={pkg.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 px-4 py-2 rounded"
                >
                  Download Code
                </a>

                {/* related ui */}
                <button
                  onClick={() => navigate(pkg.ui)}
                  className="bg-blue-600 px-4 py-2 rounded"
                >
                  This UI
                </button>

              </div>

            </div>

          ))}

        </div>
      )}



      {/* ==========================
          NODE PACKAGES
      ========================== */}
      {type === "node" && (

        <div className="grid md:grid-cols-2 gap-5">

          {nodePackages.map((pkg, index) => (

            <div
              key={index}
              className="bg-zinc-900 p-5 rounded-xl border border-zinc-700"
            >

              <h3 className="text-xl font-bold text-green-400 mb-3">
                {pkg.name}
              </h3>

              <p className="text-zinc-300 mb-4">
                {pkg.desc}
              </p>

              <div className="flex gap-3 flex-wrap">

                <a
                  href={pkg.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 px-4 py-2 rounded"
                >
                  Download Code
                </a>

                <button
                  onClick={() => navigate(pkg.ui)}
                  className="bg-blue-600 px-4 py-2 rounded"
                >
                  This UI
                </button>

              </div>

            </div>

          ))}

        </div>
      )}



      {/* ==========================
          REACT TOOLS
      ========================== */}
      {type === "react" && (

        <ul className="space-y-4">

          {reactTools.map((tool, index) => (

            <li key={index}>

              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {tool.name}
              </a>

            </li>

          ))}

        </ul>

      )}



      {/* ==========================
          DEFAULT HOME BUTTONS
      ========================== */}
      {!type && (

        <div>

          <p className="mb-4">
            Please select category:
          </p>

          <div className="space-x-4 space-y-4">

            {/* java */}
            <button
              onClick={() => navigate("/myPackages?type=java")}
              className="bg-blue-600 px-4 py-2 rounded"
            >
              Java Packages
            </button>

            {/* node */}
            <button
              onClick={() => navigate("/myPackages?type=node")}
              className="bg-green-600 px-4 py-2 rounded"
            >
              Node Packages
            </button>

            {/* react */}
            <button
              onClick={() => navigate("/myPackages?type=react")}
              className="bg-purple-600 px-4 py-2 rounded"
            >
              React Tools
            </button>

            {/* home */}
            <button
              onClick={() => navigate("/")}
              className="bg-red-600 px-4 py-2 rounded"
            >
              ← Back Home
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default MyPackages;