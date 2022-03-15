import React from 'react'
import styles from '../styles/TitleAndBadges.module.scss'


export interface Badge {
    title: string,
}
export interface Entry {
    title: string,
    badges: Badge[],
}
function TitleAndBadges() {
    const entries: Entry[] = [{ title: 'Programming Languages', badges: [{ title: 'Python' }, { title: 'Java' }, { title: "Js" }, { title: "C" }, { title: "C++" }] },
    { title: 'Backend', badges: [{ title: 'Django' }, { title: 'Nodejs' }, { title: "Express" }, { title: "GraphQL" }, { title: "NextJs" }, { title: "Rails" }] },
    { title: 'Databases', badges: [{ title: 'MongoDB' }, { title: 'MySQL' }] },
    { title: 'Devops', badges: [{ title: 'Docker' }, { title: 'Digital Ocean' }, { title: "Firebase" }, { title: "GraphQL" }, { title: "NextJs" }] },
    { title: 'Frontend', badges: [{ title: 'Reactjs' }, { title: 'Tailwind' }, { title: "p5js" }] }]
    return (
        <div className={styles.container}>
            {entries.map((entry: Entry, idx: number) =>
                <div className="entry" key={idx}>
                    <div className="title">{entry.title}: </div>
                    <div>
                        {entry.badges.map((badge: Badge, idx: number) =>
                            <React.Fragment key={idx}>
                                <button className="badge">{badge.title}</button>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default TitleAndBadges