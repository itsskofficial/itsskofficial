import Link from "next/link"
import styles from '@styles/Contact.module.css'

const Contact = () => {
    return (
        <section id='contact' className={styles.parent}>
            <div className={styles.contactIcons}>
                <Link href='https://linkedin.com/'>
                    <i class='fa-brands fa-linkedin fa-4x'/>
                </Link>
                <Link href='mailto:sarthakkarandikar03@gmail.com'>
                    <i class='fa-solid fa-envelope fa-4x'/>
                </Link>
                <Link href='tel:+918275017823'>
                    <i class='fa-solid fa-phone fa-4x'/>
                </Link>
            </div>
            <div className={styles.contactText}>
                <h2 className={styles.contactTitle}>
                    Contact
                </h2>
                <h3 className={styles.contactInfo}>
                    I am available on LinkedIn for discussions and stuff. If LinkedIn is not convenient you can mail me too
                </h3>
            </div>
        </section>
    )
}

export default Contact