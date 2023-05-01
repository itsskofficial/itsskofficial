import styles from '@styles/SkillsSkin.module.css'

const SkillsSkin = (props) => {

    const codeIcons = (
            <div  >
                <i class='fa-brands fa-js fa-3x' />
            </div>
    )

    const toolsIcons = (
            <div >
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