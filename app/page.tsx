import RegistrationForm from "@/components/RegistrationForm";

const encontros = [
  {
    numero: "01",
    titulo: "Inteligência Artificial e a nova realidade da educação",
    texto: "Fundamentos, possibilidades, limites e desafios éticos da IA generativa na prática docente.",
  },
  {
    numero: "02",
    titulo: "IA na prática: aulas, materiais e avaliações",
    texto: "Planejamento de aulas, produção de atividades, questões, rubricas e feedbacks personalizados.",
  },
  {
    numero: "03",
    titulo: "Professor IA: agentes e novas possibilidades",
    texto: "Agentes de IA, automação de tarefas, personalização da aprendizagem e novos papéis docentes.",
  },
];

export default function Home() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="hero-gradient overflow-hidden text-white">
        <div className="container-page grid min-h-[720px] items-center gap-10 py-20 md:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold">Uma iniciativa de Sanval Ebert</p>
            <h1 className="text-5xl font-black leading-[.98] tracking-tight md:text-7xl">Professor <span className="text-orange-300">IA</span></h1>
            <h2 className="mt-6 max-w-2xl text-2xl font-bold leading-tight md:text-4xl">Inteligência Artificial para potencializar a prática docente</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">Uma jornada gratuita para professores que desejam compreender, experimentar e aplicar IA na criação de aulas, materiais, avaliações e experiências de aprendizagem.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-blue-50">
              <span className="rounded-full bg-white/10 px-4 py-2">3 encontros online</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Participação gratuita</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Professores de todo o Brasil</span>
            </div>
            <a href="#inscricao" className="cta mt-9">Quero participar da jornada</a>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[40px] bg-white/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <img src="https://avatars.githubusercontent.com/u/115511942?v=4" alt="Sanval Ebert" className="aspect-[4/5] w-full rounded-[26px] object-cover" />
              <div className="p-5">
                <p className="text-xl font-bold">Sanval Ebert</p>
                <p className="mt-1 text-sm text-blue-100">Pesquisador em Inteligência Artificial aplicada à Educação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <p className="text-sm font-extrabold uppercase tracking-[.2em] text-indigo-700">Uma nova realidade</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">Seus estudantes já estão usando IA. Como nós, professores, vamos utilizá-la?</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">A tecnologia, sozinha, não transforma a educação. São os professores que dão sentido ao seu uso, conectando recursos digitais a objetivos de aprendizagem, contextos reais e escolhas éticas.</p>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container-page">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[.2em] text-indigo-700">Jornada gratuita</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Três encontros para transformar curiosidade em prática</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {encontros.map((encontro) => (
              <article key={encontro.numero} className="card p-7">
                <span className="text-5xl font-black text-indigo-200">{encontro.numero}</span>
                <h3 className="mt-5 text-2xl font-bold leading-tight">{encontro.titulo}</h3>
                <p className="mt-4 leading-7 text-slate-600">{encontro.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[.2em] text-indigo-700">Na prática</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Produza com mais intenção, não apenas com mais velocidade</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">Você vai explorar como a IA pode apoiar o planejamento, a produção de conteúdos, a avaliação, a correção de trabalhos e o acompanhamento da aprendizagem sem retirar do professor sua autoria e responsabilidade.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Planos de aula", "Materiais didáticos", "Avaliações e rubricas", "Feedbacks personalizados", "Agentes de IA", "Ética e regulação"].map((item) => (
            <div key={item} className="card p-5 font-bold">✓ {item}</div>
          ))}
        </div>
      </section>

      <section className="bg-[#111a43] py-20 text-white">
        <div className="container-page grid gap-10 md:grid-cols-[.72fr_1.28fr] md:items-center">
          <img src="https://avatars.githubusercontent.com/u/115511942?v=4" alt="Sanval Ebert" className="mx-auto aspect-square w-full max-w-sm rounded-[32px] object-cover" />
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[.2em] text-orange-300">Quem conduz</p>
            <h2 className="mt-3 text-4xl font-black">Sanval Ebert</h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">Doutor em Difusão do Conhecimento, professor, coordenador acadêmico e pesquisador em Inteligência Artificial aplicada à Educação. Atua com formação docente, tecnologias educacionais e inovação nos processos de ensino e aprendizagem.</p>
            <p className="mt-4 leading-7 text-blue-100">Depois de dialogar com professores de diferentes regiões do Brasil durante a transformação digital vivida na pandemia, inicia agora uma nova jornada dedicada à integração pedagógica da IA.</p>
          </div>
        </div>
      </section>

      <section id="inscricao" className="container-page py-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[.2em] text-indigo-700">Inscrição</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Faça parte da Jornada Professor IA</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Preencha os dados abaixo. As informações serão utilizadas para sua inscrição e para adequar a experiência ao perfil dos participantes.</p>
        </div>
        <div className="mx-auto max-w-4xl"><RegistrationForm /></div>
      </section>

      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        <div className="container-page">Professor IA — uma iniciativa de Sanval Ebert.</div>
      </footer>

      <a href="#inscricao" className="cta mobile-cta md:hidden">Quero participar gratuitamente</a>
    </main>
  );
}
