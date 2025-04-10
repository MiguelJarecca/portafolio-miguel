import React from 'react'

import { frontendSkills, backendSkills, otherSkills } from '../data/skills'

export default function Skills() {


  return (
                       
    <section className='skills'id='skills'>
      <h2 className='heading'>Mis <span>Habilidades</span></h2>

      <article className='skills-category'>

        <h3>Frontend</h3>

        <div className="skills-grid">
          {frontendSkills.map(({ name, Icon }) => (
            // <div className="hex-wrapper" key={name}>
              <div className="hex" key={name}>
                <div className="hex-content">
                  <Icon />
                  <span className='tooltip'>{name}</span>
                </div>
              </div>
            // </div>
          ))}
        </div>

        <h3>Backend</h3>
        <div className="skills-grid">
          {backendSkills.map(({ name, Icon }) => (
            <div className="skill-item" key={name}>
              <Icon />
              <span>{name}</span>
            </div>
          ))}
        </div>

        <h3>Otros</h3>
        <div className="skills-grid">
          {otherSkills.map(({ name, Icon }) => (
            <div className="skill-item" key={name}>
              <Icon />
              <span>{name}</span>
            </div>
          ))}
        </div>



      </article>

      {/* <section>
        <h3>Backend</h3>
        <div className="skills-grid">
          {backendSkills.map(({ name, Icon }) => (
            <div className="skill-item" key={name}>
              <Icon />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section> */}

      {/* <section>
        <h3>Otros</h3>
        <div className="skills-grid">
          {otherSkills.map(({ name, Icon }) => (
            <div className="skill-item" key={name}>
              <Icon />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section> */}

    </section>
  )
}
