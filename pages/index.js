import React, { useState } from "react";
import styles from '@/styles/Home.module.css'
import Head from 'next/head';

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [aboutAnimation, setAboutAnimation] = useState("");

  const toggleAbout = () => {
    if (!showAbout) {
      setAboutAnimation("fadeIn");
      setShowAbout(true);
    } else {
      setAboutAnimation("fadeOut");
      setTimeout(() => {
        setShowAbout(false);
        setAboutAnimation("");
      }, 500);
    }
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
      <h1 className={styles.fadeIn1} >Hello, I&apos;m Jose Guillen</h1>
	{!showAbout && (
	  <button
	    className={`${styles.aboutButton} ${isDarkMode ? styles.aboutButtondark : ""} ${styles.fadeIn2} `}
	    onClick={toggleAbout}
	  >
	    About Me
	  </button>
	)}
	{showAbout && <About isDarkMode={isDarkMode} animation={aboutAnimation} />}
      <div className={`${styles.imageContainer} ${styles.fadeIn3}`}>
        <img src="/jose-guillen.jpg" alt="Jose Guillen" />
      </div>
      <div className={`${styles.iconsContainer} ${styles.fadeIn4}`}>
        <a href="https://github.com/joseg20" target="_blank" rel="noreferrer">
          <img
            src="/github.png"
            alt="Github"
            className={`${styles.icon} ${isDarkMode ? styles.icondark : ""} ${showAbout ? styles.hidden : ""}`}
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

function About({ isDarkMode, animation }) {
  return (
    <div className={`${styles.aboutContainer} ${isDarkMode ? styles.aboutContainerdark : ""} ${styles[animation]}`}>
      <p>
A student of Electronic Engineering at Federico Santa María University. My focus is on studying and developing computer network     systems, as well as designing and building cutting-edge hardware and software. To me, technology is a key tool for transforming the world, and I&apos;m excited to be a part of its evolution in the future as an electronic engineer.
      </p>
	<div><br /></div>
      <p>
       I enjoy trying out new experiences, having some mate or coffee, listening to urban music, and watching soccer games.
      </p>
    </div>
  );
}


