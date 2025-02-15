import React from 'react'

import {faHtml5,faCss3Alt,faSquareJs} from '@fortawesome/free-brands-svg-icons';
import {faBootstrap,faReact} from '@fortawesome/free-brands-svg-icons';

import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSpringsecurity } from "react-icons/si";
import { faDocker } from '@fortawesome/free-brands-svg-icons';

import { faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { SiVisualstudiocode } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";

import SkillsItem from './SkillsItem';


export default function Skills() {

    const arrayIcons = [
        {icono:faHtml5, clase:'f-item html-icon'},
        {icono:faCss3Alt, clase:'f-item css-icon'},
        {icono:faReact, clase:'f-item react-icon'},
        {icono:faSquareJs, clase:'f-item js-icon'},
        {icono:faBootstrap, clase:'f-item boostrap-icon'},
    ];

    const backendIcons = [
        {icono:<FaJava/>, clase:'f-item java-icon'},
        {icono: <SiSpring/>, clase:'f-item siSpring-icon'},
        {icono: <SiSpringsecurity/>, clase:'f-item siSpringSecurity-icon'},
        {icono: <SiMysql/>, clase:'f-item siMySql-icon'},
    ];

    const othersIcons = [
        {icono:faDocker, clase:'f-item docker-icon'},
        {icono:<SiKubernetes/>, clase:'f-item siKuberenetes-icon'},
        {icono:<SiSwagger/>, clase:'f-item siSwagger-icon'},

        {icono:faGit, clase:'f-item git-icon'},
        {icono:faGithub, clase:'f-item gitHub-icon'},
        {icono:<SiIntellijidea/>, clase:'f-item siIntellijidea-icon'},
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
