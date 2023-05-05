import styles from '@styles/Footer.module.css'

const Footer = () => {
    return (
        <section className={styles.parent}>
            <div className={styles.footerText}>
                <h3 className={styles.footerLogo}>
                    SK
                </h3>
                <h3>
                    &#168;
                </h3>
                <i class='fa-thin fa-copyright fa-1x'/>
                <h3 className={styles.footerYear}>
                    2023
                </h3>
            </div>
        </section>
    )
}

export default Footer