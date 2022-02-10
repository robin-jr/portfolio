
import React from 'react';
import ElevationPath from './ElevationPath';

export default function ProjectPanel() {
    return <section className='h-screen w-screen border-t-2 flex overflow-hidden relative panel'>
        <ElevationPath />
        <div className='self-end absolute right-[-20em] bottom-[-2em] flex box'>
            <div className='border-2 w-20 h-20 bg-gray-500 rounded-md mr-6 img-preview'></div>
            <div className="flex-col p-3 scale-x-0 project-content">
                <h3 className='font-normal text-2xl' >Spotify Lyrics Finder</h3>
                <p className='font-normal text-sm my-3'>Finds the Lyrics of the Spotify Song you are currently listening to.</p>
            </div>
        </div>
        <div className='self-end absolute right-[-20em] bottom-[-2em] flex box'>
            <div className='border-2 w-20 h-20 bg-gray-500 rounded-md mr-6 img-preview'></div>
            <div className="flex-col p-3 scale-x-0 project-content">
                <h3 className='font-normal text-2xl' >Algorithms Visualizer</h3>
                <p className='font-normal text-sm my-3'>Visualizes various sorting, path finding algorithms.</p>
            </div>
        </div>
    </section>
}

