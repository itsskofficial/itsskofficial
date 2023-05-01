import styles from '@styles/SkillsSkin.module.css'

const SkillsSkin = (props) => {

    const codeIcons = (
            <div className = {styles.skillsSkinRow } >
                <i class='fa-brands fa-python fa-3x' />
                <i class='fa-brands fa-js fa-3x' />
                <i class='fa-brands fa-c fa-3x' />
                <Image src='/../public/assets/images/cpp.svg' width='50' heigh='50' alt='cpp'>
                <i class='fa-brands fa-html5 fa-3x' />
                <i class='fa-brands fa-css3 fa-3x' />
            </div>
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