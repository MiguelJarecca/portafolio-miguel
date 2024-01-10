import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SkillsItem({arrayIcons, backendIcons, othersIcons}) {

    let items = arrayIcons.map((item, index) => 
        <div 
            key={index} 
            className={item.clase}>
            <FontAwesomeIcon icon={item.icono}/>
        </div>)
  
    let backendItems = backendIcons.map((backItem, index) => 
        <div 
            key={index} 
            className={backItem.clase}>
                {React.isValidElement(backItem.icono) 
                ? backItem.icono
                : <FontAwesomeIcon icon={backItem.icono}/>}
            
        </div>)    
  
    let othersItems = othersIcons.map((otherItem, index) => 
        <div 
            key={index} 
            className={otherItem.clase}>
                {React.isValidElement(otherItem.icono) 
                ? otherItem.icono
                : <FontAwesomeIcon icon={otherItem.icono}/>}
            
        </div>)

  return (
    <div>
        <h3>Frontend</h3>

            <div className='front-div'>
                {items}
            </div>  

        <h3>Backend</h3>

            <div className='back-div'>
                {backendItems}
            </div>

        <h3>Otros</h3>

            <div className='other-div'>
                {othersItems}
            </div>
    
    </div>
  )
}
