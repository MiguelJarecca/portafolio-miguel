import React from 'react'

import imgPerfil from "../img/miguelJC.jpg"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons';

export default function About() {

    window.onscroll = () => {
        let header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 100);
    };

  return (
    <section className='about' id='about'>
      <div className="about-img">
        <img src={imgPerfil} alt="" />
      </div>

      <div className="about-content">
        <h2 className="heading">Sobre <span>Mí</span></h2>
        <h3>Hola, Estoy aqui para ayudarte en tu proximo proyecto</h3>
        <p>Soy Miguel Jarecca Ccallo desarrollador de aplicaciones web con 
          conocimientos en <span>back-end</span> y <span>front-end</span>.
        </p>

        <div className="social-media">
          <a href="#" ><FontAwesomeIcon icon={faFacebookF}/></a>  
          <a href="#" ><FontAwesomeIcon icon={faLinkedinIn}/></a>  
          <a href="#" ><FontAwesomeIcon icon={faGithubAlt}/></a>  

        </div>    
      </div>
    </section>
  )
}
