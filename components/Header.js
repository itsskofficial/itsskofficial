import styles from '@styles/Header.module.css'
import Image from 'next/image'
import { forwardRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { useMediaQuery } from 'usehooks-ts'
import { useEffect } from 'react'

const Header = (props) => {
    const isBigScreen = useMediaQuery('(min-width:1201px)')
    var mediaMatch=true
    useEffect(() => {
        if (isBigScreen == false){
            mediaMatch=false
        }
    },[])
    return (
        <section id='home' className={styles.parent}>
            <div className={styles.headText}>
                <h1 className={[styles.headTitle,props.mode=='dark'?null:styles.light].join(' ')}>
                    Hey, I'm Sarthak
                </h1>
                <h2 className={[styles.headSubtitle, props.mode=='dark'?null:styles.light].join(' ')}>
                    I am a{' '}
                    <TypeAnimation 
                        sequence={[
                            'technology',
                            3000,
                            'science',
                            3000,
                            'philosophy',
                            3000
                        ]}
                        repeat={Infinity}
                        speed={20}
                        deletionSpeed={20} />
                    enthusiast
                </h2>
                <button className={props.mode=='dark'?styles.headContact:styles.headContactLight}>
                    <a href='#contact'>
                        <i className='fa-solid fa-message' style={{marginRight: '10px'}} />Contact Me
                    </a>
                </button>
            </div>
            <div className={styles.headImage}>
                <Image src={props.mode == 'dark' ? '/assets/images/header.jpg' : '/assets/images/headerlight.jpg'} style={{width:mediaMatch?'500':'300', height:mediaMatch?'500':'300'}} priority={true} width={mediaMatch ? '450' : '300'} height={mediaMatch ? '450' : '300'} alt='Hero Image'/>
            </div>
        </section>
    )
}

export default Header