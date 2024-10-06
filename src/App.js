import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Projects/>
      <Experience/>
      <Education/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
