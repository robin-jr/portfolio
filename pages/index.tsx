import Head from 'next/head'
import About from '../components/About'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col pb-2">
      <Head>
        <title>Robin J</title>
        <meta name="description" content="My portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
        <div className="h-screen flex w-full flex-col items-center justify-center px-20 text-center">
          <Intro />
        </div>
        <div className="h-screen flex w-full flex-col items-center justify-center px-20">
          <About />
        </div>
      </main>

      <Footer />
    </div>
  )
}
