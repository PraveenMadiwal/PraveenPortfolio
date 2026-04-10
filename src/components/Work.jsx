/**
 * @copyright 2025 praveenmadiwal
 * @license Apache-2.0
 */

/*component*/
import { ButtonPrimary } from "./Button";
import ProjectCard from "./ProjectCard";


const works = [
    {
      imgSrc: '/images/wetaac.png',
      title: 'WeTaac Technologies web page',
      tags: ['API', 'MVC', 'Development'],
      descriptions: ["A responsive hospital website built with modern web technologies, ensuring a seamless user experience for patients and staff."],
      projectLink: 'https://wetaac.com/'
    },
    {
      imgSrc: '/images/mushroom.png',
      title: 'Ashok Farming webpage',
      tags: ['API', 'SPA'],
      descriptions: ["A responsive farming website built with modern web technologies, ensuring a seamless user experience for farmers and customers."],
      projectLink: 'https://github.com/PraveenMadiwal/MagicMashroom'
    },
    // {
    //   imgSrc: '/images/project-3.jpg',
    //   title: 'Recipe app',
    //   tags: ['Development', 'API'],
    //   projectLink: ''
    // },
    {
      imgSrc: '/images/project-4.png',
      title: 'Hospital webpage',
      tags: ['Web-design', 'Java Server Handling'],
      descriptions: ["A responsive hospital website built with modern web technologies, ensuring a seamless user experience for patients and staff. This project was worked on Wetaac Technologies Pvt Ltd."],
      projectLink: 'https://healthcampv2.web.app/login'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website (Instantly)',
      tags: ['eCommerce', 'Development', 'Grossary'],
      descriptions: ["Instantly is a dynamic e-commerce platform built with React.js and MySQL, offering a seamless shopping experience with real-time inventory management and secure payment processing."],
      projectLink: 'http://github.com/PraveenMadiwal/instantly'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      descriptions: ["A sleek vCard personal portfolio website built with React.js, showcasing professional achievements and skills in a visually appealing format."],
      projectLink: 'http://github.com/PraveenMadiwal/vCard'
    },
  ];



const Work = () => {
  return (
    <section 
    id="work"
    className="section">
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
            My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 
            grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, descriptions, projectLink }, key) => (
                            <ProjectCard 
                                key={key}
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                descriptions={descriptions}
                                projectLink={projectLink}
                                classes="reveal-up"
                            />
                ))}
            </div>
        </div>

    </section>
  )
}

export default Work