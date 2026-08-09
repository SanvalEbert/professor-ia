create extension if not exists "pgcrypto";

create table if not exists public.participantes (
  id uuid primary key default gen_random_uuid(),
  nome_completo text not null,
  whatsapp text not null,
  email text not null,
  cidade text not null,
  estado varchar(2) not null,
  instituicao_ensino text not null,
  experiencia_ia text not null check (experiencia_ia in ('Nenhuma', 'Iniciante', 'Intermediário', 'Avançado')),
  consentimento_lgpd boolean not null default false,
  origem text not null default 'direto',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  user_agent text,
  criado_em timestamptz not null default now()
);

create unique index if not exists participantes_email_unique
  on public.participantes (lower(email));
create index if not exists participantes_estado_idx
  on public.participantes (estado);
create index if not exists participantes_experiencia_idx
  on public.participantes (experiencia_ia);
create index if not exists participantes_criado_em_idx
  on public.participantes (criado_em desc);

alter table public.participantes enable row level security;

-- O navegador nunca acessa a tabela diretamente.
-- A rota /api/inscricoes usa uma chave secreta do Supabase no servidor.
revoke all on table public.participantes from anon, authenticated;
grant insert, select on table public.participantes to service_role;

-- Se esta tabela já existir com o schema antigo, execute antes de colocar em produção:
-- alter table public.participantes rename column nome to nome_completo;
-- alter table public.participantes rename column instituicao to instituicao_ensino;
-- alter table public.participantes add column if not exists cidade text;
-- alter table public.participantes add column if not exists utm_source text;
-- alter table public.participantes add column if not exists utm_medium text;
-- alter table public.participantes add column if not exists utm_campaign text;
-- Depois, remova as colunas antigas area_atuacao e desafio caso tenham sido criadas na tentativa anterior.
