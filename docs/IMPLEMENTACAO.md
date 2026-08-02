# Implementação do MVP

## Configuração local

1. Instale Node.js 20.9 ou superior.
2. Execute `npm install`.
3. Copie `.env.example` para `.env.local`.
4. Configure as chaves do Supabase.
5. Execute o SQL de `database/schema.sql` no editor SQL do Supabase.
6. Inicie com `npm run dev`.

## Origens de campanha

Use o parâmetro `origem` nos links de divulgação:

- `/?origem=whatsapp_pandemia`
- `/?origem=instagram`
- `/?origem=meta_ads`
- `/?origem=indicacao`

## Próximas configurações

- substituir a imagem temporária pela fotografia oficial;
- informar data, horário e plataforma dos encontros;
- configurar Supabase e Vercel;
- adicionar política de privacidade;
- configurar URL do grupo de WhatsApp;
- instalar Google Analytics e Meta Pixel após consentimento.
