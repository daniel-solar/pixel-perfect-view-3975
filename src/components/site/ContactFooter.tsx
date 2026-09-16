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
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "YouTube", Icon: Youtube },
  { label: "Site oficial", Icon: Globe },
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
          {redes.map(({ label, Icon }) => (
            <li key={label}>
              <a
                href="https://www.puc-rio.br"
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Protótipo acadêmico PUC GLOBAL — conteúdo demonstrativo, não oficial.
        </p>
      </div>
    </footer>
  );
}
