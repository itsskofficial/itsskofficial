import styles from '@styles/Skills.module.css'
import SkillsSkin from './ui/SkillsSkin'
import { useState, useEffect } from 'react'

const Skills = () => {
    const [skillsOption, setSkillsOption] = useState('code')
    const [optionChanged, setOptionChanged] = useState(false)

    return (
        <section id='skills' className={styles.parent}>
            <div className={styles.skillsText}>
                <h1 className={styles.skillsTitle}>
                    Skills
                </h1>
                <div className={styles.skillsToggle}>
                    <button className={[styles.skillsCode,skillsOption=='code'?styles.skillsActiveButton:null].join(' ')} onClick={() => {
                        if (skillsOption != 'code') {
                            setSkillsOption('code')
                            setOptionChanged(optionChanged=>!optionChanged)
                        }   
                    }}>
                        <i class='fa-solid fa-code' style={{marginRight: '10px'}} />Code
                    </button>
                    <button className={[styles.skillsTools,skillsOption=='tools'?styles.skillsActiveButton:null].join(' ')} onClick={() => {
                        if (skillsOption != 'tools') {
                            setSkillsOption('tools')
                            setOptionChanged(true)
                        }
                    }}>
                        <i class='fa-solid fa-screwdriver-wrench' style={{marginRight: '10px'}} />Tools
                    </button>
                </div>
            </div>
                <div className={[styles.skillsIcons, styles.skillsIconsAnimate].join()}>
                    <SkillsSkin option={skillsOption} />
                </div> 
        </section>
    )
}

export default Skills