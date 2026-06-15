/**
 * "Fé em Campo — Driblando a Perseguição" (Portas Abertas)
 *
 * Perfis das seleções da Copa 2026 cujos países estão na Lista Mundial da
 * Perseguição (LMP) 2026 — o ranking dos 50 países onde cristãos são mais
 * perseguidos. Cada perfil é associado ao código FIFA da seleção e exibido
 * na página do time, com um chamado à oração.
 *
 * Conteúdo fornecido pela Portas Abertas (fe_em_campo_textos_extraidos.json).
 */

export interface FeProfile {
  /** código FIFA de 3 letras da seleção */
  code: string
  /** nome do país (PT-BR) */
  country: string
  /** posição na Lista Mundial da Perseguição 2026 */
  lmpRank: number
  /** pessoa retratada */
  person: string
  /** citação da pessoa, quando houver */
  quote?: string
  /** texto descritivo */
  text: string
  /** chamado à oração */
  cta: string
}

export const FE_EM_CAMPO: Record<string, FeProfile> = {
  IRN: {
    code: 'IRN',
    country: 'Irã',
    lmpRank: 10,
    person: 'Evangelista Mehrdad',
    text: 'Evangelistas se dedicam com coragem para alcançar pessoas que ainda não ouviram o evangelho, como atacantes que driblam a defesa para levar a bola adiante.',
    cta: 'Ore por Mehrdad e veja sua história',
  },
  KSA: {
    code: 'KSA',
    country: 'Arábia Saudita',
    lmpRank: 13,
    person: 'Evangelista Radwan',
    text: 'Evangelistas se dedicam com coragem para alcançar pessoas que não conhecem Jesus, como atacantes que driblam a defesa para levar a bola adiante.',
    cta: 'Ore por Radwan e conheça seu país',
  },
  IRQ: {
    code: 'IRQ',
    country: 'Iraque',
    lmpRank: 18,
    person: 'Fida',
    text: 'Após partidas difíceis, muitos jogadores recebem cuidados especiais. Crianças como Fida também precisam de acolhimento e apoio para vencer a perseguição.',
    cta: 'Ore por Fida e conheça sua história',
  },
  ALG: {
    code: 'ALG',
    country: 'Argélia',
    lmpRank: 20,
    person: 'Pastor Yousef',
    text: 'Como um treinador prepara o time para os obstáculos, pastores capacitam cristãos argelinos para vencer a perseguição.',
    cta: 'Ore por Yousef e conheça sua história',
  },
  MAR: {
    code: 'MAR',
    country: 'Marrocos',
    lmpRank: 23,
    person: 'Mazen',
    text: 'Capitães de times não desistem, até quando parece impossível vencer. Cristãos como Mazen também precisam de fé para cuidar de suas famílias sob perseguição.',
    cta: 'Ore por Mazen e conheça sua história',
  },
  UZB: {
    code: 'UZB',
    country: 'Uzbequistão',
    lmpRank: 25,
    person: 'Pastor Oleg',
    quote: 'Às vezes, o fardo parece pesado demais.',
    text: 'Como um treinador prepara o time para os obstáculos, pastores capacitam cristãos uzbeques para vencer a perseguição.',
    cta: 'Ore pelo pastor Oleg e veja seu relato',
  },
  COD: {
    code: 'COD',
    country: 'República Democrática do Congo',
    lmpRank: 29,
    person: 'Traoré',
    text: 'O jogo parece perdido para jovens em áreas dominadas pela violência de grupos extremistas. Mas Jesus tem transformado suas vidas.',
    cta: 'Ore por Traoré e veja seu testemunho',
  },
  MEX: {
    code: 'MEX',
    country: 'México',
    lmpRank: 30,
    person: 'Juan',
    text: 'Por meio do futebol, Juan tem conectado jovens ao evangelho em áreas dominadas por cartéis. É arriscado, mas como um treinador que não desiste de seu time, ele persiste.',
    cta: 'Ore por Juan e veja seu trabalho',
  },
  TUN: {
    code: 'TUN',
    country: 'Tunísia',
    lmpRank: 31,
    person: 'Nadhir',
    quote: 'Meu sonho é falar de Jesus para muitas pessoas.',
    text: 'O rapper Nadhir não teme os riscos para anunciar o evangelho no Norte da África, região onde fica a Tunísia.',
    cta: 'Ore por Nadhir e entenda seu contexto',
  },
  TUR: {
    code: 'TUR',
    country: 'Turquia',
    lmpRank: 41,
    person: 'Pastor Iman',
    text: 'Como um treinador prepara o time para os obstáculos, pastor Iman ajuda outros refugiados iranianos como ele a vencer a perseguição na Turquia.',
    cta: 'Ore pelo pastor e veja sua história',
  },
  EGY: {
    code: 'EGY',
    country: 'Egito',
    lmpRank: 42,
    person: 'Baher',
    text: 'Cristãos egípcios são vistos como inferiores e submetidos a trabalhos de risco, onde Baher perdeu um braço. Mas ele tem aprendido que é Jesus quem define seu valor.',
    cta: 'Ore por Baher e veja seu relato',
  },
  QAT: {
    code: 'QAT',
    country: 'Catar',
    lmpRank: 44,
    person: 'Saied',
    quote: 'Jesus vale cada lágrima, cada cicatriz.',
    text: 'Ser parte de um time fortalece os jogadores. Cristãos secretos na Península Arábica, onde fica o Catar, precisam de apoio.',
    cta: 'Ore por Saied e entenda o cenário',
  },
  COL: {
    code: 'COL',
    country: 'Colômbia',
    lmpRank: 47,
    person: 'Abraham',
    quote: 'Meu futuro era segurar uma arma.',
    text: 'O jogo parece perdido para jovens em áreas dominadas por guerrilhas e grupos armados. Mas Jesus pode transformar suas vidas.',
    cta: 'Ore por Abraham e entenda esse cenário',
  },
  JOR: {
    code: 'JOR',
    country: 'Jordânia',
    lmpRank: 49,
    person: 'Gina',
    quote: 'Nunca senti tanto medo, mas quero continuar servindo.',
    text: 'O medo do resultado não impede os jogadores em uma partida. Semelhantemente, Gina persiste em seu ministério apesar da perseguição.',
    cta: 'Ore por Gina e veja essa história',
  },
}

/** URL geral da Portas Abertas para o chamado à oração (sem URLs por pessoa) */
export const FE_EM_CAMPO_URL = 'https://www.portasabertas.org.br'

export function feProfile(code: string | null | undefined): FeProfile | undefined {
  if (!code) return undefined
  return FE_EM_CAMPO[code.toUpperCase()]
}
