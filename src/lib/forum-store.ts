import { useSyncExternalStore } from "react";

export type ForumComment = {
  id: string;
  postId: string;
  parentCommentId: string | null;
  author: string;
  content: string;
  createdAt: string;
  upvotes: number;
};

export type ForumPost = {
  id: string;
  author: string;
  course: string;
  title: string;
  description: string;
  createdAt: string;
  tags: string[];
  upvotes: number;
};

type State = {
  posts: ForumPost[];
  comments: ForumComment[];
  votedPosts: string[];
};

const seedPosts: ForumPost[] = [
  {
    id: "p1",
    author: "Mariana Costa",
    course: "Engenharia de Produção",
    title: "Como é o processo de matrícula na TUM?",
    description:
      "Fui nomeada para a Technical University of Munich e estou com dúvidas sobre o prazo de escolha das disciplinas e o registro no sistema deles. Alguém já passou por isso?",
    createdAt: "12/08/2026",
    tags: ["Alemanha", "Europa", "Matrícula"],
    upvotes: 24,
  },
  {
    id: "p2",
    author: "Rafael Lima",
    course: "Relações Internacionais",
    title: "Alguém já fez intercâmbio na UBA?",
    description:
      "Queria saber como funciona a vida acadêmica na Universidad de Buenos Aires, principalmente carga horária e moradia perto da faculdade.",
    createdAt: "05/08/2026",
    tags: ["Argentina", "América do Sul"],
    upvotes: 17,
  },
  {
    id: "p3",
    author: "Beatriz Nunes",
    course: "Letras",
    title: "Qual nível de proficiência em espanhol exigido na Universidad de Salamanca?",
    description:
      "Tenho DELE B1 e estou em dúvida se é suficiente para as disciplinas regulares ou se preciso subir para B2 antes da inscrição.",
    createdAt: "28/07/2026",
    tags: ["Espanha", "Europa", "Proficiência"],
    upvotes: 11,
  },
  {
    id: "p4",
    author: "Lucas Andrade",
    course: "Direito",
    title: "Visto de estudante para a Alemanha: quanto tempo demora?",
    description:
      "Estou organizando a documentação e a comprovação financeira. Quanto tempo levou entre o agendamento no consulado e a emissão do visto?",
    createdAt: "20/07/2026",
    tags: ["Alemanha", "Visto"],
    upvotes: 9,
  },
  {
    id: "p5",
    author: "Camila Ferreira",
    course: "Administração",
    title: "Vale a pena escolher duplo diploma?",
    description:
      "Estou entre um semestre de convênio e um programa de duplo diploma de dois semestres. Como foi a experiência de quem escolheu o duplo diploma?",
    createdAt: "14/07/2026",
    tags: ["Europa", "Duplo diploma"],
    upvotes: 15,
  },
  {
    id: "p6",
    author: "Pedro Henrique",
    course: "Ciência da Computação",
    title: "Moradia estudantil em Santiago: como conseguir?",
    description:
      "Fui aceito na UC Chile e queria dicas de bairros e de como funciona a residência universitária por lá.",
    createdAt: "02/07/2026",
    tags: ["Chile", "Moradia"],
    upvotes: 7,
  },
];

const seedComments: ForumComment[] = [
  {
    id: "c1",
    postId: "p1",
    parentCommentId: null,
    author: "João Vitor",
    content:
      "A matrícula é feita no TUMonline. Você recebe o login junto com a carta de aceite e escolhe as disciplinas nas primeiras duas semanas do semestre.",
    createdAt: "13/08/2026",
    upvotes: 12,
  },
  {
    id: "c2",
    postId: "p1",
    parentCommentId: "c1",
    author: "Mariana Costa",
    content: "Perfeito, obrigada! E o prazo de troca de disciplinas é o mesmo?",
    createdAt: "13/08/2026",
    upvotes: 3,
  },
  {
    id: "c3",
    postId: "p1",
    parentCommentId: null,
    author: "Ana Paula",
    content:
      "Vale conferir também o Welcome Week: eles explicam o sistema de créditos e o seguro saúde obrigatório.",
    createdAt: "14/08/2026",
    upvotes: 6,
  },
  {
    id: "c4",
    postId: "p2",
    parentCommentId: null,
    author: "Gabriel Rocha",
    content:
      "Fiz um semestre na UBA. A carga horária é puxada, mas o custo de vida ajuda bastante. Recomendo morar em Recoleta ou Palermo.",
    createdAt: "06/08/2026",
    upvotes: 8,
  },
  {
    id: "c5",
    postId: "p3",
    parentCommentId: null,
    author: "Coordenação CCCI",
    content:
      "O convênio com Salamanca aceita B1 para disciplinas regulares, mas algumas cadeiras específicas pedem B2. Confira a lista no site da instituição.",
    createdAt: "29/07/2026",
    upvotes: 14,
  },
];

let state: State = {
  posts: seedPosts,
  comments: seedComments,
  votedPosts: [],
};

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

export function useForum() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

function hoje() {
  return new Date().toLocaleDateString("pt-BR");
}

export function addPost(input: {
  title: string;
  description: string;
  tags: string[];
}) {
  const id = `p${Date.now()}`;
  state = {
    ...state,
    posts: [
      {
        id,
        author: "Você",
        course: "Aluno PUC-Rio",
        title: input.title,
        description: input.description,
        createdAt: hoje(),
        tags: input.tags,
        upvotes: 0,
      },
      ...state.posts,
    ],
  };
  emit();
  return id;
}

export function addComment(
  postId: string,
  content: string,
  parentCommentId: string | null = null,
) {
  state = {
    ...state,
    comments: [
      ...state.comments,
      {
        id: `c${Date.now()}`,
        postId,
        parentCommentId,
        author: "Você",
        content,
        createdAt: hoje(),
        upvotes: 0,
      },
    ],
  };
  emit();
}

export function togglePostUpvote(postId: string) {
  const voted = state.votedPosts.includes(postId);
  state = {
    ...state,
    votedPosts: voted
      ? state.votedPosts.filter((id) => id !== postId)
      : [...state.votedPosts, postId],
    posts: state.posts.map((p) =>
      p.id === postId ? { ...p, upvotes: p.upvotes + (voted ? -1 : 1) } : p,
    ),
  };
  emit();
}

export function commentsOf(postId: string, comments: ForumComment[]) {
  return comments.filter((c) => c.postId === postId && !c.parentCommentId);
}

export function repliesOf(commentId: string, comments: ForumComment[]) {
  return comments.filter((c) => c.parentCommentId === commentId);
}

export function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}
