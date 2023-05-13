import styles from '@styles/Projects.module.css'
import ProjectSkin from './ui/ProjectSkin'
import { forwardRef, useState, useEffect } from 'react'
import projectsData from '../public/assets/js/ProjectsData'
import { useMediaQuery } from 'usehooks-ts'

const Projects = forwardRef((props,ref) => {
    const [projectId, setProjectId] = useState(1)
    const isBigScreen = useMediaQuery('(min-width:1201px)')
    const [mediaMatch, setMediaMatch] = useState(true)

    useEffect(() => {
        if (isBigScreen == false){
            setMediaMatch(false)
        }
    },[isBigScreen])

    const handleKeyChange = (id) => {
        setProjectId(id)
    }
    
    return (
        <section ref={ref} id='projects' className={styles.parent}>
            <div className={styles.projectsSlider}>
                <button className={styles.projectsPrevious} onClick={() => handleKeyChange(projectId - 1)} disabled={projectId==1?true:false}>
                    <i className={`fa-solid fa-chevron-left fa-${mediaMatch?'3x':'2x'}`}/>
                </button>
                <ProjectSkin id={projectId} mode={props.mode} />
                <button className={styles.projectsNext} onClick={() => handleKeyChange(projectId + 1)} disabled={projectId==projectsData.length?true:false} >
                    <i className={`fa-solid fa-chevron-right fa-${mediaMatch?'3x':'2x'}`} />
                </button>
            </div>
            <div className={styles.projectsText}>
                <h1 className={[styles.projectsTitle, props.mode=='dark'?null:styles.light].join(' ')}>
                    Projects
                </h1>
                <h2 className={[styles.projectsInfo, props.mode=='dark'?null:styles.light].join(' ')}>
                   I continuously work on personal & professional projects. Some of them can't be deployed but you can check them on my GitHub. However these are the deployed ones right now. Others in production progress
                </h2>
                <button className={props.mode == 'dark' ? styles.projectsGithub : styles.projectsGithubLight}>
                    <a href='https://github.com/itsskofficial'>
                        <i className='fa-brands fa-github' style={{marginRight: '10px'}} />Check My GitHub
                    </a>
                </button>
            </div>
        </section>
    )
})

export default Projects