const projects = [
  {
    id: 1,
    title: 'Plataforma SIEM com OpenSearch',
    client: 'Empresa de Cibersegurança',
    description: 'Arquitetura e implementação de uma plataforma SIEM escalável baseada em OpenSearch, com capacidade para processar mais de 10TB de logs diários. A solução permitiu o crescimento de 35 para mais de 140 clientes na plataforma.',
    technologies: ['AWS', 'Kubernetes', 'OpenSearch', 'Terraform', 'Python'],
    results: [
      'Crescimento de 4x na capacidade de processamento',
      'Redução de 65% no tempo de onboarding de novos clientes',
      'Implementação de SOC2 Type II compliance'
    ]
  },
  {
    id: 2,
    title: 'Migração para Multi-Cloud',
    client: 'Fintech Internacional',
    description: 'Estratégia e implementação de migração de infraestrutura on-premises para uma arquitetura multi-cloud (AWS e Azure), com foco em alta disponibilidade, segurança e otimização de custos.',
    technologies: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'CI/CD'],
    results: [
      'Redução de 30% nos custos de infraestrutura',
      '99.99% de uptime após a migração',
      'Tempo de deploy reduzido de horas para minutos'
    ]
  },
  {
    id: 3,
    title: 'Plataforma de Monitoramento Unificado',
    client: 'Empresa de Telecomunicações',
    description: 'Desenvolvimento de uma plataforma unificada de monitoramento e observabilidade para ambientes híbridos, integrando ferramentas open-source e proprietárias.',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Azure Monitor', 'Terraform'],
    results: [
      'Redução de 70% no MTTR (Mean Time To Resolve)',
      'Visibilidade centralizada de mais de 5.000 recursos',
      'Automação de 90% dos alertas e remediações'
    ]
  },
  {
    id: 4,
    title: 'Otimização de Custos no GCP',
    client: 'Startup de IoT',
    description: 'Revisão completa da arquitetura GCP/GKE para uma startup de IoT com ambientes fragmentados, múltiplos clusters Kubernetes e custos em crescimento. Implementação de estratégias de consolidação, right-sizing e governança em nuvem para otimização de custos operacionais.',
    technologies: ['GCP', 'GKE', 'Kubernetes', 'Grafana', 'Prometheus', 'Dataflow'],
    results: [
      'Economia global de 40% em todo o ambiente GCP',
      'Redução de 61% no custo por Dataflow processado',
      'Consolidação de múltiplos clusters em ambiente único otimizado',
      'Base de custos por cliente clara para precificação assertiva',
      'Maior previsibilidade para escalar sem surpresas na infraestrutura'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="section bg-light-gray">
      <div className="container">
        <h2 className="section-title">Projetos & Casos de Sucesso</h2>
        <p className="section-subtitle">
          Conheça alguns dos projetos que desenvolvemos e os resultados alcançados para nossos clientes
        </p>
        
        <div className="space-y-12 mt-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden slide-up ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="md:w-1/2 p-8">
                <div className="mb-2 text-secondary font-medium">{project.client}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{project.title}</h3>
                <p className="mb-6 text-muted-foreground">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2 text-primary">Tecnologias Utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2 text-primary">Resultados:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <div className="text-6xl font-bold mb-4">
                    {project.id === 1 ? '4x' : project.id === 2 ? '30%' : project.id === 3 ? '70%' : '40%'}
                  </div>
                  <div className="text-xl">
                    {project.id === 1 ? 'Crescimento' : project.id === 2 ? 'Redução de Custos' : project.id === 3 ? 'Redução no MTTR' : 'Economia Global'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Discuta seu Projeto Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

