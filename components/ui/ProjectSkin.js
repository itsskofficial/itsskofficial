import Image from "next/image"
import { Fragment } from "react"
import projectsData from "../../public/assets/js/ProjectsData"
import styles from '@styles/ProjectsSkin.module.css'

const ProjectSkin = (props) => {
    const project = projectsData.find(p => p['id'] == props.id)
    return (
        <Fragment>
            <div className={styles.projectSkinContainer}>
                <Image src={project['image']} alt={`${project['name']} Image`} height='300' width='600' />
                <h2 className={styles.projectSkinTitle}>
                    {project['name']}
                </h2>
                <h3 className={styles.projectSkinInfo}>
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