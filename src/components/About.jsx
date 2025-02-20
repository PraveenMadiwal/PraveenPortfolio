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
      number: 1.5
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
                    Welcome! I&apos;m Praveen Kumar M S, a passionate software developer with experience in React.
                    js for front-end development and Java for server-side applications. 
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
              <h2 className="">Intrenship</h2>
              <h6 className="">1. Junior Software Engineer Intern.</h6>
              <h5>WeTaac Technologies Pvt Ltd, Bangalore</h5>
              <ul className="list-disc pl-5 mb-4">
                <li>Developed a responsive web application using React.js 
                  & Bootstrap, enhancing user engagement by 15%.</li>
                <li>Implemented RESTful APIs using Node.js and Express, 
                  ensuring smooth data flow between frontend andbackend.</li>
                  <li>Built foundational knowledge in Java (Spring Boot) 
                    and React.js workflows like Redux.</li>
                    <li>Gained experience with build tools (Maven) and version control (Git).</li>
              </ul>
              <img src="/images/hackerrank.jpeg" 
                        alt="Logo" 
                        width={60}
                        height={60}
                        className="ml-6 md:w-[300px] md:h-[210px]" />
                        <a href="/images/hackerrank.jpeg" download="hackerrank.jpeg">
                        <button type="button" className="material-symbols-rounded flex items-center mt-2"><span>download</span></button></a>
                        <img src="/images/jspider.jpeg" 
                        alt="Logo" 
                        width={60}
                        height={60}
                        className="ml-6 md:w-[300px] md:h-[210px]" />
                        <a href="/images/jspider.jpeg" download="jspider.jpeg">
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