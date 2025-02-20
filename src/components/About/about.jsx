import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css'

function About() {
    return (
        <section id='about' className = {styles.container}>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={getImageUrl('about/aboutImage.png')} alt='Chaitanya smiling, dressed in professional attire'/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')} alt='Exper 1'/>
                        <div className={styles.aboutItemText}>
                            <h2>Masters Grad Student</h2>
                            <p>Experience 1</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')} alt='Exper 1'/>
                        <div className={styles.aboutItemText}>
                            <h2>Front End developer</h2>
                            <p>Experience 1</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt='Exper 1'/>
                        <div className={styles.aboutItemText}>
                            <h2>BackEnd Developer</h2>
                            <p>Experience 1</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;