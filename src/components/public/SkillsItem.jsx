import React from 'react'

export default function SkillsItem({arrayIcons}) {

    let items = arrayIcons.map((item, index) => <div key={index} className='f-item f-item-1'> {item} </div>)

  return (
    <div>
        <div className='front-div'>

        {items}

        {/* <div className='f-item f-item-1'>{producto}</div>
        <div className='f-item f-item-2'>#2</div>
        <div className='f-item f-item-3'>#3</div>
        <div className='f-item f-item-4'>#4</div>
        <div className='f-item f-item-5'>#5</div>
        <div className='f-item f-item-6'>#6</div> */}

        </div>  
    </div>
  )
}
