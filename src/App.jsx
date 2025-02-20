import React from 'react';
import styles from './App.module.css';
import NavBar from './components/navbar';
import Hero from './components/Hero/hero';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero/>
    </div>);
}

export default App;
