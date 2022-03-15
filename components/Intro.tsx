import React from 'react'
import styles from '../styles/Intro.module.scss'

function Intro() {
  return (
    <div className={styles.intro}>
      <div className="one">Hi, My name is</div>
      <div className="two">Robin J</div>
      <div className="three">And I love coding</div>
      <div className="four">A full stack developer specialized in backend,<br /> building things for mobile and web.</div>
      <button className="button" style={{ marginTop: "2.5rem" }} onClick={() => {
        var aboutSection = document.getElementById('about-me');
        var topPos = aboutSection?.offsetTop;
        if (topPos) {
          scrollTo({ top: topPos - 100, behavior: 'smooth' });
        }
      }}>More about me</button>
    </div>
  )
}

export default Intro