import styles from '@styles/Skills.module.css'
import SkillsSkin from './ui/SkillsSkin'
import { useState, useEffect, forwardRef } from 'react'

const Skills = forwardRef((props,ref) => {
    const [skillsOption, setSkillsOption] = useState('code')
    const [optionChanged, setOptionChanged] = useState(false)

    useEffect(() => {
        if (optionChanged) {
            setTimeout(() => {
                setOptionChanged(false)
            },1000)
        }
    }, [skillsOption])
    
    return (
        
    )
})

export default Skills