import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", to: "/" },
  { label: "Universidades", to: "/universidades" },
  { label: "Países", to: "/paises" },
  { label: "Processo seletivo", to: "/processo-seletivo" },
  { label: "Fórum", to: "/forum" },
  { label: "Contatos", to: "/contatos" },
  { label: "Quem somos", to: "/quem-somos" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "rounded-full border border-brand px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-brand-dark">
          <span className="flex size-10 items-center justify-center rounded-full bg-brand text-white">
            <Globe className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">PUC GLOBAL</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex flex-wrap items-center gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className={linkClass}
                  activeProps={{ className: "bg-brand text-white" }}
                  inactiveProps={{
                    className: "bg-background text-brand hover:bg-brand-light",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-brand p-2 text-brand lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Navegação principal (celular)" className="lg:hidden">
          <ul className="flex flex-col gap-2 border-t border-border px-4 py-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className={`${linkClass} block text-center`}
                  activeProps={{ className: "bg-brand text-white" }}
                  inactiveProps={{ className: "bg-background text-brand" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
