import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Home from "../components/Home"
import About from "../components/About"
import Proyects from "../components/Proyects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export const Portfolio = () => {

    return(
        <>
            <Header />
            <Home />
            <About />
            <Proyects />
            <Skills />
            <Contact />
            <Footer />
        </>
    )
}