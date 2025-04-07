import { useEffect, useState } from "react";

import courses from "../../data/Courses";
import { CourseCard } from "./CourseCard";

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


    <section className="course-list">
      
      <h2>Mis Cursos</h2>
      <div className="course-container">
        {courseList.map(course => (
          <CourseCard key={course.id} course={course} onShowCerti={setSelectedCerti} />
        ))}
      </div>
      
      {selectedCerti && (
        <div className="modal" onClick={() => setSelectedCerti(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedCerti(null)}>&times;</span>
            <img src={selectedCerti} alt="Certificado" className="certi-image" />
          </div>
        </div>
      )}

    </section>
  );
  
}