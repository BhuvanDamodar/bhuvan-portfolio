import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Education from './components/Education';
import './components/styles/Global.css'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <Header/>
      <Home/>      
      <Projects/>
      <Experience/>
      <Education/>
      <Skills/>
      <Contact/>
      <Footer/>
      <Analytics/>
    </div>
  );
}

export default App;
