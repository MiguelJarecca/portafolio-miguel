import { useState } from "react";

export const CourseCard = ({course, onShowCerti}) => {

  const {title, subtitle, imageCourse, instructor, imageCerti, topics} = course;
  // console.log('control '+ JSON.stringify(topics, null, 2))

  return (
    <div className="course-card">

      <div className="course-content"> 
        <img src={imageCourse} alt={title} className="course-image" />

        <div className="course-info">
          <h3 className="course-title">{title}</h3>
          <h4 className="course-subtittle">{subtitle}</h4>

          <p className="course-instructor">{instructor}</p>
        </div>
       
        <button className="certi-button" onClick={() => onShowCerti(imageCerti)}>
          Ver Certificado
        </button>
      </div>

      <div className="course-description">
        <h2>Que aprendi</h2>

        <ul>
          {topics.map((topic, index) => (
            <li key={index}>
              
              {topic}
            </li>
          ))}
        </ul>
        
      </div>

    </div>
  );

}