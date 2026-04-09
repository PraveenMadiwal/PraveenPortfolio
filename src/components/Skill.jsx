import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Programming Lang',
    PageLink:'https://www.java.com/'
  },
  {
    imgSrc: '/images/emailjs.png',
    label: 'Email.js',
    desc: 'Message box auto reply',
    PageLink:'https://www.emailjs.com/'
  },
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Programming Lang',
    PageLink:'https://www.python.org/'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface',
    PageLink:'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    imgSrc: '/images/bootstrap.svg',
    label: 'BootStrap',
    desc: 'User Interface',
    PageLink:'https://getbootstrap.com/'
  },
  {
    imgSrc: '/images/chatgpt.png',
    label: 'ChatGPT',
    desc: 'Debugging, code refactoring',
    PageLink:'https://chatgpt.com/'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction',
    PageLink:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server',
    PageLink:'https://nodejs.org/'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework',
    PageLink:'https://expressjs.com/'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database',
    PageLink:'https://www.mongodb.com/'
  },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySQL',
    desc: 'Database',
    PageLink:'https://www.mysql.com/'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework',
    PageLink:'https://react.dev/'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface',
    PageLink:'https://tailwindcss.com/'
  },
];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
            Essential Tools I use
            </h2>
            <p className="text-zinc-400 mt-3 mb:-8 max-w-[50ch]">
            Discover the powerful tools and technologies I 
            use to create exceptional, high-performing 
            websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc, PageLink }, key) => (
                        <SkillCard
                            key={key} 
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            PageLink={PageLink}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill;
