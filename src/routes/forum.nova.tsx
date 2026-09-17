import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Container, Layout } from "@/components/site/Layout";
import { Pill } from "@/components/site/ui";
import { addPost } from "@/lib/forum-store";

export const Route = createFileRoute("/forum/nova")({
  head: () => ({
    meta: [
      { title: "Nova pergunta no fórum | RotaPUC" },
      {
        name: "description",
        content:
          "Publique uma nova pergunta na comunidade de intercâmbio da PUC-Rio e receba respostas de outros alunos.",
      },
      { property: "og:title", content: "Nova pergunta no fórum | RotaPUC" },
      {
        property: "og:description",
        content: "Formule sua dúvida sobre intercâmbio para a comunidade PUC-Rio.",
      },
    ],
  }),
  component: NovaPergunta,
});

const marcadores = ["Alemanha", "Europa", "Matrícula", "Visto"];

function NovaPergunta() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [erros, setErros] = useState<{ titulo?: string; descricao?: string }>({});

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const novosErros: typeof erros = {};
    if (!titulo.trim()) novosErros.titulo = "Informe o título da pergunta.";
    if (!descricao.trim())
      novosErros.descricao = "Descreva sua dúvida com mais detalhes.";
    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    const id = addPost({ title: titulo.trim(), description: descricao.trim(), tags });
    navigate({ to: "/forum/$id", params: { id } });
  }

  return (
    <Layout>
      <Container className="py-12">
        <div className="flex justify-center">
          <Pill>Fórum de perguntas</Pill>
        </div>
        <h1 className="mt-6 text-center text-3xl font-bold text-brand-dark sm:text-[40px]">
          Nova Pergunta
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground">
          Formule sua dúvida de maneira clara para obter melhores respostas da
          comunidade.
        </p>

        <form
          onSubmit={onSubmit}
          noValidate
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
        >
          <div>
            <label
              htmlFor="titulo"
              className="text-sm font-semibold text-brand-dark"
            >
              Título da Pergunta *
            </label>
            <input
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              aria-invalid={Boolean(erros.titulo)}
              aria-describedby={erros.titulo ? "erro-titulo" : undefined}
              className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              placeholder="Ex.: Como funciona a matrícula na universidade de destino?"
            />
            {erros.titulo && (
              <p id="erro-titulo" className="mt-2 text-sm text-destructive">
                {erros.titulo}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label
              htmlFor="descricao"
              className="text-sm font-semibold text-brand-dark"
            >
              Descrição detalhada *
            </label>
            <textarea
              id="descricao"
              rows={6}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              aria-invalid={Boolean(erros.descricao)}
              aria-describedby={erros.descricao ? "erro-descricao" : undefined}
              className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              placeholder="Explique o contexto da sua dúvida."
            />
            {erros.descricao && (
              <p id="erro-descricao" className="mt-2 text-sm text-destructive">
                {erros.descricao}
              </p>
            )}
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-brand-dark">
              Marcadores sugeridos
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {marcadores.map((m) => {
                const ativo = tags.includes(m);
                return (
                  <button
                    key={m}
                    type="button"
                    aria-pressed={ativo}
                    onClick={() =>
                      setTags((prev) =>
                        ativo ? prev.filter((t) => t !== m) : [...prev, m],
                      )
                    }
                    className={`rounded-full border border-brand px-4 py-1.5 text-sm font-medium transition-colors ${
                      ativo ? "bg-brand text-white" : "bg-white text-brand"
                    }`}
                  >
                    +{m}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:w-auto"
          >
            Postar
          </button>
        </form>
      </Container>
    </Layout>
  );
}
