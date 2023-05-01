const SkillsSkin = (props) => {
    const code = ['html', 'css', 'js']
    const tools = ['figma', 'canva', 'gimp']

    const renderIcons = (option) => {
        for (i = 0; i < length(option); i++){
            <icon
        }
    }
    return (
        <div className={styles.parent}>
            {props.option=='code'?renderIcons(code):renderIcons(tools)}
        </div>
    )
}

export default SkillsSkin