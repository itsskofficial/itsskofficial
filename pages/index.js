import Head from 'next/head'
import NavBar from '@components/NavBar'
import Header from '@components/Header'
import About from '@components/About'
import Skills from '@components/Skills'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import { useState, useEffect, createRef } from 'react'
import Script from 'next/script'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  const [activeSection, setActiveSection] = useState('home')
  const headerRef = createRef()
  const aboutRef = createRef()
  const skillsRef = createRef()
  const contactRef = createRef()
  const refs = [headerRef, aboutRef, skillsRef, contactRef]
  const [mode,setMode] = useState('dark')

  const 

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      const intersectedEntry = entries.find((entry) => entry.isIntersecting==true)
      if (intersectedEntry) {
          setActiveSection(intersectedEntry.target.id)
        }
    })
    refs.forEach((ref) => {
      observer.observe(ref.current)
    })
  },[])

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
    Aos.refresh()
  }, [])
  

  return (
    <>
      <Head>
        <title>Sarthak Karandikar</title>
        <meta name="description" content="SK's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar activeSection={activeSection} />
        <Header ref={ headerRef}/>
        <About ref={ aboutRef } />
        <Skills ref={ skillsRef } />
        <Contact ref={ contactRef } />
        <Footer />
        <Script src='https://kit.fontawesome.com/638bbcf842.js' crossorigin='anonymous' />
      </main>
    </>
  )
}
