import styles from '@styles/About.module.css'
import Image from 'next/image'
import { forwardRef } from 'react'
import useDownloader from 'react-use-downloader'
import { useMediaQuery } from 'usehooks-ts'
import { useEffect } from 'react'

const About = forwardRef((props, ref) => {
    const isBigScreen = useMediaQuery('(min-width:1201px)')
    var mediaMatch=true
    useEffect(() => {
        if (isBigScreen == false){
            mediaMatch=false
        }
    },[])
    const { download } = useDownloader()
    return (
        <section data-aos='fade-left' ref={ref} id='about' className={styles.parent}>
            <div className={styles.aboutImage}>
                <Image src='/../public/assets/images/aboutImage.jpg' width={mediaMatch?'450':'300'} height={mediaMatch?'450':'300'} alt='About Image' />
            </div>
            <div className={styles.aboutText}>
                <h1 className={styles.aboutTitle}>
                    About
                </h1>
                <h2 className={styles.aboutInfo}>
                    A passionate guy who likes all things digital, from design to coding to deployment. Majorly interested in AI, IOT and Metaverse. Likes reading a lot and learns from movies/web series. Thinking about a cool future? Hit me up!
                </h2>
                <button className={styles.aboutResume} onClick={()=> {
                    download('/../public/assets/resources/resume.pdf', 'Resume.pdf')
                }}>
                    <i className='fa-solid fa-file' style={{marginRight: '10px'}} />Resume
                </button>
            </div>
        </section>
    )
})

export default About