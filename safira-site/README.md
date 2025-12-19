# 🧠 Site Safira Hosken - Psicóloga Clínica

Site profissional para a psicóloga clínica Safira Hosken, desenvolvido com Angular 17 e design moderno focado em acessibilidade e experiência do usuário.

## ✨ Funcionalidades

- **Design Responsivo**: Interface adaptável para todos os dispositivos
- **Formulário de Contato**: Integração com EmailJS para envio de mensagens
- **Navegação Intuitiva**: Menu limpo e organizado
- **SEO Otimizado**: Meta tags e estrutura otimizada para motores de busca
- **Acessibilidade**: Seguindo as melhores práticas de UX/UI
- **Integração WhatsApp**: Link direto para contato via WhatsApp

## 🚀 Tecnologias Utilizadas

- **Angular 17**: Framework principal com standalone components
- **TypeScript**: Linguagem de programação
- **SCSS**: Pré-processador CSS com arquitetura modular
- **EmailJS**: Serviço para envio de emails do frontend
- **Google Fonts**: Tipografia Playfair Display e Inter
- **CSS Grid & Flexbox**: Layout responsivo moderno

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/safira-site.git
cd safira-site
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente para EmailJS:
```bash
# Crie um arquivo environment.ts com suas credenciais do EmailJS
```

4. Execute o projeto:
```bash
ng serve
```

5. Acesse `http://localhost:4200` no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Cabeçalho e navegação
│   │   ├── footer/          # Rodapé com informações de contato
│   │   └── ...
│   ├── pages/
│   │   ├── home/            # Página inicial
│   │   ├── sobre/           # Sobre a psicóloga
│   │   ├── servicos/        # Serviços oferecidos
│   │   ├── abordagem/       # Abordagem terapêutica
│   │   └── contato/         # Formulário de contato
│   └── services/            # Serviços Angular
├── assets/                  # Recursos estáticos
└── styles/                  # Estilos globais SCSS
```

## 🎨 Design System

O projeto utiliza um design system profissional com:

- **Cores**: Paleta de tons neutros e accent colors para psicologia
- **Tipografia**: Hierarquia clara com Playfair Display (títulos) e Inter (corpo)
- **Espaçamento**: Sistema de spacing consistente
- **Componentes**: Buttons, cards e formulários padronizados
- **Responsividade**: Mobile-first approach

## 📱 Funcionalidades por Página

### Home
- Hero section com apresentação
- Cards de serviços principais
- Call-to-action para contato

### Sobre
- Biografia profissional
- Formação acadêmica
- Experiência clínica

### Serviços
- Lista detalhada de atendimentos
- Modalidades oferecidas
- Público-alvo

### Abordagem
- Metodologia terapêutica
- Técnicas utilizadas
- Filosofia de atendimento

### Contato
- Formulário com validação
- Informações de contato
- Integração WhatsApp
- Localização

## 📧 Configuração EmailJS

Para o formulário de contato funcionar, configure:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure o serviço e template
3. Adicione as credenciais no environment:

```typescript
export const environment = {
  emailjs: {
    serviceId: 'seu_service_id',
    templateId: 'seu_template_id',
    publicKey: 'sua_public_key'
  }
};
```

## 🌐 Deploy

O projeto pode ser deployado em:

- **Vercel**: `npm run build && vercel`
- **Netlify**: `npm run build && netlify deploy`
- **GitHub Pages**: `ng deploy --base-href=/safira-site/`
- **Firebase Hosting**: `ng build && firebase deploy`

## 📈 Performance

- Lazy loading de rotas
- Componentes standalone
- Otimização de imagens
- CSS minificado
- Tree shaking automático

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é propriedade de Safira Hosken. Todos os direitos reservados.

## 📞 Contato

**Safira Hosken** - Psicóloga Clínica
- WhatsApp: [(21) 97536-6990](https://wa.me/5521975366990)
- Email: contato@safirahosken.com.br
- CRP: 05/XXXXX

---

*Desenvolvido com ❤️ para promover saúde mental e bem-estar*
