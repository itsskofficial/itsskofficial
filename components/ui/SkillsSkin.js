import styles from '@styles/SkillsSkin.module.css'
import { Fragment } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import Image from 'next/image'
import { useEffect } from 'react'

const SkillsSkin = (props) => {
    const isBigScreen = useMediaQuery('(min-width:1201px)')
    var mediaMatch=true
    useEffect(() => {
        if (isBigScreen == false){
            mediaMatch=false
        }
    })

    const codeIcons = (
        <Fragment>
            <div className={styles.skillsSkinRow} >
                <i className={`fa-brands fa-python fa-${mediaMatch?'3x':'2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
                <i className={`fa-brands fa-js fa-${mediaMatch?'3x':'2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
                <i className={`fa-brands fa-c fa-${mediaMatch?'3x':'2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
                <Image src='/assets/images/cpp.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='C++ Icon'/>
                <i className={`fa-brands fa-html5 fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
                
                
            </div>
            <div className={styles.skillsSkinRow} >
                <i className={`fa-brands fa-css3 fa-${mediaMatch?'3x':'2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
                <i className={`fa-brands fa-react fa-${mediaMatch?'3x':'2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
                <i className={`fa-brands fa-node fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
                <Image src='/assets/images/ejs.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='EJS Icon'/>
                <Image src='/assets/images/mongodb.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='MongoDB Icon'/>
            </div>
            <div className = {styles.skillsSkinRow } >
                <Image src='/assets/images/nextjs.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='NextJS Icon'/>
                {/* <i className={`fa-brands fa-node fa-${mediaMatch ? '3x' : '2x'}`} /> */}
                <Image src='/assets/images/tf.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='TF Icon'/>
                <Image src='/assets/images/numpy.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Numpy Icon'/>
                <Image src='/assets/images/pandas.svg' width={mediaMatch ? '60' : '30'} height={mediaMatch ? '60' : '30'} alt='Pandas Icon' />
                <i className={`fa-brands fa-ethereum fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
            </div>
            <div className = {styles.skillsSkinRow } >
                {/* <Image src='/assets/images/sklearn.png' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='ScikitLearn Icon'/> */}
                <Image src='/assets/images/solidity.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Solidity Icon'/>
                <Image src='/assets/images/arduino.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Arduino Icon'/>
                {/* <Image src='/assets/images/pandas.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Pandas Icon'/> */}
            </div>
        </Fragment>
            
    )

    const toolsIcons = (
        <Fragment>
            <div className = {styles.skillsSkinRow }>
                <i className={`fa-brands fa-figma fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
                <Image src='/assets/images/canva.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Canva Icon'/>
                <Image src='/assets/images/audacity.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Audacity Icon'/>
                <Image src='/assets/images/davinci.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Davinci Icon'/>
                <Image src='/assets/images/trello.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Trello Icon'/>
            </div>
            <div className={styles.skillsSkinRow}>
                <Image src='/assets/images/asana.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Asana Icon' />
                <Image src='/assets/images/gimp.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Gimp Icon'/>
                <i className={`fa-brands fa-slack fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
                <i className={`fa-brands fa-jira fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
                <i className={`fa-brands fa-confluence fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
            </div>
            <div className={styles.skillsSkinRow}>
                <i className={`fa-brands fa-wordpress fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
                <Image src='/assets/images/lmms.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='LMMS Icon' />
                <Image src='/assets/images/inkscape.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='Inkscape Icon'/>
                <Image src='/assets/images/vscode.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='VSCode Icon'/>
                <i className={`fa-brands fa-github fa-${mediaMatch ? '3x' : '2x'}`} style={{color:props.mode=='light' && '#171717'}}/>
            </div>
            {/* <div className={styles.skillsSkinRow}>
                <i class={`fa-brands fa-trello fa-${mediaMatch ? '3x' : '2x'}`} />
                {/* <Image src='/assets/images/lmms.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='TF Icon' />
                <Image src='/assets/images/inkscape.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='TF Icon'/>
                <Image src='/assets/images/vscode.svg' width={mediaMatch?'60':'30'} height={mediaMatch?'60':'30'} alt='TF Icon'/>
                <i class={`fa-brands fa-github fa-${mediaMatch ? '3x' : '2x'}`} /> */} 
            {/* </div> */}
        </Fragment>
        )

    return (
        <div className={styles.parent}>
            {props.option == 'code' ? codeIcons : toolsIcons}
        </div>
    )
}

export default SkillsSkin