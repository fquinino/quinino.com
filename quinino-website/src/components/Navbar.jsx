import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import quininoLogo from '../assets/images/quinino-logo.png';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Fechar menu mobile ao clicar em um link
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  
  // Fechar menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Serviços', id: 'services' },
    { name: 'Sobre Fernando', id: 'about' },
    { name: 'Projetos', id: 'projetos' },
    { name: 'Depoimentos', id: 'testimonials' },
    { name: 'Contato', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm shadow-md py-3'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center">
            <img src={quininoLogo} alt="Quinino Consulting Solutions" className="h-10" />
            <div className="ml-2 text-primary">
              <h1 className="text-lg font-bold">Quinino</h1>
              <p className="text-xs">Consulting Solutions</p>
            </div>
          </div>
        </Link>
        
        {/* Links de navegação - Desktop */}
        <div className="hidden lg:flex space-x-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer font-medium text-primary hover:text-secondary transition-colors py-2 px-3 rounded-md hover:bg-secondary/10"
              activeClass="text-secondary bg-secondary/10"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Botão de contato - Desktop */}
        <div className="hidden lg:block">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-secondary hover:bg-secondary/90 transition-colors"
          >
            Fale Conosco
          </Link>
        </div>
        
        {/* Botão do menu mobile */}
        <button
          className="lg:hidden text-primary hover:text-secondary transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Menu mobile */}
      <div className={`lg:hidden bg-white shadow-lg absolute w-full transition-all duration-300 border-t ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-primary hover:text-secondary hover:bg-secondary/10 transition-colors py-3 px-4 rounded-md"
              onClick={closeMenu}
              activeClass="text-secondary bg-secondary/10"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-200">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-secondary w-full text-center"
              onClick={closeMenu}
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

