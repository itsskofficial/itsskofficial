import Link from "next/link"
import { Fragment } from "react"

const NavBar = () => {

    const navlinks = ["Home", "About", "Skills", "Projects", "Contact"]

    return (
        <Fragment>
            <ul className={navlist}>
                {navlinks.map(link => {
                    <Link href={link?
                } className = { navlink }
                })}
            </ul>
        </Fragment>
    )
}

export default NavBar