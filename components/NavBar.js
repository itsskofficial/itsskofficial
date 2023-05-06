import styles from "@styles/NavBar.module.css"
import { useState } from "react"

const NavBar = () => {

    const [navlinks, setNavlinks] = useState([
        {
            id:0,
            name: "Home",
            classes: [styles.navLink, styles.navLinkActive].join(' ')
        },
        {
            id:1,
            name: "About",
            classes: [styles.navLink]
        },
        {
            id:2,
            name: "Skills",
            classes: [styles.navLink]
        },
        {
            id:3,
            name: "Contact",
            classes: [styles.navLink]
        }
    ])

    return (
        <div className={styles.parent}>
            <h2 className={styles.navbarLogo}>
                SK
            </h2>
            <ul className={styles.navList}>
                {navlinks.map(link => {
                    return(
                        <a href={`/#${link['name'].toLowerCase()}`} className={link['classes']} onClick={() => {
                            setNavlinks([
                                {
                                    id:0,
                                    name: "Home",
                                    classes: [styles.navLink]
                                },
                                {
                                    id:1,
                                    name: "About",
                                    classes: [styles.navLink]
                                },
                                {
                                    id:2,
                                    name: "Skills",
                                    classes: [styles.navLink]
                                },
                                {
                                    id:3,
                                name: "Contact",
                                classes: [styles.navLink]
                            }
                            ])
                            const tempNavlinks = navlinks
                            tempNavlinks[link]['classes'] =  [styles.navLink, styles.navLinkActive].join(' ')
                            setNavlinks(tempNavlinks)
                            console.log(navlinks)
                        }}>
                            {link['name']}
                        </a>
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