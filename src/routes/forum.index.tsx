import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Container, Layout } from "@/components/site/Layout";
import { ForumThreadCard } from "@/components/site/cards";
import { EmptyState, Pill } from "@/components/site/ui";
import { useForum } from "@/lib/forum-store";

export const Route = createFileRoute("/forum/")({
  head: () => ({
    meta: [
      { title: "Comunidade de Intercâmbio | PUC GLOBAL" },
      {
        name: "description",
        content:
          "Fórum de perguntas do intercâmbio PUC-Rio: tire dúvidas sobre matrícula, vistos, proficiência e vida no destino.",
      },
      { property: "og:title", content: "Comunidade de Intercâmbio | PUC GLOBAL" },
      {
        property: "og:description",
        content: "Perguntas e respostas entre alunos e ex-intercambistas da PUC-Rio.",
      },
    ],
  }),
  component: ForumPage,
});

const PAGE_SIZE = 4;

function ForumPage() {
  const { posts, comments } = useForum();
  const [pagina, setPagina] = useState(0);

  const totalPaginas = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const visiveis = posts.slice(pagina * PAGE_SIZE, pagina * PAGE_SIZE + PAGE_SIZE);

  return (
    <Layout>
      <Container className="py-12">
        <div className="flex justify-center">
          <Pill>Fórum de perguntas</Pill>
        </div>
        <h1 className="mt-6 text-center text-3xl font-bold text-brand-dark sm:text-[40px]">
          Comunidade de Intercâmbio
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground">
          Troque experiências com alunos e ex-intercambistas da PUC-Rio sobre
          processo seletivo, destinos e vida acadêmica no exterior.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-lg font-semibold text-brand-dark">
            Todas as discussões ({posts.length})
          </p>
          <Link
            to="/forum/nova"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            <Plus className="size-4" aria-hidden="true" />
            Adicionar Pergunta
          </Link>
        </div>

        {visiveis.length === 0 ? (
          <div className="mt-8">
            <EmptyState
              title="Nenhuma discussão por aqui"
              description="Seja a primeira pessoa a abrir uma pergunta na comunidade."
            />
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {visiveis.map((post) => (
              <ForumThreadCard
                key={post.id}
                post={post}
                replies={comments.filter((c) => c.postId === post.id).length}
              />
            ))}
          </div>
        )}

        {totalPaginas > 1 && (
          <div className="mt-10 flex justify-center gap-3">
            {Array.from({ length: totalPaginas }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPagina(i)}
                aria-label={`Página ${i + 1}`}
                aria-current={i === pagina}
                className={`size-3 rounded-full border border-brand transition-colors ${
                  i === pagina ? "bg-brand" : "bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}
