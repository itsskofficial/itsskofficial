import styles from '@styles/SkillsSkin.module.css'

const SkillsSkin = (props) => {
    const code = ['html', 'css', 'js']
    const tools = ['figma', 'canva', 'gimp']

    const renderIcons = (option) => {
        
        return (
            option.map((i) => {
                { <i class={`fa-brands fa-${option[i]}`} style={{ color: 'white' }} /> }
                })
            )
    }
    return (
        <div className={styles.parent}>
            {props.option=='code'?renderIcons(code):renderIcons(tools)}
        </div>
    )
}

export default SkillsSkin