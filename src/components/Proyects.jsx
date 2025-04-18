import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3Alt,faSquareJs,faJava, faReact} from '@fortawesome/free-brands-svg-icons';

import { Check } from "../icons/Icons";
import { CssIcon, HtmlIcon, JavaIcon, JavascriptIcon, ReactIcon } from '../icons/SkillsIcons';

export default function Proyects() {
  return (
    <section className='proyects' id='proyects'>
      <h2 className='heading'>Mis <span>Proyectos</span></h2>

      <div className='proyects-container'>

        <div className="proyects-grid">

          <div className="proyects-slide item-1">
            <div className="div-img">
             <img src="/images/proyects/proyects-1.jpg" alt="" />
            </div>
            <h3>INICIO Y CIERRE DE SESION</h3>
            <button>Ver Info</button>
          </div>

          <div className="proyects-slide item-2">
            <div className="div-img">
              <img src="/images/proyects/proyects-2.jpg" alt="" />
            </div>
            <h3>INICIO Y CIERRE DE SESION</h3>
            <button>Ver Info</button>

          </div>

          <div className="proyects-slide item-3">
            <div className="div-img">
              <img src="/images/proyects/proyects-3.jpg" alt="" />
            </div>
            <div className="div-text">
              <h3>INICIO Y CIERRE DE SESION</h3>
              <button>Ver Info</button>
            </div>
            
          </div>
          

        </div>

        <div className="proyects-info">
          
          <div className="proyects-content">
              <h3>INICIO Y CIERRE DE SESION</h3>

              <ul>
                <li> <Check /> Esta aplicación se desarrollo con Java - Spring Boot, Spring Security 6 
                  para la autenticación, seguridad, y JWT para la gestión de tokens.</li>
                <li> <Check /> Para el diseño se utilizo React para una interfaz de usuario dinámica 
                  y responsive.</li>
                <li> <Check /> También se implementó una API REST para facilitar la comunicación y el 
                  intercambio de datos entre el frontend, y el backend.</li>
                <li> <Check /> Cuenta con los métodos HTTP (GET, POST, PUT, DELETE) para soportar 
                  operaciones CRUD sobre los recursos.</li>
                <li> <Check /> Para la base de datos se uso MySQL.</li>
              </ul>

              <div className="technologies">

                <div className="technologies-icons"> 
                <HtmlIcon />
                <p>HTML5</p></div>

                <div className="technologies-icons"> 
                <CssIcon />
                <p>CSS3</p></div>

                <div className="technologies-icons"> 
                  <JavascriptIcon />
                  <p>Javascript</p>
                </div>
                
                <div className="technologies-icons">
                <JavaIcon />
                <p>Java</p></div>
                
                <div className="technologies-icons">
                <ReactIcon />
                <p>React</p></div>
              </div>

              <a href="https://github.com/MiguelJarecca/user">link</a>

          </div>

        </div>
    </div>
    </section>
  )
}
