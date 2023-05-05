import Link from "next/link"
import styles from "@styles/NavBar.module.css"
import Image from "next/image"

const NavBar = () => {

    const navlinks = ["Home", "About", "Skills", "Projects", "Contact"]

    return (
        <div className={styles.parent}>
            <h2 className={styles.navbarLogo}>
                SK
            </h2>
            <ul className={styles.navList}>
                {navlinks.map(link => {
                    return(
                        <Link href={`/#${link.toLowerCase()}`} className={styles.navLink}>
                            {link}
                        </Link>
                    )
                })}
            </ul>
            <h2 className={styles.logo}>
                Mode
            </h2>
        </div>
    )
}

export default NavBar