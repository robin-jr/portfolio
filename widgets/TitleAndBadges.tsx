import React from 'react'


export interface Badge {
    title: string,
}
export interface Entry {
    title: string,
    badges: Badge[],
}
function TitleAndBadges(props: any) {
    const { entries } = props;
    return (
        <div className="flex flex-col">
            {entries.map((entry: Entry, index: number) =>
                <div className="flex my-3">
                    <div className="mr-5">{entry.title} </div>
                    {entry.badges.map((badge: Badge, index: number) =>
                        <>
                            <button className="badge mr-4">{badge.title}</button>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default TitleAndBadges