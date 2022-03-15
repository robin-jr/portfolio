import React from 'react'
import styles from "../styles/Contact.module.scss"

function Contact() {
  return (
    <div className={styles.contactSection}>
        <div className="what-next">What's next?</div>
        <div className="big-title">Get in Touch</div>
        <a href="mailto:robinjeyasingh@outlook.com" target="_blank" className="button">Say Hello</a>
    </div>
  )
}

export default Contact