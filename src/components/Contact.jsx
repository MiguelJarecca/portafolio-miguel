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

      <div className="div-what-app">
        <a href="https://web.facebook.com/miguel.jareccaccallo.1/?locale=es_LA" 
            target="_blank">
            <ReactIcon/>
        </a> 
      </div>

    <form onSubmit={onSubmitUserForm}>
      <div className="input-box">
        <div className="input-group">
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

        <div className="input-group">
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
      </div>
      <div className="input-textarea">
        <input 
          type="text"
          id='textarea'
          placeholder=' '
          name='textarea'
          value={textarea}
          onChange={onInputUserForm}

           />
      </div>

      <button 
        type='submit'
        
        >
          Enviar
        </button>
    </form>
   

    </section>
  )
}
