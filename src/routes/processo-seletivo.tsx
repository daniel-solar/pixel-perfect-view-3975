import { createFileRoute } from "@tanstack/react-router";
import { Container, Layout } from "@/components/site/Layout";
import { InfoCard, Pill, SectionTitle, UpdatedAt } from "@/components/site/ui";
import { faq, processoSeletivo } from "@/data/puc";

export const Route = createFileRoute("/processo-seletivo")({
  head: () => ({
    meta: [
      { title: "Processo seletivo de intercâmbio | RotaPUC" },
      {
        name: "description",
        content:
          "Pré-requisitos, etapas, prazos, documentação, custos e CR de referência do processo seletivo de intercâmbio da PUC-Rio.",
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

function ProcessoSeletivo() {
  return (
    <Layout>
      <Container className="py-12">
        <Pill>Processo seletivo</Pill>
        <h1 className="mt-4 text-3xl font-bold text-brand-dark sm:text-[40px]">
          Como funciona o intercâmbio
        </h1>
        <div className="mt-3">
          <UpdatedAt date={processoSeletivo.atualizadoEm} />
        </div>

        <SectionTitle className="mt-10">Pré-requisitos</SectionTitle>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {processoSeletivo.preRequisitos.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <SectionTitle className="mt-12">Etapas e prazos</SectionTitle>
        <ol className="mt-6 space-y-4 border-l-2 border-brand-light pl-6">
          {processoSeletivo.etapas.map((etapa) => (
            <li key={etapa.titulo} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-2 size-4 rounded-full border-2 border-brand bg-white"
              />
              <h3 className="text-lg font-semibold text-brand-dark">
                {etapa.titulo}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {etapa.descricao}
              </p>
              <p className="mt-1 text-sm font-medium text-brand">
                Prazo: {etapa.prazo}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <InfoCard title="Documentação">
            <ul className="list-disc space-y-1 pl-5">
              {processoSeletivo.documentacao.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard title="Custos e bolsas">
            <ul className="list-disc space-y-1 pl-5">
              {processoSeletivo.custos.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </InfoCard>
        </div>

        <SectionTitle className="mt-12">CR de referência</SectionTitle>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[480px] text-left text-sm">
            <caption className="sr-only">
              CR mínimo de referência por tipo de destino
            </caption>
            <thead className="bg-brand-light text-brand-dark">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Perfil de destino</th>
                <th scope="col" className="px-4 py-3 font-semibold">CR mínimo</th>
              </tr>
            </thead>
            <tbody>
              {processoSeletivo.crReferencia.map((linha) => (
                <tr key={linha.perfil} className="border-t border-border">
                  <td className="px-4 py-3">{linha.perfil}</td>
                  <td className="px-4 py-3">{linha.cr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionTitle className="mt-12">Perguntas frequentes</SectionTitle>
        <div className="mt-6 space-y-3">
          {faq.map((item) => (
            <details
              key={item.pergunta}
              className="rounded-xl border border-border bg-card p-5"
            >
              <summary className="cursor-pointer text-base font-semibold text-brand-dark">
                {item.pergunta}
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{item.resposta}</p>
            </details>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
