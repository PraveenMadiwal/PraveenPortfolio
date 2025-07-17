import { useState, useEffect } from "react";

const aboutItems = [
  { label: "Projects Done", number: 5 },
  { label: "Years of Experience", number: 2 },
];

const About = () => {
  const [showIntern, setShowIntern] = useState(false);

  const clickHandler = () => {
    setShowIntern((prev) => !prev);
  };

  useEffect(() => {
    console.log("ShowIntern state changed:", showIntern);
  }, [showIntern]);

  return (
    <section id="about" className="py-12 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            About <span className="text-sky-400">Me</span>
          </h2>
          <p className="text-gray-300 text-center md:text-left md:text-lg mb-6">
            Welcome! I'm Praveen Kumar M S, a passionate software developer with 2 years of experience as a Full Stack Software Engineer at Sterling Infotech Limited.
            I specialize in React.js for front-end development and Java for server-side applications. I also have hands-on expertise in manual testing, ensuring high-quality software.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key} className="text-center">
                <div className="flex items-center justify-center text-white text-4xl font-semibold">
                  {number}
                  <span className="text-sky-400 text-4xl">+</span>
                </div>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-6 px-5 py-2 bg-sky-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-sky-600 mx-auto md:mx-0"
            onClick={clickHandler}
          >
            {showIntern ? "Read Less" : "Read More"}
            <span className="material-symbols-rounded">{showIntern ? "expand_less" : "expand_more"}</span>
          </button>

          {showIntern && (
            <div className="mt-6 text-gray-300">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="material-symbols-rounded text-sky-400">work</span> Work Experience
              </h2>

              <h6 className="text-lg font-semibold flex items-center gap-2 text-sky-400 mt-4">
                <span className="material-symbols-rounded text-green-400">engineering</span> Full Stack Software Engineer
              </h6>

              <h5 className="text-md text-gray-400 flex items-center gap-2">
                <span className="material-symbols-rounded text-red-400">business</span> Sterling Infotech Limited
              </h5>

              <ul className="list-none pl-0 mb-4 space-y-2 text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-blue-400">code</span> Developed scalable web applications using React.js and Java.
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-green-400">cloud_sync</span> Optimized REST APIs and WebSockets for real-time communication.
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-purple-400">update</span> Migrated legacy projects to React.js & TypeScript.
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-red-400">lock</span> Implemented secure OAuth & JWT authentication.
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-yellow-400">database</span> Developed efficient database schemas in Firestore & MySQL.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 flex items-center gap-2">
                <span className="material-symbols-rounded text-blue-500">school</span> Training & Certifications
              </h2>

              <h6 className="text-lg font-semibold flex items-center gap-2 text-sky-400 mt-4">
                <span className="material-symbols-rounded text-green-400">developer_mode</span> Java Full Stack Developer Training
              </h6>

              <h5 className="text-md text-gray-400 flex items-center gap-2">
                <span className="material-symbols-rounded text-red-400">location_on</span> JSpiders Training Institute
              </h5>

              <ul className="list-none pl-0 mb-4 space-y-2 text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-blue-400">check_circle</span> Completed training in Java, Spring Boot, React.js, and Node.js.
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-orange-400">code</span> Built hands-on projects using React.js, Express.js, and MongoDB.
                </li>
              </ul>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-center">
                  <img src="/images/jspider.jpeg" alt="JSpiders Logo" className="w-32 sm:w-40 md:w-52 rounded-lg shadow-md mx-auto" />
                  <a href="/images/jspider.jpeg" download="jspider.jpeg">
                    <button className="mt-2 flex items-center gap-2 text-blue-500 hover:underline">
                      <span className="material-symbols-rounded">download</span> Download Certificate
                    </button>
                  </a>
                </div>

                <div className="text-center">
                  <img src="/images/hackerrank.jpeg" alt="HackerRank Certificate" className="w-32 sm:w-40 md:w-52 rounded-lg shadow-md mx-auto" />
                  <a href="/images/hackerrank.jpeg" download="hackerrank.jpeg">
                    <button className="mt-2 flex items-center gap-2 text-blue-500 hover:underline">
                      <span className="material-symbols-rounded">download</span> Download Certificate
                    </button>
                  </a>
                </div>
              </div>

              <p className="mt-6 text-center md:text-left">
                "I have a deep passion for development, driven by a continuous desire to learn, create, and solve complex problems. 
                My journey as a developer has been shaped by hands-on experience, building projects that enhance user experiences, 
                and collaborating with teams to bring innovative ideas to life."
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
