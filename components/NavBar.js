import Link from "next/link"
import { Fragment } from "react"
import styles from "@styles/NavBar.module.css"

const NavBar = () => {

    const navlinks = ["Home", "About", "Skills", "Projects", "Contact"]

    return (
        <Fragment>
            <ul className={styles.navlist}>
                {/* {navlinks.map(link => {
                    <Link href={link == "Home" ? "/" : `/#${link}`} className={styles.navlink}>
                        {link}
                    </Link>
                })} */}
                <li>
                    {navlinks.map(link => {
                        <li>
                            {link}
                        </li>
                    })}
                </li>
            </ul>
        </Fragment>
    )
}

export default NavBar