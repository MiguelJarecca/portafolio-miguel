import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3Alt,faSquareJs,faJava} from '@fortawesome/free-brands-svg-icons';

export default function Proyects() {
  return (
    <section className='proyects' id='proyects'>
    <h2 className='heading'>Mis <span>Proyectos</span></h2>

    <div className='proyects-wrapper'>
      <div className="proyects-box">
        <div className="proyects-content">

          <div className="proyects-slide">
            <h3>Red Social Fashion</h3>
            <p>Lorem, ipsum dolor sit amet consectetur 
              adipisicing elit. Ducimus provident, quos 
              ipsam soluta reprehenderit commodi exercitationem
               deleniti nobis illum eaque!</p>

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
            </div>

            <div className="proyect-link">
              <a href="#">Link</a>
            </div>

          </div>

          <div className="proyects-slide">
            <h3>Red Social Fashion</h3>
            <p>Lorem, ipsum dolor sit amet consectetur 
              adipisicing elit. Ducimus provident, quos 
              ipsam soluta reprehenderit commodi exercitationem
               deleniti nobis illum eaque!</p>

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
            </div>

            <div className="proyect-link">
              <a href="#">Link</a>
            </div>

          </div>

        </div>
      </div>
    </div>
    </section>
  )
}
