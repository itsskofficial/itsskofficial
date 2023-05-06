import styles from "@styles/NavBar.module.css"
import { useCallback, useEffect, useState } from "react"

const NavBar = (props) => {
    const tempActiveSection = props.activeSection
    const firstLetter = tempActiveSection[0]
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = tempActiveSection.slice(1)
    const activeSection = firstLetterCap + remainingLetters
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

    const [navlinks, setNavlinks] = useState(initialNavlinks)
    
    useEffect(() => {
        setNavlinks(initialNavlinks)
    }, [activeSection])
    
    

    return (
        
    )
}

export default NavBar