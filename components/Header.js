import styles from '@styles/Header.module.css'

const Header = () => {
    const roles = ["AI", "IOT", "Metaverse"]
    return (
        <div className={headtext}>
            <h1 className={>
                Hey, I'm Sarthak
            </h1>
            <h2>
                I am an {roles[0]} developer
            </h2>
            <h3>

            </h3>
        </div>
    )
}

export default Header