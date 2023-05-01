import styles from '@styles/Skills.module.css'
import SkillsSkin from './ui/SkillSkin'
import { useState } from 'react'

const Skills = () => {
    const [skillsOption, setSkillsOption] = useState('code')
    return (
        <section className={styles.parent}>
            <div className={styles.skillsText}>
                <h1 className={styles.skillsTitle}>
                    Skills
                </h1>
                <button className={styles.skillsOption}>
                    <input type="checkbox" className={styles.skillsOptionCheckbox} />
                    <div className={styles.skillsOptionKnob } />
                    <div className={styles.skillsOptionLayer} />
                </button>
            </div>
            <div className={styles.skillsIcons}>
                <SkillsSkin option={skillsOption}></SkillsSkin>
            </div>
        </section>
    )
}

export default Skills