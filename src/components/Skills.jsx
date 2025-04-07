import React from 'react'

import { frontendSkills } from '../data/skills'

export default function Skills() {


  return (
                       
    <section className='skills'id='skills'>
        <h2 className='heading'>Mis <span>Habilidades</span></h2>

        <section>
        <h3>Frontend</h3>
        <div className="skills-grid">
          {frontendSkills.map(({ name, Icon }) => (
            <div className="skill-item" key={name}>
              <Icon />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

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
