import React from 'react'
import imgPerfil from "../img/miguelJC.jpg"

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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente consequuntur dolorem dolore impedit, rem necessitatibus?</p>
      </div>
    </section>
  )
}
