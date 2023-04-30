import styles from '@styles/Header.module.css'

const Header = () => {
    const roles = ["AI", "IOT", "Metaverse"]
    return (
        <div className={headtext}>
            <h1 className={headTitle}>
                Hey, I'm Sarthak
            </h1>
            <h2 className={headSubtitle}>
                I am an {roles[0]} developer
            </h2>
            <button className={headContact}
        </div>
    )
}

export default Header