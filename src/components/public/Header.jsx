import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-regular-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  };

  return (
    <header className='header'>
        <a href="#" className="logo"> Portafolio</a>

        {/* Esta línea utiliza una técnica de plantillas de cadena (template literals)
         en JavaScript para condicionalmente agregar la clase "active" al elemento <div> 
         del menú dependiendo del valor de menuOpen. Te explico paso a paso lo que hace:

        Las comillas invertidas `` se utilizan para crear una cadena de plantilla en 
        JavaScript. Permite la interpolación de expresiones y variables usando ${}.

        ${menuOpen ? 'active' : ''} es una expresión condicional (también conocida como 
          operador ternario) en JavaScript. Significa lo siguiente:

        Si menuOpen es true, la cadena resultante será "active".
        Si menuOpen es false, la cadena resultante será una cadena vacía "". */}
        
        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
            <a href="#home" className='active'>Inicio</a>
            <a href="#about">Sobre mí</a>
            <a href="#proyects">Proyectos</a>
            <a href="#skills">Habilidades</a>
            <a href="#contact">Contactame</a>
        </nav>      
      
        <div className="bx bx-moon" id='darkMode-icon'>
            <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
        </div>
        
        <div className="bx bx-menu" id='menu-icon' onClick={handleMenuClick}>
            {/* El operador ternario (? :) es la estructura if-else  */}
            {/* esta línea se traduce en palabras como: "Si menuOpen es true, muestra el 
            ícono faTimes; de lo contrario, muestra el ícono faBars". */}
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars}></FontAwesomeIcon>
        </div>
    </header>
  )
}
