import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Projects from '../src/pages/Projects'
import Skills from '../src/pages/Skills'
import Contact from '../src/pages/Contact'
import Home from './pages/Home';
import Github from './pages/Github';

//Mantine UI
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path='/github' element={<Github/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    </MantineProvider>
  );
};

export default App;
