/**
 * @copyright 2024 Filipe Mota
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const projects = [
  {
    imgSrc: '/',
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: '/',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: ''
  },
  {
    imgSrc: '/',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: ''
  },
  {
    imgSrc: '/',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: '/',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: ''
  },
  {
    imgSrc: '/',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: ''
  },
];

const Project = () => {
  return (
    <section 
      id="project"
      className=""
      >
      <div className="container">
        <h2 className="headline-2 mb-8">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] ">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
            key={key}
            imgSrc={imgSrc}
            title={title}
            tags={tags}
            projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project