import logo from "/src/assets/img/logo.png"; 
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useState } from 'react';

function Header() {
  const navLink = ["ABOUT", "SKILLS", "PROJECT", "CONTACT"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#0e7490] via-[#3b82f6] to-[#4f46e5] h-16 rounded-2xl m-2 sticky top-2 z-10 bg-transparent text-indigo-50">
      <div className="flex justify-between items-center h-full px-4"> 
        <div>
          <a
            href="/"
            className="transition-transform duration-200 hover:scale-105 hover:opacity-90"
            aria-label="Go to Chirag's Portfolio homepage"
          >
            <img src={logo} alt="Marshalcraft Logo" className="h-10" /> 
          </a>
        </div>
        <nav
          aria-label="Main navigation"
          className="hidden md:flex list-none w-full md:w-[50%] justify-around items-center"
        >
          {navLink.map((links, idx) => (
            <li key={idx}>
              <a
                href={`#${links.toLowerCase()}`}
                className="transition-colors duration-200 hover:text-indigo-200 hover:underline"
              >
                {links}
              </a>
            </li>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="https://drive.google.com/file/d/1OpT_n0Zflhf4xLZoU_x-7J6_rYPcSNhk/view"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Chirag's Resume"
          >
            <div className="flex items-center border-2 border-pink-200 p-2 rounded-2xl transition-all duration-200 hover:bg-white hover:text-black hover:border-blue-500">
              <span className="mx-2">Resume</span>
              <FiDownload />
            </div>
          </a>
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-br from-[#0e7490] via-[#3b82f6] to-[#4f46e5] rounded-b-2xl shadow-lg z-20">
          <nav className="flex flex-col items-center py-4">
            {navLink.map((links, idx) => (
              <a
                key={idx}
                href={`#${links.toLowerCase()}`}
                className="py-2 text-lg transition-colors duration-200 hover:text-indigo-200 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {links}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;