import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendes',
    position: 'CTO, Fintech Brasil',
    content: 'A consultoria do Fernando foi fundamental para nossa migração para a nuvem. Sua expertise em Kubernetes e AWS nos permitiu implementar uma arquitetura escalável e segura, reduzindo nossos custos operacionais em mais de 40%.',
    rating: 5
  },
  {
    id: 2,
    name: 'Mariana Silva',
    position: 'Head de Infraestrutura, E-commerce Nacional',
    content: 'Contratamos a Quinino Consulting para implementar nossa estratégia de DevOps e o resultado superou todas as expectativas. Nosso ciclo de deploy foi reduzido de dias para minutos, e a qualidade das entregas aumentou significativamente.',
    rating: 5
  },
  {
    id: 3,
    name: 'Roberto Almeida',
    position: 'CISO, Empresa de Cibersegurança',
    content: 'A implementação da plataforma SIEM com OpenSearch realizada pelo Fernando foi um divisor de águas para nossa operação. Conseguimos escalar nosso negócio e atender mais clientes sem comprometer a qualidade do serviço.',
    rating: 5
  },
  {
    id: 4,
    name: 'Juliana Costa',
    position: 'Diretora de TI, Healthtech',
    content: 'A expertise do Fernando em multi-cloud nos ajudou a criar uma estratégia híbrida que atendeu perfeitamente às nossas necessidades de compliance e segurança no setor de saúde. Recomendo fortemente seus serviços.',
    rating: 5
  },
  {
    id: 5,
    name: 'Eduardo Santos',
    position: 'VP de Engenharia, SaaS B2B',
    content: 'A consultoria em Terraform e IaC transformou completamente nossa forma de gerenciar infraestrutura. Agora temos ambientes consistentes, versionados e podemos escalar com confiança. O Fernando é um profissional excepcional.',
    rating: 5
  }
];

const Testimonials = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: windowWidth >= 768,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section id="depoimentos" className="section bg-white">
      <div className="container">
        <h2 className="section-title">O que Nossos Clientes Dizem</h2>
        <p className="section-subtitle">
          Conheça a experiência de quem já transformou sua infraestrutura com nossa consultoria
        </p>
        
        <div className="mt-12">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3 pb-6">
                <div className="testimonial-card h-full flex flex-col">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`inline-block w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <div className="flex-grow">
                    <p className="italic text-muted-foreground mb-6">"{testimonial.content}"</p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

