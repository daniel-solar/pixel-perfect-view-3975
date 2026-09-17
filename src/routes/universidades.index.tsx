import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Container, Layout } from "@/components/site/Layout";
import { UniversityCard } from "@/components/site/cards";
import { EmptyState, Pill, SectionTitle } from "@/components/site/ui";
import { cursosDisponiveis, paises, universidades } from "@/data/puc";

export const Route = createFileRoute("/universidades/")({
  head: () => ({
    meta: [
      { title: "Universidades parceiras | RotaPUC" },
      {
        name: "description",
        content:
          "Busque universidades conveniadas da PUC-Rio e filtre por continente, idioma, nível, duração, curso e tipo de intercâmbio.",
      },
      { property: "og:title", content: "Universidades parceiras | RotaPUC" },
      {
        property: "og:description",
        content: "Busca e filtros das universidades conveniadas da PUC-Rio.",
      },
    ],
  }),
  component: UniversidadesPage,
});

const TODOS = "Todos";

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium text-brand-dark">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-full border border-border bg-white px-4 py-2 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {[TODOS, ...options].map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function UniversidadesPage() {
  const [termo, setTermo] = useState("");
  const [continente, setContinente] = useState(TODOS);
  const [lingua, setLingua] = useState(TODOS);
  const [nivel, setNivel] = useState(TODOS);
  const [duracao, setDuracao] = useState(TODOS);
  const [curso, setCurso] = useState(TODOS);
  const [tipo, setTipo] = useState(TODOS);
  const [expandidos, setExpandidos] = useState<string[]>([]);

  const resultados = useMemo(() => {
    const t = termo.trim().toLowerCase();
    return universidades.filter((u) => {
      const pais = paises.find((p) => p.id === u.paisId)!;
      if (
        t &&
        !`${u.nome} ${u.sigla} ${u.cidade} ${pais.nome}`.toLowerCase().includes(t)
      )
        return false;
      if (continente !== TODOS && pais.continente !== continente) return false;
      if (curso !== TODOS && !u.cursos.includes(curso)) return false;
      if (
        lingua !== TODOS &&
        !u.programas.some((p) => p.idioma.includes(lingua))
      )
        return false;
      if (nivel !== TODOS && !u.programas.some((p) => p.nivel === nivel))
        return false;
      if (duracao !== TODOS && !u.programas.some((p) => p.duracao === duracao))
        return false;
      if (tipo !== TODOS && !u.programas.some((p) => p.tipoIntercambio === tipo))
        return false;
      return true;
    });
  }, [termo, continente, lingua, nivel, duracao, curso, tipo]);

  const grupos = paises
    .map((p) => ({ pais: p, lista: resultados.filter((u) => u.paisId === p.id) }))
    .filter((g) => g.lista.length > 0);

  return (
    <Layout>
      <section className="bg-brand-light py-10">
        <Container>
          <Pill>Universidades conveniadas</Pill>
          <h1 className="mt-4 text-3xl font-bold text-brand-dark sm:text-[40px]">
            Encontre sua universidade
          </h1>

          <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-end">
            <label className="flex flex-col gap-1 text-sm">
              <span className="font-medium text-brand-dark">
                Busca universidade
              </span>
              <span className="relative">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={termo}
                  onChange={(e) => setTermo(e.target.value)}
                  placeholder="Nome, cidade ou país"
                  className="w-full rounded-full border border-border bg-white py-2 pl-11 pr-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                />
              </span>
            </label>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              <Select
                label="Continente"
                value={continente}
                onChange={setContinente}
                options={["Europa", "América do Sul"]}
              />
              <Select
                label="Línguas"
                value={lingua}
                onChange={setLingua}
                options={["Alemão", "Inglês", "Espanhol"]}
              />
              <Select
                label="Nível"
                value={nivel}
                onChange={setNivel}
                options={["Graduação", "Pós-graduação"]}
              />
              <Select
                label="Duração"
                value={duracao}
                onChange={setDuracao}
                options={["1 semestre", "2 semestres"]}
              />
              <Select
                label="Curso"
                value={curso}
                onChange={setCurso}
                options={cursosDisponiveis}
              />
              <Select
                label="Tipo"
                value={tipo}
                onChange={setTipo}
                options={["Convênio", "Duplo diploma", "Verão"]}
              />
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <p className="text-sm text-muted-foreground">
          {resultados.length} universidade(s) encontrada(s)
        </p>

        {grupos.length === 0 ? (
          <div className="mt-8">
            <EmptyState
              title="Nenhuma universidade encontrada"
              description="Não encontramos universidades com esses critérios. Tente ampliar ou remover algum filtro."
            />
          </div>
        ) : (
          <div className="mt-8 space-y-12">
            {grupos.map(({ pais, lista }) => {
              const aberto = expandidos.includes(pais.id);
              const visiveis = aberto ? lista : lista.slice(0, 2);
              return (
                <section key={pais.id}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Pill>{pais.nome}</Pill>
                    {lista.length > 2 && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandidos((prev) =>
                            aberto
                              ? prev.filter((id) => id !== pais.id)
                              : [...prev, pais.id],
                          )
                        }
                        className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                      >
                        {aberto ? "Ver menos" : "Ver mais"}
                        <ChevronDown
                          className={`size-4 transition-transform ${aberto ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>
                  <SectionTitle className="sr-only">{pais.nome}</SectionTitle>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {visiveis.map((u) => (
                      <UniversityCard key={u.id} u={u} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </Container>
    </Layout>
  );
}
