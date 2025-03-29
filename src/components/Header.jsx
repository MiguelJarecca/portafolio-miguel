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

    <header>

      <nav className='header-nav'>
        <h3>Construyo aplicaciones web escalables y eficientes </h3>

      </nav>
      
      <section className='header-section'>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" className='active' onClick={handleSectionClick} >Inicio</a>
            <a href="#about" onClick={handleSectionClick} >Sobre mí</a>
            <a href="#proyects" onClick={handleSectionClick} >Proyectos</a>
            <a href="#skills" onClick={handleSectionClick} >Habilidades</a>
            <a href="#contact" onClick={handleSectionClick} >Contactame</a>
        </div>      
      
        <div className="bx bx-moon" id='darkMode-icon' onClick={handleThemeClick}>
            <FontAwesomeIcon icon={darkTheme ? faSun : faMoon}></FontAwesomeIcon>
        </div>
        
        <div className="bx bx-menu" id='menu-icon' onClick={handleMenuClick}>
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars}></FontAwesomeIcon>
        </div>
      </section>

    </header>
    
  )
}
