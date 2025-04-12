import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../utils/Logo";
import Button from "../utils/Button"; // Importing your custom Button

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact-Me", path: "/contact-me" },
  ];

  return (
    <nav className="flex flex-wrap justify-evenly items-center py-4 shadow-md bg-white">
      <div className="flex items-center">
        <Logo width="200px" />
      </div>

      <div className="lg:hidden" onClick={toggleMenu} aria-label="Toggle navigation">
        <button className="p-2 text-black focus:outline-none">
          <div className={`w-6 h-1 bg-black mb-1 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-1 bg-black mb-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
          <div className={`w-6 h-1 bg-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <ul
        className={`flex flex-col lg:flex-row lg:items-center lg:space-x-6 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        } lg:flex`}
      >
        {navLinks.map((navLink) => (
          <li
            key={navLink.name}
            className="p-4 list-none cursor-pointer group text-black hover:text-blue-700"
          >
            <NavLink
              to={navLink.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `relative group transition duration-300 ${
                  isActive ? "text-blue-700" : "text-black"
                }`
              }
            >
              <span className="flex flex-col relative">
                {navLink.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </NavLink>
          </li>
        ))}

        {/* Resume Download Button */}
        <li className="p-4 list-none">
          <Button
            href="https://drive.google.com/file/d/1xQQ7PqbME1xIfmJrRGqs9xcK-RyfoIyX/view"
            className="py-2 px-4 font-bold text-sm lg:text-base"
          >
            <span>Download Resume</span>
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
