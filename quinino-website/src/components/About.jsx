import profilePhoto from '../assets/images/Fernando_Photo_Tech_Frame_Improved.png';

const About = () => {
  return (
    <section id="sobre" className="section bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Fernando Quinino - Cloud & Kubernetes Expert" 
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-secondary text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold">15+ anos</p>
                <p className="text-sm">de experiência</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5 md:pl-16">
            <h2 className="section-title text-left">Sobre Fernando Quinino</h2>
            
            <p className="mb-6">
              Fernando Quinino é um <strong>Consultor Especialista em Cloud Computing</strong> com mais de 15 anos de experiência 
              em infraestrutura e arquitetura de sistemas. Como Technical Director e Cloud Architect, 
              Fernando tem liderado projetos de transformação digital e modernização de infraestrutura 
              para empresas de diversos portes e segmentos.
            </p>
            
            <p className="mb-6">
              Com profundo conhecimento em <strong>AWS, Azure, Kubernetes, Terraform e DevOps</strong>, Fernando 
              ajuda empresas a implementar soluções escaláveis, seguras e eficientes, reduzindo custos 
              operacionais e aumentando a agilidade dos negócios.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Certificações e Especializações</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'AWS Certified Solutions Architect',
                  'Microsoft Certified: Azure Solutions Architect',
                  'Certified Kubernetes Administrator (CKA)',
                  'HashiCorp Certified: Terraform Associate',
                  'ITIL Foundation',
                  'MBA em Cloud Computing'
                ].map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Experiência Internacional</h3>
              <p>
                Com experiência em projetos internacionais na América do Norte e Europa, 
                Fernando traz uma visão global de melhores práticas em cloud computing e 
                infraestrutura moderna, ajudando empresas brasileiras a adotarem padrões 
                de classe mundial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

