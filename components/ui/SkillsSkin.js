import styles from '@styles/SkillsSkin.module.css'
import { Fragment } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const SkillsSkin = (props) => {
    const mediaMatch = useMediaQuery(('mim-width:1201px'))

    const codeIcons = (
        <Fragment>
            <div className={styles.skillsSkinRow} >
                <i class='fa-brands fa-python fa-${}' />
                <i class='fa-brands fa-js fa-${}' />
                <i class='fa-brands fa-c fa-${}' />
                <i class='fa-brands fa-html5 fa-${}' />
            </div>
            <div className={styles.skillsSkinRow} >
                <i class='fa-brands fa-css3 fa-${}' />
                <i class='fa-brands fa-react fa-${}' />
                <i class='fa-brands fa-node fa-${}' />
            </div>
            <div className = {styles.skillsSkinRow } >
                <i class='fa-brands fa-react fa-${}' />
                <i class='fa-brands fa-node fa-${}' />
            </div>
        </Fragment>
            
    )

    const toolsIcons = (
            <div className = {styles.skillsSkinRow }>
                <i class='fa-brands fa-figma fa-${}' />
            </div>
        )

    return (
        <div className={styles.parent}>
            {props.option == 'code' ? codeIcons : toolsIcons}
        </div>
    )
}

export default SkillsSkin