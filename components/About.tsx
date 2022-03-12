import React from 'react'
import Timeline from '../widgets/Timeline'
import TitleAndBadges, { Entry } from '../widgets/TitleAndBadges'

function About() {
    return (
        <div className="flex w-[80%]">
            <div className="flex flex-col flex-1 mr-10 items-center">
                <img src="https://www.picsum.photos/1080/1920" className="h-[40em] w-[30em] mb-10"></img>
                <div className="text-lg text-center">Friendly neighbourhood<br />Programmer 👋</div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="text-3xl color-tertiary mb-4">Things I Know</div>
                <TitleAndBadges/>
                <div className="text-3xl color-tertiary mb-4 mt-10">My Journey</div>
                <Timeline/>
            </div>
        </div>
    )
}

export default About