import React from 'react';
import styles from './App.module.css';
import NavBar from './components/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Experience from './components/Experience/experience';
import Projects from './components/Projects/projects';
import { Contact } from './components/Contact/contact';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero/>
      <About />
      <Experience />
      <Projects />
      <Contact/>
    </div>);
}

export default App;
