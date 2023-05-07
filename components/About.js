import styles from '@styles/About.module.css'
import Image from 'next/image'
import { forwardRef, useRef } from 'react'
import useDownloader from 'react-use-downloader'
import { useMediaQuery } from 'usehooks-ts'

const About = forwardRef((props, ref) => {
    const mediaMatch = useMediaQuery(('min-width:1201px'))
    const { download } = useDownloader()
    return (
        <section ref={ref} id='about' className={styles.parent}>
            <div className={styles.aboutImage}>
                <Image src='/../public/assets/images/aboutImage.jpeg' width={mediaMatch?'400':'300'} height='350' alt='About Image' />
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
                    <i class='fa-solid fa-file' style={{marginRight: '10px'}} />Resume
                </button>
            </div>
        </section>
    )
})

export default About