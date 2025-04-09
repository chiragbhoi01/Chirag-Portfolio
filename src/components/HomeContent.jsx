import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Button from "../utils/Button";
import profilePhoto from "../assets/image/profilePhoto.jpg";
function HomeContent() {
  const navLinks = [
    "Home",
    "Projects",
    "Skills",
    "Resume",
    "Github",
    "Contact-Me",
  ];

  // Toggle hamburger menu

  return (
    <main className="flex flex-wrap justify-evenly items-center p-15 bg-white ">
      {/* Social Media Links */}
      <div className="mr-4 text-2xl space-x-4 mb-4 lg:mb-0">
        <Button
          href={"https://www.linkedin.com/in/chirag-bhoi-90b89b1b1/"}
          className="bg-transparent hover:bg-transparent"
        >
          <FaLinkedin className="text-blue-700 hover:text-blue-300" />
        </Button>
        <Button
          href={"https://github.com/chiragbhoi01"}
          className="bg-transparent hover:bg-transparent"
        >
          <FaGithub className="text-blue-700 hover:text-blue-300" />
        </Button>
      </div>

      {/* Self Introduction */}
      <div className="flex flex-col w-11/12 lg:w-2/5 mx-4 text-[#232b2b] mb-4 lg:mb-0">
        <h1 className="font-extrabold text-3xl lg:text-4xl my-2 animate__animated animate__slideInLeft">
          Hi, I'm Chirag Bhoi
        </h1>
        <h6 className="font-bold text-xl lg:text-2xl my-2">
          Frontend Developer
        </h6>
        <p className="text-base lg:text-lg">
          I am a frontend developer skilled in{" "}
          <b>React.js, JavaScript, Tailwind CSS, and Bootstrap</b>, creating
          responsive and engaging web applications.
        </p>

        <div>
          <Button
            href={
              "https://drive.google.com/file/d/1xQQ7PqbME1xIfmJrRGqs9xcK-RyfoIyX/view"
            }
            className="my-3 py-3 px-4 font-bold text-sm lg:text-base"
          >
            <span>Download Resume</span>
          </Button>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex flex-col items-center animate__animated animate__pulse mb-4">
        <img
          src={profilePhoto}
          width={"250px"}
          alt="profile-photo"
          className="rounded-4xl transition w-3/4 lg:w-72"
        />
        <div>
          <Button className="my-3 font-bold text-sm lg:text-base">
            <span>Contact Me</span>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default HomeContent;
