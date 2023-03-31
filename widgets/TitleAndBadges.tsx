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
    const entries: Entry[] = [{ title: 'Programming Languages', badges: [{ title: 'Python' }, { title: 'Js' }, { title: 'Golang' }, { title: "Java" }, { title: "C" }, { title: "C++" }, { title: 'SQL' }] },
    { title: 'Backend', badges: [{ title: 'Django' }, { title: 'Nodejs' }, { title: "Express" }, { title: "GraphQL" }, { title: "NextJs" }, { title: "Rails" }, { title: "Firebase" }] },
    { title: 'Databases', badges: [{ title: 'MongoDB' }, { title: 'MySQL' }, { title: 'Postgresql' }, { title: 'BigQuery' }, { title: 'Clickhouse' }, { title: 'ElasticSearch' }, { title: 'Firestore' }] },
    { title: 'Devops', badges: [{ title: 'Docker' }, { title: 'Digital Ocean' }, { title: 'Azure' }, { title: 'GCP' }, { title: 'AWS' }, { title: 'CI/CD' }] },
    { title: 'Frontend', badges: [{ title: 'Reactjs' }, { title: 'Flutter' }, { title: 'Angular' }, { title: 'Tailwind' }, { title: "p5js" }, { title: 'Unity' }] }]
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