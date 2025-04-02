import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Home from "../components/Home"
import About from "../components/About"
import Proyects from "../components/Proyects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

export const Portfolio = () => {

    return(
        <>
            <Header />
            <section><Home /></section>
            <section><About /></section>
            <section><Proyects /></section>
            <section><Skills /></section>
            <section><Contact /></section>
        </>
    )
}