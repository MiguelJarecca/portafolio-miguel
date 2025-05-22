import { useEffect, useState } from 'react'

import { frontendSkills, backendSkills, otherSkills } from '../data/skills'


export default function Skills() {

const [columns, setColumns] = useState(6);

  useEffect(() => {

    const updateColumns = () => {
      const screenWidth = Math.floor(window.innerWidth);

      if (screenWidth > 1200) {
        setColumns(6);
        
      } else if (screenWidth <= 1200 && screenWidth > 800) {
        setColumns(6);
      } else if (screenWidth <= 800 && screenWidth > 660) {
        setColumns(5);
      } else if (screenWidth <= 660 && screenWidth > 500) {
        setColumns(3);
      } else if (screenWidth <= 500){
        setColumns(2);
      }
      
    }

    updateColumns();
    window.addEventListener('resize', updateColumns);

    return () => window.removeEventListener('resize', updateColumns);

  },[]);

  return (
                       
    <section className='skills'id='skills'>
      <h2 className='heading'>Mis <span>Habilidades</span></h2>

      <article className='skills-category'>

        <h3>Frontend</h3>
        <div className="skills-grid front">
          {frontendSkills.map(({ name, Icon }, i) => (
            <div className={`hex-wrapper ${Math.floor(i / columns) % 2 === 1 ? 'offset' : ''}`} key={name}>
              <div className="hex-border"></div>
              <div className="hex">
                <div className="hex-content">
                  <Icon />
                </div>
              </div>
              <div className="tooltip">{name}</div>
            </div>
          ))}
        </div>

        <h3>Backend</h3>
        <div className="skills-grid backend">
          {backendSkills.map(({ name, Icon }, i) => (
              <div className={`hex-wrapper ${Math.floor(i / columns) % 2 === 1 ? 'offset' : ''}`} key={name}>
                <div className="hex-border"></div>
                <div className="hex">
                  <Icon />
                </div>
                <div className="tooltip">{name}</div>
              </div>
            ))}
        </div>

        <h3>Otros</h3>
        <div className="skills-grid others">
          {otherSkills.map(({ name, Icon }, i) => (
            <div className={`hex-wrapper ${Math.floor(i / columns) % 2 === 1 ? 'offset' : ''}`} key={name}>
              <div className="hex-border"></div>
              <div className="hex">
                <div className="hex-content">
                  <Icon />
                </div>
              </div>
              <div className="tooltip">{name}</div>
            </div>
          ))}
        </div>


      </article>

    </section>
  )
}
