import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-[#141414] min-h-screen text-white">
      <Head>
        <title>Robin J - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex p-5 justify-end gap-8 mr-8 font-light">
        <div className="cursor-pointer hover:text-red-400 hover:font-medium group transition-all duration-300 ease-linear">Home <span className='group-hover:scale-100 block origin-left scale-0 h-1 border-white border-1 bg-white transition-all duration-300 ease-linear'></span> </div>
        <div className="cursor-pointer hover:text-red-400 hover:font-medium group transition-all duration-300 ease-linear">Projects <span className='group-hover:scale-100 block origin-left scale-0 h-1 border-white border-1 bg-white transition-all duration-300 ease-linear'></span> </div>
        <div className="cursor-pointer hover:text-red-400 hover:font-medium group transition-all duration-300 ease-linear">Contact <span className='group-hover:scale-100 block origin-left scale-0 h-1 border-white border-1 bg-white transition-all duration-300 ease-linear'></span> </div>
      </div>

      {/* Home */}
      <section className='flex'>
        <div className="w-[10%]"></div>
        <div className="w-[40%] border-1 h-[550px] bg-black"></div>
        <div className="self-center ml-10">
            <h3 className="text-7xl font-bold">
              Robin J
            </h3>
            <span className='block border-2 w-[150%] border-red-400 bg-red-400 my-4'></span>
            <p className='text-2xl font-light'>
              Design Minded<br/>
              Web and Mobile App <br/>
              Developer
            </p>
            <div className="mt-10 cursor-pointer group">
              <h5 className='inline-block text-xl font-bold mr-5' >Projects</h5>
              <span className='text-red-400 group-hover:ml-5 transition-all duration-300 ease-linear'>{">>"}</span>
            </div>
        </div>
      </section>

      {/* Projects */}
      <section className=''>

      </section>
      
    </div>
  )
}
