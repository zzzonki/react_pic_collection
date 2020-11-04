import React from 'react'
import './style.scss'

type ButtonProps = {
    tag: string | null,
    getImages?(tag: string | null): void,
    clearImages?(): void,
    groupImages?(): void,
    purpose: string,
    isGrouped?: boolean
}

export default function Button(props: ButtonProps) {
    const {purpose, getImages, clearImages, groupImages, isGrouped} = props
    const color: string = 'btn btn-' + purpose
    const boop: string | null = (purpose === 'load') ? 'Загрузить' : (purpose === 'clear') ? 'Очистить' : (purpose === 'group') ? ((isGrouped) ? 'Разгруппировать': 'Группировать') : null

    const buttonClick = (tag: string | null) =>{
        if(getImages){
            getImages(tag)
        } if(clearImages){
            clearImages()
        } if(groupImages){
            groupImages()
        }
    }

    return(
    <button onClick={() => buttonClick(props.tag)} className={color}>{boop}</button>
    )
}