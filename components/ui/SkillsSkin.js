import styles from '@styles/SkillsSkin.module.css'
import Image from 'next/image'
import { Fragment } from 'react'

const SkillsSkin = (props) => {

    const codeIcons = (
        <Fragment>
            <div className={styles.skillsSkinRow} >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px" fill-rule="nonzero">
    <g fill="#dddddd" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
        <path d="M0,256v-256h256v256z" id="bgRectangle"/>
    </g>
    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
        <g transform="scale(5.33333,5.33333)">
            <path d="M16,39.609l7,4v-39.609l-7,4z"/>
            <path d="M23,12.433l-17,9.817v-8.5l17,-9.817z" />
            <path d="M32,39.609l-7,4v-39.609l7,4z" />
            <path d="M25,12.433l17,9.817v-8.5l-17,-9.817z" />
            <path d="M29,19.732v7.633l7,4.042v-7.632z" />
        </g>
    </g>
</svg>
                <i class='fa-brands fa-python fa-3x' />
                <i class='fa-brands fa-js fa-3x' />
                <i class='fa-brands fa-c fa-3x' />
                
                <i class='fa-brands fa-html5 fa-3x' />
            </div>
            <div className={styles.skillsSkinRow} >
                <i class='fa-brands fa-css3 fa-3x' />
                <i class='fa-brands fa-react fa-3x' />
                <i class='fa-brands fa-node fa-3x' />
                <Image src='/../../public/assets/images/tf.svg' width='50' height='50' alt='EJs Icon'/>
                <Image src='/../../public/assets/images/mongodb.svg' width='50' height='50' alt='EJs Icon'/>
            </div>
            <div className = {styles.skillsSkinRow } >
                <i class='fa-brands fa-react fa-3x' />
                <i class='fa-brands fa-node fa-3x' />
                <img src='/../public/assets/images/ejs.svg' width='50' height='50' alt='EJs Icon'/>
                <Image src='/../public/assets/images/mongodb.svg' width='50' height='50' alt='EJs Icon'/>
            </div>
        </Fragment>
            
    )

    const toolsIcons = (
            <div className = {styles.skillsSkinRow }>
                <i class='fa-brands fa-figma fa-3x' />
            </div>
        )

    return (
        <div className={styles.parent}>
            {props.option == 'code' ? codeIcons : toolsIcons}
        </div>
    )
}

export default SkillsSkin