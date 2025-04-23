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

          <div className="proyects-card">
            <div className="div-img">
              <img src="/images/proyects/proyects-1.jpg" alt="" />
            </div>
            <div className="card-body">
              <h5 className= "card-title">Escolar Plus</h5>
              <p className='card-text'>API Rest de usuarios, CRUD y seguridad web con Spring Boot y Spring Security.</p>
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
              <a href="" className='proyects-link'>Ver en GitHub</a>
            </div>
          </div>

          <div className="proyects-card">
            <div className="div-img">
              <img src="/images/proyects/proyects-1.jpg" alt="" />
            </div>
            <div className="card-body">
              <h5 className= "card-title">Usuarios</h5>
              <p className='card-text'>API Rest de usuarios, CRUD y seguridad web con Spring Boot y Spring Security.</p>
              <a href="" className='proyects-link'>Ver en GitHub</a>
            </div>
          </div>

          <div className="proyects-card">
            <div className="div-img">
              <img src="/images/proyects/proyects-1.jpg" alt="" />
            </div>
            <div className="card-body">
              <h5 className= "card-title">Shopping Cart</h5>
              <p className='card-text'>simulador de carro de comprar, incluye: filtrar por tipo de producto, 
              registro e inicio de sesión y eliminación e inclusión de productos.</p>
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
              <a href="" className='proyects-link'>Ver en GitHub</a>
            </div>
          </div>

          </div>

        </div>

    </section>
  )
}
