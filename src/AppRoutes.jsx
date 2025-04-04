import { Route, Routes } from "react-router-dom"
import { Portfolio } from "./pages/Portfolio"
import { CoursesPage } from "./pages/CoursesPage"

export const AppRoutes = () => {


    return(
        <Routes>
            <Route path="/" element={<Portfolio />}></Route>
            <Route path="/courses" element={<CoursesPage />}></Route>
        </Routes>
    )
}