/**
 * @copyright 2024 Filipe Mota
 * @license Apache-2.0
 */

import { useState } from "react";
import NavBar from "./Navbar";

import Logo from "/images/logo2.jpg"
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header>
      <header className="fixed top-0 left-0 w-full h-20 flex items-center 
      z-2=40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr, 1fr]">

            <h1>
              <a href="" 
              className="logo">

                <img
                src={Logo} 
                width={40}
                height={40}
                alt="Filipe Mota" 
                />
              </a>
            </h1>

            <div className="relative md:justify-self-center">
              <button 
              className="menu-btn md:hidden"
              onClick={() => setNavOpen((prev) => !prev)}
              >
              <span className="material-symbols-rounded">
                {navOpen ? 'close' : 'menu'}
              </span>
              </button>

              <NavBar navOpen={navOpen}/>
            </div>

            <a 
              href="#contact" 
              className="btn btn-secondary max-md:hidden md:justify-seld-end"
            >
              Contate-me
              </a>
        </div>
      </header>
    </header>
  );
}

export default Header;