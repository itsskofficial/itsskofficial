import styles from '@styles/Skills.module.css'
import SkillsSkin from './ui/SkillsSkin'
import { useState, useEffect, forwardRef } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const Skills = forwardRef((props,ref) => {
    const [skillsOption, setSkillsOption] = useState('code')
    const [optionChanged, setOptionChanged] = useState(false)
    const mediaMatch = useMediaQuery(())

    useEffect(() => {
        if (optionChanged) {
            setTimeout(() => {
                setOptionChanged(false)
            },1000)
        }
    }, [skillsOption])

    const bigScreen =
        <section ref={ref} id='skills' className={styles.parent}>
            <div className={styles.skillsText}>
                <h1 className={styles.skillsTitle}>
                    Skills
                </h1>
                <div className={styles.skillsToggle}>
                    <button className={[styles.skillsCode,skillsOption=='code'?styles.skillsActiveButton:null].join(' ')} onClick={() => {
                        if (skillsOption != 'code') {
                            setSkillsOption('code')
                            setOptionChanged(true)
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
                <div className={[styles.skillsIcons, optionChanged ? styles.skillsIconsAnimate:null].join(' ')}>
                    <SkillsSkin option={skillsOption} />
                </div> 
        </section>

    const smallScreen =
        <section ref={ref} id='skills' className={styles.parent}>
            <div className={styles.skillsText}>
                <h1 className={styles.skillsTitle}>
                    Skills
                </h1>
                <div className={[styles.skillsIcons, optionChanged ? styles.skillsIconsAnimate:null].join(' ')}>
                    <SkillsSkin option={skillsOption} />
                </div> 
                <div className={styles.skillsToggle}>
                    <button className={[styles.skillsCode,skillsOption=='code'?styles.skillsActiveButton:null].join(' ')} onClick={() => {
                        if (skillsOption != 'code') {
                            setSkillsOption('code')
                            setOptionChanged(true)
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
        </section>
    
    return (
        
    )
})

export default Skills