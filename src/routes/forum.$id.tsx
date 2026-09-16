import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowBigUp, MessageSquare } from "lucide-react";
import { Container, Layout } from "@/components/site/Layout";
import { EmptyState, Pill, TagChip } from "@/components/site/ui";
import {
  addComment,
  commentsOf,
  initials,
  repliesOf,
  togglePostUpvote,
  useForum,
  type ForumComment,
} from "@/lib/forum-store";

export const Route = createFileRoute("/forum/$id")({
  head: () => ({
    meta: [
      { title: "Discussão do fórum | PUC GLOBAL" },
      {
        name: "description",
        content:
          "Leia a discussão completa, respostas da comunidade e contribua com sua experiência de intercâmbio.",
      },
      { property: "og:title", content: "Discussão do fórum | PUC GLOBAL" },
      {
        property: "og:description",
        content: "Respostas e comentários da comunidade de intercâmbio da PUC-Rio.",
      },
    ],
  }),
  component: DiscussaoPage,
});

function Comentario({
  comment,
  all,
  onReply,
}: {
  comment: ForumComment;
  all: ForumComment[];
  onReply: (parentId: string, texto: string) => void;
}) {
  const [aberto, setAberto] = useState(false);
  const [texto, setTexto] = useState("");
  const respostas = repliesOf(comment.id, all);

  return (
    <li className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-9 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand-dark"
        >
          {initials(comment.author)}
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">{comment.author}</p>
          <p className="text-xs text-muted-foreground">{comment.createdAt}</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground">
        {comment.content}
      </p>

      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        className="mt-3 text-sm font-semibold text-brand hover:underline"
      >
        {aberto ? "Cancelar" : "Responder"}
      </button>

      {aberto && (
        <form
          className="mt-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (!texto.trim()) return;
            onReply(comment.id, texto.trim());
            setTexto("");
            setAberto(false);
          }}
        >
          <label htmlFor={`resposta-${comment.id}`} className="sr-only">
            Sua resposta
          </label>
          <textarea
            id={`resposta-${comment.id}`}
            rows={3}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            className="w-full rounded-lg border border-border px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            placeholder="Escreva sua resposta"
          />
          <button
            type="submit"
            disabled={!texto.trim()}
            className="mt-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-50"
          >
            Enviar resposta
          </button>
        </form>
      )}

      {respostas.length > 0 && (
        <ul className="mt-4 space-y-3 border-l-2 border-brand-light pl-5">
          {respostas.map((r) => (
            <li key={r.id}>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-8 items-center justify-center rounded-full bg-muted text-[10px] font-bold text-brand-dark"
                >
                  {initials(r.author)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.author}</p>
                  <p className="text-xs text-muted-foreground">{r.createdAt}</p>
                </div>
              </div>
              <p className="mt-2 text-sm text-foreground">{r.content}</p>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function DiscussaoPage() {
  const { id } = Route.useParams();
  const { posts, comments, votedPosts } = useForum();
  const post = posts.find((p) => p.id === id);
  const [respostaTopo, setRespostaTopo] = useState("");

  if (!post) {
    return (
      <Layout>
        <Container className="py-16">
          <EmptyState
            title="Discussão não encontrada"
            description="Esta pergunta não existe ou foi removida."
          />
          <div className="mt-6 text-center">
            <Link to="/forum" className="font-semibold text-brand hover:underline">
              Voltar para o fórum
            </Link>
          </div>
        </Container>
      </Layout>
    );
  }

  const principais = commentsOf(post.id, comments);
  const votou = votedPosts.includes(post.id);

  function enviarResposta(e: FormEvent) {
    e.preventDefault();
    if (!respostaTopo.trim() || !post) return;
    addComment(post.id, respostaTopo.trim());
    setRespostaTopo("");
  }

  return (
    <Layout>
      <Container className="py-12">
        <div className="flex justify-center">
          <Pill>Fórum de perguntas</Pill>
        </div>

        <article className="mx-auto mt-8 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <TagChip key={t}>{t}</TagChip>
            ))}
          </div>
          <h1 className="mt-4 text-2xl font-bold text-brand-dark sm:text-[28px]">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            {post.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand-dark"
            >
              {initials(post.author)}
            </span>
            <div>
              <p className="font-semibold text-foreground">{post.author}</p>
              <p>
                {post.course} · {post.createdAt}
              </p>
            </div>

            <button
              type="button"
              onClick={() => togglePostUpvote(post.id)}
              aria-pressed={votou}
              className={`ml-auto inline-flex items-center gap-2 rounded-full border border-brand px-4 py-2 text-sm font-semibold transition-colors ${
                votou ? "bg-brand text-white" : "bg-white text-brand"
              }`}
            >
              <ArrowBigUp className="size-4" aria-hidden="true" />
              {post.upvotes} upvotes
            </button>
            <span className="inline-flex items-center gap-2">
              <MessageSquare className="size-4" aria-hidden="true" />
              {comments.filter((c) => c.postId === post.id).length} respostas
            </span>
          </div>

          <form onSubmit={enviarResposta} className="mt-6 border-t border-border pt-6">
            <label
              htmlFor="resposta-principal"
              className="text-sm font-semibold text-brand-dark"
            >
              Responder
            </label>
            <textarea
              id="resposta-principal"
              rows={4}
              value={respostaTopo}
              onChange={(e) => setRespostaTopo(e.target.value)}
              className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              placeholder="Compartilhe sua experiência ou resposta"
            />
            <button
              type="submit"
              disabled={!respostaTopo.trim()}
              className="mt-3 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-50"
            >
              Publicar resposta
            </button>
          </form>
        </article>

        <section className="mx-auto mt-10 max-w-4xl">
          <h2 className="text-xl font-semibold text-brand-dark">
            Respostas e Comentários
          </h2>
          {principais.length === 0 ? (
            <div className="mt-4">
              <EmptyState
                title="Ainda sem respostas"
                description="Seja a primeira pessoa a responder esta pergunta."
              />
            </div>
          ) : (
            <ul className="mt-4 space-y-4">
              {principais.map((c) => (
                <Comentario
                  key={c.id}
                  comment={c}
                  all={comments}
                  onReply={(parentId, texto) =>
                    addComment(post.id, texto, parentId)
                  }
                />
              ))}
            </ul>
          )}
        </section>
      </Container>
    </Layout>
  );
}
