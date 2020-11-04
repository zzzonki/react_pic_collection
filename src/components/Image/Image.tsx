import React from 'react'
import './style.scss'

type ImageProps = {
    src: string | undefined,
    getImageTeg(val: string): void,
    tag: string
}

export default function Image(props: ImageProps){
    return(
        <>
        <img className='pic' onClick={() => props.getImageTeg(props.tag)} src={props.src} alt=''></img>
        </>
    )
}