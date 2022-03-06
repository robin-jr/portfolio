import React from 'react'
import { ProjectInterface } from '../widgets/Project'
import styles from '../styles/OtherProjects.module.scss'
import OtherProject from '../widgets/OtherProject'

function OtherProjects() {
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
       <div className="w-[80%]">
            <div className="text-3xl color-tertiary mb-10">Other Projects</div>
            <div className={styles.projects}>
                {projects.map((project, idx) => <OtherProject project={project} />)}
            </div>
        </div>
  )
}

export default OtherProjects