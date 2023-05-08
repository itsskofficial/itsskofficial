import Link from "next/link"
import styles from '@styles/Contact.module.css'
import { forwardRef } from "react"
import { useMediaQuery } from "usehooks-ts"
import { useEffect } from 'react'

const Contact = forwardRef((props, ref) => {
    const isBigScreen = useMediaQuery('(min-width:1201px)')
    var mediaMatch=true
    useEffect(() => {
        if (isBigScreen == false){
            mediaMatch=false
        }
    },[])

    const bigScreen =
        <section ref={ref} id='contact' className={styles.parent}>
            <div className={styles.contactIcons}>
                <Link href='https://linkedin.com/'>
                    <i className='fa-brands fa-linkedin fa-3x'/>
                </Link>
                <Link href='mailto:sarthakkarandikar03@gmail.com'>
                    <i className='fa-solid fa-envelope fa-3x'/>
                </Link>
                <Link href='tel:+918275017823'>
                    <i className='fa-solid fa-phone fa-3x'/>
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

    const smallScreen =
        <section ref={ref} id='contact' className={styles.parent}>
            <div className={styles.contactText}>
                <h2 className={styles.contactTitle}>
                    Contact
                </h2>
                <div className={styles.contactIcons}>
                    <Link href='https://linkedin.com/'>
                        <i className='fa-brands fa-linkedin fa-2x'/>
                    </Link>
                    <Link href='mailto:sarthakkarandikar03@gmail.com'>
                        <i className='fa-solid fa-envelope fa-2x'/>
                    </Link>
                    <Link href='tel:+918275017823'>
                        <i className='fa-solid fa-phone fa-2x'/>
                    </Link>
                </div>
                <h3 className={styles.contactInfo}>
                    I am available on LinkedIn for discussions and stuff. If LinkedIn is not convenient you can mail me too
                </h3>
            </div>
        </section>
    return (
        mediaMatch?bigScreen:smallScreen
    )
})

export default Contact