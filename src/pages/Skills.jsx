import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import {
  SiTailwindcss,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

function Skills() {
  const programmingSkills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  const technologies = [
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "VS Code", icon: <VscVscode /> }, // Updated to the correct VS Code icon
  ];

  return (
    <div className="py-10 px-5 max-w-7xl mx-auto bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-2 text-gray-800">
          <GiSkills /> Skills
        </h1>
        <span className="text-gray-500 text-lg">My Technical Level</span>
      </div>

      {/* Main Content - Skills & Tools */}
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Programming Languages Section */}
        <div className="flex-1 text-center bg-white p-6 shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Programming Languages</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {programmingSkills.map((skill) => (
              <div
                key={skill.name}
                className="w-24 flex flex-col items-center transition-all hover:scale-110"
              >
                <div className="text-5xl text-blue-500 mb-2">{skill.icon}</div>
                <p className="text-sm font-medium text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Tools Section */}
        <div className="flex-1 text-center bg-white p-6 shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-green-500">Technologies & Tools</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tool) => (
              <div
                key={tool.name}
                className="w-24 flex flex-col items-center transition-all hover:scale-110"
              >
                <div className="text-5xl text-green-500 mb-2">{tool.icon}</div>
                <p className="text-sm font-medium text-gray-700">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default Skills;
