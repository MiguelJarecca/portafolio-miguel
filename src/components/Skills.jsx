import React from 'react'

import {faHtml5,faCss3Alt,faSquareJs} from '@fortawesome/free-brands-svg-icons';
import {faBootstrap,faReact} from '@fortawesome/free-brands-svg-icons';

import { faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGit, faGithub } from '@fortawesome/free-brands-svg-icons';

import SkillsItem from './SkillsItem';


export default function Skills() {

    const arrayIcons = [{icono:faHtml5, clase:'f-item html-icon'},
        {icono:faCss3Alt, clase:'f-item css-icon'},
        {icono:faSquareJs, clase:'f-item js-icon'},
        {icono:faBootstrap, clase:'f-item boostrap-icon'},
        {icono:faReact, clase:'f-item react-icon'}];

    const backendIcons = [{icono:faJava, clase:'f-item java-icon'},
        {icono:faNodeJs, clase:'f-item nodeJs-icon'},
    /*{icono:JavaIcon, clase:'f-item javac-icon'}*/];

    const othersIcons = [{icono:faGit, clase:'f-item git-icon'},
        {icono:faGithub, clase:'f-item gitHub-icon'}]; 

  return (
                       
    <section className='skills'id='skills'>
        <h2 className='heading'>Mis <span>Habilidades</span></h2>

        {/* <div className="skills-content"> */}
        <SkillsItem arrayIcons={arrayIcons} backendIcons={backendIcons} 
        othersIcons={othersIcons}/>
        {/* </div> */}

    </section>
  )
}
