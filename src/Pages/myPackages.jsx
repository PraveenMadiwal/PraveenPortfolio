import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const MyPackages = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Get query param
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  // 👉 Mobile swipe gesture (Right swipe → go back/home)
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].screenX;

      if (touchEndX.current - touchStartX.current > 80) {
        navigate("/"); // go home
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigate]);

  // Data
  const javaPackages = [
    { name: "java.lang", desc: "Core classes (String, Math, Object)" },
    { name: "java.util", desc: "Collections (List, Map, Set)" },
    { name: "java.io", desc: "File handling" },
    { name: "java.sql", desc: "Database connectivity" },
    { name: "java.time", desc: "Date & Time API" },
  ];

  const reactTools = [
    { name: "React Docs", link: "https://react.dev" },
    { name: "React Router", link: "https://reactrouter.com" },
    { name: "Redux", link: "https://redux.js.org" },
    { name: "React Query", link: "https://tanstack.com/query" },
    { name: "Axios", link: "https://axios-http.com" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">


      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">
        {type === "react"
          ? "React Tools & Utilities"
          : "Java Inbuilt Packages"}
      </h1>

      {/* JAVA */}
      {type === "java" && (
        <ul className="space-y-4">
          {javaPackages.map((pkg, index) => (
            <li key={index}>
              <b>{pkg.name}</b> → {pkg.desc}
            </li>
          ))}
        </ul>
      )}

      {/* REACT */}
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

      {/* DEFAULT */}
      {!type && (
        <div>
          <p className="mb-4">Please select a category:</p>

          <div className="space-x-4">
            <button
              onClick={() => navigate("/myPackages?type=java")}
              className="bg-blue-600 px-4 py-2 rounded"
            >
              Java Packages
            </button>

            <button
              onClick={() => navigate("/myPackages?type=react")}
              className="bg-green-600 px-4 py-2 rounded"
            >
              React Tools
            </button>

            <button
              onClick={() => navigate("/")}
              className="bg-red-600 px-4 py-2 rounded gap-4 m-4"
            >
               ← Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPackages;