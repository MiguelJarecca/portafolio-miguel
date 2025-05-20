import { useEffect, useState } from 'react'

import { frontendSkills, backendSkills, otherSkills } from '../data/skills'


export default function Skills() {

const [columns, setColumns] = useState(6);

  useEffect(() => {

    const updateColumns = () => {
      const screenWidth = Math.floor(window.innerWidth);

    console.log('width ' + screenWidth);

      if (screenWidth > 1200) {
        setColumns(6);
        
      } else if (screenWidth <= 1200 && screenWidth > 800) {
        setColumns(6);
            console.log('dentro aqui 900 ' + screenWidth);

      } else if (screenWidth <= 800 && screenWidth > 660) {
            console.log('dentro aqui 800 ' + screenWidth);

        setColumns(5);
      // } else if (screenWidth <= 660 && screenWidth > 630) {
      //   setColumns(4);
      } else if (screenWidth <= 660 && screenWidth > 480) {
        setColumns(3);
      } else {
        setColumns(2);
      }
      
    }

    updateColumns();
    window.addEventListener('resize', updateColumns);

    return () => window.removeEventListener('resize', updateColumns);

  },[]);

  const isEvenRow = (index) => {
    const row = Math.floor(index / 4);
    return row % 2 !== 0;
  };

  console.log('columns ' + columns);

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
