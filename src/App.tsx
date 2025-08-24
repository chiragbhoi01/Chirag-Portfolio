import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] flex flex-col">
      <Header />
      <Home />
      <About/>
    </div>

  );
}

export default App;