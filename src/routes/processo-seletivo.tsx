import { createFileRoute } from "@tanstack/react-router";
import { Container, Layout } from "@/components/site/Layout";
import { Pill, SectionTitle, TagChip, UpdatedAt } from "@/components/site/ui";
import { faq, processoSeletivo } from "@/data/puc";
import type { BlocoPasso } from "@/data/puc";

export const Route = createFileRoute("/processo-seletivo")({
  head: () => ({
    meta: [
      { title: "Processo seletivo de intercâmbio | RotaPUC" },
      {
        name: "description",
        content:
          "Pré-requisitos, Passos 1 a 10, documentação, custos, proficiência e lista de CR do processo seletivo de intercâmbio da PUC-Rio.",
      },
      {
        property: "og:title",
        content: "Processo seletivo de intercâmbio | RotaPUC",
      },
      {
        property: "og:description",
        content: "Cronograma completo do intercâmbio acadêmico da PUC-Rio.",
      },
    ],
  }),
  component: ProcessoSeletivo,
});

function VoltarAoIndice() {
  return (
    <div className="mt-6 flex justify-end">
      <a
        href="#indice-do-processo"
        className="inline-flex items-center rounded-full border border-brand px-5 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
      >
        Voltar
      </a>
    </div>
  );
}

function Bloco({ bloco }: { bloco: BlocoPasso }) {
  switch (bloco.tipo) {
    case "paragrafo":
      return (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {bloco.texto}
        </p>
      );
    case "subtitulo":
      return (
        <h3 className="mt-6 text-base font-semibold text-brand-dark">
          {bloco.texto}
        </h3>
      );
    case "lista-numerada":
      return (
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {bloco.itens.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "lista":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {bloco.itens.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "caixa":
      return (
        <div className="mt-5 space-y-3 rounded-xl bg-brand-light p-5 text-sm leading-relaxed text-brand-dark">
          {bloco.paragrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      );
    case "nota":
      return (
        <p className="mt-4 rounded-lg border border-border bg-muted p-4 text-xs leading-relaxed text-muted-foreground">
          {bloco.texto}
        </p>
      );
    case "destaque":
      return (
        <p className="mt-4 text-sm font-semibold text-brand">{bloco.texto}</p>
      );
    case "chips":
      return (
        <ul className="mt-4 flex flex-wrap gap-2">
          {bloco.itens.map((item) => (
            <li key={item}>
              <TagChip>{item}</TagChip>
            </li>
          ))}
        </ul>
      );
    case "tabela":
      return (
        <div className="mt-5 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-brand-light text-brand-dark">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  {bloco.colunas[0]}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  {bloco.colunas[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {bloco.linhas.map((linha) => (
                <tr key={linha.chave} className="border-t border-border">
                  <td className="px-4 py-3 text-muted-foreground">
                    {linha.chave}
                  </td>
                  <td className="px-4 py-3 font-medium text-brand-dark">
                    {linha.valor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cards":
      return (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {bloco.itens.map((item) => (
            <div
              key={item.titulo}
              className="rounded-xl bg-brand-light p-5"
            >
              <h4 className="text-sm font-semibold text-brand-dark">
                {item.titulo}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function ProcessoSeletivo() {
  const { indice, listaCr, preRequisitos, passos } = processoSeletivo;

  return (
    <Layout>
      <Container className="py-12">
        <div className="flex justify-center">
          <Pill>Processo seletivo</Pill>
        </div>

        <div className="mt-4 text-center">
          <UpdatedAt date={processoSeletivo.atualizadoEm} />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr]">
          <nav
            id="indice-do-processo"
            aria-label="Índice do Processo"
            className="h-fit rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
          >
            <h2 className="text-lg font-semibold text-brand-dark">
              Índice do Processo
            </h2>
            <ul className="mt-4 space-y-2 text-sm font-medium text-brand">
              {indice.map((item) => (
                <li key={item.id}>
                  <a className="hover:underline" href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="lista-de-cr">
            <h2
              id="lista-de-cr"
              className="text-lg font-semibold text-brand-dark"
            >
              {listaCr.titulo}
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[420px] text-left text-sm">
                <caption className="sr-only">
                  Nota de corte por departamento
                </caption>
                <thead className="bg-brand-light text-brand-dark">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      {listaCr.colunas[0]}
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold">
                      {listaCr.colunas[1]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listaCr.linhas.map((linha) => (
                    <tr
                      key={linha.departamento}
                      className="border-t border-border"
                    >
                      <td className="px-4 py-2.5 text-muted-foreground">
                        {linha.departamento}
                      </td>
                      <td className="px-4 py-2.5 text-right font-medium text-brand-dark">
                        {linha.corte}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{listaCr.nota}</p>
          </section>
        </div>

        <section
          id={preRequisitos.id}
          className="mt-16 scroll-mt-24 border-t border-border pt-10"
        >
          <SectionTitle>{preRequisitos.titulo}</SectionTitle>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
            {preRequisitos.itens.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className="mt-4 rounded-lg border border-border bg-muted p-4 text-xs leading-relaxed text-muted-foreground">
            {preRequisitos.nota}
          </p>
          <VoltarAoIndice />
        </section>

        {passos.map((passo) => (
          <section
            key={passo.id}
            id={passo.id}
            className="mt-14 scroll-mt-24 border-t border-border pt-10"
          >
            <SectionTitle>{passo.titulo}</SectionTitle>
            {passo.blocos.map((bloco, index) => (
              <Bloco key={`${passo.id}-${index}`} bloco={bloco} />
            ))}
            <VoltarAoIndice />
          </section>
        ))}

        <SectionTitle className="mt-16">Perguntas frequentes</SectionTitle>
        <div className="mt-6 space-y-3">
          {faq.map((item) => (
            <details
              key={item.pergunta}
              className="rounded-xl border border-border bg-card p-5"
            >
              <summary className="cursor-pointer text-base font-semibold text-brand-dark">
                {item.pergunta}
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
