import styles from "@styles/NavBar.module.css"
import { slide as Menu } from "react-burger-menu"
import { useEffect, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

const NavBar = (props) => {
    const tempActiveSection = props.activeSection
    const firstLetter = tempActiveSection[0]
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = tempActiveSection.slice(1)
    const activeSection = firstLetterCap + remainingLetters
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isBigScreen = useMediaQuery('(min-width:1201px)')
    var mediaMatch=true

    useEffect(() => {
        if (isBigScreen == false){
            mediaMatch=false
        }
    }, [])

    const tempNavlinks = [
        {
            id: 0,
            name: "Home",
            classes: [props.mode=='dark'?styles.navLink:styles.navLinkLight]
        },
        {
            id: 1,
            name: "About",
            classes: [props.mode=='dark'?styles.navLink:styles.navLinkLight]
        },
        {
            id: 2,
            name: "Skills",
            classes: [props.mode=='dark'?styles.navLink:styles.navLinkLight]
        },
        {
            id: 3,
            name: "Contact",
            classes: [props.mode=='dark'?styles.navLink:styles.navLinkLight]
        }
    ]

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const handleMenuChange = (state) => {
        setIsMenuOpen(state.isOpen)
    }

    const initialNavlinks = tempNavlinks.map(link => link['name'] == activeSection ? {
        id: link['id'],
        name: link['name'],
        classes: [props.mode=='dark'?styles.navLink:styles.navLinkLight,props.mode=='dark'?styles.navLinkActive:styles.navLinkActiveLight].join(' ')
    } :
        link
    )

    const [navlinks, setNavlinks] = useState(initialNavlinks)
    console.log(navlinks)
    useEffect(() => {
        setNavlinks(initialNavlinks)
    }, [activeSection])
    
    const bigScreen = (
        <section className={props.mode=='dark'?styles.parent:styles.parentLight}>
            <h2 className={[styles.navbarLogo,props.mode=='dark'?null:styles.light].join(' ')}>
                SK
            </h2>
            <ul className={styles.navList} style={{listStyleType:"none"}}>
                {navlinks.map(link => {
                    return (
                        <li key={link['id']} >
                        <a href={`/#${link['name'].toLowerCase()}`} className={link['classes']} onClick={() => {
                            var tempNavlinks = [
                                {
                                    id: 0,
                                    name: "Home",
                                    classes: [props.mode=='dark'?styles.navLink:styles.navLinkLight]
                                },
                                {
                                    id: 1,
                                    name: "About",
                                    classes: [props.mode=='dark'?styles.navLink:styles.navLinkLight]
                                },
                                {
                                    id: 2,
                                    name: "Skills",
                                    classes: [props.mode=='dark'?styles.navLink:styles.navLinkLight]
                                },
                                {
                                    id: 3,
                                    name: "Contact",
                                    classes: [props.mode=='dark'?styles.navLink:styles.navLinkLight]
                                }
                            ]
                            tempNavlinks[link['id']]['classes'] = [props.mode=='dark'?styles.navLink:styles.navLinkLight,props.mode=='dark'?styles.navLinkActive:styles.navLinkActiveLight].join(' ')
                            setNavlinks(tempNavlinks)
                        }}>
                            {link['name']}
                            </a>
                            </li>
                    )
                })}
            </ul>
            <span onClick={() => {
                if (props.mode=='light')
                    props.toggleMode('dark')
                else
                    props.toggleMode('light')
               
            }}>
                <i className={`fa-solid fa-${props.mode == 'dark' ? 'moon' : 'sun'}`} style={{color:props.mode=='light' && '#171717'}} />
            </span>
        </section>)

    const smallScreen = (
        <section className={styles.parent}>
            <h2 className={styles.navbarLogo}>
                SK
            </h2>
            <Menu className={styles.navbarMenu} right width={150} isOpen={isMenuOpen} onStateChange={handleMenuChange}>
                {navlinks.map(link => {
                    return (
                        <a key={link['id']} href={`/#${link['name'].toLowerCase()}`} className={link['classes']} onClick={() => {
                            var tempNavlinks = [
                                {
                                    id: 0,
                                    name: "Home",
                                    classes: [styles.navLink]
                                },
                                {
                                    id: 1,
                                    name: "About",
                                    classes: [styles.navLink]
                                },
                                {
                                    id: 2,
                                    name: "Skills",
                                    classes: [styles.navLink]
                                },
                                {
                                    id: 3,
                                    name: "Contact",
                                    classes: [styles.navLink]
                                }
                            ]
                            tempNavlinks[link['id']]['classes'] = [styles.navLink, styles.navLinkActive].join(' ')
                            setNavlinks(tempNavlinks)
                            closeMenu()
                        }}>
                            {link['name']}
                        </a>
                    )
                })}
            </Menu>
        </section>)


    return (
         mediaMatch ? bigScreen : smallScreen
    )
}

export default NavBar