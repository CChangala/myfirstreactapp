import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css'

function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Chaitanya.</h1>
                <p className={styles.description}>I'm a Software Developer with 1 year of industrial experience with React, Node.js, Spring Boot and other Development Skills. Reach out if you'd like to know more! </p>
                <a className={styles.contact} href ="mailto:chaitanyachangala8@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src = {getImageUrl('hero/heroImage.png')} alt='Image of Me'/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottonBLur}></div>
        </section>
    );
}

export default Hero;