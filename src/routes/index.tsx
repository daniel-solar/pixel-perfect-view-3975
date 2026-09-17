import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Container, Layout } from "@/components/site/Layout";
import { CountryCard } from "@/components/site/cards";
import { Pill, SectionTitle } from "@/components/site/ui";
import { paises } from "@/data/puc";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RotaPUC | Intercâmbio acadêmico da PUC-Rio" },
      {
        name: "description",
        content:
          "Encontre universidades parceiras, países de destino, prazos do processo seletivo e a comunidade de intercâmbio da PUC-Rio.",
      },
      { property: "og:title", content: "RotaPUC | Intercâmbio PUC-Rio" },
      {
        property: "og:description",
        content:
          "Universidades parceiras, países, processo seletivo e fórum de intercâmbio em um só lugar.",
      },
    ],
  }),
  component: Index,
});

const banners = [
  {
    titulo: "Inscrições abertas para o semestre de outono",
    texto: "Confira os prazos e a documentação exigida no processo seletivo.",
    to: "/processo-seletivo" as const,
    cta: "Ver processo seletivo",
  },
  {
    titulo: "Mais de 40 universidades conveniadas",
    texto: "Filtre por continente, idioma, nível, duração, curso e tipo.",
    to: "/universidades" as const,
    cta: "Buscar universidades",
  },
  {
    titulo: "Converse com quem já foi",
    texto: "Tire dúvidas na comunidade de intercâmbio da PUC-Rio.",
    to: "/forum" as const,
    cta: "Ir para o fórum",
  },
];

function Index() {
  const [slide, setSlide] = useState(0);
  const banner = banners[slide] ?? banners[0]!;

  return (
    <Layout>
      <section className="relative">
        <img
          src={heroImg}
          alt="Estudantes da PUC-Rio caminhando por um campus internacional"
          width={1600}
          height={912}
          className="h-[380px] w-full object-cover sm:h-[460px]"
        />
        <div className="absolute inset-0 bg-brand-dark/55" />
        <Container className="absolute inset-0 flex flex-col justify-center">
          <Pill className="w-fit">Intercâmbio PUC-Rio</Pill>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-[40px] sm:leading-tight">
            Seu intercâmbio começa aqui
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/90">
            Descubra países parceiros, universidades conveniadas e todas as etapas
            do processo seletivo em um único lugar.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/universidades"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Buscar universidades
            </Link>
            <Link
              to="/paises"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand-light"
            >
              Ver países parceiros
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <div className="rounded-2xl bg-brand-light p-8">
          <h2 className="text-xl font-semibold text-brand-dark">
            {banner.titulo}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{banner.texto}</p>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Link
              to={banner.to}
              className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              {banner.cta}
            </Link>
            <div className="ml-auto flex items-center gap-2">
              {banners.map((b, i) => (
                <button
                  key={b.titulo}
                  type="button"
                  aria-label={`Mostrar destaque ${i + 1}`}
                  aria-current={i === slide}
                  onClick={() => setSlide(i)}
                  className={`size-3 rounded-full border border-brand transition-colors ${
                    i === slide ? "bg-brand" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container className="pb-12">
        <div className="flex justify-center">
          <Pill>Países parceiros</Pill>
        </div>
        <SectionTitle className="mt-6 text-center">
          Escolha seu destino
        </SectionTitle>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {paises.map((p) => (
            <CountryCard key={p.id} pais={p} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}
