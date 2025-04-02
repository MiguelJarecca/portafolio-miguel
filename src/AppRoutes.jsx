import { Route, Routes } from "react-router-dom"
import { Portfolio } from "./pages/Portfolio"

export const AppRoutes = () => {


    return(
        <Routes>
            <Route path="/" element={<Portfolio />}></Route>
        </Routes>
    )
}