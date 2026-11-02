export default function PoliticaDePrivacidade() {
  return (
    <main id="inicio" className="mx-auto max-w-3xl px-5 py-16 text-slate-700">
      <a href="/" className="text-sm font-semibold text-brand">← Voltar</a>
      <h1 className="mt-6 text-4xl font-black text-ink">Política de Privacidade</h1>
      <p className="mt-6 leading-8">
        Esta política explica como os dados informados na inscrição da Inteligência Artificial na Prática Docente são utilizados para administrar a participação, enviar orientações sobre as mentorias e realizar comunicações relacionadas ao projeto.
      </p>

      <h2 className="mt-8 text-2xl font-bold text-ink">Dados coletados</h2>
      <p className="mt-3 leading-8">
        O formulário coleta nome completo, WhatsApp, e-mail, cidade, estado, instituição de ensino, nível de experiência com Inteligência Artificial e o registro do consentimento para comunicações relacionadas à imersão. A aplicação também pode registrar origem do acesso, parâmetros de campanha e informações técnicas do navegador para fins operacionais e de análise da divulgação.
      </p>

      <h2 className="mt-8 text-2xl font-bold text-ink">Como os dados são utilizados</h2>
      <p className="mt-3 leading-8">
        Os dados são utilizados para confirmar a inscrição, organizar a participação na imersão, enviar links, materiais e avisos, além de compreender de forma agregada a origem das inscrições. Os dados não são necessários para finalidades alheias à operação e comunicação da Inteligência Artificial na Prática Docente.
      </p>

      <h2 className="mt-8 text-2xl font-bold text-ink">Armazenamento e segurança</h2>
      <p className="mt-3 leading-8">
        As inscrições são armazenadas no banco de dados utilizado pela aplicação. O envio ocorre por uma rota de servidor, sem exposição da credencial de acesso ao banco no navegador. O acesso aos registros é destinado à gestão da imersão.
      </p>

      <h2 className="mt-8 text-2xl font-bold text-ink">Direitos e contato</h2>
      <p className="mt-3 leading-8">
        Você pode solicitar acesso, correção ou exclusão dos dados fornecidos e pode pedir a interrupção das comunicações relacionadas à imersão. Para isso, utilize os canais profissionais disponibilizados na seção “Quem conduz” da página principal.
      </p>

      <p className="mt-10 rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">
        Esta política pode ser atualizada para refletir mudanças no formulário, nos serviços utilizados pela aplicação ou na forma de comunicação da imersão.
      </p>
    </main>
  );
}
