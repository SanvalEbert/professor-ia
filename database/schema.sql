create extension if not exists pgcrypto;

create table if not exists public.participantes (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null,
  whatsapp text not null,
  estado text not null,
  instituicao text,
  area_atuacao text not null,
  experiencia_ia text not null,
  motivacao text not null,
  desafio text,
  origem text not null default 'direto',
  criado_em timestamptz not null default now()
);

create index if not exists participantes_email_idx on public.participantes (email);
create index if not exists participantes_origem_idx on public.participantes (origem);
create index if not exists participantes_criado_em_idx on public.participantes (criado_em desc);
