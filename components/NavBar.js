import Link from "next/link"
import { Fragment } from "react"

const NavBar = () => {

    const navlinks = 
    return (
        <Fragment>
            <ul className={navlist}>
                ,<li>
                    <Link href='/' className={navlink}>
                        Home
                    </Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default NavBar