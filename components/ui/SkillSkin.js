const { default: Image } = require("next/image")

const SkillsSkin = (props) => {
    const code = ['html', 'css', 'js']
    return (
        <div className={styles.parent}>
            {props.option=='code'?renderIcons(code)}
        </div>
    )
}