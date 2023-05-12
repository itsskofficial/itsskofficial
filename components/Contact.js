import Link from "next/link"
import styles from '@styles/Contact.module.css'
import { forwardRef } from "react"
import { useMediaQuery } from "usehooks-ts"
import { useEffect, useState } from 'react'

const Contact = forwardRef((props, ref) => {
    const isBigScreen = useMediaQuery('(min-width:1201px)')
    const [mediaMatch, setMediaMatch] = useState(true)
    useEffect(() => {
        if (isBigScreen == false){
            setMediaMatch(false)
        }
    },[isBigScreen])

    const bigScreen =
        <section data-aos='fade-in' ref={ref} id='contact' className={styles.parent}>
            <div className={styles.contactIcons}>
                <Link href='https://linkedin.com/'>
                    <i className='fa-brands fa-linkedin fa-3x' style={{color:props.mode=='dark'?null: '#171717'}}/>
                </Link>
                <Link href='mailto:sarthakkarandikar03@gmail.com'>
                    <i className='fa-solid fa-envelope fa-3x' style={{color:props.mode=='dark'?null: '#171717'}}/>
                </Link>
                <Link href='tel:+918275017823'>
                    <i className='fa-solid fa-phone fa-3x' style={{color:props.mode=='dark'?null: '#171717'}}/>
                </Link>
            </div>
            <div className={styles.contactText}>
                <h2 className={[styles.contactTitle, props.mode=='dark'?null:styles.light].join(' ')}>
                    Contact
                </h2>
                <h3 className={[styles.contactInfo, props.mode=='dark'?null:styles.light].join(' ')}>
                    I am available on LinkedIn for discussions and stuff. If LinkedIn is not convenient you can mail me too
                </h3>
            </div>
        </section>

    const smallScreen =
        <section data-aos='fade-in' ref={ref} id='contact' className={styles.parent}>
            <div className={styles.contactText}>
                <h2 className={[styles.contactTitle, props.mode=='dark'?null:styles.light].join(' ')}>
                    Contact
                </h2>
                <div className={styles.contactIcons}>
                    <Link href='https://www.linkedin.com/in/sarthak-karandikar-0223b7228/'>
                        <i className='fa-brands fa-linkedin fa-2x' style={{color:props.mode=='dark'?null: '#171717'}}/>
                    </Link>
                    <Link href='mailto:sk@itsskofficial.com'>
                        <i className='fa-solid fa-envelope fa-2x' style={{color:props.mode=='dark'?null: '#171717'}}/>
                    </Link>
                    <Link href='tel:+918275017823'>
                        <i className='fa-brands fa-whatsapp fa-2x' style={{color:props.mode=='dark'?null: '#171717'}}/>
                    </Link>
                </div>
                <h3 className={[styles.contactInfo, props.mode=='dark'?null:styles.light].join(' ')}>
                    I am available on LinkedIn for discussions and stuff. If LinkedIn is not convenient you can mail me too
                </h3>
            </div>
        </section>
    return (
        mediaMatch?bigScreen:smallScreen
    )
})

export default Contact