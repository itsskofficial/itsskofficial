import styles from '@styles/SkillsSkin.module.css'
import Image from 'next/image'
import { Fragment } from 'react'

const SkillsSkin = (props) => {

    const codeIcons = (
        <Fragment>
            <div className = {styles.skillsSkinRow } >
                <i class='fa-brands fa-python fa-3x' />
                <i class='fa-brands fa-js fa-3x' />
                <i class='fa-brands fa-c fa-3x' />
                <Image src='/../../public/assets/images/cpp.svg' width='50' height='50' alt='CPP Icon'/>
                <i class='fa-brands fa-html5 fa-3x' />
            </div>
            <div className = {styles.skillsSkinRow } >
                <i class='fa-brands fa-css3 fa-3x' />
                <i class='fa-brands fa-react fa-3x' />
                <i class='fa-brands fa-node fa-3x' />
                <Image src='/../../public/assets/images/ejs.svg' width='50' height='50' alt='EJs Icon'/>
                <Image src='/../../public/assets/images/mongodb.svg' width='50' height='50' alt='EJs Icon'/>
            </div>
            <div className = {styles.skillsSkinRow } >
                <img src='/../../public/assets/images/tf.svg' width='50' height='50' alt='EJs Icon'/>
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