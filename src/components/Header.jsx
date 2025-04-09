import React, { useState } from 'react'
import Logo from "../utils/Logo";

function Header() {
    const navLinks = [
        "Home",
        "Projects",
        "Skills",
        "Resume",
        "Github",
        "Contact-Me",
      ];
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    
      <nav className="flex flex-wrap justify-evenly items-center ">
        <div className="flex items-center">
          <Logo width="200px" />
        </div>

        {/* Hamburger Menu Button (for small screens) */}
        <div className="lg:hidden" onClick={toggleMenu} aria-label="Toggle navigation">
          <button className="p-2 text-black focus:outline-none">
            <div className={`w-6 h-1 bg-black mb-1 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-6 h-1 bg-black mb-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></div>
            <div className={`w-6 h-1 bg-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`flex flex-col lg:flex-row lg:space-x-6 transition-all duration-300 lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
          {navLinks.map((navLink) => (
            <li
              key={navLink}
              className="p-4 list-none cursor-pointer group text-black hover:text-blue-700"
            >
              <span className="relative">
                {navLink}
                <span className="absolute top-5 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    
  )
}

export default Header
