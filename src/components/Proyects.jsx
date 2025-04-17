import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3Alt,faSquareJs,faJava, faReact} from '@fortawesome/free-brands-svg-icons';

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
x            <h3>INICIO Y CIERRE DE SESION</h3>
          </div>

          <div className="proyects-slide item-2">
            {/* <img src="/images/proyects/proyects-2.jpg" alt="" /> */}
            <h3>INICIO Y CIERRE DE SESION</h3>

          </div>

          <div className="proyects-slide item-3">
            {/* <img src="/images/proyects/proyects-3.jpg" alt="" /> */}
            <h3>INICIO Y CIERRE DE SESION</h3>
          </div>
          

        </div>

        <div className="proyects-info">
          
          <div className="proyects-content">
              <h3>INICIO Y CIERRE DE SESION</h3>
              <div className="text-content">
                <li>Esta aplicación se desarrollo con Java - Spring Boot, Spring Security 6 
                  para la autenticación, seguridad, y JWT para la gestión de tokens.</li>
                <li>Para el diseño se utilizo React para una interfaz de usuario dinámica 
                  y responsive.</li>
                <li>También se implementó una API REST para facilitar la comunicación y el 
                  intercambio de datos entre el frontend, y el backend.</li>
                <li>Cuenta con los métodos HTTP (GET, POST, PUT, DELETE) para soportar 
                  operaciones CRUD sobre los recursos.</li>
                <li>Para la base de datos se uso MySQL.</li>
              </div>
              <div className="technologies">
                <div className="technologies-icons"> 
                <FontAwesomeIcon icon={faHtml5}/>
                <span>HTML5</span></div>

                <div className="technologies-icons"> 
                <FontAwesomeIcon icon={faCss3Alt}/>
                <span>CSS3</span></div>

                <div className="technologies-icons"> 
                <FontAwesomeIcon icon={faSquareJs}/>
                <span>Javascript</span></div>
                
                <div className="technologies-icons">
                <FontAwesomeIcon icon={faJava}/>
                <span>Java</span></div>
                
                <div className="technologies-icons">
                <FontAwesomeIcon icon={faReact}/>
                <span>React</span></div>
              </div>

              <div className="proyect-link">
                <a href="https://github.com/MiguelJarecca/user">link</a>
              </div>

          </div>

        </div>
    </div>
    </section>
  )
}
