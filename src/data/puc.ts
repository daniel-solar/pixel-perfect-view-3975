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

export type BlocoPasso =
  | { tipo: "paragrafo"; texto: string }
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "lista-numerada"; itens: string[] }
  | { tipo: "lista"; itens: string[] }
  | { tipo: "caixa"; paragrafos: string[] }
  | { tipo: "nota"; texto: string }
  | { tipo: "destaque"; texto: string }
  | { tipo: "chips"; itens: string[] }
  | {
      tipo: "tabela";
      colunas: [string, string];
      linhas: { chave: string; valor: string }[];
    }
  | { tipo: "cards"; itens: { titulo: string; texto: string }[] };

export type PassoProcesso = {
  id: string;
  titulo: string;
  blocos: BlocoPasso[];
};

export const processoSeletivo = {
  atualizadoEm: ULTIMA_ATUALIZACAO,
  indice: [
    { id: "pre-requisitos", label: "Pré-requisitos" },
    { id: "passo-1", label: "Passo 1 → Requisitos" },
    { id: "passo-2", label: "Passo 2 → Custos" },
    { id: "passo-3", label: "Passo 3 → Antes de se inscrever" },
    { id: "passo-4", label: "Passo 4 → Comprovante de Proficiência" },
    { id: "passo-5", label: "Passo 5 → Como se Inscrever" },
    { id: "passo-6", label: "Passo 6 → Banca de Seleção" },
    { id: "passo-7", label: "Passo 7 → Resultado da seleção" },
    { id: "passo-8", label: "Passo 8 → Segunda fase" },
    {
      id: "passo-9",
      label: "Passo 9 → Aceitação na Universidade de destino",
    },
    { id: "passo-10", label: "Passo 10 → Após o aceite" },
  ],
  listaCr: {
    titulo: "Lista de CR",
    colunas: ["Departamento", "Nota de corte"] as [string, string],
    nota: "Base de dados sujeita a variações. Lista de CR / Corte 50% - 2026.2",
    linhas: [
      { departamento: "Administração", corte: "7,2" },
      { departamento: "Arquitetura e Urbanismo", corte: "7,8" },
      { departamento: "Artes e Design", corte: "8,73" },
      { departamento: "Biologia", corte: "7,54" },
      { departamento: "Ciência da Computação", corte: "6,9" },
      { departamento: "Ciências Sociais", corte: "8,34" },
      { departamento: "Comunicação Social", corte: "8,91" },
      { departamento: "Direito", corte: "8,35" },
      { departamento: "Economia", corte: "6,85" },
      { departamento: "Educação", corte: "8,79" },
      { departamento: "Engenharia Ciclo Básico", corte: "6,37" },
      { departamento: "Engenharia Ciclo Profissional", corte: "7,37" },
      { departamento: "Filosofia", corte: "8,2" },
      { departamento: "Física", corte: "8,2" },
      { departamento: "Geografia e Meio Ambiente", corte: "8,84" },
      { departamento: "História", corte: "8,18" },
      { departamento: "Inteligência Artificial", corte: "7,8" },
      { departamento: "Letras", corte: "8,6" },
      { departamento: "Matemática", corte: "7,31" },
      { departamento: "Nutrição", corte: "8,09" },
      { departamento: "Psicologia/Neurociência", corte: "8,58" },
      { departamento: "Química", corte: "7,68" },
      { departamento: "Relações Internacionais", corte: "8,37" },
      { departamento: "Serviço Social", corte: "9,13" },
      { departamento: "Teologia", corte: "9,03" },
    ],
  },
  preRequisitos: {
    id: "pre-requisitos",
    titulo: "Pré-requisitos",
    itens: [
      "Estar regularmente matriculado em um curso de Graduação, Mestrado ou Doutorado da PUC-Rio;",
      "Ter cursado no mínimo 40 créditos na PUC-Rio;",
      "Não completar os estudos durante o intercâmbio;",
      "Ter CR igual ou maior que 7,0*;",
      "Ser classificado entre os 50% melhores alunos do seu Departamento*;",
      "Não possuir mais do que TRÊS reprovações*",
    ],
    nota: "* Caso o candidato não se enquadre nas exigências estipuladas, sua solicitação de inscrição deverá passar por avaliação especial junto à coordenação acadêmica de intercâmbio da CCCI, que julgará o mérito de forma excepcional.",
  },
  passos: [
    {
      id: "passo-1",
      titulo: "Passo 1 - Requisitos",
      blocos: [
        {
          tipo: "lista-numerada",
          itens: [
            "Verificar a regularidade acadêmica e financeira junto à PUC-Rio;",
            "Consultar as vagas e requisitos específicos para cada convênio de interesse;",
            "Comprovar o domínio do idioma do país de destino nos níveis mínimos exigidos pelas parceiras;",
            "Estar em conformidade com as orientações do coordenador do respectivo curso de graduação;",
            "Apresentar plano de estudos preliminar validado internamente;",
            "Obter recomendação formal de ao menos um docente permanente de sua faculdade;",
            "Efetuar o pagamento da taxa administrativa CCCI dentro do prazo estabelecido.",
          ],
        },
        {
          tipo: "nota",
          texto:
            "* Algumas instituições parceiras podem aplicar testes adicionais ou exigir comprovação curricular diferenciada que exceda as regras gerais da PUC-Rio. Atente-se às páginas de descrição de cada universidade no portal.",
        },
      ],
    },
    {
      id: "passo-2",
      titulo: "Passo 2 - Custos",
      blocos: [
        {
          tipo: "paragrafo",
          texto:
            "O aluno em intercâmbio acadêmico internacional promovido pela CCCI PUC-Rio continua isento de mensalidades na instituição estrangeira de acolhimento, devendo obrigatoriamente manter o pagamento de sua respectiva mensalidade/matrícula acadêmica regular na PUC-Rio durante o período de estudos fora.",
        },
        {
          tipo: "paragrafo",
          texto:
            "Os custos relativos a passagens aéreas, alojamento, plano de saúde internacional obrigatório, alimentação e transporte são de responsabilidade integral do estudante.",
        },
        {
          tipo: "subtitulo",
          texto:
            "Países que exigem comprovação financeira rigorosa para emissão de visto:",
        },
        {
          tipo: "chips",
          itens: [
            "Alemanha",
            "Bélgica",
            "Coréia",
            "Dinamarca",
            "Estados Unidos",
            "Holanda",
            "Noruega",
            "Nova Zelândia",
            "Suécia",
          ],
        },
        {
          tipo: "nota",
          texto:
            "Nota: Verifique oportunidades de bolsas de mobilidade internacional (Santander, Erasmus+, etc.) disponíveis nos editais vigentes da secretaria.",
        },
      ],
    },
    {
      id: "passo-3",
      titulo: "Passo 3 - Antes de se inscrever",
      blocos: [
        {
          tipo: "lista-numerada",
          itens: [
            "Participar das reuniões informativas gerais organizadas pela equipe CCCI;",
            "Verificar seu CR e comparar com a lista de corte histórica dos semestres anteriores;",
            "Fazer o levantamento das grades curriculares das universidades conveniadas desejadas;",
            "Analisar as opções de hospedagem oferecidas (on-campus ou off-campus) e seus respectivos custos estimativos;",
            "Verificar a validade de seu passaporte, que deve ser de no mínimo 6 meses pós-data de retorno prevista;",
            "Pesquisar sobre as exigências de seguro-saúde e vacinas no país de destino;",
            "Alinhar a expectativa de equivalência de créditos com o coordenador pedagógico do seu curso;",
            "Iniciar a elaboração de sua carta de motivação em português e no idioma das aulas internacionais.",
          ],
        },
      ],
    },
    {
      id: "passo-4",
      titulo: "Passo 4 - Comprovante de Proficiência",
      blocos: [
        {
          tipo: "caixa",
          paragrafos: [
            "Para participar do intercâmbio em países que não possuem a língua portuguesa como oficial, o candidato deve comprovar o nível adequado do idioma de instrução exigido pela parceira de acolhimento.",
            "Os comprovantes aceitos e as notas mínimas variam de acordo com as especificidades acadêmicas de cada departamento internacional e país-membro.",
            "Informações sobre comprovantes aceitos estão presentes no site na aba especifica de cada universidade",
            "Caso o aluno pretenda cursar matérias em múltiplos idiomas, deverá anexar as respectivas certificações para cada uma das línguas correspondentes.",
          ],
        },
        { tipo: "subtitulo", texto: "Requisitos de Validade dos Exames:" },
        {
          tipo: "lista-numerada",
          itens: [
            "O certificado deve possuir data de emissão de no máximo 2 anos na data de inscrição interna;",
            "Não serão aceitos prints de telas de resultados preliminares sem assinatura ou código verificador eletrônico;",
            "Certificados fora do prazo de validade oficial da certificadora não serão processados pela banca de seleção;",
            "O envio do PDF oficial deve ser feito exclusivamente via upload na área do candidato.",
          ],
        },
        { tipo: "subtitulo", texto: "Certificados de inglês aceitos:" },
        {
          tipo: "lista",
          itens: ["TOEFL-IBT, IELTS, CIP, Duolingo, Pearson, Cambridge, IB."],
        },
        {
          tipo: "tabela",
          colunas: ["Certificado", "Pontuação Mínima"],
          linhas: [
            { chave: "TOEFL IBT", valor: "80" },
            { chave: "IELTS", valor: "6.5" },
            { chave: "CIP", valor: "B2" },
            { chave: "Duolingo", valor: "110" },
            { chave: "Pearson", valor: "58" },
            { chave: "Cambridge", valor: "FCE" },
            { chave: "IB", valor: "35" },
          ],
        },
        {
          tipo: "nota",
          texto:
            "* Atenção: Algumas universidades exigem pontuações mínimas específicas (subscores) por seção do exame (reading, writing, speaking, listening).",
        },
        {
          tipo: "cards",
          itens: [
            {
              titulo: "Inglês",
              texto:
                "TOEFL, IELTS ou Duolingo. Exigido pela maioria das universidades norte-americanas, europeias e asiáticas.",
            },
            {
              titulo: "Espanhol",
              texto:
                "DELE ou teste de proficiência próprio aceito por instituições da Espanha e América Latina.",
            },
            {
              titulo: "Francês",
              texto:
                "DELF/DALF mínimo B2 para acompanhar aulas regulares em universidades francesas conveniadas.",
            },
            {
              titulo: "Alemão",
              texto:
                "Goethe-Zertifikat ou TestDaF. Muitas instituições alemãs oferecem cursos também em inglês.",
            },
            {
              titulo: "Chinês",
              texto:
                "HSK nível 4 ou superior para cursos em mandarim, ou comprovação de inglês para cursos internacionais.",
            },
            {
              titulo: "Japonês",
              texto:
                "JLPT N2 para cursos gerais, ou comprovação de proficiência em inglês para programas especiais de intercâmbio.",
            },
          ],
        },
      ],
    },
    {
      id: "passo-5",
      titulo: "Passo 5 - Como se Inscrever",
      blocos: [
        {
          tipo: "lista-numerada",
          itens: [
            "Acessar o portal eletrônico de inscrições CCCI da PUC-Rio dentro do prazo de chamada ativa;",
            "Preencher o cadastro inicial com dados acadêmicos e contatos atualizados;",
            "Selecionar até 3 opções de universidades de destino por ordem de preferência pessoal;",
            "Fazer upload de toda a documentação comprobatória exigida em formato PDF unificado;",
            "Anexar os comprovantes válidos de proficiência linguística exigidos por cada opção selecionada;",
            "Concluir o processo de envio e guardar o comprovante eletrônico de submissão do protocolo.",
          ],
        },
        {
          tipo: "destaque",
          texto:
            "Prazo impreterível: Não serão admitidas alterações após o encerramento do sistema na data-limite oficial do edital.",
        },
      ],
    },
    {
      id: "passo-6",
      titulo: "Passo 6 - Banca de Seleção",
      blocos: [
        {
          tipo: "paragrafo",
          texto:
            "A banca examinadora, composta por docentes indicados pelos departamentos acadêmicos correspondentes e assessores internacionais da CCCI, avaliará de forma integrada o perfil global do estudante com base nos critérios regimentais de mérito.",
        },
        {
          tipo: "subtitulo",
          texto: "Critérios e expectativas avaliados na entrevista:",
        },
        {
          tipo: "lista",
          itens: [
            "Demonstração clara de maturidade psicossocial para vivência em ambiente multicultural;",
            "Consistência acadêmica na argumentação de escolha das disciplinas do plano de estudos;",
            "Habilidade de comunicação oral e fluidez de raciocínio no idioma oficial de destino;",
            "Alinhamento dos objetivos pessoais e de carreira com o plano de mobilidade apresentado;",
            "Postura embaixadora ética para representação institucional da PUC-Rio no exterior.",
          ],
        },
      ],
    },
    {
      id: "passo-7",
      titulo: "Passo 7 - Resultado da seleção",
      blocos: [
        {
          tipo: "paragrafo",
          texto:
            "O resultado oficial da primeira fase de alocação de vagas será publicado no site oficial da CCCI e disponibilizado de forma individual no portal de acompanhamento do candidato.",
        },
        {
          tipo: "paragrafo",
          texto:
            "Os candidatos classificados receberão as orientações iniciais por e-mail para confirmação de interesse na vaga concedida.",
        },
        { tipo: "subtitulo", texto: "Regras em caso de Desistência:" },
        {
          tipo: "lista",
          itens: [
            "A desistência formal deve ser formalizada imediatamente via protocolo digital no portal da CCCI;",
            "O não preenchimento do termo de aceite de alocação no prazo de 48h implicará em desistência automática;",
            "O abandono da vaga sem justificativa formal homologada pela coordenação poderá acarretar sanções acadêmicas.",
          ],
        },
      ],
    },
    {
      id: "passo-8",
      titulo: "Passo 8 - Segunda fase",
      blocos: [
        {
          tipo: "paragrafo",
          texto:
            "Parabéns! Na segunda fase do processo seletivo, o aluno inicia a preparação da candidatura direta junto à instituição de destino.",
        },
        {
          tipo: "subtitulo",
          texto: "Documentos Obrigatórios da Segunda Fase:",
        },
        {
          tipo: "lista-numerada",
          itens: [
            "Formulário oficial de aplicação da instituição internacional de acolhimento;",
            "Histórico escolar oficial em inglês ou idioma de destino emitido pela DAR PUC-Rio;",
            "Carta de indicação oficial assinada pela assessoria acadêmica da CCCI;",
            "Declaração de suporte financeiro ou comprovação de recursos mínimos exigidos para subsistência;",
            "Cópia legível da folha de identificação do passaporte dentro do padrão de validade;",
            "Laudo médico oficial internacional com histórico vacinal (se exigido pela parceira);",
            "Plano de estudos final acordado e validado pelo coordenador de departamento.",
          ],
        },
      ],
    },
    {
      id: "passo-9",
      titulo: "Passo 9 - Aceitação na Universidade de destino",
      blocos: [
        {
          tipo: "lista-numerada",
          itens: [
            "Aguardar a análise documental realizada pelo comitê de admissões da instituição parceira;",
            "Acompanhar eventuais pedidos de correções ou documentos adicionais via e-mail acadêmico;",
            "Receber a Carta de Aceite Oficial (Letter of Acceptance) emitida pela instituição parceira;",
            "Validar a recepção do documento digital ou a chegada do documento físico na secretaria da CCCI;",
            "Efetivar o preenchimento da ficha cadastral de pré-embarque exigida pela PUC-Rio;",
            "Iniciar imediatamente os trâmites do processo de obtenção do visto consular correspondente;",
            "Contratar o plano de seguro-saúde internacional com cobertura integral contra acidentes e enfermidades.",
          ],
        },
        { tipo: "subtitulo", texto: "Casos de recusa ou desistência:" },
        {
          tipo: "lista",
          itens: [
            "Se a parceira recusar a candidatura por falta de vagas, o aluno poderá solicitar remanejamento de emergência;",
            "O cancelamento do intercâmbio após a emissão do aceite internacional requer devolução formal da carta oficial;",
            "Taxas administrativas desembolsadas à CCCI ou taxas externas não são reembolsadas em caso de desistência tardia.",
          ],
        },
      ],
    },
    {
      id: "passo-10",
      titulo: "Passo 10 - Após o aceite",
      blocos: [
        {
          tipo: "subtitulo",
          texto: "1. Trâmites do Visto e Entrada no País de Destino:",
        },
        {
          tipo: "lista",
          itens: [
            "Agendar a entrevista no consulado de destino assim que receber a Carta de Aceite;",
            "Apresentar a comprovação financeira em conformidade com as regras oficiais do país;",
            "Adquirir as passagens aéreas somente após a confirmação final do visto no passaporte;",
            "Atentar-se para as exigências específicas de vacinação e quarentena das autoridades sanitárias locais.",
          ],
        },
        { tipo: "subtitulo", texto: "2. Confirmações Acadêmicas PUC-Rio:" },
        {
          tipo: "lista",
          itens: [
            "Assinar o Termo de Compromisso e Responsabilidade de Mobilidade Internacional junto à CCCI;",
            "Efetuar a matrícula em regime especial de intercâmbio no sistema acadêmico da PUC-Rio;",
            "Entregar cópia do seguro de saúde internacional contratado com cobertura de repatriação;",
            "Fornecer detalhes atualizados de contato e endereço de moradia no exterior à coordenação.",
          ],
        },
        {
          tipo: "caixa",
          paragrafos: [
            "Observações Importantes sobre Desistência Pré-embarque:",
            "A desistência após o recebimento do visto internacional ou próximo à data prevista do embarque deve ser imediatamente informada à CCCI por escrito, anexando justificativa formal fundamentada. Casos de omissão serão encaminhados para a respectiva vice-reitoria acadêmica para avaliação e aplicação de eventuais advertências.",
          ],
        },
      ],
    },
  ] as PassoProcesso[],
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
    "Rua Marquês de São Vicente, 225",
    "Gávea, Rio de Janeiro - RJ",
    "Edifício Cardeal Leme, Sala 130",
  ],
  email: [
    "ccci-puc@puc-rio.br",
    "info.ccci@puc-rio.br",
    "intercambio@puc-rio.br",
  ],
  telefone: ["+55 (21) 3527-1577", "+55 (21) 3527-1578", "Fax: ramal 1579"],
  instagram: ["@ccci_pucrio", "#PUCRioIntercambio", "Updates e editais ativos"],
  horario: ["Segunda a Sexta-feira", "9h00 às 12h00", "14h00 às 17h00"],
};

