/**
 * @copyright 2024 Filipe Mota
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/spring.svg',
    label: 'Spring',
    desc: 'Framework'
  },
];

const Skill = () => {
  return (
    <section className="">
      <div className="container">

      <h2 className="headline-2 reveal-up">
        Ferramentas utilizadas
      </h2>

      <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
      Descubra as ferramentas e tecnologias poderosas que utilizo para criar sites e aplicativos excepcionais e de alto desempenho.
      </p>

      <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
        {
          skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))
        }
      </div>

      </div>
    </section>
  )
}

export default Skill