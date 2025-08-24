import logo from "/src/assets/img/logo.png"; // Absolute path; move to public if import fails
import { FiDownload } from "react-icons/fi";

function Header() {
  const navLink = ["ABOUT", "SKILLS", "PROJECT", "CONTACT"];

  return (
    <header className="bg-gradient-to-r from-[#0e7490] via-[#3b82f6] to-[#4f46e5] h-16 rounded-2xl m-2 sticky top-2 z-10 bg-transparent text-indigo-50">
      <div className="flex justify-evenly items-center h-full">
        <div>
          <a
            href="/"
            className="transition-transform duration-200 hover:scale-105 hover:opacity-90"
            aria-label="Go to Chirag's Portfolio homepage"
          >
            <img src={logo} alt="Chirag's Portfolio Logo" className="h-10" />
          </a>
        </div>
        <nav
          aria-label="Main navigation"
          className="flex list-none w-full md:w-[50%] justify-around items-center"
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
      </div>
    </header>
  );
}

export default Header;