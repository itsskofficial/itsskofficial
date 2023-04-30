import styles from '@styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
    const roles = ["AI", "IOT", "Metaverse"]
    return (
        <div className={headText}>
            <h1 className={headTitle}>
                Hey, I'm Sarthak
            </h1>
            <h2 className={headSubtitle}>
                I am an {roles[0]} developer
            </h2>
            <button className={headContact}>
                <Link href='#contact'>
                    Contact Me
                </Link>
            </button>
        </div>
    )
}

export default Header