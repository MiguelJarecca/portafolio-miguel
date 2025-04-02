import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'

import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export default function Home() {

  return (

    <section className='home' id='home'>
      <div className="home-content">
          <h3>Hola, Soy</h3>
          <h1>Miguel Jarecca</h1>

          <p>Transformando ideas en soluciones escalables.
            Desarrollador Fullstack especializado en React, Java y Microservicios.</p>

          <div className="social-media">
            <a href="https://web.facebook.com/miguel.jareccaccallo.1/?locale=es_LA" 
               target="_blank">
              <FontAwesomeIcon icon={faFacebookF}/></a>  
            <a href="https://www.linkedin.com/in/migueljarecca"
               target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn}/></a>  
            <a href="https://github.com/MiguelJarecca" 
               target="_blank">
              <FontAwesomeIcon icon={faGithub}/></a>  
          </div>   

          
            <a href="/portafolio-miguel/MIGUEL-CV.pdf" download="MIGUEL-CV.pdf" className='btn-cv'>
              Desargar CV
            </a>
          
      </div>

      <div className="profesion-container">
        <div className="profesion-box">
        </div>  
      </div>
    </section>
  )
}
