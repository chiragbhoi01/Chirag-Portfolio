import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import ComponentWithDarkBackground from "./ComponentWithDarkBackground";

function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-4xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-4xl" />, name: "CSS" },
    { icon: <FaJs className="text-4xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-4xl" />, name: "React" },
    { icon: <SiTypescript className="text-4xl" />, name: "TypeScript" },
    { icon: <SiTailwindcss className="text-4xl" />, name: "Tailwind CSS" },
  ];

  return (
   <ComponentWithDarkBackground>
     <section
      id="skills"
      role="region"
      aria-label="Chirag Bhoi's Skills"
      className=" flex flex-col mx-2 my-1 rounded-2xl min-h-screen max-h-screen overflow-hidden p-10 "
    >
      <div className="flex flex-col items-center w-full">
        <h1 className="text-6xl md:text-8xl font-bold my-10 text-center">
          Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 hover:scale-105"
            >
              <div className="mb-2" aria-hidden="true">
                {skill.icon}
              </div>
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
   </ComponentWithDarkBackground>
  );
}

export default Skills;

