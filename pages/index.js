import Head from 'next/head'
import NavBar from '@components/NavBar'
import Header from '@components/Header'
import About from '@components/About'
import Skills from '@components/Skills'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import { useState, useEffect, createRef, Fragment } from 'react'
import Script from 'next/script'

export default function Home() {

  const [activeSection, setActiveSection] = useState('home')
  const headerRef = createRef()
  const aboutRef = createRef()
  const skillsRef = createRef()
  const contactRef = createRef()
  const refs = [headerRef, aboutRef, skillsRef, contactRef]

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
  

  return (
    <>
      <Head>
        <title>Sarthak Karandikar</title>
        <meta name="description" content="SK's personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Script src='https://kit.fontawesome.com/638bbcf842.js' crossorigin='anonymous'/>
        {/* <NavBar activeSection={activeSection} /> */}
        <Header ref={ headerRef}/>
        <About ref={ aboutRef } />
        <Skills ref={ skillsRef } />
        <Contact ref={ contactRef } />
        <Footer />
      </main>
    </>
  )
}
