import React from 'react'
import styles from '../styles/Navbar.module.scss'

function Navbar() {
  const scrollToElement = (element: string) => {
    var section = document.getElementById(element);
    var topPos = section!.offsetTop;
    if (element == "home") {
      topPos = 0;
    } else if (element == "about-me") {
      topPos -= 100;
    }
    scrollTo({ top: topPos, behavior: 'smooth' });
  }
  return (
    <div className={styles.navbar}>
      <div onClick={() => { scrollToElement("home") }} >Home</div>
      <div onClick={() => { scrollToElement("about-me") }} >About</div>
      <div onClick={() => { scrollToElement("projects") }} >Projects</div>
      <div onClick={() => { scrollToElement("contact-me") }} >Contact</div>
    </div>
  )
}

export default Navbar