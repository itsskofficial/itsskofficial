import styles from '@styles/SkillsSkin.module.css'

const SkillsSkin = (props) => {
    const code = ['html', 'css', 'js']
    const tools = ['figma', 'canva', 'gimp']

    const codeIcons = () => {
        return (
            <div className={skillsSkinRow}>
                <i class='fa-brands fa-react fa-3x' />
                
            </div>
        )
    }

    const renderIcons = (option) => {
        
    }
    return (
        <div className={styles.parent}>
            {props.option=='code'?code
        </div>
    )
}

export default SkillsSkin