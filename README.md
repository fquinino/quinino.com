# Quinino Consulting Solutions - Website Export

## Conteúdo do Pacote

Este arquivo contém o website completo da **Quinino Consulting Solutions**, pronto para hospedagem em qualquer servidor web.

### Estrutura dos Arquivos

```
quinino-website/
├── dist/                    # 📁 Arquivos prontos para hospedagem
│   ├── index.html          # Página principal
│   └── assets/             # CSS, JS e imagens otimizadas
├── src/                    # 📁 Código fonte (para modificações)
│   ├── components/         # Componentes React
│   ├── assets/            # Imagens e recursos
│   └── ...
├── package.json           # Dependências do projeto
├── vite.config.js         # Configuração do build
└── README.md              # Documentação do projeto
```

## Como Hospedar

### Opção 1: Hospedagem Simples (Recomendada)
1. Extraia o arquivo `quinino-website-export.zip`
2. Faça upload da pasta `dist/` para seu servidor web
3. Configure seu domínio para apontar para a pasta `dist/`

### Opção 2: Hospedagem Gratuita
- **Netlify:** Arraste a pasta `dist/` para netlify.com/drop
- **Vercel:** Conecte o repositório ou faça upload da pasta `dist/`
- **GitHub Pages:** Faça upload dos arquivos da pasta `dist/`

### Opção 3: Servidor Próprio
- **Apache/Nginx:** Copie os arquivos da pasta `dist/` para o diretório público
- **VPS/Cloud:** Configure um servidor web e aponte para a pasta `dist/`

## Para Modificar o Site

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm

### Passos
1. Extraia o arquivo completo
2. Navegue até a pasta `quinino-website/`
3. Execute: `npm install` (ou `pnpm install`)
4. Para desenvolvimento: `npm run dev`
5. Para build: `npm run build`
6. Os arquivos atualizados estarão em `dist/`

## Características do Site

### Funcionalidades
- **Design Responsivo:** Funciona em desktop, tablet e mobile
- **Menu de Navegação:** Fixo no topo com scroll suave
- **Seções Completas:**
  - Hero com foto profissional
  - Serviços detalhados
  - Sobre Fernando
  - 4 Projetos/Cases de sucesso
  - Depoimentos de clientes
  - Formulário de contato funcional

### Design
- **Cores Corporativas:** Azul navy (#003366) e Teal (#0A9396)
- **Tipografia:** Inter (fonte moderna e legível)
- **Animações:** Transições suaves e efeitos hover
- **Otimizado:** SEO-friendly e performance otimizada

### Informações de Contato
- **Telefone:** +55 (27) 99897-0049
- **Email:** fernando@quinino.com
- **Localização:** Vila Velha, ES - Brasil

## URLs de Referência

- **Site Atual Online:** https://fvpqstce.manus.space
- **LinkedIn:** https://www.linkedin.com/in/sou-fernando-quinino/

## Tecnologias Utilizadas

- **Frontend:** React.js + Vite
- **Styling:** Tailwind CSS
- **Animações:** CSS Transitions
- **Navegação:** React Scroll
- **Build:** Vite (otimização automática)

## Atualizações Futuras

Para adicionar novos projetos, depoimentos ou modificar informações:
1. Edite os arquivos em `src/components/`
2. Execute `npm run build`
3. Faça upload da nova pasta `dist/` para seu servidor

# Suporte

Para dúvidas sobre hospedagem ou modificações, entre em contato:
- **Email:** fernando@quinino.com
- **LinkedIn:** linkedin.com/in/sou-fernando-quinino

---

**Website criado em:** Janeiro 2025  
**Versão:** 1.0  
**Status:** Pronto para produção

