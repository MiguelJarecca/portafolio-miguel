import React, { useState } from 'react'

import { ReactIcon } from '../icons/SkillsIcons';

const initialForm = {
  name: '',
  email: '',
  textarea: '',
}

export default function Contact() {

  const [userForm, setUserForm] = useState(initialForm);

  const {name, email, textarea} = userForm;

  const onInputUserForm = ({target}) => {
    const {name, value} = target;
    setUserForm({
      ...userForm,
      [name]: value,
    })
  };

  const onSubmitUserForm = (event) => {

    event.preventDefault();
    
    console.log(JSON.stringify(userForm, null, 2));
  }

  return (
    <section className='contact' id='contact'>

      <h2 className="heading">Contacta<span> me</span></h2>

      <div className="contact-container">
          <a href="https://web.facebook.com/miguel.jareccaccallo.1/?locale=es_LA" 
              target="_blank">
              <ReactIcon/>
          </a> 

        <form className='form' onSubmit={onSubmitUserForm}>

          <div className="form-container">
            <div className="input-box">
                <input 
                  type="text" 
                  id='name' 
                  placeholder=' '
                  name='name'
                  value={name}
                  onChange={onInputUserForm}
                />

                <label htmlFor="name">Nombre:</label>
                <span></span>
              </div>

              <div className="input-box">
                <input 
                  type="email" 
                  id='email' 
                  placeholder=' '
                  name='email'
                  value={email} 
                  onChange={onInputUserForm}
                  />

                <label htmlFor="email">Correo Electrónico:</label>
                <span></span>
              </div>        

            <div className="input-box">
              <input 
                type="text"
                id='textarea'
                placeholder=' '
                name='textarea'
                value={textarea}
                onChange={onInputUserForm}

                />
              <label htmlFor="email">Mensaje:</label>
              <span></span>
            </div>

            <button 
              type='submit'
              
              >
                Enviar
            </button>
          </div>
            
        </form>
      </div>

    </section>
  )
}
