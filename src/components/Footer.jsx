import React from "react";
import { AiOutlineSmallDash } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Button from "../utils/Button";
function Footer() {
  // Let's say we want to display this icon 5 times
  const iconCount = 100;

  return (
    <footer>
      <div className="flex">
        {Array.from({ length: iconCount }).map((_, index) => (
          <AiOutlineSmallDash key={index} className="text-2xl" />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-xl">Chirag Portfolio</h1>
        <div className="flex text-3xl m-2 animate__animated animate__slideInUp">
          <Button
            href={"https://github.com/chiragbhoi01"}
            className="bg-transparent hover:bg-transparent"
          >
            <FaGithub className="text-blue-700 hover:text-blue-300" />
          </Button>
          <Button
            href={"https://github.com/chiragbhoi01"}
            className="bg-transparent hover:bg-transparent"
          >
            <FaLinkedin className="text-blue-700 hover:text-blue-300" />
          </Button>
          <Button
            href={"https://www.instagram.com/chirag.bhoi_/"}
            className="bg-transparent hover:bg-transparent"
          >
            <FaInstagram className="text-blue-700 hover:text-blue-300" />
          </Button>
        </div>
        <div>
        <p>Copyright &#169; 2025 Marshal</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
