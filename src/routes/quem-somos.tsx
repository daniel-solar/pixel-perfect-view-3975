import { createFileRoute } from "@tanstack/react-router";
import { Container, Layout } from "@/components/site/Layout";
import { Pill } from "@/components/site/ui";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem somos | PUC GLOBAL" },
      {
        name: "description",
        content:
          "Seção institucional do PUC GLOBAL em elaboração: o conteúdo será publicado pela coordenação de intercâmbio.",
      },
      { property: "og:title", content: "Quem somos | PUC GLOBAL" },
      {
        property: "og:description",
        content: "Conteúdo institucional do PUC GLOBAL em elaboração.",
      },
    ],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <Layout>
      <Container className="py-16">
        <Pill>Quem somos</Pill>
        <h1 className="mt-4 text-3xl font-bold text-brand-dark sm:text-[40px]">
          Conteúdo institucional pendente
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Esta página faz parte da navegação do PUC GLOBAL, mas o conteúdo
          institucional ainda não foi definido. O texto será fornecido pela
          coordenação e publicado aqui, mantendo o mesmo padrão visual das demais
          páginas.
        </p>
      </Container>
    </Layout>
  );
}
