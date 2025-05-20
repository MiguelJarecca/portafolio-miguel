import React from 'react'

import imgPerfil from "../img/miguelJC.jpg"

import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className='about' id='about'>

      <h2 className="heading">Sobre <span>Mí</span></h2>

      <div className="about-container">
        <div className="about-img">
          <img src={imgPerfil} alt="" />
        </div>

        <div className="about-content">

          {/* <h3>Hola, Estoy aqui para ayudarte en tu proximo proyecto</h3> */}
          
          <p>Soy Miguel Jarecca Ccallo, desarrollador Fullstack con enfoque en aplicaciones web escalables. 
            Trabajo con <span>React, Java (Spring Boot) y MySQL</span>. 
            
          </p>

          {/* <p>Tengo experiencia construyendo e-commerce funcionales desde cero, integrando APIs REST, 
          control de sesiones, manejo de estado global y despliegue en entornos locales.</p> */}

          <p>Recientemente profundicé en arquitectura de <span>microservicios</span>, usando herramientas como Spring Cloud, 
            Docker, Kubernetes, RabbitMQ, Kafka, Prometheus, Grafana y OAuth2, enfocandome en el desarrollo 
            de sistemas distribuidos, resilientes, escalables y seguros.
          </p>

          <div className="about-link">
              <Link to={'/courses'}>Mis Cursos</Link>
          </div>
      </div>
        
    </div>
  </section>
  )
}
