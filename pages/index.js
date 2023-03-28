import React, { useState } from "react";
import styles from '@/styles/Home.module.css'
import Head from 'next/head';

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle(styles.darkMode);
  };

  return (
    <div className={isDarkMode ? styles.containerDark : styles.container}>
       <Head>
	  <title>Jose Guillen</title>
	  <link rel="shortcut icon" href="/cookie.ico"/>
      </Head>
      <h1>Hello, I&apos;m Jose Guillen</h1>
      <button
  	className={`${styles.aboutButton} ${isDarkMode ? styles.aboutButtondark : ""}`}
  	onClick={toggleAbout}
      >
  	About Me
      </button>
      {showAbout && <About isDarkMode={isDarkMode} />}
      <div className={styles.imageContainer}>
        <img src="/jose-guillen.jpg" alt="Jose Guillen" />
      </div>
      <div className={styles.iconsContainer}>
        <a href="https://github.com/joseg20" target="_blank" rel="noreferrer">
          <img
            src="/github.png"
            alt="Github"
            className={`${styles.icon} ${isDarkMode ? styles.icondark : ""}`}
            onMouseOver={(e) => (e.currentTarget.src = "/github.png")}
            onMouseOut={(e) => (e.currentTarget.src = "/github.png")}
          />
        </a>
        <a href="https://www.linkedin.com/in/jose-guillen-contador/" target="_blank" rel="noreferrer">
          <img
            src="/linkedin.png"
            alt="LinkedIn"
            className={`${styles.icon} ${isDarkMode ? styles.icondark : ""}`}
            onMouseOver={(e) => (e.currentTarget.src = "/linkedin.png")}
            onMouseOut={(e) => (e.currentTarget.src = "/linkedin.png")}
          />
        </a>
        <a href="/cv.pdf" target="_blank" rel="noreferrer">
          <img
            src="/cv.png"
            alt="CV"
            className={`${styles.icon} ${isDarkMode ? styles.icondark : ""}`}
            onMouseOver={(e) => (e.currentTarget.src = "/cv.png")}
            onMouseOut={(e) => (e.currentTarget.src = "/cv.png")}
          />
        </a>
      </div>
      <button className={styles.darkModeButton} onClick={toggleDarkMode}>
        {isDarkMode ? (
          <img src="/sun.png" alt="Sun" />
        ) : (
          <img src="/moon.png" alt="Moon" />
        )}
      </button>
    </div>
  );
}

function About({ showAbout, isDarkMode }) {
  return (
    <div className={`${styles.aboutContainer} ${isDarkMode ? styles.aboutContainerdark : ""}`}>
      <p>
        Nací en Antofagasta, soy futbolista, me gusta programar, etc.
      </p>
    </div>
  );
}


