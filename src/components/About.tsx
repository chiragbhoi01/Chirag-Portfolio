import profileImg from "../assets/img/profileImg.webp"

function About() {
  return (
    <section
      id="about"
      role="region"
      aria-label="About Chirag Bhoi"
      className="bg-gradient-to-br from-[#9d174d] via-[#d946ef] to-[#f0abfc] flex flex-col md:flex-row mx-2 my-1 rounded-2xl min-h-screen max-h-95 overflow-hidden p-10 text-white"
    >
      <div className="flex flex-col items-center w-full mt-5">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center">About Me</h1>
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-[50%] flex justify-center items-center mb-6 md:mb-0">
            <img
              src={profileImg}
              alt="Chirag Bhoi About Image"
              className="h-64 md:h-96 object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-[50%] flex flex-col justify-center p-4">
            <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
            <p className="text-lg">
              I'm Chirag Bhoi, a Frontend Developer based in Udaipur, Rajasthan. With a strong foundation in React.js, TypeScript, and Tailwind CSS, I create responsive and accessible web applications that prioritize user experience. My journey in web development is driven by a passion for solving problems and building intuitive interfaces that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;