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
                <div>
                    robinjeyasingh@outlook.com
                </div>
            </div>
        </>
    )
}

export default Lines