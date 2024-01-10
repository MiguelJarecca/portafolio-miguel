import React from 'react'

import {faHtml5,faCss3Alt,faSquareJs} from '@fortawesome/free-brands-svg-icons';
import {faBootstrap,faReact} from '@fortawesome/free-brands-svg-icons';

import { FaJava } from "react-icons/fa";
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { SiSpring } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSpringsecurity } from "react-icons/si";

import { faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { SiVisualstudiocode } from "react-icons/si";

import SkillsItem from './SkillsItem';


export default function Skills() {

    const arrayIcons = [
        {icono:faHtml5, clase:'f-item html-icon'},
        {icono:faCss3Alt, clase:'f-item css-icon'},
        {icono:faSquareJs, clase:'f-item js-icon'},
        {icono:faBootstrap, clase:'f-item boostrap-icon'},
        {icono:faReact, clase:'f-item react-icon'}
    ];

    const backendIcons = [
        {icono:<FaJava/>, clase:'f-item java-icon'},
        {icono:faNodeJs, clase:'f-item nodeJs-icon'},
        {icono: <SiSpring/>, clase:'f-item siSpring-icon'},
        {icono: <SiMysql/>, clase:'f-item siMySql-icon'},
        {icono: <SiSpringsecurity/>, clase:'f-item siSpringSecurity-icon'},
    ];

    const othersIcons = [
        {icono:faGit, clase:'f-item git-icon'},
        {icono:faGithub, clase:'f-item gitHub-icon'},
        {icono:<SiVisualstudiocode/>, clase:'f-item siVisualStudioCode-icon'},
    ]; 

  return (
                       
    <section className='skills'id='skills'>
        <h2 className='heading'>Mis <span>Habilidades</span></h2>

        <SkillsItem arrayIcons={arrayIcons} backendIcons={backendIcons} 
        othersIcons={othersIcons}/>

    </section>
  )
}
