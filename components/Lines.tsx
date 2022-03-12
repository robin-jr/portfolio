import React from 'react'
import styles from "../styles/Lines.module.scss"
import Image from 'next/image'

function Lines() {
    return (
        <>
            <div className={styles.leftLine}>
                <div className="wrapper">
                    <a href="https://www.github.com/robin-jr/" target="_blank">
                        <Image className="icon" color="red" src="/github.svg" height={30} width={30} />
                    </a>
                    <a href="mailto:robinjeyasingh@outlook.com" target="_blank"><span className="material-icons">&#xe0e1;</span></a>
                    <a href="https://www.linkedin.com/in/robinjeyasingh/" target="_blank">
                        <Image className="icon" color="red" src="/linkedin.svg" height={30} width={30} />
                    </a>
                </div>
            </div>
            <div className={styles.rightLine}>
                <a href="mailto:robinjeyasingh@outlook.com" target="_blank">
                    robinjeyasingh@outlook.com
                </a>
            </div>
        </>
    )
}

export default Lines