import Head from 'next/head'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Robin J</title>
        <meta name="description" content="My portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      </main>

      <Footer />

    </div>
  )
}
