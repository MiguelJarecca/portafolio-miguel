import { useLocation } from "react-router-dom"
import { CourseList } from "../components/course/CourseList"
import { useEffect } from "react";

export const CoursesPage = () => {

    const { pathname } = useLocation();

    useEffect( () => {
        window.scrollTo(0, 0);
    },[pathname]);


    return(

        <main className="main-courses-page">
                
            <CourseList />
                
        </main>
        
    )
}