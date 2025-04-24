import React, { useState } from 'react'
import { LinkedinLogo } from '../icons/SocialMedia';


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

        <div className="contact-social-media">
          <a href="https://www.linkedin.com/in/migueljarecca"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
            >
              {/* <img src="/images/social-media/linkedin.png" alt="" /> */}
              <LinkedinLogo />
          </a>

          <a href="https://github.com/MiguelJarecca"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            >
              <img src="/images/social-media/github.png" alt="" />
          </a> 
        </div>
          

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

                <label className='form-label' htmlFor="name">Nombre:</label>
                <span className='form-line'></span>
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

                <label className='form-label' htmlFor="email">Correo Electrónico:</label>
                <span className='form-line'></span>
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
              <label className='form-label' htmlFor="textarea">Mensaje:</label>
              <span className='form-line'></span>
            </div>

            <button 
              type='submit'
                className='form-button'
              >
                Enviar
            </button>
          </div>
            
        </form>
      </div>

    </section>
  )
}
