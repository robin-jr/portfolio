import React from 'react'
import styles from "../styles/Project.module.scss";
import Image from 'next/image'

export interface ProjectInterface {
    title: string,
    description: string,
    image: string,
    tags: string[],
    githubLink: string,
    link: string,
}

function Project(props: any) {
    const { project } = props;
    return (
        <div className={styles.project}>
            <div className="content">
                <div className="font-comic text-sm color-secondary">Featured Project</div>
                <div className="text-lg font-medium">{project.title}</div>
                <div className="description">{project.description}</div>
                <div className="links">
                    {project.githubLink && <a href={project.githubLink} target="_blank">
                        <Image className="icon" color="red" src="/github.svg" height={26} width={26} /></a>}
                    {project.link && <a href={project.link} target="_blank"><span className="material-icons">&#xe89e;</span></a>}
                </div>
                <div className="tags">
                    {project.tags.map((tag: string, idx: number) => <div>{tag}</div>)}
                </div>
            </div>
            <div className="picture">
                <img src={project.image} />
                <div className="outerBorder"></div>
            </div>
        </div>
    )
}

export default Project