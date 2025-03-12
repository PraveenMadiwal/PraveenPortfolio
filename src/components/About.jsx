/**
 * @copyright 2025 praveenmadiwal
 * @license Apache-2.0
 */

const aboutItems = [
    {
      label: 'Project done',
      number: 5
    },
    {
      label: 'Years of experience',
      number: 2
    }
  ];
  /**
   * Hooks
   */
  import { useState, useEffect } from "react";

const About = () => {

  const [showIntern, setShowIntern] = useState(false);

  const clickHandler = () => {
    setShowIntern((prev) => !prev);
  };

  useEffect(() => {
    console.log("ShowIntern state changed:", showIntern);
  }, [showIntern]);

  return (
    <section 
    id="about"
    className="section">

            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12
                reveal-up">
                  <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
                <span className="">About </span><span className="text-sky-400">Me</span> 
                </h2>
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl
                    md:max-w-[60ch]">
                    Welcome! I&apos;m Praveen Kumar M S, a passionate software developer with 2 years of experience as a Full Stack Software Engineer at Sterling Infotech Limited. 
                    I specialize in React.js for front-end development and Java for server-side applications. 
                    I also have hands-on expertise in manual testing, ensuring high-quality and bug-free software.
                    Constantly exploring new technologies, I enjoy building scalable web applications and optimizing performance. 
                    Always eager to learn and take on new challenges in the tech world!
                    </p>

                    <div className="flex flex-wrap items-center gap-4
                    md:gap-7">
                        {
                            aboutItems.map(({label, number}, key)=>(
                                <div key={key} 
                                className="">
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold
                                        md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold
                                        md:text-3xl">+</span>
                                    </div>
                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                         <button
              type="button"
              className="btn btn-primary"
              onClick={clickHandler}
            >
              {showIntern ? "Read Less" : "Read More"}
              <span className="material-symbols-rounded" aria-hidden="true">
    {showIntern ? "expand_less" : "expand_more"}
  </span>
            </button>
                        <img src="/images/h-logo.png" 
                        alt="Logo" 
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]" />
                    </div>
                    {showIntern && (
            <div className="mt-4 text-zinc-300">
                <h2 className="text-2xl font-bold mb-3 flex items-center">
  <span className="material-symbols-rounded text-sky-400 mr-2">work</span> Work Experience
</h2>
<h6 className="text-lg font-semibold flex items-center">
  <span className="material-symbols-rounded text-green-400 mr-2">engineering</span> Full Stack Software Engineer
</h6>
<h5 className="text-md text-gray-400 flex items-center">
  <span className="material-symbols-rounded text-red-400 mr-2">business</span> Sterling Infotech Limited, Kolkata
</h5>
<ul className="list-none pl-5 mb-4 space-y-2">
  <li className="flex items-start">
    <span className="material-symbols-rounded text-blue-400 mr-2">code</span> Developed and maintained <b>scalable web applications</b> using <b>React.js and Java</b>, ensuring an improved user experience.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-orange-400 mr-2">rocket_launch</span> Implemented <b>backend functionalities in Java (Spring Boot) and Node.js</b>, reducing API response times by 40%.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-green-400 mr-2">cloud_sync</span> Designed and optimized <b>RESTful APIs and WebSockets</b>, ensuring smooth real-time communication for applications.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-purple-400 mr-2">update</span> Led the migration of legacy codebase to <b>modern React.js and TypeScript</b>, improving code maintainability.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-red-400 mr-2">lock</span> Enhanced <b>authentication and authorization</b> using JWT, OAuth, and Firebase authentication.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-yellow-400 mr-2">database</span> Developed and integrated <b>database schemas in Firestore and MySQL</b>, improving query performance and data retrieval.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-indigo-400 mr-2">cloud_upload</span> Built <b>automated CI/CD pipelines</b> with Jenkins and GitHub Actions to ensure smooth deployment processes.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-pink-400 mr-2">speed</span> Worked on <b>frontend performance optimizations</b>, reducing page load time by 30% using lazy loading and code splitting.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-teal-400 mr-2">notifications_active</span> Implemented <b>real-time notifications and chat features</b> using Firebase Cloud Messaging (FCM) and WebSockets.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-gray-400 mr-2">security</span> Improved application security by applying <b>input validation, encryption techniques, and secure API handling</b>.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-cyan-400 mr-2">palette</span> Developed reusable <b>React.js UI components</b> using Tailwind CSS and Material UI to enhance UI consistency.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-blue-500 mr-2">bug_report</span> Handled complex <b>debugging and performance optimizations</b> using Chrome DevTools and React Profiler.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-orange-500 mr-2">group</span> Collaborated with <b>cross-functional teams (QA, DevOps, Product Management)</b> to deliver high-quality features.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-green-500 mr-2">reviews</span> Conducted <b>code reviews and mentoring sessions</b> for junior developers, ensuring best coding practices.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-purple-500 mr-2">checklist</span> Used Jira and Bitbucket for <b>agile project management</b>, tracking bugs, and version control.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-red-500 mr-2">query_stats</span> Optimized <b>database indexing and queries</b>, reducing data retrieval time by 50%.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-indigo-500 mr-2">api</span> Integrated <b>third-party APIs (payment gateways, SMS, and email services)</b> into the application.
  </li>
</ul>
-----------------------------------------

<h2 className="text-2xl font-bold mt-8 flex items-center">
  <span className="material-symbols-rounded text-blue-500 mr-2">school</span> Training & Certifications
</h2>
<h6 className="text-lg font-semibold flex items-center">
  <span className="material-symbols-rounded text-green-400 mr-2">developer_mode</span> Java Full Stack Developer Training
</h6>
<h5 className="text-md text-gray-400 flex items-center">
  <span className="material-symbols-rounded text-red-400 mr-2">location_on</span> JSpiders Training Institute
</h5>
<ul className="list-none pl-5 mb-4 space-y-2">
  <li className="flex items-start">
    <span className="material-symbols-rounded text-blue-400 mr-2">check_circle</span> Successfully completed training in <b>Full Stack Web Development</b>, focusing on **Java, Spring Boot, React.js, and Node.js**.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-orange-400 mr-2">code</span> Built hands-on projects using **React.js, Express.js, and MongoDB**, implementing **real-world business logic**.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-green-400 mr-2">group</span> Collaborated with peers in **team projects**, improving **problem-solving skills** and **code optimization**.
  </li>
  <li className="flex items-start">
    <span className="material-symbols-rounded text-purple-400 mr-2">assessment</span> Gained expertise in **Data Structures, Algorithms, and OOP principles**, improving **coding efficiency**.
  </li>
</ul>
                        <img src="/images/jspider.jpeg" 
                        alt="Logo" 
                        width={60}
                        height={60}
                        className="ml-6 md:w-[300px] md:h-[210px]" />
                        <a href="/images/jspider.jpeg" download="jspider.jpeg">
                        <button type="button" className="material-symbols-rounded flex items-center mt-2"><span>download</span></button></a>
                        <img src="/images/hackerrank.jpeg" 
                        alt="Logo" 
                        width={60}
                        height={60}
                        className="ml-6 md:w-[300px] md:h-[210px]" />
                        <a href="/images/hackerrank.jpeg" download="hackerrank.jpeg">
                        <button type="button" className="material-symbols-rounded flex items-center mt-2"><span>download</span></button></a>
              <p>
              "I have a deep passion for development, driven by a continuous desire to learn, 
              create, and solve complex problems. My journey as a developer has been shaped by 
              hands-on experience with various technologies, building projects that enhance user experiences, 
              and collaborating with teams to bring innovative ideas to life. What excites me the most is the opportunity 
              to work with a company like yours, where I can contribute my skills,
               grow professionally, and be part of impactful projects."
               <br/>
               -----------------------------------------
              </p>
            </div>
          )}
                </div>
            </div>

    </section>
  )
}

export default About