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
                <div className={styles.skillsToggle}>
                    <button className={styles.skillsCode} onClick={() => {
                        if (skillsOption != 'code') {
                            setSkillsOption('code')
                        }

                        class
                            
                    }}>
                        Code
                    </button>
                    <button className={styles.skillsTools} onClick={() => {
                        if (skillsOption != 'tools') {
                            setSkillsOption('tools')
                        }
                    }}>
                        Tools
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