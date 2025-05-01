import { CourseList } from "../components/course/CourseList"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const CoursesPage = () => {


    return(

        <>
            <Header />
            <main className="main-courses-page">
                
                <CourseList />
                
            </main>
            <Footer />
        </>
        
    )
}