import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Lines from '../components/Lines'
import Navbar from '../components/Navbar'
import OtherProjects from '../components/OtherProjects'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col pb-2">
      <Head>
        <title>Robin J</title>
        <meta name="description" content="My portfolio website" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
      </Head>
      <Navbar />

      <main>
        <Lines/>
        <div className="h-screen flex w-full flex-col items-center justify-center px-20 text-center">
          <Intro />
        </div>
        <div className="min-h-screen flex w-full flex-col items-center justify-center px-20">
          <About />
        </div>
        <div className="min-h-screen flex w-full flex-col items-center justify-center px-20 py-20">
          <Projects />
        </div>
        <div className="min-h-fit flex w-full flex-col items-center justify-center px-20 py-20">
          <OtherProjects />
        </div>
        <div className="min-h-screen flex w-full flex-col items-center justify-center px-20">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}
