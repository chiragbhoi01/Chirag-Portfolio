import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Home from './pages/Home';

import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Github from './pages/Github'
import Header from './components/Header';
import Footer from './components/Footer';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <Router>
        <div className=" min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact-me" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/github" element={<Github/>} />
            </Routes>
          </main>
          <Footer />
          
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;