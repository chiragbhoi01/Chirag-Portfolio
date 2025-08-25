import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] flex flex-col">
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
