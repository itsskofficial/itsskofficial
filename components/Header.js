import styles from '@styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const roles = ["AI", "IOT", "Metaverse"]
    return (
        <div className={styles.parent}>
            <div className={styles.headText}>
                <h1 className={styles.headTitle}>
                    Hey, I'm Sarthak
                </h1>
                <h2 className={styles.headSubtitle}>
                    I am an {roles[0]} developer
                </h2>
                <button className={styles.headContact}>
                    <Link href='#contact'>
                        Contact Me
                    </Link>
                </button>
            </div>
            <div className={styles.headImage}>
                <Image src='/../public/assets/headImage.jpg' width='300' height='300'/>
            </div>
        </div>
        
    )
}

export default Header