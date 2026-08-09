export default function Confirmacao() {
  const whatsapp =
    process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL ||
    "https://chat.whatsapp.com/FLHy7jnIBoTIf3cewk6zTW";

  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-br from-blue-950 to-blue-700 px-5 text-white">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-8 text-center text-ink shadow-2xl md:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-3xl">✓</div>
        <h1 className="mt-6 text-4xl font-black">Inscrição realizada!</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Sua vaga na Jornada <strong>IA na Prática Docente</strong> está confirmada.
        </p>
        <p className="mt-3 leading-7 text-slate-600">
          Agora entre no grupo oficial do WhatsApp para receber os links dos encontros, materiais e avisos importantes do projeto.
        </p>
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-green-600 px-7 py-4 font-bold text-white transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-600"
        >
          Entrar no grupo do WhatsApp
        </a>
        <p className="mt-4 text-xs leading-5 text-slate-500">
          O grupo será utilizado para comunicações relacionadas à jornada.
        </p>
        <p className="mt-8 text-sm text-slate-500">
          <a href="/" className="underline">Voltar para a página inicial</a>
        </p>
      </section>
    </main>
  );
}
