import './App.css'
import Header from './components/public/Header'
import Home from './components/public/Home'
import About from './components/public/About'
import Proyects from './components/public/Proyects'
import Skills from './components/public/Skills'
import Contact from './components/public/Contact'
import Footer from './components/public/Footer'

function App() {

  // scroll section active liks 
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a')

  window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
        };
      })

    // Sticky navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 50);
  };

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
