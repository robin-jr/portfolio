import React from 'react'
import styles from "../styles/Lines.module.scss"

function Lines() {
    return (
        <>
            <div className={styles.leftLine}>
                <div className="wrapper">
                    <div><span className="material-icons">&#xe867;</span></div>
                    <div><span className="material-icons">&#xe867;</span></div>
                    <div><span className="material-icons">&#xe867;</span></div>
                </div>
            </div>
            <div className={styles.rightLine}>
                <a href="mailto:robinjeyasingh@outlook.com">
                    robinjeyasingh@outlook.com
                </a>
            </div>
        </>
    )
}

export default Lines