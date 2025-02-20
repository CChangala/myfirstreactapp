import React, {useState} from 'react';

import styles from './NavBar.module.css';
import {getImageUrl} from "../utils";

function NavBar(){
    return (
        <nav className={styles.navbar}>
            <a href="#portfolio" className={styles.title}>Portfolio</a>
            <div className={styles.menu}>
            <img className={styles.menuBtn} src='../../public/assets/nav/menuIcon.png' alt='menu-button'></img>
                <ul className={styles.menuItems}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;