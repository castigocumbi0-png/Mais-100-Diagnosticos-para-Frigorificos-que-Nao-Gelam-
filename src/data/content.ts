import {
  HeroData,
  InsideMaterialItem,
  BenefitItem,
  BonusItem,
  PlanItem,
  FaqItem,
} from '../types';

export const heroData: HeroData = {
  badge: '❄️ Guia Prático de Investigação',
  headline: '+100 Diagnósticos para Frigoríficos que Não Gelam',
  subheadline:
    'Tenha +100 diagnósticos para consultar quando um frigorífico não gela e transforme aquela dúvida inicial em um caminho de investigação mais organizado.',
  mockupImage: '/src/assets/images/capa_frigorificos.png',
  storyP1:
    'Você olha para o equipamento. Ele não gela. E começa aquela dúvida: “Será que é isso? Ou pode ser aquilo?”',
  storyP2:
    'Para quem está começando na refrigeração, esse momento pode ser justamente o mais difícil.',
  storyP3:
    'O +100 Diagnósticos para Frigoríficos que Não Gelam reúne situações e possíveis causas em um único material, para você ter uma referência prática na hora de investigar o problema. Menos tempo perdido sem saber o próximo passo. Mais clareza para começar o diagnóstico.',
  checklist: [
    '+100 situações de diagnóstico para consultar diante de diferentes sintomas',
    'Possíveis causas organizadas para entender o que pode estar por trás do defeito',
    'Caminho de investigação prático para transformar dúvida em próximo passo claro',
    'Checklist de diagnóstico para estruturar a investigação antes de concluir',
  ],
  ctaText: 'QUERO TER ACESSO AO GUIA',
};

export const insideMaterialList: InsideMaterialItem[] = [
  {
    title: '+100 situações de diagnóstico',
    description:
      'Para consultar diferentes situações em que o frigorífico não está gelando e levantar possíveis causas do problema.',
  },
  {
    title: 'Possíveis causas',
    description:
      'Informações organizadas para ajudar você a entender o que pode estar por trás do sintoma apresentado.',
  },
  {
    title: 'Caminho de investigação',
    description:
      'Uma referência para saber quais pontos investigar e transformar a dúvida inicial em um próximo passo mais claro.',
  },
  {
    title: 'Checklist de diagnóstico',
    description:
      'Um recurso de consulta para ajudar a organizar a investigação antes de concluir o diagnóstico.',
  },
];

export const receiveChecklist: string[] = [
  '+100 diagnósticos para consultar diante de diferentes situações.',
  'Possíveis causas relacionadas aos problemas apresentados.',
  'Caminhos de investigação para ajudar a organizar o raciocínio durante o diagnóstico.',
  'Organização por sintomas/situações, facilitando a localização do conteúdo.',
  'Guia de utilização, mostrando como aproveitar melhor o material.',
  'Checklist de diagnóstico, para ajudar a estruturar sua investigação.',
];

export const bonusList: BonusItem[] = [
  {
    id: 1,
    title: '🎁 #1 — Checklist de Diagnóstico',
    description:
      'Um checklist prático para acompanhar os principais pontos que precisam ser verificados durante a investigação de um frigorífico que não gela. Assim, você reduz as chances de esquecer etapas importantes e consegue conduzir o diagnóstico de maneira mais organizada.',
    image: '/src/assets/images/bonus_1.png',
  },
  {
    id: 2,
    title: '🎁 #2 — Ficha de Diagnóstico',
    description:
      'Uma ficha para registrar os sintomas observados, verificações realizadas e conclusão do diagnóstico. Você consegue organizar as informações de cada atendimento e acompanhar seu raciocínio durante a investigação, sem depender apenas da memória.',
    image: '/src/assets/images/bonus_2.png',
  },
  {
    id: 3,
    title: '🎁 #3 — Guia “Por Onde Começar?”',
    description:
      'Um material rápido pensado especialmente para aquele momento em que você olha para o frigorífico e pensa: “Por onde eu começo?” Ele serve como uma orientação inicial para ajudar você a definir um ponto de partida e conduzir sua investigação com mais clareza.',
    image: '/src/assets/images/bonus_3.png',
  },
];

export const plansList: PlanItem[] = [
  {
    id: 'basico',
    name: '🔹 PLANO BÁSICO',
    subtitle: '+100 Diagnósticos para Frigoríficos que Não Gelam',
    isFeatured: false,
    image: '/src/assets/images/plano_basico.png',
    features: [
      'Você recebe o produto principal para consultar possíveis causas e caminhos de investigação diante de diferentes situações de frigoríficos que não gelam.',
      '✓ +100 Diagnósticos para Frigoríficos que Não Gelam',
    ],
    originalPrice: 'R$ 99,90',
    price: 'R$ 17,90',
    priceNote: 'Promoção por tempo limitado',
    checkoutUrl: 'https://pay.cakto.com.br/3538iai_1107531',
    ctaText: 'QUERO O PLANO BÁSICO',
  },
  {
    id: 'completo',
    name: '🔥 PLANO COMPLETO',
    badge: 'MAIS COMPLETO',
    subtitle: '+100 Diagnósticos para Frigoríficos que Não Gelam + 3 Bônus',
    isFeatured: true,
    image: '/src/assets/images/capa.png',
    features: [
      'Tenha o produto principal mais os 3 materiais complementares criados para ajudar você a organizar ainda melhor seu diagnóstico.',
      '✓ +100 Diagnósticos para Frigoríficos que Não Gelam',
      '✓ Checklist de Diagnóstico',
      '✓ Ficha de Diagnóstico',
      '✓ Guia “Por Onde Começar?”',
    ],
    originalPrice: 'R$ 99,90',
    price: 'R$ 27,90',
    priceNote: 'Promoção especial de lançamento',
    checkoutUrl: 'https://pay.cakto.com.br/bhd6m3k',
    ctaText: 'QUERO O PLANO COMPLETO',
  },
];

export const faqList: FaqItem[] = [
  {
    question: '1. O que é o +100 Diagnósticos para Frigoríficos que Não Gelam?',
    answer:
      'É um e-book de consulta prática com +100 diagnósticos voltados para situações em que um frigorífico não está gelando. O objetivo é ajudar você a consultar possíveis causas e ter um caminho mais organizado para iniciar sua investigação.',
  },
  {
    question: '2. Para quem esse material foi criado?',
    answer:
      'Principalmente para técnicos iniciantes em refrigeração e manutenção que ainda sentem dificuldade para saber por onde começar diante de um frigorífico que não gela. Profissionais de manutenção que desejam uma referência prática também podem utilizar o material.',
  },
  {
    question:
      '3. O material serve para quem ainda está começando na refrigeração?',
    answer:
      'Sim. A proposta do guia é justamente oferecer uma referência para situações em que você ainda não tem tanta experiência e surge aquela dúvida: “Por onde eu começo?”. Ele não substitui conhecimento técnico ou treinamento profissional, mas pode servir como material de consulta durante a investigação.',
  },
  {
    question: '4. O e-book ensina a consertar qualquer frigorífico que não gela?',
    answer:
      'Não existe promessa de que o material resolverá automaticamente todos os problemas. O objetivo é apresentar possíveis causas e caminhos de investigação, ajudando você a organizar o diagnóstico. O resultado de cada atendimento depende do equipamento, do problema encontrado e da avaliação técnica realizada.',
  },
  {
    question: '5. Preciso decorar os +100 diagnósticos?',
    answer:
      'Não. A ideia é justamente ter o material como referência de consulta. Quando surgir uma situação, você pode procurar uma condição semelhante e utilizar as informações disponíveis para orientar sua investigação.',
  },
  {
    question: '6. Como vou receber o produto?',
    answer:
      'O acesso é 100% digital e imediato após a confirmação do pagamento. Você receberá os dados de acesso diretamente no seu e-mail e WhatsApp para baixar o e-book e os materiais complementares em PDF para consultar no seu celular, tablet ou computador.',
  },
  {
    question: '7. O pagamento é seguro?',
    answer:
      'Sim, o pagamento é processado através de uma plataforma segura e criptografada, com suporte a Pix e cartão de crédito, garantindo total proteção dos seus dados.',
  },
  {
    question: '8. Existe garantia?',
    answer:
      'Sim! Você conta com garantia incondicional de 7 dias. Se por qualquer motivo você achar que o material não atendeu às suas expectativas, basta solicitar o reembolso integral sem qualquer complicação.',
  },
  {
    question:
      '9. Já tenho experiência em refrigeração. Esse material pode ser útil para mim?',
    answer:
      'Pode. O foco principal é o técnico iniciante, mas um profissional mais experiente também pode utilizar o material como referência rápida para consultar diferentes situações e possíveis causas quando necessário.',
  },
  {
    question:
      '10. E se eu ficar diante de um frigorífico que não gela e não souber por onde começar?',
    answer:
      'É exatamente esse momento que o material procura atender. Você identifica a situação, consulta o guia, verifica as possíveis causas apresentadas e utiliza o caminho de investigação como referência para decidir quais pontos devem ser avaliados. Você não precisa ter todas as respostas na cabeça. Precisa saber onde começar a procurar. E essa é a proposta do +100 Diagnósticos para Frigoríficos que Não Gelam.',
  },
];
