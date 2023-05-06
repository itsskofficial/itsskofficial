import Head from 'next/head'
import NavBar from '@components/NavBar'
import Header from '@components/Header'
import About from '@components/About'
import Skills from '@components/Skills'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import { useRef } from 'react'

export default function Home() {

  const aboutRef = useRef()
  const skillsRef = useRef()
  const skillsRef = useRef()
  const skillsRef = useRef()
  return (
    <>
      <Head>
        <title>Sarthak Karandikar</title>
        <meta name="description" content="SK's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/638bbcf842.js" crossorigin="anonymous"></script>
      </Head>
      <main>
        <NavBar />
        <Header />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
