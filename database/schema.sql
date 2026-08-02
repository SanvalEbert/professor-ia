create extension if not exists "pgcrypto";

create table if not exists public.participantes (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null,
  whatsapp text not null,
  estado text not null,
  instituicao text not null,
  area_atuacao text not null,
  experiencia_ia text not null,
  desafio text not null,
  origem text not null default 'direto',
  consentimento_lgpd boolean not null default false,
  user_agent text,
  criado_em timestamptz not null default now()
);

create unique index if not exists participantes_email_unique on public.participantes (lower(email));
create index if not exists participantes_origem_idx on public.participantes (origem);
create index if not exists participantes_criado_em_idx on public.participantes (criado_em desc);

alter table public.participantes enable row level security;

-- O cadastro é feito exclusivamente pela rota de servidor usando a service role.
-- Não crie políticas públicas de insert para esta tabela.
