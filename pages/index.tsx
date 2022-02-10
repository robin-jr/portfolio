import Head from 'next/head'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import MotionPathPlugin from 'gsap/dist/MotionPathPlugin';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ProjectPanel from '../components/ProjectPanel';
export default function Home() {

  useEffect(() => {
    animate();
  }, []);

  async function animate() {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#projects-pointer", { marginLeft: "1rem", repeat: -1, yoyo: true, ease: "power0" });

    var boxes = document.querySelectorAll(".box");
    var imgPreviews = document.querySelectorAll(".img-preview");
    var projectContents = document.querySelectorAll(".project-content");
    var projectsLength = boxes.length;

    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-container",
        toggleActions: "resume none none pause",
        pin: true,
        scrub: 1,
        // snap: {snapTo: "labels" ,duration: {min:1,max:3}, delay: 0.1, ease: "power1.inOut"}
      }
    });
    for (let i = 0; i < projectsLength; i++) {
      
      t1.to(boxes[i], { bottom: "10em", motionPath: { path: "#path2", align: "#path2", end: 0.35 },animationDuration:1});
      t1.to(imgPreviews[i], { width: "20em", height: "15em" }, "<");
      t1.addLabel("label"+i);
      t1.to(projectContents[i], { scaleX: 1, transformOrigin: "left" ,animationDuration:1})
      t1.to(boxes[i], { left: -100, opacity: 0,animationDuration:1});
    }
    t1.to("#path2",{opacity:0});
  }
  return (
    <div className="bg-[#141414] min-h-screen text-white w-max h-max container1">
      <Head>
        <title>Robin J - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex p-5 justify-end gap-8 mr-8 font-light fixed right-0">
        <div className="cursor-pointer hover:text-red-400 hover:font-medium group transition-all duration-300 ease-linear">Home <span className='group-hover:scale-100 block origin-left scale-0 h-1 border-white border-1 bg-white transition-all duration-300 ease-linear'></span> </div>
        <div className="cursor-pointer hover:text-red-400 hover:font-medium group transition-all duration-300 ease-linear">Projects <span className='group-hover:scale-100 block origin-left scale-0 h-1 border-white border-1 bg-white transition-all duration-300 ease-linear'></span> </div>
        <div className="cursor-pointer hover:text-red-400 hover:font-medium group transition-all duration-300 ease-linear">Contact <span className='group-hover:scale-100 block origin-left scale-0 h-1 border-white border-1 bg-white transition-all duration-300 ease-linear'></span> </div>
      </div>
      <div className="flex flex-col">

        {/* Home */}
        <section className='flex h-screen w-screen pt-20'>
          <div className="w-[10%]"></div>
          <div className="w-[40%] border-1 h-[550px] bg-black"></div>
          <div className="self-center ml-10">
            <h3 className="text-7xl font-bold">
              Robin J
            </h3>
            <span className='block border-2 w-[150%] border-red-400 bg-red-400 my-4'></span>
            <p className='text-2xl font-light'>
              Design Minded<br />
              Web and Mobile App <br />
              Developer
            </p>
            <div className="mt-10 cursor-pointer group">
              <h5 className='inline-block text-xl font-bold mr-5' >Projects</h5>
              <span id='projects-pointer' className='text-red-400'>{">>"}</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <div className='projects-container'>
          <ProjectPanel></ProjectPanel>
        </div>

        {/* Empty Panel */}
        <section className='h-screen w-screen  flex flex-col justify-center'>
        </section>

        {/* Contact Section */}

        <section className='h-screen w-screen bg-black flex flex-col justify-center'>
          <h1 className='text-center text-2xl '>Contact Section</h1>
        </section>

      </div>
    </div>
  )
}
