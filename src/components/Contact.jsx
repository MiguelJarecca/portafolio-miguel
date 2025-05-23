import { useState } from 'react'
import { LinkedinLogo, GithubLogo } from '../icons/SocialMedia';
import { validateForm } from '../utils/validateForm';
import { sendEmail } from '../services/emailService';


const initialForm = {
  name: '',
  email: '',
  message: '',
}

const initialFormErrors = {
  name: '',
  email: '',
  message: '',
}

export default function Contact() {

  const [userForm, setUserForm] = useState(initialForm);
  const [formErrors, setFormErros] = useState(initialFormErrors);

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {name, email, message} = userForm;

  const onInputUserForm = ({target}) => {
    const {name, value} = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });

    setFormErros({
      ...initialFormErrors,
      [name]: ''
    });
  };

  const onSubmitUserForm = async (event) => {

    event.preventDefault();

    const errors = validateForm(userForm);

    if (Object.keys(errors).length > 0) {
      console.log("Errores del formulario:", errors);
      setFormErros(errors);
      return;
    }

    try {
      
      setIsLoading(true);

      const result = await sendEmail(userForm);

      if (result.success) {
        console.log("mensaje: " + result.data);
        setSubmitStatus({success: true, email: "¡Email enviado con éxito!"});
        setUserForm(initialForm);
      } else {
        console.error("Error al enviar email:", result.error);
        setSubmitStatus({success: false, email: "Error al enviar"});
      }

      setTimeout(() => {setSubmitStatus(null)}, 4000);

    } catch (error) {
      console.log("Error inesperado: " + error)
      setSubmitStatus({success: false, email: "Error inesperado"});
      setTimeout(() => {setSubmitStatus(null)}, 4000);

    } finally {
      setIsLoading(false);
    }
    
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
              <LinkedinLogo />
          </a>

          <a href="https://github.com/MiguelJarecca"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            >
              <GithubLogo />
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
              {formErrors.name && <p className='form-error'>{formErrors.name}</p>}

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
              {formErrors.email && <p className='form-error'>{formErrors.email}</p>}

            </div>        

            <div className="input-box">
              <input 
                type="text"
                id='textarea'
                placeholder=' '
                name='message'
                value={message}
                onChange={onInputUserForm}

                />

              <label className='form-label' htmlFor="textarea">Mensaje:</label>
              {formErrors.message && <p className='form-error'>{formErrors.message}</p>}

            </div>

            <button 
              type='submit'
              className='form-button'
              disabled={isLoading}
              >
              
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>

            {submitStatus && (
              <p 
                className={setSubmitStatus.success ? 'success-message' : 'error-message'}
                >
              {submitStatus.email}</p>
            )}
          </div>
            
        </form>
      </div>

    </section>
  )
}
