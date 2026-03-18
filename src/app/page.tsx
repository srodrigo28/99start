import Link from "next/link";
import {
  ownerBenefits,
  ownerStartSteps,
  type OwnerBenefit,
  type OwnerStep,
} from "@/data/owner";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[100vw] overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <header className="flex flex-col gap-3 rounded-[28px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-5 sm:py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">
              acesso proprietario
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              entrada institucional da plataforma
            </p>
          </div>
          <div className="w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]">
            apresentacao limpa
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="space-y-7 rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.18),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-6 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-9">
            <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
              home do proprietario
            </span>

            <div className="space-y-4">
              <h1 className="max-w-2xl font-display text-4xl font-semibold leading-none sm:text-6xl">
                Plataforma pronta para cadastro, operacao e crescimento.
              </h1>
              <p className="max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                A rota principal agora serve apenas como apresentação e entrada do sistema.
                Cadastro e login foram separados para deixar a jornada mais clara e profissional.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/owner/register"
                className="rounded-full bg-[linear-gradient(135deg,#ff8b36,#ff5f6d)] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_35px_rgba(255,95,109,0.28)]"
              >
                Criar conta
              </Link>
              <Link
                href="/owner/login"
                className="rounded-full border border-white/12 bg-white/6 px-6 py-3 text-center text-sm font-semibold text-[var(--text)]"
              >
                Entrar
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {ownerBenefits.map((benefit) => (
                <BenefitCard key={benefit.title} benefit={benefit} />
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <section className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                    estrutura da jornada
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    a home apresenta o produto e direciona para a rota certa
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]">
                  entrada
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-[var(--panel)] p-5">
                <div className="rounded-[24px] bg-[linear-gradient(135deg,#ff8b36,#ff5f6d_58%,#31c4c0)] p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/75">
                    fluxo recomendado
                  </p>
                  <h3 className="mt-2 font-display text-3xl">
                    Primeiro acesso. Depois onboarding. Depois operacao.
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    O painel interno não aparece mais aqui. Isso reduz ruído e melhora a leitura para cliente e apresentação.
                  </p>
                </div>

                <div className="mt-4 grid gap-3">
                  {ownerStartSteps.map((step) => (
                    <StepCard key={step.id} step={step} />
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="rounded-[28px] border border-white/8 bg-[var(--panel)] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                  rotas de acesso
                </p>
                <div className="mt-4 grid gap-3">
                  <AccessRow
                    href="/owner/register"
                    title="Cadastro do proprietario"
                    text="Tela dedicada para criar conta e validar os dados iniciais."
                  />
                  <AccessRow
                    href="/owner/login"
                    title="Login do proprietario"
                    text="Tela dedicada para entrar no ambiente logado de operacao."
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function BenefitCard({ benefit }: { benefit: OwnerBenefit }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
      <h2 className="font-display text-xl">{benefit.title}</h2>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{benefit.text}</p>
    </div>
  );
}

function StepCard({ step }: { step: OwnerStep }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 rounded-[24px] border border-white/8 bg-white/4 p-4">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)] font-display text-lg text-[#2f2100]">
        {step.id}
      </span>
      <div>
        <h3 className="font-display text-xl">{step.title}</h3>
        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{step.text}</p>
      </div>
    </div>
  );
}

function AccessRow({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-[24px] border border-white/8 bg-white/4 p-4 transition-colors hover:bg-white/7"
    >
      <p className="text-base font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
    </Link>
  );
}
