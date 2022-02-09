import Head from 'next/head'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import MotionPathPlugin from 'gsap/dist/MotionPathPlugin';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
export default function Home() {

  useEffect(() => {
    animate();
  }, []);

  async function animate() {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.registerPlugin(ScrollTrigger);

    

    gsap.to("#projects-pointer", { marginLeft: "1rem", repeat: -1, yoyo: true, ease: "power0" });
    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-2", start: "top",
        toggleActions: "resume none none pause", 
        markers: true, pin: false, scrub: false,
      }
    });
    t1.to("#box", { bottom: "10em", motionPath: { path: "#path2", align: "#path2", end: 0.35 }, duration: 2 });
    t1.to("#img-preview", { width: "20em", height: "15em", duration: 2, }, "<");
    t1.to("#project-content", { scaleX: 1, duration: 0.5, transformOrigin: "left" })
    //exit animation
    // t1.to("#box", { left: -100, opacity: 0, delay: "3" });
  }
  return (
    <div className="bg-[#141414] min-h-screen text-white w-max h-max">
      <Head>
        <title>Robin J - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex p-5 justify-end gap-8 mr-8 font-light absolute right-0">
        <div className="cursor-pointer hover:text-red-400 hover:font-medium group transition-all duration-300 ease-linear">Home <span className='group-hover:scale-100 block origin-left scale-0 h-1 border-white border-1 bg-white transition-all duration-300 ease-linear'></span> </div>
        <div className="cursor-pointer hover:text-red-400 hover:font-medium group transition-all duration-300 ease-linear">Projects <span className='group-hover:scale-100 block origin-left scale-0 h-1 border-white border-1 bg-white transition-all duration-300 ease-linear'></span> </div>
        <div className="cursor-pointer hover:text-red-400 hover:font-medium group transition-all duration-300 ease-linear">Contact <span className='group-hover:scale-100 block origin-left scale-0 h-1 border-white border-1 bg-white transition-all duration-300 ease-linear'></span> </div>
      </div>
      <div className="flex flex-row">

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
        <section id='section-2' className='h-screen w-screen border-l-2 flex overflow-hidden relative'>

          <svg id="line-box" className='w-full z-10' viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 100.0,100.0
           C 60.62,97.12 42.50,75.62 0.0,81.75
             0.0,81.75 0.0,100.00 0.0,100.00
             0.0,100.00 100.12,100.12 100.12,100.0"
              id="path2"
              fill="black"
              stroke="#cccccc"
              stroke-width="1"
              vector-effect="non-scaling-stroke"></path>
          </svg>

          <div id='box' className='self-end absolute right-[-20em] bottom-[-2em] flex'>
            <div id="img-preview" className='border-2 w-20 h-20 bg-gray-500 rounded-md mr-6'></div>
            <div id='project-content' className="flex-col p-3 scale-x-0">
              <h3 className='font-normal text-2xl' >Spotify Lyrics Finder</h3>
              <p className='font-normal text-sm my-3'>Finds the Lyrics of the Spotify Song you are currently listening to.</p>
            </div>
          </div>

        </section>

        {/* Contact
        <section className='h-screen w-screen'>

        </section> */}

      </div>
    </div>
  )
}
