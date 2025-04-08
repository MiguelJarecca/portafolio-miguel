import React from 'react'

import { frontendSkills } from '../data/skills'

export default function Skills() {


  return (
                       
    <section className='skills'id='skills'>
      <h2 className='heading'>Mis <span>Habilidades</span></h2>

      <article className='skills-category'>
        <h3>Frontend</h3>
        
        {/* <div className="skills-grid">
          {frontendSkills.map(({ name, Icon }) => (
            <div className="hex" key={name}>
              <div className="hex-in">
                <div className="hex-content">
                  <Icon />
                </div>
              </div>
            </div>
          ))}
        </div> */}

<div className="skills-grid">
  {frontendSkills.map(({ name, Icon }) => (
    <div className="hex" key={name}>
      <div className="hex-skill" >
        <Icon />
        <span>{name}</span>
      </div>
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
