import { useState } from 'react'
import './App.css'
import Header from './components/public/Header'
import Home from './components/public/Home'
import About from './components/public/About'
import Proyects from './components/public/Proyects'
import Skills from './components/public/Skills'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Proyects />
      <Skills />
    </>
  )
}

export default App
