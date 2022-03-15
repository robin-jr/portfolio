import React from 'react'
import Timeline from '../widgets/Timeline'
import TitleAndBadges from '../widgets/TitleAndBadges'
import styles from '../styles/About.module.scss'

function About() {
    return (
        <div className={styles.about}>
            <div className="img-container">
                <div>
                    <img src={"/robin-color.jpg"}></img>
                    <img src={"/robin-grey.jpg"} className="grey"></img>
                </div>
                <div className="friendly-quote">Friendly neighbourhood<br />Programmer 👋</div>
            </div>
            <div className="about-content">
                <div className="big-title">Things I Know</div>
                {/* <TitleAndBadges /> */}
                <div className="big-title" style={{marginTop:"2rem"}}>My Journey</div>
                <Timeline />
            </div>
        </div>
    )
}

export default About