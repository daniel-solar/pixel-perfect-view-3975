import { createFileRoute } from "@tanstack/react-router";
import { Container, Layout } from "@/components/site/Layout";
import { InfoCard, Pill } from "@/components/site/ui";
import { contato } from "@/data/puc";

export const Route = createFileRoute("/contatos")({
  head: () => ({
    meta: [
      { title: "Contatos da coordenação | RotaPUC" },
      {
        name: "description",
        content:
          "Endereço, e-mails, telefone, Instagram e horário de atendimento da coordenação de intercâmbio da PUC-Rio.",
      },
      { property: "og:title", content: "Contatos da coordenação | RotaPUC" },
      {
        property: "og:description",
        content: "Fale com a CCCI, coordenação de intercâmbio da PUC-Rio.",
      },
    ],
  }),
  component: Contatos,
});

function Contatos() {
  const blocos = [
    { titulo: "Endereço", linhas: contato.endereco },
    { titulo: "Email", linhas: contato.email },
    { titulo: "Telefone", linhas: contato.telefone },
    { titulo: "Instagram", linhas: contato.instagram },
    { titulo: "Horário de funcionamento", linhas: contato.horario },
  ];

  return (
    <Layout>
      <Container className="py-12">
        <Pill>Contatos</Pill>
        <h1 className="mt-4 text-3xl font-bold text-brand-dark sm:text-[40px]">
          Contato com a coordenação
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Fale com a coordenação de cooperação internacional da PUC-Rio para
          dúvidas sobre convênios, prazos e documentação.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocos.map((b) => (
            <InfoCard key={b.titulo} title={b.titulo}>
              {b.linhas.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </InfoCard>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
