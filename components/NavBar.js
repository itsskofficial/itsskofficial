import styles from "@styles/NavBar.module.css"
import { useState } from "react"

const NavBar = () => {

    const [navlinks, setNavlinks] = useState([
        {
            name: "Home",
            classes: [styles.navLink, styles.navLinkActive].join(' ')
        },
        {
            name: "About",
            classes: [styles.navLink]
        },
        {
            name: "Skills",
            classes: [styles.navLink]
        },
        {
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
                            setNavlinks(navlinks.map((link) => {
                               link['classes'] = [styles.navLink].join(' ')
                            }))
                            const newarray=navlinks.map((link) => {
                               link['classes'] = [styles.navLink].join(' ')
                            })
                            console.log(newarray)
                            setNavlinks([...navlinks, link = { name: link['name'], classes: [styles.navLink, styles.navLinkActive].join(' ') }])
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