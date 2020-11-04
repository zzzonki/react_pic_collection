import React from 'react'
import Album from '../Album'
import Image from '../Image'
import './style.scss'

type GalleryProps = {
    galleryData: any,
    isGrouped: boolean,
    getImageTeg(val: string): void
}

export default function Gallery(props: GalleryProps){
    const {galleryData, isGrouped} = props

    var groupBy = function(arr: Array<any>, key: string) {
        return arr.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x)
          console.log('sorted', rv)
          return rv
        }, [])
    }
    const groupedData = groupBy(galleryData, 'tag') 
    const keys = []
    for (var key in groupedData){
        if(groupedData.hasOwnProperty(key)){
            keys.push(key)
        }
    }

    const sortedData = isGrouped ? 
        galleryData.sort((a: any, b: any) =>  {
            if(a.tag < b.tag){return -1}
            if(a.tag > b.tag){return 1}
            return 0
          })
        : galleryData.sort((a: any, b: any) =>  {
            if(a.index < b.index){return -1}
            if(a.index > b.index){return 1}
            return 0
          })

    const body = isGrouped ? 
        keys.map((item: any) => 
            (<Album key={item} name={item} data={sortedData} getImageTeg={props.getImageTeg} />)
        )
        : sortedData.map((item: { image_url: string | undefined, id: string | undefined, tag: string }) => 
    (<Image key={item.id} src={item.image_url} tag={item.tag} getImageTeg={props.getImageTeg} />))
    return(
        <div className='gallery-field'>
            {body}
        </div>
    )
}