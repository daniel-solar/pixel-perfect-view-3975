import { Facebook, Globe, Instagram, Youtube } from "lucide-react";
import { contato } from "@/data/puc";
import { Pill } from "./ui";

const blocos = [
  { titulo: "Endereço", linhas: contato.endereco },
  { titulo: "Email", linhas: contato.email },
  { titulo: "Telefone", linhas: contato.telefone },
  { titulo: "Instagram", linhas: contato.instagram },
  { titulo: "Horário de funcionamento", linhas: contato.horario },
];

const redes = [
  {
    label: "Instagram da CCCI PUC-Rio",
    href: "https://www.instagram.com/puc_rio_intercambio/",
    Icon: Instagram,
  },
  {
    label: "Facebook da CCCI PUC-Rio",
    href: "https://www.facebook.com/PUC-Rio-Interc%C3%A2mbio-828185920564160",
    Icon: Facebook,
  },
  {
    label: "YouTube da PUC-Rio",
    href: "https://www.youtube.com/pucriooficial",
    Icon: Youtube,
  },
  {
    label: "Site oficial da CCCI PUC-Rio",
    href: "https://www.puc-rio.br/ensinopesq/ccci/",
    Icon: Globe,
  },
];

export function ContactFooter() {
  return (
    <footer className="mt-16 bg-brand-light">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex justify-center">
          <Pill>Contato com a coordenação</Pill>
        </div>

        <dl className="mt-10 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-5 lg:text-left">
          {blocos.map((bloco) => (
            <div key={bloco.titulo}>
              <dt className="text-base font-semibold text-brand-dark">
                {bloco.titulo}
              </dt>
              <dd className="mt-2 space-y-1 text-sm text-muted-foreground">
                {bloco.linhas.map((linha) => (
                  <p key={linha}>{linha}</p>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-10 flex justify-center gap-4">
          {redes.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Protótipo acadêmico RotaPUC — conteúdo demonstrativo, não oficial.
        </p>
      </div>
    </footer>
  );
}
