import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Lines from '../components/Lines'
import Navbar from '../components/Navbar'
import OtherProjects from '../components/OtherProjects'
import Projects from '../components/Projects'
import styles from "../styles/Home.module.scss"

export default function Home() {
  return (
    <div id="body" className={styles.homeBody}>
      <Head>
        <title>Robin J</title>
        <meta name="description" content="My portfolio website" />
        <link rel="icon" href="/fav.svg" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
      </Head>
      <Navbar />

      <main>
        <Lines />
        <div id="home-me">
          <Intro />
        </div>
        <div id="about-me">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="other-projects">
          <OtherProjects />
        </div>
        <div id="contact-me">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}
