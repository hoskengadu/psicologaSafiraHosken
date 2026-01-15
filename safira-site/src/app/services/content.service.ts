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
    comoFuncionam: string;
    publicoAtendido: string;
    atendimentoPresencial: string;
    items: Array<{
      title: string;
      description: string;
      image?: string;
    }>;
  };
  abordagem: {
    title: string;
    content: string;
    citacao: string;
  };
  contato: {
    title: string;
    telefone: string;
    email: string;
    endereco: string;
    horarios: string;
    chamadaAcao: string;
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
      description: 'Acolhimento e cuidado em um espaço seguro para o seu bem-estar emocional. Atendimento psicológico on-line e presencial com abordagem humanizada e personalizada.'
    },
    sobre: {
      title: 'Quem sou Eu?',
      content: `Psicóloga e Mestre em Psicologia pela Universidade Federal Fluminense (UFF), com atuação clínica orientada pela ética da psicanálise e implicada nos atravessamentos interseccionais de raça, gênero, classe e sexualidade. Meu trabalho é pautado no respeito à singularidade de cada sujeito, oferecendo um espaço de escuta atenta e cuidadosa, sem julgamentos, onde será possível falar livremente sobre suas vivências, conflitos e sofrimentos. 

Trajetória profissional com foco nas perspectivas de gênero, saúde mental materna, além de atuar clinicamente em situações de violências contra mulheres, crianças e adolescentes.`
    },
    servicos: {
      title: 'Como funcionam os atendimentos?',
      comoFuncionam: `Os atendimentos psicológicos acontecem em um espaço de escuta ética, sigilosa e acolhedora. A partir da fala, o trabalho clínico se constrói respeitando o tempo, a singularidade e o percurso de cada sujeito.

As sessões têm duração média de 50 minutos e podem ocorrer de forma presencial ou on-line, conforme a necessidade do paciente. A frequência dos encontros é definida em conjunto, considerando a demanda apresentada e o processo singular de cada um.`,
      publicoAtendido: 'Crianças, Adolescentes, Adultos e Idosos.',
      atendimentoPresencial: `Os atendimentos presenciais são realizados no bairro da Tijuca - Rio de Janeiro.`,
      items: [
        {
          title: 'Atendimento Presencial',
          description: 'Os atendimentos presenciais são realizados no bairro da Tijuca - Rio de Janeiro.'
        },
        {
          title: 'Atendimento On-line',
          description: `As sessões são realizadas por meio de plataformas digitais seguras, respeitando as normas e orientações do Conselho Federal de Psicologia. Para o atendimento, é importante que o paciente esteja em um local reservado, com acesso à internet e privacidade, favorecendo a livre expressão durante a sessão.
O trabalho clínico mantém os mesmos princípios do atendimento presencial, sendo orientado pela ética da psicanálise. O atendimento on-line permite continuidade do processo terapêutico, flexibilidade de horários e maior conforto para o paciente, sem comprometer a qualidade da escuta e do cuidado.`,
          image: 'IMG_3445.jpeg'
        }
      ]
    },
    abordagem: {
      title: 'Sobre a Análise',
      citacao: 'A voz do inconsciente é sutil, mas não descansa até ser ouvida. - Sigmund Freud',
      content: `O objetivo principal dos atendimentos clínicos, trata-se de um convite à escuta, onde o tempo de cada sujeito é valorizado e acompanhado de maneira ética e respeitosa. Um tempo em que a fala encontra espaço para emergir, permitindo que cada sujeito possa se aproximar de sua própria história, elaborar seus impasses e produzir novos sentidos para aquilo que antes repetia apenas em silêncio. 

Na jornada da análise, recordações e repetições são valorizadas, para que assim, o trabalho de elaboração ocorra e possa produzir impactos significativos na vida do sujeito. 
Além disso, é comum que, no percurso analítico, sejam desveladas questões que, a princípio, não estavam evidentes.`
    },
    contato: {
      title: 'Entre em Contato',
      telefone: '(21) 97536-6990',
      email: 'safiralinhares.psi@gmail.com',
      endereco: 'Presencial: Tijuca, RJ | On-line: Atendimento por videochamada',
      horarios: 'Consulte a agenda para horários disponíveis.  Modalidades: Presencial e On-line',
      chamadaAcao: `Entre em contato e agende uma primeira conversa.
Esse primeiro encontro não será cobrado e oferecerá um espaço para que você conheça meu trabalho, enquanto eu posso compreender suas demandas iniciais e ter um primeiro contato com sua história.`
    },
    footer: {
      crp: 'CRP 05/69453',
      copyright: '© 2026 Hosken Tecnologia - Todos os direitos reservados'
    }
  };

  private contentSubject = new BehaviorSubject<SiteContent>(this.content);
  public content$ = this.contentSubject.asObservable();

  constructor() {}

  public getContent(): SiteContent {
    return this.content;
  }
}
