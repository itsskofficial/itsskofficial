import styles from '@styles/Header.module.css'

const Header = () => {
    const roles = ["AI", "IOT", "Metaverse"]
    return (
        <div className={headtext}>
            <h1 className={headtitle}>
                Hey, I'm Sarthak
            </h1>
            <h2 className={headsubtitle}>
                I am an {roles[0]} developer
            </h2>
            <button
        </div>
    )
}

export default Header