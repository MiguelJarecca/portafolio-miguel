import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SkillsItem({arrayIcons}) {

    let items = arrayIcons.map((item, index) => 
    <div key={index} className={item.clase}><FontAwesomeIcon icon={item.icono}/></div>)

  return (
    <div>
        <div className='front-div'>
            {items}
        </div>  

        
    </div>
  )
}
