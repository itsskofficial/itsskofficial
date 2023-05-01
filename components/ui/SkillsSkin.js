import styles from '@styles/SkillsSkin.module.css'

const SkillsSkin = (props) => {

    const codeIcons = () => {
        return (
            <div className={skillsSkinRow}>
                <i class='fa-brands fa-react fa-3x' />
            </div>
        )
    }

        
    }
    return (
        <div className={styles.parent}>
            {props.option == 'code' ? codeIcons : toolsIcons}
        </div>
    )
}

export default SkillsSkin