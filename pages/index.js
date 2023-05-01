import Head from 'next/head'
import NavBar from '@components/NavBar'
import Header from '@components/Header'
import About from '@components/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarthak Karandikar</title>
        <meta name="description" content="SK's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <Header />
        <About />
      </main>
    </>
  )
}
