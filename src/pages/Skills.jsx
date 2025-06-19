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
  SiSvelte,
} from 'react-icons/si';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 aria-label="HTML5" /> },
    { name: 'CSS3', icon: <FaCss3Alt aria-label="CSS3" /> },
    { name: 'JavaScript', icon: <IoLogoJavascript aria-label="JavaScript" /> },
    { name: 'TypeScript', icon: <SiTypescript aria-label="TypeScript" /> },
    { name: 'React', icon: <FaReact aria-label="React" /> },
    { name: 'Next.js', icon: <SiNextdotjs aria-label="Next.js" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss aria-label="Tailwind CSS" /> },
    { name: 'Mantine UI', icon: <SiMantine aria-label="Mantine UI" /> },
    { name: 'GitHub', icon: <FaGithub aria-label="GitHub" /> },
    { name: 'Netlify', icon: <SiNetlify aria-label="Netlify" /> },
    { name: 'Vercel', icon: <SiVercel aria-label="Vercel" /> },
    { name: 'Postman', icon: <SiPostman aria-label="Postman" /> },
    { name: 'Figma', icon: <FaFigma aria-label="Figma" /> },
    { name: 'VS Code', icon: <VscVscode aria-label="VS Code" /> },
    { name: 'Svelte', icon: <SiSvelte aria-label="Svelte" /> },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 md:py-12 max-w-6xl mx-auto ">
      {/* Section Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex justify-center items-center gap-2">
          <GiSkills className="text-[#f7f4f3]" /> Skills
        </h1>
        <p className="text-sm sm:text-base mt-1">My Technical Toolkit</p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center p-4 rounded-lg border border-[#f7f4f3] hover:bg-[#f7f4f3] hover:text-[#5b2333] transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: skills.indexOf(skill) * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl sm:text-3xl mb-2">
              {skill.icon}
            </div>
            <p className="text-xs sm:text-sm font-medium text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
