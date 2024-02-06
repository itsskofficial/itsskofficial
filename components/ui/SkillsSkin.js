import styles from '@styles/SkillsSkin.module.css'
import { Fragment } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const SkillsSkin = (props) => {
    const isBigScreen = useMediaQuery('(min-width:1201px)')
    const [mediaMatch, setMediaMatch] = useState(true)
    useEffect(() => {
        if (isBigScreen == false){
            setMediaMatch(false)
        }
    },[isBigScreen])

    const codeIcons = (
        <Fragment>
            <div className={styles.skillsSkinRow}>
                <i className={`fa-brands fa-python fa-${mediaMatch?'3x':'2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
                <i className={`fa-brands fa-js fa-${mediaMatch?'3x':'2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
                <Image src='/assets/images/cpp.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='C++ Icon'/>
                <i className={`fa-brands fa-html5 fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
            </div>
            <div className={styles.skillsSkinRow} >
                <i className={`fa-brands fa-css3 fa-${mediaMatch?'3x':'2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
                <i className={`fa-brands fa-react fa-${mediaMatch?'3x':'2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
                <i className={`fa-brands fa-node fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
                <Image src={props.mode == 'dark' ? '/assets/images/ejs.svg' : 'assets/images/ejslight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='EJS Icon'/>
                <Image src='/assets/images/mongodb.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='MongoDB Icon'/>
            </div>
            <div className={styles.skillsSkinRow} >
                <Image src={props.mode == 'dark' ? '/assets/images/mysql.svg' : 'assets/images/mysqllight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='MySQL Icon'/>
                <Image src={props.mode == 'dark' ? '/assets/images/nextjs.svg' : 'assets/images/nextjslight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='NextJS Icon'/>
                {/* <i className={`fa-brands fa-node fa-${mediaMatch ? '3x' : '2x'}`} /> */}
                <Image src={props.mode == 'dark' ? '/assets/images/tf.svg' : 'assets/images/tflight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='TF Icon'/>
                <Image src={props.mode == 'dark' ? '/assets/images/numpy.svg' : 'assets/images/numpylight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Numpy Icon'/>
                <Image src={props.mode == 'dark' ? '/assets/images/pandas.svg' : 'assets/images/pandaslight.svg'} width={mediaMatch ? '60' : '30'} height={mediaMatch ? '60' : '30'} alt='Pandas Icon' />
            </div>
            <div className = {styles.skillsSkinRow } >
                {/* <Image src='/assets/images/sklearn.png' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='ScikitLearn Icon'/> */}
                <i className={`fa-brands fa-ethereum fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
                <Image src={props.mode == 'dark' ? '/assets/images/solidity.svg' : 'assets/images/soliditylight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Solidity Icon'/>
                <Image src={props.mode == 'dark' ? '/assets/images/arduino.svg' : 'assets/images/arduinolight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Arduino Icon'/>
                <i className={`fa-brands fa-docker fa-${mediaMatch ? '3x' : '2x'}`} style={{ color: props.mode == 'dark' ? 'white' : '#171717' }} />
                <Image src={props.mode == 'dark' ? '/assets/images/kubernetes.svg' : 'assets/images/kuberneteslight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Kubernetes Icon'/>
            </div>
        </Fragment>
    )

    const toolsIcons = (
        <Fragment>
            <div className = {styles.skillsSkinRow }>
                <i className={`fa-brands fa-figma fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
                <Image src='/assets/images/canva.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Canva Icon'/>
                <Image src={props.mode == 'dark' ? '/assets/images/audacity.svg' : 'assets/images/audacitylight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Audacity Icon'/>
                <Image src={props.mode == 'dark' ? '/assets/images/davinci.svg' : 'assets/images/davincilight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Davinci Icon'/>
                <Image src={props.mode == 'dark' ? '/assets/images/trello.svg' : 'assets/images/trellolight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Trello Icon'/>
            </div>
            <div className={styles.skillsSkinRow}>
                <Image src={props.mode == 'dark' ? '/assets/images/asana.svg' : 'assets/images/asanalight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Asana Icon' />
                <Image src={props.mode == 'dark' ? '/assets/images/gimp.svg' : 'assets/images/gimplight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Gimp Icon'/>
                <i className={`fa-brands fa-slack fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
                <i className={`fa-brands fa-jira fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
                <i className={`fa-brands fa-confluence fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
            </div>
            <div className={styles.skillsSkinRow}>
                <i className={`fa-brands fa-wordpress fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
                <Image src={props.mode == 'dark' ? '/assets/images/lmms.svg' : 'assets/images/lmmslight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='LMMS Icon' />
                <Image src={props.mode == 'dark' ? '/assets/images/inkscape.svg' : 'assets/images/inkscapelight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Inkscape Icon'/>
                <Image src={props.mode == 'dark' ? '/assets/images/vscode.svg' : 'assets/images/vscodelight.svg'} width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='VSCode Icon'/>
                <i className={`fa-brands fa-github fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
            </div>
            <div className={styles.skillsSkinRow}>
                <i className={`fa-brands fa-aws fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='dark'?'white': '#171717'}}/>
                {/* <Image src='/assets/images/lmms.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='TF Icon' />
                <Image src='/assets/images/inkscape.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='TF Icon'/>
                <Image src='/assets/images/vscode.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='TF Icon'/>
                <i class={`fa-brands fa-github fa-${mediaMatch ? '3x' : '2x'}`} /> */} 
           </div>
        </Fragment>
        )

    return (
        <div className={styles.parent}>
            {props.option == 'code' ? codeIcons : toolsIcons}
        </div>
    )
}

export default SkillsSkin