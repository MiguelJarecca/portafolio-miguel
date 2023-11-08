import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className='header'>
        <a href="#" className="logo"> Portafolio</a>

        <nav className="navbar">
            <a href="#home" className='active'>Inicio</a>
            <a href="#about">Sobre mí</a>
            <a href="#proyects">Proyectos</a>
            <a href="#skills">Habilidades</a>
            <a href="#contact">Contactame</a>
        </nav>      

        <div className="bx bx-moon" id='darkMode-icon'>
            <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
        </div>
        
        <div className="bx bx-menu" id='menu-icon'>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </div>
    </header>
  )
}
