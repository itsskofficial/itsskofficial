import styles from '@styles/Skills.module.css'
import SkillsSkin from './ui/SkillsSkin'
import { useState } from 'react'

const Skills = () => {
    const [skillsOption, setSkillsOption] = useState('code')
    return (
        <section className={styles.parent}>
            <div className={styles.skillsText}>
                <h1 className={styles.skillsTitle}>
                    Skills
                </h1>
                <div className={styles.skillsOptions}>
                    <button className={styles.skillsCode}>
                        Code
                    </button>
                </div>

            </div>
            <div className={styles.skillsIcons}>
                <SkillsSkin option={skillsOption} />
            </div>
        </section>
    )
}

export default Skills