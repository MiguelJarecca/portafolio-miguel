import React from 'react'

import { frontendSkills, backendSkills, otherSkills } from '../data/skills'

export default function Skills() {
 // Función para determinar si el hexágono está en fila par (desplazada)
  const isEvenRow = (index) => {
    const row = Math.floor(index / 4); // 3 hexágonos por fila (ajusta según necesidad)
    return row % 2 !== 0;
  };

  return (
                       
    <section className='skills'id='skills'>
      <h2 className='heading'>Mis <span>Habilidades</span></h2>

      <article className='skills-category'>

        <h3>Frontend</h3>

        <div className="skills-grid front">
          {frontendSkills.map(({ name, Icon }) => (
            <div className="hex-wrapper" key={name}>
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
          {backendSkills.map(({ name, Icon }, index) => (
              <div className="hex-wrapper" key={name}  style={{
              marginLeft: isEvenRow(index) ? "55px" : "0",
            }}>
                <div className="hex-border"></div>
                <div className="hex">
                  <Icon />
                </div>
                <div className="tooltip">{name}</div>
              </div>
            ))}
        </div>

        <h3>Otros</h3>
        {/* <div className="skills-grid others">
          { otherSkills.map(({ name, Icon }, index) => (
              <div className="hex-wrapper" key={name}   style={{
              marginLeft: isEvenRow(index) ? "55px" : "0",
            }}>
                <div className="hex-border"></div>
                <div className="hex">
                  <div className="hex-content">
                    <Icon />
                  </div>
                </div>
                <div className="tooltip">{name}</div>
              </div>
            ))}
        </div> */}

        <div className="skills-grid others">
        {otherSkills.map(({ name, Icon }, i) => (
          <div className={`hex-wrapper ${Math.floor(i / 6) % 2 === 1 ? 'offset' : ''}`} key={name}>
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
