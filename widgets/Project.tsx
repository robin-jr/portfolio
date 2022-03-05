import React from 'react'
import styles from "../styles/Project.module.scss";

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
                    <div className=""><span className="material-icons">&#xe867;</span></div>
                    <div className=""><span className="material-icons">&#xf0ec;</span></div>
                </div>
                <div className="tags">
                    {project.tags.map((tag:string,idx:number) =><div>{tag}</div>)}
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