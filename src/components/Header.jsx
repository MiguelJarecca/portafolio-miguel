import { useState, useEffect } from 'react';
import { Close, Menu, Moon, Sunny } from '../icons/Icons';

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

  const LocalStorageTheme = localStorage.getItem('theme');
  const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const [theme, setTheme] = useState(LocalStorageTheme || systemColorScheme || 'light');

  const handleThemeClick = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]); 
 
  //============== scroll section active liks =============

  useEffect( () => {

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a')

    const updateActiveLink = () => {

      let top = window.scrollY;

      if (top === 0) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('header nav a[href="#home"]').classList.add('active');
        return;
      }

        sections.forEach(sec => {
          let offset = sec.offsetTop - 250;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');
  

          if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

          };
        })
      };

      window.addEventListener('scroll', updateActiveLink);
      updateActiveLink();

      return () => {
        window.removeEventListener('scroll', updateActiveLink);
      }
    
    },[]);

  return (

    <>

      {/* Encabezado */}
      <section className="hero" id='home'>
        <h3>Construyo aplicaciones web escalables y eficientes</h3>
      </section>
      
      {/* Barra de navegación */}
      <header className='header'>

        <a href="/" className='logo'>
          <img src="/logo.png" alt="logo"/>
        </a>

        <div className='header-div'>

          <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" className='active' onClick={handleSectionClick} >Inicio</a>
            <a href="#about" onClick={handleSectionClick} >Sobre mí</a>
            <a href="#proyects" onClick={handleSectionClick} >Proyectos</a>
            <a href="#skills" onClick={handleSectionClick} >Habilidades</a>
            <a href="#contact" onClick={handleSectionClick} >Contactame</a>
          </nav>      
        
          <div className="theme-toggle" onClick={handleThemeClick}>
            {(theme === 'light') ? <Moon /> : <Sunny />}
          </div>

          <div className="menu-toggle" onClick={handleMenuClick}>
            {menuOpen ? <Menu /> : <Close />}
          </div>
          
        </div>
      </header>
    </>
  )
}
