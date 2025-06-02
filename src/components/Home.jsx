import { GithubIcon, LinkedinIcon } from '../icons/SocialMedia';

export default function Home() {

  return (

    <main className='home'>
      <div className="home-content">
          <p>Hola, Soy</p>
          <h2>Miguel Jarecca</h2>

          <h1>Desarrollador Web Full Stack</h1>

          <div className="social-media">
    
            <a href="https://www.linkedin.com/in/migueljarecca"
               target="_blank"
               rel="noopener noreferrer"
              aria-label='Ir a mi perfil de LinkedIn'   
            >
              <LinkedinIcon />
            </a>

            <a href="https://github.com/migueljarecca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='Ir a mi repositorio de GitHub'
            >
              <GithubIcon />
            </a> 

          </div>   
        
            <a href="/miguel-cv.pdf" download="miguel-cv.pdf" className='btn-cv'>
              Desargar CV
            </a>
          
      </div>

      <div className="picture-container">
        <img src="/images/designer.svg" alt="Ilustración de diseñador trabajando en una computadora" />
      </div>
    </main>
  )
}
