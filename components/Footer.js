import styles from '@styles/Footer.module.css'

const Footer = () => {
    return (
        <section id='footer' className={styles.parent}>
            <div className={styles.footer}>
                <h3 className={[styles.footerLogo, props.mode=='dark'?null:styles.light].join(' ')}>
                    SK
                </h3>
                <h3 className={[styles.footerCopyright, props.mode=='dark'?null:styles.light].join(' ')}>
                    &copy;
                </h3>
                <h3 className={[styles.footerText, props.mode=='dark'?null:styles.light].join(' ')}>
                    2023
                </h3>
                <h3 className={styles.footerText}>
                    All Rights Reserved
                </h3>
            </div>
        </section>
    )
}

export default Footer