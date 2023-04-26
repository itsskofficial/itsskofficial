import Link from "next/link"
import { Fragment } from "react"
import styles from "@styles/NavBar.module.css"

const NavBar = () => {

    const navlinks = ["Home", "About", "Skills", "Projects", "Contact"]

    return (
        <Fragment>
            <div className={styles.parent}>
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
            <
        </Fragment>
    )
}

export default NavBar