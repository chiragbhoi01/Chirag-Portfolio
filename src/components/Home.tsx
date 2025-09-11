import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import profileImg from "/src/assets/img/HeroSlider.jpg";
import ComponentWithDarkBackground from "./ComponentWithDarkBackground";

function Home() {
  const socialMedia = [
    {
      icon: <FiGithub className="text-2xl" />,
      url: "https://github.com/chiragbhoi01",
    },
    {
      icon: <FaXTwitter className="text-2xl" />,
      url: "https://x.com/Mr_chirag_bhoi",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/chirag-bhoi-90b89b1b1",
    },
  ];

  return (
    <ComponentWithDarkBackground>
      <main
        role="main"
        className="relative z-1 flex flex-col md:flex-row mx-2 mt-1 rounded-2xl min-h-screen max-h-screen overflow-hidden text-white"
      >
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Hi, my name is,</h1>
            <h2 className="text-8xl font-bold bg-gradient-to-t from-blue-500 via-teal-500 to-orange-500 text-transparent bg-clip-text">
              Chirag Bhoi
            </h2>
            <p className="text-xl mt-4">
              a Frontend Developer from Udaipur, Rajasthan, specializing in
              React.js, TypeScript, and Tailwind CSS to build responsive and
              accessible web applications.
            </p>
          </div>
          <div className="flex space-x-6">
            {socialMedia.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110 hover:text-indigo-200 hover:drop-shadow-md"
                aria-label={`Visit Chirag's ${
                  social.url.includes("github")
                    ? "GitHub"
                    : social.url.includes("x.com")
                    ? "X"
                    : "LinkedIn"
                } profile`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={profileImg}
            alt="Chirag Bhoi Hero Image"
            className="h-[50%] object-cover rounded-full md:rounded-full"
            loading="lazy"
          />
        </div>
      </main>
    </ComponentWithDarkBackground>
  );
}

export default Home;
