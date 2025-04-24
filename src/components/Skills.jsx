import React from 'react'

import { frontendSkills, backendSkills, otherSkills } from '../data/skills'

export default function Skills() {


  return (
                       
    <section className='skills'id='skills'>
      <h2 className='heading'>Mis <span>Habilidades</span></h2>

      <article className='skills-category'>

        <h3>Frontend</h3>

        <div className="skills-grid front">
          {frontendSkills.map(({ name, Icon }) => (
            <div className="hex-wrapper" key={name}>
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
          {backendSkills.map(({ name, Icon }) => (
              <div className="hex-wrapper" key={name}>
                <div className="hex">
                  <div className="hex-content">
                    <Icon />
                  </div>
                </div>
                <div className="tooltip">{name}</div>
              </div>
            ))}
        </div>

        <h3>Otros</h3>
        <div className="skills-grid others">
          { otherSkills.map(({ name, Icon }) => (
              <div className="hex-wrapper" key={name}>
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
