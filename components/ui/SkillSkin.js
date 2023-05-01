const { default: Image } = require("next/image")

const SkillsSkin = (props) => {
    const code = ['html', 'css', 'js']
    const tools = ['figma', 'canva', 'gimp']
    return (
        <div className={styles.parent}>
            {props.option=='code'?renderIcons(code):renderIcons(tools)}
        </div>
    )
}