import { createFileRoute, notFound } from "@tanstack/react-router";
import { Container, Layout } from "@/components/site/Layout";
import { UniversityCard } from "@/components/site/cards";
import { InfoCard, Pill, SectionTitle, UpdatedAt } from "@/components/site/ui";
import { ULTIMA_ATUALIZACAO, getPais, universidadesDoPais } from "@/data/puc";

export const Route = createFileRoute("/paises/$id")({
  loader: ({ params }) => {
    const pais = getPais(params.id);
    if (!pais) throw notFound();
    return { pais };
  },
  head: ({ loaderData }) => {
    const nome = loaderData?.pais.nome ?? "País";
    return {
      meta: [
        { title: `${nome} | Destinos RotaPUC` },
        {
          name: "description",
          content: `Idioma, moeda, fuso-horário, requisitos de entrada e universidades conveniadas para intercâmbio na ${nome}.`,
        },
        { property: "og:title", content: `${nome} | Destinos RotaPUC` },
        {
          property: "og:description",
          content: `Guia completo de intercâmbio para ${nome}.`,
        },
      ],
    };
  },
  component: PaisDetalhe,
});

function PaisDetalhe() {
  const { pais } = Route.useLoaderData();
  const lista = universidadesDoPais(pais.id);

  return (
    <Layout>
      <Container className="py-10">
        <Pill>{pais.nome}</Pill>
        <h1 className="sr-only">{pais.nome}</h1>

        <img
          src={pais.imagem}
          alt={`Paisagem representativa: ${pais.nome}`}
          width={1200}
          height={800}
          className="mt-6 h-[340px] w-full rounded-2xl object-cover"
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <InfoCard title="Idiomas">
              <p>{pais.idiomaOficial}</p>
            </InfoCard>
            <InfoCard title="Moeda">
              <p>{pais.moeda}</p>
            </InfoCard>
            <InfoCard title="Fuso-horário">
              <p>{pais.fusoHorario}</p>
            </InfoCard>
          </div>
          <div className="space-y-6">
            <InfoCard title="Requisitos de entrada">
              <ul className="list-disc space-y-1 pl-5">
                {pais.requisitosParaEntrar.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <div className="mt-4">
                <UpdatedAt date={ULTIMA_ATUALIZACAO} />
              </div>
            </InfoCard>
            <InfoCard title="Informações adicionais">
              <ul className="list-disc space-y-1 pl-5">
                {pais.informacoesAdicionais.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </div>

        <SectionTitle className="mt-14">Universidades conveniadas</SectionTitle>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {lista.map((u) => (
            <UniversityCard key={u.id} u={u} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}
