import { useLocation } from "react-router-dom";

const MyPackages = () => {
  const location = useLocation();

  // Get query param (?type=java / react)
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

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

      {/* JAVA SECTION */}
      {type === "java" && (
        <ul className="space-y-4">
          {javaPackages.map((pkg, index) => (
            <li key={index}>
              <b>{pkg.name}</b> → {pkg.desc}
            </li>
          ))}
        </ul>
      )}

      {/* REACT SECTION */}
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

      {/* DEFAULT (if no type passed) */}
      {!type && (
        <div>
          <p className="mb-4">Please select a category:</p>

          <div className="space-x-4">
            <a
              href="/myPackages?type=java"
              className="bg-blue-600 px-4 py-2 rounded"
            >
              Java Packages
            </a>

            <a
              href="/myPackages?type=react"
              className="bg-green-600 px-4 py-2 rounded"
            >
              React Tools
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPackages;