import Head from 'next/head'
import NavBar from '@components/NavBar'
import Header from '@components/Header'
import About from '@components/About'
import Skills from '@components/Skills'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import { useRef, useState, useEffect, createRef } from 'react'

export default function Home() {

  const [activeSection, setActiveSection] = useState('home')
  const headerRef = createRef()
  const aboutRef = createRef()
  const skillsRef = createRef()
  const contactRef = createRef()
  const refs = [headerRef, aboutRef, skillsRef, contactRef]

  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   window.addEventListener('scroll', () => {
    //     const activeRef = refs.filter((ref) => {
    //       window.pageYOffset >= ref.current.offsetTop
    //     })
    //     setActiveSection(activeRef.current.id)
    //     console.log(activeSection)
    //   })
    // }

    const observer = new IntersectionObserver((entries) => {
      console.log(entries)
      const intersectedEntry = entries.find((entry) => entry.isIntersecting==true)
      console.log(intersectedEntry)
    })
    observer.observe(headerRef.current, aboutRef.current, skillsRef.current, contactRef.current)
  },[])
  

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
        <NavBar activeSection={activeSection} />
        <Header ref={ headerRef}/>
        <About ref={ aboutRef } />
        <Skills ref={ skillsRef } />
        <Contact ref={ contactRef } />
        <Footer />
      </main>
    </>
  )
}
