import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon, faSun} from '@fortawesome/free-regular-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';

export default function Header() {

    //============== Menu ============
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  };

  const handleSectionClick = () => {
    setMenuOpen(!menuOpen)
  };

  //============== Dark Theme ============
 const [darkTheme, setDarkTheme] = useState(false);

  const handleThemeClick = () => {
    setDarkTheme(!darkTheme)
  };

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]); 
 
  //============== scroll section active liks =============
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a')

  window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
        };
      })

    // Sticky navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 50);
  };  

  return (
    <header className='header'>
    <a href="/" className="logo"> Portafolio</a>

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
        <a href="#home" className='active' onClick={handleSectionClick} >Inicio</a>
        <a href="#about" onClick={handleSectionClick} >Sobre mí</a>
        <a href="#proyects" onClick={handleSectionClick} >Proyectos</a>
        <a href="#skills" onClick={handleSectionClick} >Habilidades</a>
        <a href="#contact" onClick={handleSectionClick} >Contactame</a>
    </nav>      
  
    <div className="bx bx-moon" id='darkMode-icon' onClick={handleThemeClick}>
        <FontAwesomeIcon icon={darkTheme ? faSun : faMoon}></FontAwesomeIcon>
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
