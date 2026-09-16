import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container, Layout } from "@/components/site/Layout";
import { InfoCard, Pill, SectionTitle, TagChip, UpdatedAt } from "@/components/site/ui";
import {
  ULTIMA_ATUALIZACAO,
  getPais,
  getUniversidade,
} from "@/data/puc";

export const Route = createFileRoute("/universidades/$id")({
  loader: ({ params }) => {
    const universidade = getUniversidade(params.id);
    if (!universidade) throw notFound();
    return { universidade };
  },
  head: ({ loaderData }) => {
    const nome = loaderData?.universidade.nome ?? "Universidade";
    return {
      meta: [
        { title: `${nome} | PUC GLOBAL` },
        {
          name: "description",
          content: `Requisitos acadêmicos, programas, custos, bolsas e documentação para intercâmbio na ${nome}.`,
        },
        { property: "og:title", content: `${nome} | PUC GLOBAL` },
        {
          property: "og:description",
          content: `Informações completas sobre o convênio da PUC-Rio com a ${nome}.`,
        },
      ],
    };
  },
  component: UniversidadeDetalhe,
});

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {itens.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

function UniversidadeDetalhe() {
  const { universidade: u } = Route.useLoaderData();
  const pais = getPais(u.paisId)!;

  return (
    <Layout>
      <Container className="py-10">
        <Pill>{u.sigla}</Pill>
        <h1 className="mt-4 text-3xl font-bold text-brand-dark sm:text-[40px]">
          {u.nome}
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          {u.cidade} ·{" "}
          <Link
            to="/paises/$id"
            params={{ id: pais.id }}
            className="text-brand hover:underline"
          >
            {pais.nome}
          </Link>
        </p>

        <img
          src={u.foto}
          alt={`Campus da ${u.nome}`}
          loading="lazy"
          width={1200}
          height={800}
          className="mt-6 h-[320px] w-full rounded-2xl object-cover"
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <InfoCard title="Sobre a universidade">
            <p>{u.sobre}</p>
            <p className="mt-3">Endereço: {u.endereco}</p>
            <p>Ranking: {u.ranking}</p>
            <p>
              Site oficial:{" "}
              <a
                href={`https://${u.siteOficial}`}
                target="_blank"
                rel="noreferrer"
                className="text-brand hover:underline"
              >
                {u.siteOficial}
              </a>
            </p>
            <p>Vagas disponíveis: {u.vagas}</p>
          </InfoCard>

          <InfoCard title="Perfil acadêmico">
            <p>{u.perfilAcademico}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {u.cursos.map((c) => (
                <TagChip key={c}>{c}</TagChip>
              ))}
            </div>
          </InfoCard>
        </div>

        <SectionTitle className="mt-12">Programas</SectionTitle>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <caption className="sr-only">
              Programas oferecidos pela {u.nome}
            </caption>
            <thead className="bg-brand-light text-brand-dark">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Nível</th>
                <th scope="col" className="px-4 py-3 font-semibold">Tipo</th>
                <th scope="col" className="px-4 py-3 font-semibold">Duração</th>
                <th scope="col" className="px-4 py-3 font-semibold">Idioma</th>
                <th scope="col" className="px-4 py-3 font-semibold">Custo</th>
                <th scope="col" className="px-4 py-3 font-semibold">Prazo</th>
                <th scope="col" className="px-4 py-3 font-semibold">Vagas</th>
              </tr>
            </thead>
            <tbody>
              {u.programas.map((p) => (
                <tr key={p.id} className="border-t border-border">
                  <td className="px-4 py-3">{p.nivel}</td>
                  <td className="px-4 py-3">{p.tipoIntercambio}</td>
                  <td className="px-4 py-3">{p.duracao}</td>
                  <td className="px-4 py-3">{p.idioma}</td>
                  <td className="px-4 py-3">{p.custo}</td>
                  <td className="px-4 py-3">{p.prazoInscricao}</td>
                  <td className="px-4 py-3">{p.vagas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <InfoCard title="Requisitos acadêmicos">
            <Lista itens={u.requisitosAcademicos} />
            <div className="mt-4">
              <UpdatedAt date={ULTIMA_ATUALIZACAO} />
            </div>
          </InfoCard>
          <InfoCard title="Certificados de aptidão e línguas aceitos">
            <Lista itens={u.certificados} />
          </InfoCard>
          <InfoCard title="Custos e bolsas">
            <Lista itens={[...u.custos, ...u.bolsas]} />
          </InfoCard>
          <InfoCard title="Documentação necessária">
            <Lista itens={u.documentacao} />
          </InfoCard>
        </div>

        <div className="mt-6">
          <InfoCard title="Contato com a instituição">
            <p>{u.contato}</p>
          </InfoCard>
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-border bg-muted p-6">
          <h3 className="text-lg font-semibold text-brand-dark">Depoimentos</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Ainda não há depoimentos publicados para esta universidade. Relatos de
            ex-intercambistas serão exibidos aqui após moderação da coordenação.
          </p>
        </div>
      </Container>
    </Layout>
  );
}
