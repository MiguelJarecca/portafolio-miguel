import './App.css'
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './components/Home'
import Proyects from './components/Proyects';
import Skills from './components/Skills';

function App() {

  return (
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

export default App