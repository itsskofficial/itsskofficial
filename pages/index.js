import Head from 'next/head'
import NavBar from '@components/NavBar'
import Header from '@components/Header'
import About from '@components/About'
import Skills from '@components/Skills'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import { useRef, useState } from 'react'

export default function Home() {

  const [activeSection,setActiveSection] = useState(['Home'])
  const headerRef = useRef()
  const aboutRef = useRef()
  const skillsRef = useRef()
  const contactRef = useRef()
  const refs = [headerRef, aboutRef, skillsRef, contactRef]

  window.onscroll(() => {
    refs.filter((ref) => {
      window.pageXOffset>=
    })
    if (window.pageYOffset>=)
  })
  
  
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
        <Header ref={ headerRef } />
        <About ref={ aboutRef } />
        <Skills ref={ skillsRef } />
        <Contact ref={ contactRef } />
        <Footer />
      </main>
    </>
  )
}
