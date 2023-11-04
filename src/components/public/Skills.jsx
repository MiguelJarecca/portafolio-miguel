import React from 'react'
import CardItem from './SkillsItem'

export default function Skills() {

  const arrayIcons = [1,2,3];

  return (
    <section className='skills'id='skills'>
      <h2 className='titulo'>Habilidades</h2>

      <h3>Frontend</h3>

      <CardItem arrayIcons={arrayIcons}/>

  <h3>Backend</h3>

  {/* <CardItem /> */}

  {/* <div className='backend-div'>

      <div className='b-item b-item-1'>#1</div>
      <div className='b-item b-item-2'>#2</div>
      <div className='b-item b-item-3'>#3</div>
      <div className='b-item b-item-4'>#4</div>
      <div className='b-item b-item-5'>#5</div>
      <div className='b-item b-item-6'>#6</div>

  </div> */}

  <h3>Otros</h3>

  {/* <CardItem /> */}

  {/* <div className='otros-div'>

      <div className='o-item o-item-1'>#1</div>
      <div className='o-item o-item-2'>#2</div>
      <div className='o-item o-item-3'>#3</div>
      <div className='o-item o-item-4'>#4</div>
      <div className='o-item o-item-5'>#5</div>
      <div className='o-item o-item-6'>#6</div>

  </div>         */}
    </section>
  )
}
