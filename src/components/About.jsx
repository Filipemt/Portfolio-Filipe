/**
 * @copyright 2024 Filipe Mota
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: 'Projetos feitos',
    number: 15
  },
  {
    label: 'Anos de estudos',
    number: 2
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="section"
      >

        <div className="container">

          <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Bem-vindo! Sou Filipe, um estudante dedicado de desenvolvimento back-end especializado em Java. Com paixão pela criação de sistemas eficientes e escaláveis, meu foco é a construção de soluções robustas no lado do servidor que proporcionem experiências de usuário contínuas e confiáveis. Vamos transformar ideias complexas em aplicações funcionais e de alto desempenho!
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {
                aboutItems.map(({ label, number }, key) => (
                  <div key={key}>
                    <div className="flex items-center md:mb-2">
                      <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                      <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                    </div>

                    <p className="text-sm text-zinc-400">{label}</p>
                  </div>
                ))
              }

              <img 
              src="/src/images/logo2.jpg" 
              alt="Logo"
              width={30}
              height={30} 
              className="ml-auto md:w-[40px] md:h-[40px]" 
              />
            </div>
          </div>

        </div>
    </section>
  )
}

export default About;