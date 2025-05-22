import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import Skills   from './components/Skills'
import SoftSkills from './components/softSkills';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact /> 
       <Skills /> 
       <SoftSkills /> 
       
      <>
      
      </>

      <footer style={{ textAlign:'center', padding:'1rem' }}>
        © {new Date().getFullYear()} Fernando Fogaça. All rights reserved.
      </footer>
    </>
  );
}
export default App;