import Link from "next/link";
import {
  ownerBenefits,
  ownerStartSteps,
  
  
 } from "@/data/owner-data";
import type { OwnerBenefit, OwnerStep } from "@/types/owner";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[100vw] overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="space-y-7 rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.18),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-6 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-9">
            <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
              cadastro de estabelecimentos
            </span>

            <div className="space-y-4">
              <h1 className="max-w-2xl font-display text-4xl font-semibold leading-none sm:text-6xl">
                Tudo o que você precisa para cadastrar, divulgar e vender mais.
              </h1>
              <p className="max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                Cadastre seu estabelecimento, organize seus produtos e prepare sua operação para atrair clientes com mais praticidade.
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

            <div className="flex flex-col gap-4 sm:flex-row">
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
                    como funciona
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    três passos simples para começar a vender
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]">
                  início rápido
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-[var(--panel)] p-5">
                <div className="grid gap-3">
                  {ownerStartSteps.map((step) => (
                    <StepCard key={step.id} step={step} />
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="rounded-[28px] border border-white/8 bg-[var(--panel)] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                  acessos disponíveis
                </p>
                <div className="mt-4 grid gap-3">
                  <AccessRow
                    href="/owner/register"
                    title="Cadastro do proprietário"
                    text="Crie sua conta e informe os dados iniciais do seu estabelecimento."
                  />
                  <AccessRow
                    href="/owner/login"
                    title="Login do proprietário"
                    text="Acesse sua conta para gerenciar produtos, campanhas e atendimento."
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
    <div className="min-w-0 flex-1 overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-4 backdrop-blur-sm sm:p-5">
      <div className="flex h-full flex-col items-center text-center">
        <div className="mb-4">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,139,54,0.22),rgba(255,95,109,0.2))] text-2xl shadow-[0_10px_25px_rgba(255,95,109,0.12)]">
            {benefit.icon}
          </span>
        </div>

        <h2 className="max-w-full text-balance break-words font-display text-lg leading-tight sm:text-xl">
          {benefit.title}
        </h2>
        <p className="mt-2 max-w-full break-words text-sm leading-6 text-[var(--muted)]">
          {benefit.text}
        </p>
      </div>
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

