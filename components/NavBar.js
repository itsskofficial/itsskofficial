import Link from "next/link"
import { Fragment } from "react"
import styles from "@styles/NavBar.module.css"
import Image from "next/image"

const NavBar = () => {

    const navlinks = ["Home", "About", "Skills", "Projects", "Contact"]

    return (
        <Fragment>
            <div className={styles.parent}>
                <h3>
                    SK
                </h3>
                <ul className={styles.navlist}>
                    {navlinks.map(link => {
                        return(
                            <Link href={link == "Home" ? "/" : `/#${link}`} className={styles.navlink}>
                                {link}
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </Fragment>
    )
}

export default NavBar