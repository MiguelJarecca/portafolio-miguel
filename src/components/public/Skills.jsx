import React from 'react'
import CardItem from './SkillsItem'

import {faHtml5,faCss3Alt,faSquareJs} from '@fortawesome/free-brands-svg-icons';
import {faBootstrap,faReact} from '@fortawesome/free-brands-svg-icons';

import { faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons';

import { faGit, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {

  const arrayIcons = [{icono:faHtml5, clase:'f-item html-icon'},
                      {icono:faCss3Alt, clase:'f-item css-icon'},
                      {icono:faSquareJs, clase:'f-item js-icon'},
                      {icono:faBootstrap, clase:'f-item boostrap-icon'},
                      {icono:faReact, clase:'f-item react-icon'}];

  const backendIcons = [];

  return (
    <section className='skills'id='skills'>
      <h2 className='heading'>Mis <span>Habilidades</span></h2>

      <div className="skills-content">

        <h3>Frontend</h3>

        <CardItem arrayIcons={arrayIcons}/>

        <h3>Backend</h3>



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
      </div>

    </section>
  )
}
