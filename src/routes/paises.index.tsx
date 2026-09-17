import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, Layout } from "@/components/site/Layout";
import { CountryCard } from "@/components/site/cards";
import { Pill, SectionTitle } from "@/components/site/ui";
import { paises } from "@/data/puc";

export const Route = createFileRoute("/paises/")({
  head: () => ({
    meta: [
      { title: "Países parceiros | RotaPUC" },
      {
        name: "description",
        content:
          "Conheça os países de destino do intercâmbio da PUC-Rio, agrupados por continente, com universidades conveniadas.",
      },
      { property: "og:title", content: "Países parceiros | RotaPUC" },
      {
        property: "og:description",
        content: "Guia de destinos do intercâmbio acadêmico da PUC-Rio.",
      },
    ],
  }),
  component: PaisesPage,
});

const continentes = ["Europa", "América do Sul"] as const;

function PaisesPage() {
  const [expandidos, setExpandidos] = useState<string[]>([]);

  return (
    <Layout>
      <Container className="py-12">
        <div className="flex justify-center">
          <Pill>Guia de destinos</Pill>
        </div>
        <h1 className="mt-6 text-center text-3xl font-bold text-brand-dark sm:text-[40px]">
          Países Parceiros
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground">
          Explore os destinos com convênio ativo da PUC-Rio e veja quantas
          universidades estão disponíveis em cada país.
        </p>

        <div className="mt-12 space-y-14">
          {continentes.map((continente) => {
            const lista = paises.filter((p) => p.continente === continente);
            const aberto = expandidos.includes(continente);
            const visiveis = aberto ? lista : lista.slice(0, 2);
            return (
              <section key={continente}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <SectionTitle>{continente}</SectionTitle>
                  {lista.length > 2 && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandidos((prev) =>
                          aberto
                            ? prev.filter((c) => c !== continente)
                            : [...prev, continente],
                        )
                      }
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                    >
                      {aberto ? "Ver menos" : "Ver mais"}
                      <ChevronDown className="size-4" aria-hidden="true" />
                    </button>
                  )}
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {visiveis.map((p) => (
                    <CountryCard key={p.id} pais={p} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
}
