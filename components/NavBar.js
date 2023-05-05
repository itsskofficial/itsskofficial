import styles from "@styles/NavBar.module.css"

const NavBar = () => {

    const navlinks = [
        {
            name: "Home",
            classes: [styles.navLink, styles.navLinkActive].join(' ')
        },
        {
            name: "About",
            classes: [styles.navLink, styles.navLinkActive].join(' ')
        },
        {
            name: "Skills",
            classes: [styles.navLink, styles.navLinkActive].join(' ')
        },
        {
            name: "Contact",
            classes: [styles.navLink, styles.navLinkActive].join(' ')
        }
    ]

    return (
        <div className={styles.parent}>
            <h2 className={styles.navbarLogo}>
                SK
            </h2>
            <ul className={styles.navList}>
                {navlinks.map(link => {
                    return(
                        <a href={`/#${link['name'].toLowerCase()}`} className={link['classes']} onClick={() => {
                            navlinks.forEach((link) => {
                               link['classes'] = [styles.navLink]
                            })
                            link['classes'] = [styles.navLink, styles.navLinkActive].join(' ')
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