import Link from "next/link";
import {
  ownerCommands,
  ownerDashboardActions,
  ownerDashboardMetrics,
  ownerTables,
  type OwnerAction,
  type OwnerCommand,
  type OwnerMetric,
  type OwnerTable,
} from "@/data/owner";

export default function OwnerDashboardPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <header className="flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/owner/onboarding"
                className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]"
              >
                voltar para onboarding
              </Link>
              <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                dashboard
              </span>
            </div>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl">
              Painel do proprietario
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Estrutura desenhada primeiro para leitura rapida no celular e
              depois expandida em blocos para desktop. Aqui o dono do local
              enxerga operacao, mesas e comandas sem perder prioridade.
            </p>
          </div>
          <div className="w-fit rounded-full border border-white/10 bg-emerald-500/12 px-4 py-2 text-sm text-emerald-300">
            Saraiva Bar ativo
          </div>
        </header>

        <section className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.08fr_0.92fr]">
          <section className="order-1 lg:order-1 flex h-full flex-col justify-between rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                    resumo operacional
                  </p>
                  <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                    Visao do dia em um unico painel.
                  </h2>
                </div>
                <div className="w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]">
                  visao do dia
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {ownerDashboardMetrics.map((metric) => (
                  <MetricCard key={metric.label} metric={metric} />
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {ownerDashboardActions.map((action) => (
                  <ActionCard key={action.title} action={action} />
                ))}
              </div>
            </section>

            <section className="order-2 lg:order-3 flex h-full flex-col rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                    comandas ativas
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    prioridade visual para o que impacta caixa e operacao
                  </p>
                </div>
                <button className="w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-[var(--text)]">
                  Filtrar estabelecimento
                </button>
              </div>

              <div className="grid gap-3">
                {ownerCommands.map((command) => (
                  <CommandCard key={command.code} command={command} />
                ))}
              </div>
            </section>

            <section className="order-3 lg:order-2 flex h-full flex-col justify-between rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                    gerenciamento de mesas
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    grade simples no celular e leitura ampliada no desktop
                  </p>
                </div>
                <span className="w-fit rounded-full bg-white/6 px-3 py-1 text-xs text-[var(--muted)]">
                  20 mesas
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {ownerTables
                  .filter((table) => table.status !== "Bloqueada")
                  .map((table) => (
                  <TableCard key={table.number} table={table} />
                ))}
              </div>
            </section>

            <section className="order-4 lg:order-4 flex h-full flex-col justify-between rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="mb-4 px-2">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                  proximas areas
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  Depois desta tela, as proximas rotas mais naturais sao
                  `mesas` e `controle de comandas` em detalhe. O layout ja esta
                  preparado para reaproveitar cards, métricas e status.
                </p>
              </div>

              <div className="grid gap-3">
                <RoadmapRow
                  step="01"
                  title="Tela de mesas em detalhe"
                  text="Mapa visual por numero, status e pedidos pendentes."
                />
                <RoadmapRow
                  step="02"
                  title="Tela de comanda detalhada"
                  text="Itens, total, acao de marcar como paga e historico."
                />
                <RoadmapRow
                  step="03"
                  title="Login do proprietario"
                  text="Separar visualmente criar conta de entrar."
                />
              </div>
            </section>
        </section>
      </div>
    </main>
  );
}

function MetricCard({ metric }: { metric: OwnerMetric }) {
  const tones = {
    mint: "bg-emerald-500/12 text-emerald-300",
    gold: "bg-amber-500/12 text-amber-200",
    blue: "bg-sky-500/12 text-sky-200",
    rose: "bg-rose-500/12 text-rose-200",
  };

  return (
    <div className={`rounded-[24px] p-4 ${tones[metric.tone]}`}>
      <p className="text-[11px] uppercase tracking-[0.18em]">{metric.label}</p>
      <p className="mt-2 font-display text-2xl text-white">{metric.value}</p>
      <p className="mt-2 text-xs leading-5 text-current/80">{metric.detail}</p>
    </div>
  );
}

function ActionCard({ action }: { action: OwnerAction }) {
  const classes = {
    warm: "bg-[linear-gradient(135deg,#ff8b36,#ff5f6d)] text-white",
    cool: "bg-[linear-gradient(135deg,#4582ff,#24c6dc)] text-white",
    mint: "bg-[linear-gradient(135deg,#0dbb95,#66e4b5)] text-[#05241d]",
    neutral: "border border-white/10 bg-white/6 text-[var(--text)]",
  };

  return (
    <Link
      href={action.href}
      className={`rounded-[24px] p-4 ${classes[action.tone]}`}
    >
      <p className="text-base font-semibold">{action.title}</p>
      <p className="mt-1 text-sm opacity-90">{action.text}</p>
    </Link>
  );
}

function CommandCard({ command }: { command: OwnerCommand }) {
  return (
    <div className="rounded-[24px] border border-white/8 bg-white/4 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold">{command.code}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{command.customer}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{command.location}</p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <span className="w-fit rounded-full bg-white/8 px-3 py-1 text-xs text-[var(--muted)]">
            {command.status}
          </span>
          <span className="font-display text-2xl text-[var(--gold)]">
            {command.total}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/owner/tabs"
          className="rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-4 py-2 text-center text-sm font-semibold text-white"
        >
          Ver detalhes
        </Link>
        <Link
          href="/owner/tabs"
          className="rounded-2xl border border-white/10 bg-white/6 px-4 py-2 text-center text-sm font-semibold text-[var(--text)]"
        >
          Marcar como paga
        </Link>
      </div>
    </div>
  );
}

function TableCard({ table }: { table: OwnerTable }) {
  const statusClass: Record<string, string> = {
    Livre: "bg-emerald-500/14 text-emerald-300",
    Ocupada: "bg-amber-500/14 text-amber-200",
    Reservada: "bg-sky-500/14 text-sky-200",
  };

  return (
    <Link
      href="/owner/tables"
      className="block rounded-[24px] border border-white/8 bg-white/4 p-4 text-center"
    >
      <p className="font-display text-3xl">{table.number}</p>
      <span className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs ${statusClass[table.status]}`}>
        {table.status}
      </span>
    </Link>
  );
}

function RoadmapRow({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 rounded-[24px] border border-white/8 bg-white/4 p-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--gold)] font-display text-lg text-[#2f2100]">
        {step}
      </span>
      <div>
        <p className="font-display text-xl">{title}</p>
        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
      </div>
    </div>
  );
}
