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
      projectLink: 'https://wetaac.com/'
    },
    {
      imgSrc: '/images/mushroom.png',
      title: 'Ashok Farming webpage',
      tags: ['API', 'SPA'],
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
      projectLink: 'https://healthcampv2.web.app/login'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/PraveenMadiwal/E-Commerce-Instantly-'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: ''
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
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                            <ProjectCard 
                                key={key}
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
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