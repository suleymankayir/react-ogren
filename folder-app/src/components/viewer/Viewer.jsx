import React from 'react'
import { findItemById } from '../../helpers/utils'
import Item from '../item/Item'

const Viewer = ({
    activeFolderId,list,changeFolder
}) => {
    const data = findItemById([list],activeFolderId)
  return (
    <div>
        {
            data?.subItems?.map((item)=>{
                return <Item changeFolder={changeFolder} title={item.title} type={item.type} image={item.image}/>
            })
        }
    </div>
  )
}

export default Viewer