import alemanhaImg from "@/assets/alemanha.jpg";
import espanhaImg from "@/assets/espanha.jpg";
import argentinaImg from "@/assets/argentina.jpg";
import chileImg from "@/assets/chile.jpg";
import campusImg from "@/assets/campus.jpg";

export const ULTIMA_ATUALIZACAO = "12/09/2026";

export type Pais = {
  id: string;
  nome: string;
  continente: "Europa" | "América do Sul";
  idiomaOficial: string;
  moeda: string;
  fusoHorario: string;
  requisitosParaEntrar: string[];
  informacoesAdicionais: string[];
  imagem: string;
  universidadesConveniadas: number;
};

export type Programa = {
  id: string;
  nivel: "Graduação" | "Pós-graduação";
  custo: string;
  duracao: "1 semestre" | "2 semestres";
  prazoInscricao: string;
  idioma: string;
  tipoIntercambio: "Convênio" | "Duplo diploma" | "Verão";
  vagas: number;
};

export type Universidade = {
  id: string;
  nome: string;
  sigla: string;
  cidade: string;
  siteOficial: string;
  ranking: string;
  foto: string;
  endereco: string;
  paisId: string;
  vagas: number;
  sobre: string;
  perfilAcademico: string;
  cursos: string[];
  certificados: string[];
  requisitosAcademicos: string[];
  custos: string[];
  bolsas: string[];
  documentacao: string[];
  contato: string;
  programas: Programa[];
};

export const paises: Pais[] = [
  {
    id: "alemanha",
    nome: "Alemanha",
    continente: "Europa",
    idiomaOficial:
      "Alemão (nível B1/B2 recomendado para a maioria das disciplinas, alguns cursos em Inglês)",
    moeda: "Euro (€)",
    fusoHorario: "GMT+1 (6 horas à frente do horário oficial de Brasília)",
    requisitosParaEntrar: [
      "Passaporte válido por pelo menos 6 meses após o retorno",
      "Visto de estudante solicitado no consulado alemão",
      "Comprovação financeira (Sperrkonto) exigida para o visto",
      "Seguro saúde internacional válido em todo o período",
    ],
    informacoesAdicionais: [
      "Custo de vida médio entre €850 e €1.100 por mês",
      "Semestre de inverno inicia em outubro; semestre de verão em abril",
      "Transporte público geralmente incluído no semester ticket",
      "Moradia estudantil deve ser solicitada com antecedência",
    ],
    imagem: alemanhaImg,
    universidadesConveniadas: 14,
  },
  {
    id: "espanha",
    nome: "Espanha",
    continente: "Europa",
    idiomaOficial: "Espanhol (nível B1 mínimo na maioria dos convênios)",
    moeda: "Euro (€)",
    fusoHorario: "GMT+1 (5 a 6 horas à frente do horário oficial de Brasília)",
    requisitosParaEntrar: [
      "Passaporte válido",
      "Visto de estudante para estadias superiores a 90 dias",
      "Carta de aceite da universidade de destino",
      "Seguro saúde com cobertura internacional",
    ],
    informacoesAdicionais: [
      "Custo de vida médio entre €700 e €1.000 por mês",
      "Calendário acadêmico de setembro a junho",
      "Grande oferta de disciplinas em espanhol e algumas em inglês",
    ],
    imagem: espanhaImg,
    universidadesConveniadas: 18,
  },
  {
    id: "argentina",
    nome: "Argentina",
    continente: "América do Sul",
    idiomaOficial: "Espanhol",
    moeda: "Peso argentino (ARS)",
    fusoHorario: "GMT-3 (mesmo horário oficial de Brasília)",
    requisitosParaEntrar: [
      "Documento de identidade ou passaporte válido (Mercosul)",
      "Comprovante de matrícula na universidade de destino",
      "Seguro saúde internacional",
    ],
    informacoesAdicionais: [
      "Custo de vida mais baixo em comparação com destinos europeus",
      "Calendário acadêmico de março a dezembro",
      "Proximidade facilita viagens curtas e passagens mais baratas",
    ],
    imagem: argentinaImg,
    universidadesConveniadas: 8,
  },
  {
    id: "chile",
    nome: "Chile",
    continente: "América do Sul",
    idiomaOficial: "Espanhol",
    moeda: "Peso chileno (CLP)",
    fusoHorario: "GMT-3 (mesmo horário oficial de Brasília)",
    requisitosParaEntrar: [
      "Passaporte válido",
      "Visa de estudiante para estadias superiores a um semestre",
      "Carta de aceite da instituição chilena",
    ],
    informacoesAdicionais: [
      "Custo de vida médio entre US$600 e US$900 por mês",
      "Calendário acadêmico de março a dezembro",
      "Forte oferta em engenharias e ciências sociais",
    ],
    imagem: chileImg,
    universidadesConveniadas: 6,
  },
];

export const universidades: Universidade[] = [
  {
    id: "tum",
    nome: "Technical University of Munich",
    sigla: "TUM",
    cidade: "Munique",
    siteOficial: "www.tum.de",
    ranking: "#28 no ranking global (dado demonstrativo)",
    foto: alemanhaImg,
    endereco: "Arcisstraße 21, 80333 München",
    paisId: "alemanha",
    vagas: 6,
    sobre:
      "Universidade técnica de referência na Alemanha, com forte atuação em engenharia, tecnologia e ciências naturais.",
    perfilAcademico:
      "Perfil orientado à pesquisa aplicada, com laboratórios integrados à indústria e disciplinas em alemão e inglês.",
    cursos: ["Engenharia", "Ciência da Computação", "Física", "Administração"],
    certificados: ["TestDaF nível 4", "IELTS 6.5", "TOEFL iBT 88"],
    requisitosAcademicos: [
      "CR mínimo de 7,0",
      "Ter concluído pelo menos 40% do curso na PUC-Rio",
      "Comprovante de proficiência em alemão (B2) ou inglês",
    ],
    custos: [
      "Isenção de mensalidade por convênio",
      "Taxa semestral aproximada de €150",
      "Custo de vida estimado em €1.000/mês",
    ],
    bolsas: ["DAAD (auxílio parcial)", "Bolsa de mobilidade PUC-Rio"],
    documentacao: [
      "Histórico escolar em inglês",
      "Carta de motivação",
      "Comprovante de proficiência",
      "Cópia do passaporte",
    ],
    contato: "international@tum.de",
    programas: [
      {
        id: "tum-1",
        nivel: "Graduação",
        custo: "Isento (convênio)",
        duracao: "1 semestre",
        prazoInscricao: "15/03/2027",
        idioma: "Alemão / Inglês",
        tipoIntercambio: "Convênio",
        vagas: 4,
      },
      {
        id: "tum-2",
        nivel: "Pós-graduação",
        custo: "Isento (convênio)",
        duracao: "2 semestres",
        prazoInscricao: "01/02/2027",
        idioma: "Inglês",
        tipoIntercambio: "Duplo diploma",
        vagas: 2,
      },
    ],
  },
  {
    id: "heidelberg",
    nome: "Heidelberg University",
    sigla: "UHD",
    cidade: "Heidelberg",
    siteOficial: "www.uni-heidelberg.de",
    ranking: "#87 no ranking global (dado demonstrativo)",
    foto: campusImg,
    endereco: "Grabengasse 1, 69117 Heidelberg",
    paisId: "alemanha",
    vagas: 4,
    sobre:
      "A universidade mais antiga da Alemanha, reconhecida pela tradição em humanidades, direito e ciências da vida.",
    perfilAcademico:
      "Ambiente acadêmico clássico, com seminários de leitura intensiva e forte produção científica.",
    cursos: ["Direito", "Medicina", "Letras", "História"],
    certificados: ["TestDaF nível 4", "IELTS 6.0"],
    requisitosAcademicos: [
      "CR mínimo de 7,5",
      "Nível B2 de alemão para disciplinas regulares",
    ],
    custos: [
      "Isenção de mensalidade por convênio",
      "Custo de vida estimado em €900/mês",
    ],
    bolsas: ["DAAD", "Bolsa de mobilidade PUC-Rio"],
    documentacao: ["Histórico escolar", "Carta de motivação", "Passaporte"],
    contato: "exchange@uni-heidelberg.de",
    programas: [
      {
        id: "uhd-1",
        nivel: "Graduação",
        custo: "Isento (convênio)",
        duracao: "2 semestres",
        prazoInscricao: "30/04/2027",
        idioma: "Alemão",
        tipoIntercambio: "Convênio",
        vagas: 4,
      },
    ],
  },
  {
    id: "uba",
    nome: "Universidad de Buenos Aires",
    sigla: "UBA",
    cidade: "Buenos Aires",
    siteOficial: "www.uba.ar",
    ranking: "#71 no ranking global (dado demonstrativo)",
    foto: argentinaImg,
    endereco: "Viamonte 430, Buenos Aires",
    paisId: "argentina",
    vagas: 8,
    sobre:
      "Maior universidade pública da Argentina, com ampla oferta de cursos e forte vida acadêmica.",
    perfilAcademico:
      "Perfil público e plural, com disciplinas em espanhol e grande diversidade de áreas.",
    cursos: ["Direito", "Economia", "Arquitetura", "Comunicação"],
    certificados: ["DELE B1", "CELU intermediário"],
    requisitosAcademicos: ["CR mínimo de 6,0", "Espanhol nível B1"],
    custos: [
      "Isenção de mensalidade por convênio",
      "Custo de vida estimado em US$600/mês",
    ],
    bolsas: ["Bolsa de mobilidade PUC-Rio"],
    documentacao: ["Histórico escolar", "Passaporte ou RG", "Seguro saúde"],
    contato: "internacionales@uba.ar",
    programas: [
      {
        id: "uba-1",
        nivel: "Graduação",
        custo: "Isento (convênio)",
        duracao: "1 semestre",
        prazoInscricao: "10/10/2026",
        idioma: "Espanhol",
        tipoIntercambio: "Convênio",
        vagas: 8,
      },
    ],
  },
  {
    id: "uca",
    nome: "Pontificia Universidad Católica Argentina",
    sigla: "UCA",
    cidade: "Buenos Aires",
    siteOficial: "www.uca.edu.ar",
    ranking: "Referência regional (dado demonstrativo)",
    foto: campusImg,
    endereco: "Av. Alicia Moreau de Justo 1400, Buenos Aires",
    paisId: "argentina",
    vagas: 5,
    sobre:
      "Universidade católica com forte tradição em ciências sociais, economia e direito.",
    perfilAcademico:
      "Turmas menores e acompanhamento próximo, com identidade acadêmica semelhante à da PUC-Rio.",
    cursos: ["Administração", "Economia", "Direito", "Psicologia"],
    certificados: ["DELE B1"],
    requisitosAcademicos: ["CR mínimo de 6,5", "Espanhol nível B1"],
    custos: ["Isenção de mensalidade por convênio", "Moradia a partir de US$350/mês"],
    bolsas: ["Bolsa de mobilidade PUC-Rio"],
    documentacao: ["Histórico escolar", "Carta de motivação", "Passaporte ou RG"],
    contato: "intercambio@uca.edu.ar",
    programas: [
      {
        id: "uca-1",
        nivel: "Graduação",
        custo: "Isento (convênio)",
        duracao: "1 semestre",
        prazoInscricao: "20/10/2026",
        idioma: "Espanhol",
        tipoIntercambio: "Convênio",
        vagas: 5,
      },
    ],
  },
  {
    id: "salamanca",
    nome: "Universidad de Salamanca",
    sigla: "USAL",
    cidade: "Salamanca",
    siteOficial: "www.usal.es",
    ranking: "Referência histórica na Europa (dado demonstrativo)",
    foto: espanhaImg,
    endereco: "Patio de Escuelas 1, Salamanca",
    paisId: "espanha",
    vagas: 6,
    sobre:
      "Universidade mais antiga da Espanha, referência no ensino de língua espanhola e humanidades.",
    perfilAcademico:
      "Cidade universitária com ambiente acolhedor e ampla oferta de cursos de língua.",
    cursos: ["Letras", "Direito", "História", "Relações Internacionais"],
    certificados: ["DELE B1", "SIELE 700 pontos"],
    requisitosAcademicos: ["CR mínimo de 6,5", "Espanhol nível B1 comprovado"],
    custos: ["Isenção de mensalidade por convênio", "Custo de vida de €750/mês"],
    bolsas: ["Erasmus+ (mobilidade internacional)", "Bolsa de mobilidade PUC-Rio"],
    documentacao: ["Histórico escolar", "Passaporte", "Comprovante de proficiência"],
    contato: "relint@usal.es",
    programas: [
      {
        id: "usal-1",
        nivel: "Graduação",
        custo: "Isento (convênio)",
        duracao: "2 semestres",
        prazoInscricao: "15/04/2027",
        idioma: "Espanhol",
        tipoIntercambio: "Convênio",
        vagas: 6,
      },
    ],
  },
  {
    id: "upm",
    nome: "Universidad Politécnica de Madrid",
    sigla: "UPM",
    cidade: "Madri",
    siteOficial: "www.upm.es",
    ranking: "Principal politécnica da Espanha (dado demonstrativo)",
    foto: campusImg,
    endereco: "Ramiro de Maeztu 7, Madrid",
    paisId: "espanha",
    vagas: 7,
    sobre:
      "Instituição técnica com forte atuação em engenharia, arquitetura e tecnologia.",
    perfilAcademico: "Currículo técnico com laboratórios e projetos aplicados.",
    cursos: ["Engenharia", "Arquitetura", "Ciência da Computação"],
    certificados: ["DELE B2", "IELTS 6.0"],
    requisitosAcademicos: ["CR mínimo de 7,0", "Espanhol nível B2"],
    custos: ["Isenção de mensalidade por convênio", "Custo de vida de €1.000/mês"],
    bolsas: ["Erasmus+", "Bolsa de mobilidade PUC-Rio"],
    documentacao: ["Histórico escolar", "Carta de motivação", "Passaporte"],
    contato: "movilidad@upm.es",
    programas: [
      {
        id: "upm-1",
        nivel: "Graduação",
        custo: "Isento (convênio)",
        duracao: "1 semestre",
        prazoInscricao: "01/05/2027",
        idioma: "Espanhol",
        tipoIntercambio: "Convênio",
        vagas: 4,
      },
      {
        id: "upm-2",
        nivel: "Pós-graduação",
        custo: "€900 (taxas administrativas)",
        duracao: "2 semestres",
        prazoInscricao: "01/03/2027",
        idioma: "Espanhol / Inglês",
        tipoIntercambio: "Duplo diploma",
        vagas: 3,
      },
    ],
  },
  {
    id: "puc-chile",
    nome: "Pontificia Universidad Católica de Chile",
    sigla: "UC",
    cidade: "Santiago",
    siteOficial: "www.uc.cl",
    ranking: "#93 no ranking global (dado demonstrativo)",
    foto: chileImg,
    endereco: "Av. Libertador Bernardo O'Higgins 340, Santiago",
    paisId: "chile",
    vagas: 6,
    sobre:
      "Uma das universidades mais bem avaliadas da América Latina, parceira histórica da PUC-Rio.",
    perfilAcademico:
      "Forte em engenharia, economia e ciências sociais, com campus integrado à cidade.",
    cursos: ["Engenharia", "Economia", "Design", "Ciências Sociais"],
    certificados: ["DELE B1"],
    requisitosAcademicos: ["CR mínimo de 7,0", "Espanhol nível B1"],
    custos: ["Isenção de mensalidade por convênio", "Custo de vida de US$800/mês"],
    bolsas: ["Bolsa de mobilidade PUC-Rio"],
    documentacao: ["Histórico escolar", "Passaporte", "Seguro saúde"],
    contato: "intercambio@uc.cl",
    programas: [
      {
        id: "uc-1",
        nivel: "Graduação",
        custo: "Isento (convênio)",
        duracao: "1 semestre",
        prazoInscricao: "05/10/2026",
        idioma: "Espanhol",
        tipoIntercambio: "Convênio",
        vagas: 6,
      },
    ],
  },
  {
    id: "uchile",
    nome: "Universidad de Chile",
    sigla: "UCH",
    cidade: "Santiago",
    siteOficial: "www.uchile.cl",
    ranking: "Referência pública no Chile (dado demonstrativo)",
    foto: campusImg,
    endereco: "Av. Libertador Bernardo O'Higgins 1058, Santiago",
    paisId: "chile",
    vagas: 4,
    sobre:
      "Principal universidade pública chilena, com produção científica reconhecida.",
    perfilAcademico: "Ambiente plural com foco em pesquisa e extensão.",
    cursos: ["Medicina", "Direito", "Engenharia", "Artes"],
    certificados: ["DELE B1"],
    requisitosAcademicos: ["CR mínimo de 6,5", "Espanhol nível B1"],
    custos: ["Isenção de mensalidade por convênio", "Custo de vida de US$700/mês"],
    bolsas: ["Bolsa de mobilidade PUC-Rio"],
    documentacao: ["Histórico escolar", "Passaporte"],
    contax: undefined as never,
    contato: "movilidad@uchile.cl",
    programas: [
      {
        id: "uch-1",
        nivel: "Graduação",
        custo: "Isento (convênio)",
        duracao: "2 semestres",
        prazoInscricao: "15/10/2026",
        idioma: "Espanhol",
        tipoIntercambio: "Convênio",
        vagas: 4,
      },
    ],
  },
];

export const cursosDisponiveis = Array.from(
  new Set(universidades.flatMap((u) => u.cursos)),
).sort();

export const idiomasDisponiveis = [
  "Alemão",
  "Inglês",
  "Espanhol",
];

export function getPais(id: string) {
  return paises.find((p) => p.id === id);
}

export function getUniversidade(id: string) {
  return universidades.find((u) => u.id === id);
}

export function universidadesDoPais(paisId: string) {
  return universidades.filter((u) => u.paisId === paisId);
}

export const processoSeletivo = {
  atualizadoEm: ULTIMA_ATUALIZACAO,
  preRequisitos: [
    "Estar regularmente matriculado em curso de graduação ou pós-graduação da PUC-Rio",
    "Ter concluído, no mínimo, dois períodos letivos na PUC-Rio",
    "Não possuir pendências acadêmicas ou financeiras",
    "Atender ao CR mínimo exigido pelo convênio escolhido",
    "Comprovar proficiência no idioma exigido pela universidade de destino",
  ],
  etapas: [
    {
      titulo: "1. Inscrição",
      descricao:
        "Preenchimento do formulário da CCCI com escolha de até três universidades de interesse, em ordem de prioridade.",
      prazo: "Agosto a outubro (semestre seguinte)",
    },
    {
      titulo: "2. Seleção",
      descricao:
        "Análise de histórico, CR, proficiência e carta de motivação. Pode incluir entrevista com a coordenação.",
      prazo: "Até 30 dias após o fechamento das inscrições",
    },
    {
      titulo: "3. Nomeação e candidatura externa",
      descricao:
        "A PUC-Rio nomeia o aluno à universidade parceira, que realiza sua própria análise e emite a carta de aceite.",
      prazo: "Conforme calendário da instituição de destino",
    },
    {
      titulo: "4. Documentação e visto",
      descricao:
        "Reunião de documentos, solicitação de visto, contratação de seguro saúde e comprovação financeira.",
      prazo: "Até 60 dias antes do embarque",
    },
    {
      titulo: "5. Embarque e acompanhamento",
      descricao:
        "Reunião de orientação pré-embarque, trancamento e registro das disciplinas a serem aproveitadas.",
      prazo: "Antes do início do semestre no destino",
    },
    {
      titulo: "6. Retorno e aproveitamento",
      descricao:
        "Entrega do histórico do destino para equivalência de disciplinas junto ao coordenador do curso.",
      prazo: "Até 30 dias após o retorno",
    },
  ],
  documentacao: [
    "Histórico escolar atualizado (português e inglês)",
    "Carta de motivação",
    "Comprovante de proficiência no idioma",
    "Cópia do passaporte válido",
    "Comprovante de seguro saúde internacional",
    "Comprovação financeira, quando exigida pelo destino",
  ],
  custos: [
    "Mensalidade: mantida na PUC-Rio nos convênios de isenção",
    "Passagens, moradia e alimentação por conta do aluno",
    "Taxas de visto e seguro saúde por conta do aluno",
    "Bolsas parciais podem ser solicitadas conforme edital vigente",
  ],
  crReferencia: [
    { perfil: "Destinos europeus de alta concorrência", cr: "A partir de 7,5" },
    { perfil: "Destinos europeus gerais", cr: "A partir de 7,0" },
    { perfil: "Destinos na América do Sul", cr: "A partir de 6,0" },
    { perfil: "Programas de duplo diploma", cr: "A partir de 8,0" },
  ],
};

export const faq = [
  {
    pergunta: "Posso fazer intercâmbio em qualquer período do curso?",
    resposta:
      "É necessário ter concluído ao menos dois períodos na PUC-Rio e não estar no último semestre do curso.",
  },
  {
    pergunta: "A mensalidade da PUC-Rio continua sendo paga?",
    resposta:
      "Nos convênios de isenção, o aluno mantém o vínculo e a mensalidade na PUC-Rio e não paga mensalidade no destino.",
  },
  {
    pergunta: "As disciplinas cursadas fora são aproveitadas?",
    resposta:
      "Sim, mediante análise de equivalência feita pelo coordenador do curso na volta do intercâmbio.",
  },
  {
    pergunta: "Existe bolsa para o intercâmbio?",
    resposta:
      "Há bolsas parciais e programas externos, como DAAD e Erasmus+, conforme o edital vigente.",
  },
];

export const contato = {
  endereco: [
    "R. Marquês de São Vicente, 225",
    "Gávea, Rio de Janeiro - RJ",
    "Edifício Padre Leonel Franca",
  ],
  email: ["central-pucglobal@puc-rio.br", "duvidas.exchange@puc-rio.br"],
  telefone: ["+55 21 3527-1000", "Ramal 1543 / 1544"],
  instagram: ["@pucglorio", "@ccci.pucrio"],
  horario: ["Segunda a Sexta-feira", "Das 09:00 às 12:00", "Das 14:00 às 17:00"],
};
