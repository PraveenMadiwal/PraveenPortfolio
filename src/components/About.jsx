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

const About = () => {

  return (
    <section 
    id="about"
    className="section">

            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12
                reveal-up">
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
                                    <div className="flex items-centermd:mb-2">
                                        <span className="text-2xl font-semibold
                                        md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold
                                        md:text-3xl">+</span>
                                    </div>
                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <img src="/images/h-logo.png" 
                        alt="Logo" 
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]" />
                    </div>
                </div>
            </div>

    </section>
  )
}

export default About