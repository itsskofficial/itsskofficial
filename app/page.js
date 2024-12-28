"use client"

import NavBar from '@components/NavBar'
import Header from '@components/Header'
import About from '@components/About'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import { useState, useEffect, createRef, Fragment } from 'react'
import Script from 'next/script'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  const headerRef = createRef()
  const aboutRef = createRef()
  const contactRef = createRef()
  const [mode, setMode] = useState('dark')

  const toggleMode = (userMode) =>{
    setMode(userMode)
  }
  useEffect(() => {
    if (mode == 'dark')
      document.body.style.backgroundColor = '#171717'
    else
      document.body.style.backgroundColor = '#ffffff'
  },[mode])
  

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
    Aos.refresh()
  }, [])

  return (
    <Fragment>
        <main>
          <NavBar mode={mode} toggleMode={toggleMode} />
          <Header ref={headerRef} mode={mode} />
          <About ref={aboutRef} mode={mode} />
          <Contact ref={contactRef} mode={mode} />
          <Footer mode={mode} />
          <Script src='https://kit.fontawesome.com/638bbcf842.js' crossorigin='anonymous' />
        </main>
    </Fragment>
  )
}
