# Inteligência Artificial na Prática Docente

Imersão de formação docente online e gratuita, idealizada por **Sanval Ebert**. A identidade visual utiliza uma rede neural em formato de balão de diálogo com chip central de IA. No celular, o cabeçalho utiliza uma assinatura compacta e legível.

## Próxima edição

- **Datas:** 17, 18 e 19 de novembro de 2026 (terça, quarta e quinta-feira).
- **Horário:** 20h às 21h (horário de Brasília), com 1h de duração por dia.
- **Formato:** três mentorias online e gratuitas, ao vivo.
- **Percurso:** compreender, experimentar e aplicar Inteligência Artificial à prática docente.
- **Produção:** uma proposta de atividade ou recurso pedagógico com IA, adaptada ao contexto do participante.

## Objetivo

Oferecer uma experiência prática e orientada à autoria docente, com exploração crítica de ferramentas de IA para planejamento, elaboração de materiais, avaliação e personalização da aprendizagem.

## Mia — assistente de boas-vindas

A Mia abre automaticamente após um breve intervalo em um painel compacto. O visitante pode recolher o painel e reabri-lo pelo botão flutuante. O áudio da usuária é mantido em `public/audio/bia-imersao.wav` (original em WAV) e só começa após a interação com o botão **Ouvir a Mia**, para respeitar a política de reprodução dos navegadores e a preferência do visitante.

A identidade visual da Mia utiliza um selo ilustrado próprio (`public/mia-seal.svg`), com personagem e headset. O lançador compacto apresenta "Fale com a Mia" e "Assistente educacional". O visitante pode pausar, retomar, ouvir novamente, ler a transcrição, fechar o painel ou ir diretamente para a inscrição. O widget pode ser aberto e recolhido a qualquer momento durante a visita.

## Inscrições

O site recebe inscrições por formulário próprio, com validação no servidor e armazenamento no Supabase. Após o cadastro, a pessoa inscrita recebe orientações para acessar o grupo de WhatsApp.

## Tecnologias

- Next.js, React e TypeScript
- Tailwind CSS
- Supabase (registro de inscrições)
- Vercel (hospedagem)
- GitHub Actions (testes, tipagem e build)

## Qualidade

Execute `npm run quality` para verificar regressões, tipagem TypeScript e build de produção.

## Configuração

Use `.env.example` como referência para as variáveis de ambiente. Credenciais de acesso ao Supabase devem ser configuradas somente no servidor e nunca adicionadas ao repositório.

## Status

Site em evolução contínua. O repositório mantém documentação histórica de homologação em `docs/`; esta edição atualiza a proposta e a agenda da imersão.
