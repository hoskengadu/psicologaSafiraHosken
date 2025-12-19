import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SiteContent {
  home: {
    title: string;
    subtitle: string;
    description: string;
  };
  sobre: {
    title: string;
    content: string;
  };
  servicos: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  abordagem: {
    title: string;
    content: string;
    metodologias: Array<{
      name: string;
      description: string;
    }>;
  };
  contato: {
    title: string;
    telefone: string;
    email: string;
    endereco: string;
    horarios: string;
  };
  footer: {
    crp: string;
    copyright: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private content: SiteContent = {
    home: {
      title: 'Safira Hosken',
      subtitle: 'Psicóloga Clínica',
      description: 'Acolhimento e cuidado em um espaço seguro para o seu bem-estar emocional. Atendimento psicológico online e presencial com abordagem humanizada e personalizada.'
    },
    sobre: {
      title: 'Sobre Mim',
      content: `Sou Safira Hosken, psicóloga formada com especialização em psicologia clínica. 

Acredito que cada pessoa possui recursos internos únicos para superar desafios e encontrar seu caminho. Meu objetivo é oferecer um espaço acolhedor e livre de julgamentos, onde você possa se expressar livremente e trabalhar questões que são importantes para você.

Com uma abordagem humanizada e personalizada, busco compreender suas necessidades específicas para juntos construirmos estratégias eficazes para o seu bem-estar emocional.

**Modalidades de Atendimento:**
• Presencial: Consultório na Tijuca, Rio de Janeiro
• Online: Sessões por videochamada com total privacidade e qualidade`
    },
    servicos: {
      title: 'Serviços',
      items: [
        {
          title: 'Psicoterapia Individual',
          description: 'Atendimento personalizado para adultos, presencial ou online, com foco no autoconhecimento e desenvolvimento pessoal.'
        },
        {
          title: 'Terapia de Casal',
          description: 'Trabalho terapêutico presencial ou online voltado para melhorar a comunicação e fortalecer relacionamentos.'
        },
        {
          title: 'Orientação Profissional',
          description: 'Auxílio na tomada de decisões sobre carreira e desenvolvimento profissional. Disponível online e presencial.'
        },
        {
          title: 'Acompanhamento em Momentos de Crise',
          description: 'Suporte especializado durante períodos de dificuldade emocional e transições de vida. Atendimento flexível online ou presencial.'
        }
      ]
    },
    abordagem: {
      title: 'Abordagem Terapêutica',
      content: 'Minha prática clínica integra diferentes abordagens terapêuticas, sempre respeitando a singularidade de cada pessoa. O processo terapêutico é colaborativo, onde terapeuta e paciente trabalham juntos em direção aos objetivos estabelecidos.',
      metodologias: [
        {
          name: 'Terapia Cognitivo-Comportamental',
          description: 'Abordagem focada na relação entre pensamentos, emoções e comportamentos.'
        },
        {
          name: 'Psicologia Humanística',
          description: 'Valorização da experiência subjetiva e do potencial humano para crescimento.'
        },
        {
          name: 'Mindfulness',
          description: 'Técnicas de atenção plena para redução do estresse e maior consciência do momento presente.'
        }
      ]
    },
    contato: {
      title: 'Entre em Contato',
      telefone: '(21) 97536-6990',
      email: 'safiralinhares.psi@gmail.com',
      endereco: 'Presencial: Tijuca, RJ | Online: Atendimento por videochamada',
      horarios: 'Consulte a agenda para horários disponíveis.  Modalidades: Presencial e Online'
    },
    footer: {
      crp: 'CRP 05/69453',
      copyright: '© 2025 Hosken Tecnologia - Todos os direitos reservados'
    }
  };

  private contentSubject = new BehaviorSubject<SiteContent>(this.content);
  public content$ = this.contentSubject.asObservable();

  constructor() {}

  public getContent(): SiteContent {
    return this.content;
  }
}
