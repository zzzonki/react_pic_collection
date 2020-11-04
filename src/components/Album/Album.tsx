import React from 'react'
import Image from '../Image'
import './style.scss'

type AlbumProps = {
    name: string,
    data: any,
    getImageTeg(val: string): void
}

export default function Album(props: AlbumProps){

    const {data, name} = props
    console.log(name)
    const newData = data.filter((item: any) => item.tag === name)
    
    const body = newData.map((item: { image_url: string | undefined, id: string | undefined, tag: string }) => 
    (<Image key={item.id} src={item.image_url} tag={item.tag} getImageTeg={props.getImageTeg} />))


    return(
        <>
        <div className='album-field'>
        <h3 className='album__header'>{name}</h3>
        {body}
        </div>
        </>
    )
}