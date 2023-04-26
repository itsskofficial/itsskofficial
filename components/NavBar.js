import Link from "next/link"
import { Fragment } from "react"
import styles from "@styles/NavBar.module.css"
import Image from "next/image"

const NavBar = () => {

    const navlinks = ["Home", "About", "Skills", "Projects", "Contact"]

    return (
        <Fragment>
            <div className={styles.parent}>
                <h2 className={styles.logo}>
                    SK
                </h2>
                <ul className={styles.navlist}>
                    {navlinks.map(link => {
                        return(
                            <Link href={`/#${link.toLowerCase()}`} className={styles.navlink}>
                                {link}
                            </Link>
                        )
                    })}
                </ul>
                <
            </div>
        </Fragment>
    )
}

export default NavBar