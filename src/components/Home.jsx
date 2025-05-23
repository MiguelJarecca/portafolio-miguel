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
               rel="noopener noreferrer">
              <LinkedinIcon />
            </a> 
            <a href="https://github.com/migueljarecca"
              target="_blank"
              rel="noopener noreferrer">
              <GithubIcon />
            </a> 

          </div>   
        
            <a href="/portafolio-miguel/miguel-cv.pdf" download="miguel-cv.pdf" className='btn-cv'>
              Desargar CV
            </a>
          
      </div>

      <picture className="picture-container">
        <img src="/images/designer.svg" alt="" />
        {/* <img src="/images/vector.jpg" alt="" /> */}
      </picture>
    </main>
  )
}
