import { Route, Routes } from "react-router-dom"
import { Portfolio } from "./pages/Portfolio"
import { Courses } from "./pages/Courses"

export const AppRoutes = () => {


    return(
        <Routes>
            <Route path="/" element={<Portfolio />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
        </Routes>
    )
}