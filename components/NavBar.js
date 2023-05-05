import styles from "@styles/NavBar.module.css"

const NavBar = () => {

    const navlinks = [
        {
            name: "Home",
            classes: [styles.navlink, styles.navlinkActive].join(' ')
        },
        {
            name: "About",
            classes: [styles.navlink, styles.navlinkActive].join(' ')
        },
        {
            name: "Skills",
            classes: [styles.navlink, styles.navlinkActive].join(' ')
        },
        {
            name: "Contact",
            classes: [styles.navlink, styles.navlinkActive].join(' ')
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
                        <a href={`/#${link.toLowerCase()}`} className={styles.navLink} onClick={() => {
                            navlinks.forEach((link) => {
                               link['classes']
                            })
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