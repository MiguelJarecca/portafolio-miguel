
import { CssIcon, HtmlIcon, JavaIcon, JavascriptIcon, ReactIcon, MysqlIcon, ReduxIcon, SpringSecurityIcon, SpringBootIcon } from '../icons/SkillsIcons';

export default function Proyects() {
  return (
    <section className='proyects' id='proyects'>
      <h2 className='heading'>Mis <span>Proyectos</span></h2>

      <div className='proyects-container'>

          <div className="proyects-card">
            <div className="div-img">
              <img src="/images/proyects/escolar-plus.png" alt="Polo de uniforme escolar del proyecto Escolar Plus" />
            </div>
            <div className="card-body">
              <h3 className= "card-title">Escolar Plus</h3>
              <p className='card-text'>Aplicación web de e-commerce especializada en la venta de uniformes escolares.
                Permite a los usuarios navegar por categorías, agregar productos al carrito y a favoritos.</p>
              <div className="technologies">
                
                <div className="technologies-icons icons-1">
                  <ReactIcon />
                  <p>React</p>
                </div>

                <div className="technologies-icons icons-1">
                  <ReduxIcon />
                  <p>Redux</p>
                </div>

                <div className="technologies-icons icons-1">
                  <JavaIcon />
                  <p>Java</p>
                </div>

                <div className="technologies-icons icons-1">
                  <SpringSecurityIcon />
                  <p>Spring Security</p>
                </div>

                <div className="technologies-icons icons-1"> 
                  <MysqlIcon />
                  <p>MySql</p>
                </div>
                
              </div>
              <a 
                href="https://github.com/migueljarecca/escolar-plus.git" 
                className='proyects-link'
                target="_blank"
                rel="noopener noreferrer"
                >
                Ver en GitHub
              </a>
            </div>
          </div>

          <div className="proyects-card">
            <div className="div-img">
              <img src="/images/proyects/login.png" alt="Pantalla de inicio de sesión del proyecto Login Authentication" />
            </div>
            <div className="card-body">
              <h3 className= "card-title">Login Autenticación</h3>
              <p className='card-text'>API REST segura para gestión de usuarios, con autenticación y autorización 
                mediante JWT. Desarrollada con Spring Boot y Spring Security.
              </p>
              <div className="technologies">

                <div className="technologies-icons icons-2">
                  <ReactIcon />
                  <p>React</p>
                </div>
                
                <div className="technologies-icons icons-2">
                  <JavaIcon />
                  <p>Java</p>
                </div>

                <div className="technologies-icons icons-2">
                  <SpringSecurityIcon />
                  <p>Spring Security</p>
                </div>

                <div className="technologies-icons icons-2">
                  <SpringBootIcon />
                  <p>Spring Boot</p>
                </div>
                
              </div>
              <a 
                href="https://github.com/migueljarecca/login-authentication.git" 
                className='proyects-link'
                target="_blank"
                rel="noopener noreferrer"
                >
                Ver en GitHub
              </a>
            </div>
          </div>

          <div className="proyects-card">
            <div className="div-img">
              <img src="/images/proyects/dark-mode.png" alt="Intenfaz del proyecto que alteerna entre modo claro y oscuro" />
            </div>
            <div className="card-body">
              <h3 className= "card-title">Modo Claro - Oscuro</h3>
              <p className='card-text'>Un proyecto simple que alterna entre el modo claro y oscuro. 
                Haciendo clic en el botón para cambiar instantáneamente.</p>
              <div className="technologies">

                <div className="technologies-icons icons-3"> 
                  <HtmlIcon />
                  <p>HTML5</p>
                </div>

                <div className="technologies-icons icons-3"> 
                  <CssIcon />
                  <p>CSS3</p>
                </div>

                <div className="technologies-icons icons-3"> 
                  <JavascriptIcon />
                  <p>Javascript</p>
                </div>
                
              </div>
              <a 
                href="https://github.com/migueljarecca/light-dark-toggle.git" 
                className='proyects-link'
                target="_blank"
                rel="noopener noreferrer"
                >
                Ver en GitHub
              </a>
            </div>
          </div>

        </div>

    </section>
  )
}
