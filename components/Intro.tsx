import React from 'react'

function Intro() {
  return (
    <div className="">
        <div className="my-3 font-comic color-secondary">Hi, My name is</div>
        <div className="my-3 text-7xl font-medium">Robin J</div>
        <div className="my-3 text-5xl">And I love coding</div>
        <div className="my-8 text-3xl font-light">A full stack developer specialized in backend,<br/> building things for mobile and web.</div>
        <button className="button" onClick={()=>{}}>Checkout my projects</button>
    </div>
  )
}

export default Intro