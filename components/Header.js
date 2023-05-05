import styles from '@styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

const Header = () => {
    const roles = ["AI", "IOT", "Metaverse"]
    return (
        <section id='home' className={styles.parent}>
            <div className={styles.headText}>
                <h1 className={styles.headTitle}>
                    Hey, I'm Sarthak
                </h1>
                <h2 className={styles.headSubtitle}>
                    I am a{' '}
                    <TypeAnimation 
                        sequence={[
                            'AI',
                            3000,
                            'IOT',
                            3000,
                            'Metaverse',
                            3000
                        ]} 
                        repeat={Infinity}
                        speed={20}
                        deletionSpeed={20 />
                    developer
                </h2>
                <button className={styles.headContact}>
                    <Link href='#contact'>
                    <i class='fa-solid fa-message' style={{marginRight: '10px'}} />Contact Me
                    </Link>
                </button>
            </div>
            <div className={styles.headImage}>
                <Image src='/../public/assets/images/headImage.jpg' width='500' height='500' alt='Hero Image'/>
            </div>
        </section>
        
    )
}

export default Header