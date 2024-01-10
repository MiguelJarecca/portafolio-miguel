import React from 'react'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x1e3vrd', 'template_na19q4k', form.current, 'u1hxAI5tL07G9vq2X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='contact' id='contact'>

      <h2 className="heading">Contacta<span> me</span></h2>

      <form ref={form} onSubmit={sendEmail}>

        <div className="input-box">
            <input 
              type='text' 
              placeholder='Nombre' 
              name='user_name'>
            </input>
            <input 
              type='email' 
              placeholder='Correo Electronico' 
              name='user_email'>
            </input>
        </div>

        <textarea 
          name='message' 
          cols="24" 
          rows="7" 
          placeholder='Mensaje'>
        </textarea>

        <input type='submit' value="Enviar Mensaje" className='btn'></input>

      </form>

    </section>
  )
}
