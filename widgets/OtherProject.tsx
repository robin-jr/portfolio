import React from 'react'
import { ProjectInterface } from './Project'
import styles from '../styles/OtherProjects.module.scss'

interface Props {
    project: ProjectInterface,
}
function OtherProject({ project }: Props) {
    return (
        <div className={styles.project}>
            <div className="title">{project.title}</div>
            <div className="description">{project.description}</div>
            <div className="github-link"><span className="material-icons">&#xe867;</span></div>
            <div className="tags">
                {project.tags.map((tag: string, idx: number) => <div>{tag}</div>)}
            </div>
        </div>
    )
}

export default OtherProject