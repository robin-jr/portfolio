import React from 'react'

function Intro() {
  return (
    <div className="mt-28">
        <div className="my-3 font-comic color-secondary">Hi, My name is</div>
        <div className="my-3 text-7xl font-medium">Robin J</div>
        <div className="my-3 text-5xl">And I love coding</div>
        <div className="my-8 text-3xl font-light">A full stack developer specialized in backend,<br/> building things for mobile and web.</div>
        <button className="button mt-10" onClick={()=>{
          var aboutSection = document.getElementById('about-me');
          var topPos = aboutSection?.offsetTop;
          if (topPos) {
            scrollTo({ top: topPos-100,behavior:'smooth'});
          }
        }}>More about me</button>
    </div>
  )
}

export default Intro