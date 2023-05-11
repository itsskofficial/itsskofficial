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
    const [mediaMatch, setMediaMatch] = useState(true)
    const burgerMenuClasses = ['bm-burger-button', 'bm-burger-bars', 'bm-burger-bars-hover', 'bm-cross-button', 'bm-cross', 'bm-menu-wrap','bm-morph-shape', 'bm-item-list', 'bm-item', 'bm-overlay'].join(' ')
    const burgerMenuClassesLight = [bm-burger-button, bm-burger-bars, bm-burger-bars-hover, bm-cross-button, bm-cross, bm-menu-wrap,bm-morph-shape, bm-item-list, bm-item, bm-overlay]

    useEffect(() => {
        if (isBigScreen == false){
            setMediaMatch(false)
        }
    })

    console.log(mediaMatch)

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
        <section className={props.mode=='dark'?styles.parent:styles.parentLight}>
            <h2 className={[styles.navbarLogo,props.mode=='dark'?null:styles.light].join(' ')}>
                SK
            </h2>
            <Menu className={[props.mode=='dark'?burgerMenuClasses:burgerMenuClassesLight.map((c)=>{styles.${c}}].join(' ')} right width={150} isOpen={isMenuOpen} onStateChange={handleMenuChange}>
                {navlinks.map(link => {
                    return (
                        <a key={link['id']} href={`/#${link['name'].toLowerCase()}`} className={link['classes']} onClick={() => {
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
                            closeMenu()
                        }}>
                            {link['name']}
                        </a>
                    )
                })}
                <span onClick={() => {
                    if (props.mode=='light')
                        props.toggleMode('dark')
                    else
                        props.toggleMode('light')
                
                    }}>
                    <i className={`fa-solid fa-${props.mode == 'dark' ? 'moon' : 'sun'}`} style={{color:props.mode=='light' && '#171717'}} />
                </span>
            </Menu>
        </section>)
    return (
         mediaMatch ? bigScreen : smallScreen
    )
}

export default NavBar