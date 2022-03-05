import React from 'react'
import Project, { ProjectInterface } from '../widgets/Project'
import styles from '../styles/Project.module.scss';

function Projects() {
    const projects: ProjectInterface[] = [{
        title: "Spotify Lyric Finder", description: "Finds the lyrics of the song you are listening to on Spotify.",
        tags: ["Spotify Api","Firebase"], githubLink: "", link: "", image: "https://picsum.photos/200"
    },{
        title: "Spotify Lyric Finder", description: "Finds the lyrics of the song you are listening to on Spotify.",
        tags: ["Spotify Api","Firebase"], githubLink: "", link: "", image: "https://picsum.photos/200"
    },{
        title: "Spotify Lyric Finder", description: "Finds the lyrics of the song you are listening to on Spotify.",
        tags: ["Spotify Api","Firebase"], githubLink: "", link: "", image: "https://picsum.photos/200"
    }]
    return (
        <div className="w-[80%] mb-20">
            <div className="text-3xl color-tertiary">Some things I've built</div>
            <div className={styles.projects}>
                {projects.map((project, idx) => <Project project={project} />)}
            </div>
        </div>
    )
}

export default Projects