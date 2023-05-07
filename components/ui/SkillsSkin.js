import styles from '@styles/SkillsSkin.module.css'
import { Fragment } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import Image from 'next/image'

const SkillsSkin = (props) => {
    const mediaMatch = useMediaQuery('(min-width:1201px)')

    const codeIcons = (
        <Fragment>
            <div className={styles.skillsSkinRow} >
                <i class={`fa-brands fa-python fa-${mediaMatch?'3x':'2x'}`} />
                <i class={`fa-brands fa-js fa-${mediaMatch?'3x':'2x'}`} />
                <i class={`fa-brands fa-c fa-${mediaMatch?'3x':'2x'}`} />
                <Image src='/assets/images/cpp.svg' width='60' height='60' alt='C++ Icon'/>
                <i class={`fa-brands fa-html5 fa-${mediaMatch ? '3x' : '2x'}`} />
                
                
            </div>
            <div className={styles.skillsSkinRow} >
                <i class={`fa-brands fa-css3 fa-${mediaMatch?'3x':'2x'}`} />
                <i class={`fa-brands fa-react fa-${mediaMatch?'3x':'2x'}`} />
                <i class={`fa-brands fa-node fa-${mediaMatch ? '3x' : '2x'}`} />
                <Image src='/assets/images/ejs.svg' width='60' height='60' alt='EJs Icon'/>
                <Image src='/assets/images/mongodb.svg' width='60' height='60' alt='MongoDB Icon'/>
            </div>
            <div className = {styles.skillsSkinRow } >
                <Image src='/assets/images/mongodb.svg' width='60' height='60' alt='MongoDB Icon'/>
                <i class={`fa-brands fa-node fa-${mediaMatch ? '3x' : '2x'}`} />
                <Image src='/assets/images/tf.svg' width='60' height='60' alt='TF Icon'/>
            </div>
        </Fragment>
            
    )

    const toolsIcons = (
            <div className = {styles.skillsSkinRow }>
            <i class={`fa-brands fa-figma fa-${mediaMatch ? '3x' : '2x'}`} />
            </div>
        )

    return (
        <div className={styles.parent}>
            {props.option == 'code' ? codeIcons : toolsIcons}
        </div>
    )
}

export default SkillsSkin