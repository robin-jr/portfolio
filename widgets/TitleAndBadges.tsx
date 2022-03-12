import React from 'react'


export interface Badge {
    title: string,
}
export interface Entry {
    title: string,
    badges: Badge[],
}
function TitleAndBadges() {
    const entries: Entry[] = [{ title: 'Programming Languages', badges: [{ title: 'Python' }, { title: 'Java' },{ title:"Js"},{ title:"C"},{ title:"C++"}] },
    { title: 'Backend', badges: [{ title: 'Django' }, { title: 'Nodejs' },{ title:"Express"},{ title:"GraphQL"},{ title:"NextJs"},{ title:"Rails"}] },
    { title: 'Databases', badges: [{ title: 'MongoDB' }, { title: 'MySQL' }] },
    { title: 'Devops', badges: [{ title: 'Docker' }, { title: 'Digital Ocean' },{ title:"Firebase"},{ title:"GraphQL"},{ title:"NextJs"}] },
    { title: 'Frontend', badges: [{ title: 'Reactjs' }, { title: 'Tailwind' },{ title:"p5js"}] }]
    return (
        <div className="flex flex-col">
            {entries.map((entry: Entry, index: number) =>
                <div className="flex" style={{marginBottom:"0.75rem"}}  key={entry.title}>
                    <div className="" style={{marginRight:'1rem'}}>{entry.title}: </div>
                    {entry.badges.map((badge: Badge, index: number) =>
                        <>
                            <button key={badge.title} className="badge">{badge.title}</button>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default TitleAndBadges