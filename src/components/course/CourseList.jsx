import { useState } from "react";

import courses from "../../data/Courses";
import { CourseCard } from "./CourseCard";

export const CourseList = () => {

    const [coursesList] = useState(courses);

    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Mis Cursos de Udemy</h2>
        <div className="flex gap-4 flex-wrap">
          {coursesList.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    );
  
}