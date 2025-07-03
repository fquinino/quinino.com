import cloudServicesIcon from '../assets/images/cloud-services-icon.png';
import devopsIcon from '../assets/images/devops-icon.png';
import kubernetesIcon from '../assets/images/kubernetes-icon.png';
import iacIcon from '../assets/images/iac-icon.png';
import monitoringIcon from '../assets/images/monitoring-icon.png';
import securityIcon from '../assets/images/security-icon.png';
import consultingIcon from '../assets/images/consulting-icon.png';

const services = [
  {
    id: 1,
    title: 'Cloud Services',
    description: 'Arquitetura e implementação de soluções em AWS e Azure, incluindo migração, otimização de custos e estratégias multi-cloud.',
    icon: cloudServicesIcon,
    delay: 0
  },
  {
    id: 2,
    title: 'DevOps & Automation',
    description: 'Implementação de práticas DevOps, CI/CD pipelines e automação de processos para acelerar entregas e aumentar a qualidade.',
    icon: devopsIcon,
    delay: 0.1
  },
  {
    id: 3,
    title: 'Kubernetes & Containerization',
    description: 'Implementação e gerenciamento de clusters Kubernetes, estratégias de containerização e orquestração de aplicações.',
    icon: kubernetesIcon,
    delay: 0.2
  },
  {
    id: 4,
    title: 'Infrastructure as Code',
    description: 'Desenvolvimento de infraestrutura como código utilizando Terraform, Ansible e outras ferramentas para ambientes consistentes e versionados.',
    icon: iacIcon,
    delay: 0.3
  },
  {
    id: 5,
    title: 'Monitoring & Observability',
    description: 'Implementação de soluções de monitoramento e observabilidade com Prometheus, Grafana, ELK Stack e OpenSearch.',
    icon: monitoringIcon,
    delay: 0.4
  },
  {
    id: 6,
    title: 'Security & Compliance',
    description: 'Implementação de práticas de segurança em cloud, conformidade com SOC2, LGPD e outras regulamentações.',
    icon: securityIcon,
    delay: 0.5
  },
  {
    id: 7,
    title: 'Strategic Consulting',
    description: 'Consultoria estratégica para transformação digital, modernização de aplicações e adoção de cloud.',
    icon: consultingIcon,
    delay: 0.6
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-light-gray">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Oferecemos soluções completas para modernizar sua infraestrutura e impulsionar sua transformação digital
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card slide-up"
              style={{ animationDelay: `${service.delay}s` }}
            >
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Solicite uma Consultoria
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

