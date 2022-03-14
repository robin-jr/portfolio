import React from 'react'
import Timeline from '../widgets/Timeline'
import TitleAndBadges from '../widgets/TitleAndBadges'

function About() {
    return (
        <div className="xl:flex md:w-[80%] justify-center">
            <div className="flex flex-col flex-1 mr-10 items-center">
                <div className="relative">
                    <img src={"/robin-color.jpg"} className="w-[20em] xl:w-[30em] mb-10"></img>
                    <img src={"/robin-grey.jpg"} className="w-[20em] xl:w-[30em] mb-10 transition-all duration-700 absolute top-0 hover:opacity-0"></img>
                </div>
                <div className="text-lg text-center mb-10">Friendly neighbourhood<br />Programmer 👋</div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="text-3xl color-tertiary mb-4">Things I Know</div>
                <TitleAndBadges />
                <div className="text-3xl color-tertiary mb-4 mt-10">My Journey</div>
                <Timeline />
            </div>
        </div>
    )
}

export default About