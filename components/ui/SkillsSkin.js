import styles from '@styles/SkillsSkin.module.css'
import { Fragment } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const SkillsSkin = (props) => {
    const mediaMatch = useMediaQuery(('mim-width:1201px'))

    const codeIcons = (
        <Fragment>
            <div className={styles.skillsSkinRow} >
                <i class=`fa-brands fa-python fa-${mediaMatch?'3x':'2x'}` />
                <i class=`fa-brands fa-js fa-${mediaMatch?'3x':'2x'}` />
                <i class=`fa-brands fa-c fa-${mediaMatch?'3x':'2x'}` />
                <i class=`fa-brands fa-html5 fa-${mediaMatch?'3x':'2x'}` />
            </div>
            <div className={styles.skillsSkinRow} >
                <i class=`fa-brands fa-css3 fa-${mediaMatch?'3x':'2x'}` />
                <i class=`fa-brands fa-react fa-${mediaMatch?'3x':'2x'}` />
                <i class=`fa-brands fa-node fa-${mediaMatch?'3x':'2x'}` />
            </div>
            <div className = {styles.skillsSkinRow } >
                <i class=`fa-brands fa-react fa-${mediaMatch?'3x':'2x'}` />
                <i class=`fa-brands fa-node fa-${mediaMatch?'3x':'2x'}` />
            </div>
        </Fragment>
            
    )

    const toolsIcons = (
            <div className = {styles.skillsSkinRow }>
                <i class=`fa-brands fa-figma fa-${mediaMatch?'3x':'2x'}` />
            </div>
        )

    return (
        <div className={styles.parent}>
            {props.option == 'code' ? codeIcons : toolsIcons}
        </div>
    )
}

export default SkillsSkin