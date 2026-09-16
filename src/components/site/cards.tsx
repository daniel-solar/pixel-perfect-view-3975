import { Link } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import type { Pais, Universidade } from "@/data/puc";
import type { ForumPost } from "@/lib/forum-store";
import { initials } from "@/lib/forum-store";

export function UniversityCard({ u }: { u: Universidade }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
      <img
        src={u.foto}
        alt={`Campus da ${u.nome}`}
        loading="lazy"
        width={1200}
        height={800}
        className="h-44 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold text-brand-dark">{u.nome}</h3>
        <p className="text-sm text-muted-foreground">{u.cidade}</p>
        <a
          href={`https://${u.siteOficial}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-brand underline-offset-4 hover:underline"
        >
          {u.siteOficial}
        </a>
        <Link
          to="/universidades/$id"
          params={{ id: u.id }}
          className="mt-auto inline-flex w-fit items-center rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
        >
          Saiba mais
        </Link>
      </div>
    </article>
  );
}

export function CountryCard({ pais }: { pais: Pais }) {
  return (
    <Link
      to="/paises/$id"
      params={{ id: pais.id }}
      className="group block overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <img
        src={pais.imagem}
        alt={`Paisagem representativa: ${pais.nome}`}
        loading="lazy"
        width={1200}
        height={800}
        className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-brand-dark">{pais.nome}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {pais.universidadesConveniadas} universidades conveniadas
        </p>
      </div>
    </Link>
  );
}

export function ForumThreadCard({ post, replies }: { post: ForumPost; replies: number }) {
  return (
    <Link
      to="/forum/$id"
      params={{ id: post.id }}
      className="block rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <h3 className="text-lg font-semibold text-brand-dark">{post.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
        {post.description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span
          aria-hidden="true"
          className="flex size-9 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand-dark"
        >
          {initials(post.author)}
        </span>
        <span className="font-medium text-foreground">{post.author}</span>
        <span>·</span>
        <span>{post.createdAt}</span>
        <span className="ml-auto inline-flex items-center gap-2">
          <MessageSquare className="size-4" aria-hidden="true" />
          {replies} respostas
        </span>
      </div>
    </Link>
  );
}
