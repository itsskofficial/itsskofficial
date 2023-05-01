import styles from '@styles/SkillsSkin.module.css'

const SkillsSkin = (props) => {
    const code = ['html', 'css', 'js']
    const tools = ['figma', 'canva', 'gimp']

    const renderIcons = (option) => {
        for (i = 0; i < length(option); i++){
            <i class={`fa-brands fa-${react}`} style="color: #000000;" />
        }
    }
    return (
        <div className={styles.parent}>
            {props.option=='code'?renderIcons(code):renderIcons(tools)}
        </div>
    )
}

export default SkillsSkin