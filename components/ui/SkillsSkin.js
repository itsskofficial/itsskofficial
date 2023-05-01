import styles from '@styles/SkillsSkin.module.css'

const SkillsSkin = (props) => {
    const code = ['html', 'css', 'js']
    const tools = ['figma', 'canva', 'gimp']

    const codeIcons = () => {
        return (
            <div className={skillsSkinRow}>
                <i class='fa-brands fa-react'
            </div>
        )
    }

    const renderIcons = (option) => {
        
    }
    return (
        <div className={styles.parent}>
            {props.option=='code'?renderIcons(code):renderIcons(tools)}
        </div>
    )
}

export default SkillsSkin