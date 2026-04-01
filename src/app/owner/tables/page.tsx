import Link from "next/link";
import {
  ownerTableAlerts,
  ownerTables,
  
  
  
 } from "@/data/owner-data";
import type { OwnerTable, TableAlert, TableStatus } from "@/types/owner";

export default function OwnerTablesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <header className="flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/owner/dashboard"
                className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]"
              >
                voltar para dashboard
              </Link>
              <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                mesas
              </span>
            </div>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl">
              Gerenciamento de mesas
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Visual operacional com leitura rapida em celular: numero da mesa,
              status, quantidade de pedidos e acesso ao detalhe.
            </p>
          </div>
          <Link
            href="/owner/tabs"
            className="w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]"
          >
            Ir para comandas
          </Link>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                  mapa de mesas
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                  Ocupacao e status em um toque.
                </h2>
              </div>
              <button className="w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-[var(--text)]">
                Nova mesa
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {ownerTables.map((table) => (
                <TableTile key={table.number} table={table} />
              ))}
            </div>
          </section>

          <div className="grid gap-6">
            <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="mb-4 px-2">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                  pedidos pendentes
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Quando uma mesa recebe pedido, o destaque precisa ser imediato.
                </p>
              </div>

              <div className="grid gap-3">
                {ownerTableAlerts.map((alert) => (
                  <AlertCard key={`${alert.table}-${alert.customer}`} alert={alert} />
                ))}
              </div>
            </section>

            <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="mb-4 px-2">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                  regra visual
                </p>
              </div>

              <div className="grid gap-3">
                <LegendItem label="Livre" tone="emerald" />
                <LegendItem label="Ocupada" tone="amber" />
                <LegendItem label="Reservada" tone="sky" />
                <LegendItem label="Bloqueada" tone="rose" />
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function TableTile({ table }: { table: OwnerTable }) {
  const statusClasses: Record<TableStatus, string> = {
    Livre: "bg-emerald-500/14 text-emerald-300 border-emerald-400/20",
    Ocupada: "bg-amber-500/14 text-amber-200 border-amber-400/20",
    Reservada: "bg-sky-500/14 text-sky-200 border-sky-400/20",
    Bloqueada: "bg-rose-500/14 text-rose-200 border-rose-400/20",
  };

  return (
    <Link
      href="/owner/tabs"
      className={`rounded-[24px] border p-4 text-center ${statusClasses[table.status]}`}
    >
      <p className="font-display text-4xl">{table.number}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em]">{table.status}</p>
      <p className="mt-3 text-sm">Capacidade: {table.seats}</p>
      <p className="mt-1 text-sm">Pedidos: {table.orders}</p>
      {table.total ? <p className="mt-2 font-semibold">{table.total}</p> : null}
    </Link>
  );
}

function AlertCard({ alert }: { alert: TableAlert }) {
  return (
    <div className="rounded-[24px] border border-white/8 bg-white/4 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold">{alert.table}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{alert.customer}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{alert.item}</p>
        </div>
        <span className="w-fit rounded-full bg-amber-500/14 px-3 py-1 text-xs text-amber-200">
          {alert.total}
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/owner/tabs"
          className="rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-4 py-2 text-center text-sm font-semibold text-white"
        >
          Aceitar pedido
        </Link>
        <button className="rounded-2xl border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-[var(--text)]">
          Recusar
        </button>
      </div>
    </div>
  );
}

function LegendItem({
  label,
  tone,
}: {
  label: string;
  tone: "emerald" | "amber" | "sky" | "rose";
}) {
  const classes = {
    emerald: "bg-emerald-500/14 text-emerald-300",
    amber: "bg-amber-500/14 text-amber-200",
    sky: "bg-sky-500/14 text-sky-200",
    rose: "bg-rose-500/14 text-rose-200",
  };

  return (
    <div className={`rounded-[22px] px-4 py-3 text-sm font-medium ${classes[tone]}`}>
      {label}
    </div>
  );
}

