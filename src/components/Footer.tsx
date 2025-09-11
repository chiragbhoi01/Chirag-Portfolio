import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/img/logo.png";

function Footer() {
  const navLinks = ["About", "Skills", "Project", "Contact"];
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/chiragbhoi01",
      icon: <FaGithub />,
      ariaLabel: "Visit Chirag's GitHub profile",
    },
    {
      name: "X",
      url: "https://x.com/Mr_chirag_bhoi",
      icon: <FaTwitter />,
      ariaLabel: "Visit Chirag's X profile",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chirag-bhoi-90b89b1b1",
      icon: <FaLinkedin />,
      ariaLabel: "Visit Chirag's LinkedIn profile",
    },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Footer for Chirag Bhoi's Portfolio"
      className="bg-gradient-to-r from-[#0f172a]  to-[#334155] text-white py-8 px-4 mt-2 rounded-t-2xl"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="/"
            className="transition-transform duration-200 hover:scale-105 hover:opacity-90"
            aria-label="Go to Chirag's Portfolio homepage"
          >
            <img
              src={logo}
              alt="Marshalcraft Logo"
              className="h-10"
              loading="lazy"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-col md:flex-row items-center gap-4 md:gap-6"
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="text-lg hover:text-indigo-200 hover:underline transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="text-2xl hover:text-indigo-200 transition-colors duration-200"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} Chirag Bhoi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
