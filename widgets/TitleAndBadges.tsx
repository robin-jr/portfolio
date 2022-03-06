import React from 'react'


export interface Badge {
    title: string,
}
export interface Entry {
    title: string,
    badges: Badge[],
}
function TitleAndBadges() {
    const entries: Entry[] = [{ title: 'Programming Languages', badges: [{ title: 'Python' }, { title: 'Java' }] },
    { title: 'Backend Frameworks', badges: [{ title: 'Django' }, { title: 'Nodejs' }] },
    { title: 'Frontend Frameworks', badges: [{ title: 'Reactjs' }, { title: 'Nextjs' }] }]
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