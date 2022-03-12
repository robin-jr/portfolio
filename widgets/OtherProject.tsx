import React from 'react'
import { ProjectInterface } from './Project'
import styles from '../styles/OtherProjects.module.scss'
import Image from "next/image"

interface Props {
    project: ProjectInterface,
}
function OtherProject({ project }: Props) {
    return (
        <div className={styles.project}>
            <div className="title">{project.title}</div>
            <div className="description">{project.description}</div>
            {project.githubLink && <a className="github-link" href={project.githubLink} target="_blank">
                <Image className="icon" color="red" src="/github.svg" height={26} width={26} /> </a>}
            <div className="tags">
                {project.tags.map((tag: string, idx: number) => <div>{tag}</div>)}
            </div>
        </div>
    )
}

export default OtherProject