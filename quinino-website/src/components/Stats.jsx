import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const stats = [
  {
    id: 1,
    number: 140,
    suffix: '+',
    label: 'Clientes Atendidos',
    delay: 0
  },
  {
    id: 2,
    number: 80,
    suffix: '%',
    label: 'Redução em Tempo de Deploy',
    delay: 0.2
  },
  {
    id: 3,
    number: 50,
    suffix: '%',
    label: 'Economia em Custos de Cloud',
    delay: 0.4
  },
  {
    id: 4,
    number: 99.9,
    suffix: '%',
    label: 'Uptime em Ambientes Gerenciados',
    delay: 0.6
  }
];

const Stats = () => {
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const statsSection = document.getElementById('stats');
    if (statsSection) observer.observe(statsSection);
    
    return () => {
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  return (
    <section id="stats" className="section bg-primary text-white py-20">
      <div className="container">
        <h2 className="section-title text-white">Resultados que Entregamos</h2>
        <p className="section-subtitle text-white opacity-90">
          Números que demonstram o impacto de nossas soluções para nossos clientes
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="stats-item bg-white/10 backdrop-blur-sm border-white/20"
              style={{ animationDelay: `${stat.delay}s` }}
            >
              <div className="stats-number text-secondary">
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    decimals={stat.number % 1 !== 0 ? 1 : 0}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="stats-label text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

