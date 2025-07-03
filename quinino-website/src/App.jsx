import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './App.css';

// Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Botão de voltar ao topo */}
      <Link
        to="hero"
        spy={true}
        smooth={true}
        duration={500}
        className={`fixed bottom-8 right-8 bg-secondary text-white p-3 rounded-full shadow-lg transition-opacity ${
          scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </Link>
    </div>
  );
}

export default App;

