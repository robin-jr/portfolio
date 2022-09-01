import React from 'react'
import styles from "../styles/Timeline.module.scss";

interface Event {
    time: string,
    title: string,
    description: string
}

const getEvent = (event: Event, key: number) =>
    <div className={styles.timelineEvent} key={key}>
        <div className="time">{event.time}</div>
        <div className="line">
            <div ></div>
        </div>
        <div className="content">
            <div className="title">{event.title}</div>
            <div className="description">{event.description}</div>
        </div>
    </div>

function Timeline() {
    const events: Event[] = [{ time: "May 2022 - Present", title: "CASA Retail AI", description: "Product Engineer (SDE) working on challenging, high-tech advanced technologies." },
    { time: "2021 Nov-Dec", title: "Hoods", description: "Developed a social media application. Worked with firebase, cloud storage, cloud functions." },
    { time: "2021 Mar-Nov", title: "Arima Labs", description: "Developed a full-stack web application for a startup that increased their revenue by multiple folds. Worked with Django, Reactjs" },
    { time: "...", title: "", description: "Working on various personal projects, experimenting with different technologies and improving my skills." },
    { time: "...", title: "", description: "Learning programming languages and various tech stacks, and involving in various extra-curricular activities." },
    { time: "2019", title: "Kongu Engineering College", description: "Joined Kongu Engineering College to pursue Bachelor degree in Computer Science Engineering." },
    { time: "...", title: "", description: "Normal Human being. :-)" },
    ]
    return (
        <>
            {events.map((event: Event, idx: number) => getEvent(event, idx))}
        </>
    )
}

export default Timeline