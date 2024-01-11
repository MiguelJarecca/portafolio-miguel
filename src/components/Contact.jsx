import React, { useState } from 'react'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  // Estado para los campos del formulario y los errores
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

      // Validación de campos
      if (!userName || !userEmail || !message) {
        const newErrors = {};
        if (!userName) newErrors.userName = 'Nombre es requerido';
        if (!userEmail) newErrors.userEmail = 'Correo electrónico es requerido';
        if (!message) newErrors.message = 'Mensaje es requerido';
        setErrors(newErrors);
        return;
      }
    

    emailjs.sendForm('service_x1e3vrd', 'template_na19q4k', form.current, 'u1hxAI5tL07G9vq2X')
      .then((result) => {
          console.log(result.text);

          //Limpiamos el formulario
          setUserName('');
          setUserEmail('');
          setMessage('');
          
          //Limpiamos los errores
          setErrors({});
          
          setSuccessMessage('El correo se ha enviado con éxito.');
          
          // Limpiamos el mensaje de éxito después de unos segundos
          setTimeout(() => setSuccessMessage(''), 5000);

        }, (error) => {
          console.log(error.text);
      });

  };

  return (
    <section className='contact' id='contact'>

      <h2 className="heading">Contacta<span> me</span></h2>

      <form ref={form} onSubmit={sendEmail}>

      {<p className="success">{successMessage}</p>}

        <div className="input-box">
          <div className='input-cont'>
            <input 
              type='text' 
              placeholder='Nombre' 
              name='user_name'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              >
            </input>
            {<span className="error">{errors.userName}</span>}
          </div>

            <div className='input-cont'>
              <input 
                type='email' 
                placeholder='Correo Electronico' 
                name='user_email'
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                >
              </input>
              { <span className="error">{errors.userEmail}</span>}
            </div>
        </div>

        <div className='div-textarea'>
          <textarea 
            name='message' 
            cols="24" 
            rows="7" 
            placeholder='Mensaje'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            >
          </textarea>
          {<span className="error">{errors.message}</span>}
        </div>

        <input type='submit' value="Enviar Mensaje" className='btn'></input>

      </form>

    </section>
  )
}
