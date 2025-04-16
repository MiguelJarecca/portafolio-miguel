import React from 'react'

import imgPerfil from "../img/miguelJC.jpg"

import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className='about' id='about'>

      <h2 className="heading">Sobre <span>Mí</span></h2>

      
      <div className="about-img">
        <img src={imgPerfil} alt="" />
      </div>

      <div className="about-content">

        <h3>Hola, Estoy aqui para ayudarte en tu proximo proyecto</h3>
        
        <p>Soy Miguel Jarecca Ccallo desarrollador de aplicaciones web con 
          conocimientos en <span> <strong>back-end</strong> </span> y 
          <span> <strong>front-end</strong> </span>.
        </p>

        <div className="about-link">
            <Link to={'/courses'}>Mis Cursos</Link>
        </div>    

      
    </div>
  </section>
  )
}
