import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'

export default function Home() {

    const estiloProfesion0 = {
        '--i': 0, 
      };
  
      const estiloProfesion1 = {
        '--i': 1, 
      };
  
      const estiloProfesion2 = {
        '--i': 2, 
      };
  
      const estiloProfesion3 = {
        '--i': 3, 
      };

  return (
    <section className='home' id='home'>
    <div className="home-content">
        <h1>Desarrollador Web Full Stack</h1>
    </div>

    <div className="profesion-container">
      <div className="profesion-box">
        <div className="profesion" style={estiloProfesion0}>
          <FontAwesomeIcon icon={faCode} ></FontAwesomeIcon>
          <h3>Miguel Jarecca</h3>
          <h3>Ccallo</h3>
        </div>

        <div className="profesion" style={estiloProfesion1}>
          <FontAwesomeIcon icon={faCode} ></FontAwesomeIcon>
          <h3>Desarrollador web</h3>
          <h3>full stack</h3>
        </div>

        <div className="profesion" style={estiloProfesion2}>
          <FontAwesomeIcon icon={faCode} ></FontAwesomeIcon>
          <h3>Desarrollador web</h3>
          <h3>full stack</h3>
        </div>

        <div className="profesion" style={estiloProfesion3}>
          <FontAwesomeIcon icon={faCode} ></FontAwesomeIcon>
          <h3>Desarrollador web</h3>
          <h3>full stack</h3>
        </div>

        <div className="circle"></div>
      </div>

      <div className="overlay"></div>
    </div>
    </section>
  )
}
