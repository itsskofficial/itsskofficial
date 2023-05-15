import Image from "next/image"
import { Fragment, useState, useEffect } from "react"
import projectsData from "../../public/assets/js/ProjectsData"
import styles from '@styles/ProjectsSkin.module.css'
import { useMediaQuery } from "usehooks-ts"

const ProjectSkin = (props) => {
    const project = projectsData.find(p => p['id'] == props.id)
    const isBigScreen = useMediaQuery('(min-width:1201px)')
    const [mediaMatch, setMediaMatch] = useState(true)

    useEffect(() => {
        if (isBigScreen == false){
            setMediaMatch(false)
        }
    }, [isBigScreen])
    
    return (
        <Fragment>
            <div className={[styles.projectSkinContainer , props.changeState?styles.projectSkinAnimate:null].join(' ')}>
                <Image src={project['image']} alt={`${project['name']} Image`} height={mediaMatch ? '300' : '200'} width={mediaMatch ? '600' : '250'} />
                <h2 className={[styles.projectSkinTitle, props.mode=='dark'?null:styles.light].join(' ')}>
                    {project['name']}
                </h2>
                <h3 className={[styles.projectSkinInfo, props.mode == 'dark' ? null : styles.light].join(' ')}>
                    {project['description']}
                </h3>
                <div className={styles.projectSkinButtons}>
                    <button className={props.mode == 'dark' ? styles.projectSkinLink : styles.projectSkinLinkLight}>
                        <a href={project['link']}>
                            <i className='fa-solid fa-arrow-up-right-from-square' style={{marginRight: '10px'}} />Check Out
                        </a>
                    </button>
                    <button className={props.mode == 'dark' ? styles.projectSkinGithub : styles.projectSkinGithubLight}>
                        <a href={project['github']}>
                            <i className='fa-brands fa-github' style={{marginRight: '10px'}} />GitHub
                        </a>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default ProjectSkin