import { useEffect, useState } from "react";

import courses from "../../data/courses";
import { CourseCard } from "./CourseCard";
import { ArrowBack } from "../../icons/Icons";
import { Link } from "react-router-dom";

export const CourseList = () => {

  const [courseList] = useState(courses);
  const [selectedCerti, setSelectedCerti] = useState(null);

    // Cierre del modal con tecla Escape
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setSelectedCerti(null);
        }
      };
  
      if (selectedCerti) {
        window.addEventListener("keydown", handleKeyDown);
      }
  
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [selectedCerti]);

  return (

    <>
      
      <nav className="course-list-nav">
        <h2 className="heading">Mis <span>Cursos</span></h2>

        <Link to="/" className="link-back">
          <ArrowBack />       
          volver
        </Link>

      </nav>

      <div className="course-container">
        {courseList.map(course => (
          <CourseCard key={course.id} course={course} onShowCerti={setSelectedCerti} />
        ))}
      </div>
      
      {selectedCerti && (
        <div className="modal" onClick={() => setSelectedCerti(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedCerti(null)}>&times;</span>
            <img src={selectedCerti} alt="Certificado" className="certi-image"  loading="lazy"/>
          </div>
        </div>
      )}

    </>
  );
  
}