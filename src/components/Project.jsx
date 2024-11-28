/**
 * @copyright 2024 Filipe Mota
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const projects = [
  {
    imgSrc: '/src/images/chessSystem.png',
    title: 'Chess System',
    tags: ['Back-end', 'Java', 'Sisstema de Xadrez'],
    projectLink: 'https://github.com/Filipemt/chess-system-java'
  },
  {
    imgSrc: '/src/images/logica.png',
    title: 'Exercício de lógica',
    tags: ['Back-End', 'Java', 'Lógica de Programação'],
    projectLink: 'https://github.com/Filipemt/logic-programming-java'
  },
  {
    imgSrc: '/src/images/food explorer.png',
    title: 'Food Explorer',
    tags: ['Full-Stack', 'API', 'React', 'Node'],
    projectLink: 'https://github.com/Filipemt/food-explorer'
  }
];

const Project = () => {
  return (
    <section 
      id="project"
      className=""
      >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
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
            classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project