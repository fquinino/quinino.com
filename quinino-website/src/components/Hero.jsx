import { Link } from 'react-scroll';
import profilePhoto from '../assets/images/Fernando_Photo_Tech_Frame_Improved.png';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-blue to-primary opacity-90"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="hero-content relative z-10">
        <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 slide-up">
            Transforme sua <span className="text-secondary">Infraestrutura</span> em Vantagem Competitiva
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 slide-up" style={{ animationDelay: '0.2s' }}>
            Consultoria especializada em Cloud, Kubernetes e DevOps para empresas que buscam escalabilidade, segurança e eficiência em seus ambientes tecnológicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-secondary"
            >
              Nossos Serviços
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative">
            <img 
              src={profilePhoto} 
              alt="Fernando Quinino - Cloud & Kubernetes Expert" 
              className="w-64 md:w-80 lg:w-96 rounded-lg z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 bg-secondary text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">Fernando Quinino</p>
              <p className="text-sm">Cloud & Kubernetes Expert</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" opacity="1"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

