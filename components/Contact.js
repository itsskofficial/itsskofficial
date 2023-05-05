import Link from "next/link"
import styles from '@styles/Contact.module.css'

const Contact = () => {
    return (
        <section className={styles.parent}>
            <div className={styles.contactIcons}>
                <Link href='https://linkedin.com/'>
                    <i class='fa-brands fa-linkedin fa-4x'/>
                </Link>
                <Link href='mailto:sarthakkarandikar03@gmail.com'>
                    <i class='fa-brands fa-envelope fa-4x'/>
                </Link>
            </div>
        </section>
    )
}

export default Contact