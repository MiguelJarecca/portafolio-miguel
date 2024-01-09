import React from 'react'

export default function Contact() {
  return (
    <section className='contact' id='contact'>
    <h2 className="heading">Contacta<span>me</span></h2>

    <form action='#'>
      <div className="input-box">
          <input type='text' placeholder='Nombre'></input>
          <input type='email' placeholder='Correo Electronico'></input>
      </div>

      <div className="input-box">
          <input type='number' placeholder='Numero de Telefono'></input>
          <input type='email' placeholder='Email Subjet'></input>
      </div>

      <textarea name='' id='' cols="25" rows="7" placeholder='Mensaje'></textarea>

      <input type='submit' value="Enviar Mensaje" className='btn'></input>
    </form>
    </section>
  )
}
