import React from 'react'
import TitleAndBadges, { Entry } from '../widgets/TitleAndBadges'

function About() {
    const entries: Entry[] = [{ title: 'Programming Languages', badges: [{ title: 'Python' }, { title: 'Java' }] },
    { title: 'Backend Frameworks', badges: [{ title: 'Django' }, { title: 'Nodejs' }] },
    { title: 'Frontend Frameworks', badges: [{ title: 'Reactjs' }, { title: 'Nextjs' }] }]
    return (
        <div className="flex flex-col">
            <div className="text-5xl color-tertiary my-3">About Me</div>
            <div className="font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, commodi adipisci nostrum quibusdam
                reiciendis consequatur sapiente recusandae quis iste itaque voluptatum nesciunt incidunt, impedit ratione sunt eum quisquam
                quam accusamus porro cumque doloremque vitae. A deleniti vero non nulla quia dicta iste maiores incidunt error dolores tempore,
                ex, eius porro quam qui, inventore voluptatum.</div>
            <div className="text-3xl color-tertiary my-3 mt-5">Things I Know</div>
            <TitleAndBadges entries={entries} />
        </div>
    )
}

export default About