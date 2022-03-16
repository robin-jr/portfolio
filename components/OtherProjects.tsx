import React from 'react'
import { ProjectInterface } from '../widgets/Project'
import styles from '../styles/OtherProjects.module.scss'
import OtherProject from '../widgets/OtherProject'

function OtherProjects() {
    const projects: ProjectInterface[] = [{
        title: "Flappy bird", description: "A simple flappy bird game built with p5js.",
        tags: ["HTML","p5js"], githubLink: "https://github.com/robin-jr/flapplyBird", link: "", image: ""
    },{
        title: "Chat application", description: "An android application that allows you to chat with your contacts.",
        tags: ["Android Native","Authentication", "Firebase"], githubLink: "https://github.com/robin-jr/chat-app", link: "", image: ""
    },{
        title: "Recruitment App", description: "An android native app where you can post jobs and get responses.",
        tags: ["Android","Firebase"], githubLink: "https://github.com/robin-jr/recruitment-app", link: "", image: ""
    }]
  return (
       <div className={styles.projectsContainer}>
            <div className="section-title" style={{marginBottom:"2.5rem"}}>Other Projects</div>
            <div className={styles.projects}>
                {projects.map((project, idx) => <OtherProject key={idx} project={project} />)}
            </div>
        </div>
  )
}

export default OtherProjects