import imgPerfil from "../img/miguelJC.webp"

import { Link } from 'react-router-dom';

export default function About() {

  return (
    <section className='about' id='about'>

      <h2 className="heading">Sobre <span>Mí</span></h2>

      <div className="about-container">
        <div className="about-img">
          <img src={imgPerfil} alt="Foto de Miguel Jarecca Ccallo" loading="lazy"/>
        </div>

        <div className="about-content">
   
          <p>Soy Miguel Jarecca Ccallo, desarrollador Fullstack con enfoque en aplicaciones web escalables. 
            Trabajo con <span>React, Java (Spring Boot) y MySQL</span>. 
            
          </p>

          <p>También profundicé en arquitectura de <span>microservicios</span>, usando herramientas como Spring Cloud, 
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
