export default function Confirmacao() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL || "#";
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-br from-indigo-950 to-indigo-700 px-5 text-white">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-8 text-center text-ink shadow-2xl md:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-3xl">✓</div>
        <h1 className="mt-6 text-4xl font-black">Inscrição realizada!</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">Você agora faz parte da Jornada Professor IA. As informações sobre os encontros serão enviadas por e-mail e WhatsApp.</p>
        {whatsapp !== "#" && <a href={whatsapp} className="mt-8 inline-flex rounded-full bg-green-600 px-7 py-4 font-bold text-white">Entrar no grupo do WhatsApp</a>}
        <p className="mt-8 text-sm text-slate-500"><a href="/" className="underline">Voltar para a página inicial</a></p>
      </section>
    </main>
  );
}
