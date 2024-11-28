/**
 * @copyright 2024 Filipe Mota
 * @license Apache-2.0
 */

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skill from "./components/Skill"
import Project from "./components/Project"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
    <Header/>
    <main>
    <Hero/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    </main>
    </>
  )

}

export default App