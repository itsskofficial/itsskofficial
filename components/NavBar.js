import styles from "@styles/NavBar.module.css"
import { useEffect, useState } from "react"

const NavBar = (props) => {
    const tempActiveSection = props.activeSection
    const firstLetter = tempActiveSection[0]
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = tempActiveSection.slice(1)
    const activeSection = firstLetterCap + remainingLetters
    console.log(activeSection)

    const tempNavlinks = [
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
    ]

    const initialNavlinks = tempNavlinks.map(link => link['name'] == activeSection ? {
        id: link['id'],
        name: link['name'],
        classes : [styles.navLink, styles.navLinkActive].join(' ')
    } :
        link
    )

    console.log(intialNavlinks)
    const [navlinks, setNavlinks] = useState(initialNavlinks)

    

    return (
        <div className={styles.parent}>
            <h2 className={styles.navbarLogo}>
                SK
            </h2>
            <ul className={styles.navList}>
                {navlinks.map(link => {
                    return(
                        <a href={`/#${link['name'].toLowerCase()}`} className={link['classes']} onClick={() => {
                            var tempNavlinks = [
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
                            ]
                            tempNavlinks[link['id']]['classes'] = [styles.navLink, styles.navLinkActive].join(' ')
                            setNavlinks(tempNavlinks)
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