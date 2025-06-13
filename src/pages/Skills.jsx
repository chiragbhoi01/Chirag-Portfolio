import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaFigma } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { IoLogoJavascript } from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';
import {
  SiTailwindcss,
  SiNetlify,
  SiVercel,
  SiNextdotjs,
  SiPostman,
  SiMantine,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si';
import { motion } from 'framer-motion';

function Skills() {
  const programmingSkills = [
    { name: 'HTML5', icon: <FaHtml5 aria-label="HTML5" /> },
    { name: 'CSS3', icon: <FaCss3Alt aria-label="CSS3" /> },
    { name: 'JavaScript', icon: <IoLogoJavascript aria-label="JavaScript" /> },
    { name: 'TypeScript', icon: <SiTypescript aria-label="TypeScript" /> },
    { name: 'React', icon: <FaReact aria-label="React" /> },
    { name: 'Next.js', icon: <SiNextdotjs aria-label="Next.js" /> },
    
  ];

  const technologies = [
    { name: 'Tailwind CSS', icon: <SiTailwindcss aria-label="Tailwind CSS" /> },
    { name: 'Mantine UI', icon: <SiMantine aria-label="Mantine UI" /> },
    { name: 'GitHub', icon: <FaGithub aria-label="GitHub" /> },
    { name: 'Netlify', icon: <SiNetlify aria-label="Netlify" /> },
    { name: 'Vercel', icon: <SiVercel aria-label="Vercel" /> },
    { name: 'MongoDB', icon: <SiMongodb aria-label="MongoDB" /> },
    { name: 'Postman', icon: <SiPostman aria-label="Postman" /> },
    { name: 'Figma', icon: <FaFigma aria-label="Figma" /> },
    { name: 'VS Code', icon: <VscVscode aria-label="VS Code" /> },
  ];

  return (
    <section className="py-12 px-6 sm:px-8 md:py-16 max-w-7xl mx-auto bg-gray-800">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold flex justify-center items-center gap-3 text-white">
          <GiSkills className="text-teal-500" /> Skills
        </h1>
        <p className="text-teal-400 text-base sm:text-lg mt-2">My Technical Expertise</p>
      </motion.div>

      {/* Main Content - Skills & Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Programming Languages Section */}
        <motion.div
          className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:bg-gray-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-teal-500 text-center">
            Programming Languages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 justify-items-center">
            {programmingSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center transition-transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl sm:text-4xl text-teal-500 mb-2">{skill.icon}</div>
                <p className="text-xs sm:text-sm font-medium text-teal-400">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies & Tools Section */}
        <motion.div
          className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:bg-gray-800"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-teal-500 text-center">
            Technologies & Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 justify-items-center">
            {technologies.map((tool) => (
              <motion.div
                key={tool.name}
                className="flex flex-col items-center transition-transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl sm:text-4xl text-teal-500 mb-2">{tool.icon}</div>
                <p className="text-xs sm:text-sm font-medium text-teal-400">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;