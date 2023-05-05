import styles from '@styles/Footer.module.css'

const Footer = () => {
    return (
        <section className={styles.parent}>
            <div className={styles.footerText}>
                <h3 className={styles.footerLogo}>
                    SK
                </h3>
                <i class="fa-regular fa-copyright"></i>
                <h3 className={styles.footerLogo}>
                    2023
                </h3>
            </div>
        </section>
    )
}

export default Footer