import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { Moon, Sunny } from '../icons/Icons';

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

    <>

      {/* Encabezado */}
      <header className="hero">
        <h3>Construyo aplicaciones web escalables y eficientes</h3>
      </header>
      
      {/* Barra de navegación */}
      <nav className='navbar'>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" className='active' onClick={handleSectionClick} >Inicio</a>
            <a href="#about" onClick={handleSectionClick} >Sobre mí</a>
            <a href="#proyects" onClick={handleSectionClick} >Proyectos</a>
            <a href="#skills" onClick={handleSectionClick} >Habilidades</a>
            <a href="#contact" onClick={handleSectionClick} >Contactame</a>
        </div>      
      
        {/* Controles de tema y menú */}
        <div className="navbar-controls">
          <button className="theme-toggle" onClick={handleThemeClick}>
            {darkTheme ? <Moon /> : <Sunny />}
          </button>

          <button className="menu-toggle" onClick={handleMenuClick}>
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>

      </nav>

    </>
    
  )
}
