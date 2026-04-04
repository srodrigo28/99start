"use client";

import Link from "next/link";
import {
  adminEstablishments,
  adminEstablishmentsIntro,
  adminHeader,
  adminMetrics,
  adminNav,
  adminQueue,
  adminQueueIntro,
  adminSummaryIntro,
} from "@/data/owner-data";
import type {
  AdminEstablishment,
  AdminNavItem,
  AdminQueueItem,
  DashboardSectionIntro,
  OwnerMetric,
} from "@/types/owner";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <nav className="sticky top-0 z-40 rounded-[26px] border border-white/10 bg-[rgba(10,13,20,0.92)] px-4 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">99start admin</p>
              <p className="mt-1 text-sm text-white">{adminHeader.status}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {adminNav.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </div>
          </div>
        </nav>

        <section className="rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">{adminHeader.badge}</p>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl">{adminHeader.title}</h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">{adminHeader.description}</p>
            </div>

            <Link
              href={adminHeader.backHref}
              className="inline-flex w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-white/10 hover:text-white"
            >
              {adminHeader.backLabel}
            </Link>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.48)] sm:p-6">
            <SectionHeader intro={adminSummaryIntro} />
            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {adminMetrics.map((metric) => (
                <MetricCard key={metric.label} metric={metric} />
              ))}
            </div>
          </section>

          <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.48)] sm:p-6">
            <SectionHeader intro={adminQueueIntro} />
            <div className="mt-5 grid gap-3">
              {adminQueue.map((item) => (
                <QueueCard key={item.title} item={item} />
              ))}
            </div>
          </section>
        </section>

        <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.48)] sm:p-6">
          <SectionHeader intro={adminEstablishmentsIntro} />
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {adminEstablishments.map((establishment) => (
              <EstablishmentCard key={establishment.slug} establishment={establishment} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function NavLink({ item }: { item: AdminNavItem }) {
  return (
    <Link
      href={item.href}
      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-white/10 hover:text-white"
    >
      <span aria-hidden="true">{item.icon}</span>
      <span>{item.label}</span>
    </Link>
  );
}

function SectionHeader({ intro }: { intro: DashboardSectionIntro }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">{intro.eyebrow}</p>
        {intro.title ? <h2 className="mt-2 font-display text-3xl sm:text-4xl">{intro.title}</h2> : null}
        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{intro.description}</p>
      </div>
      {intro.badge ? <div className="w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]">{intro.badge}</div> : null}
    </div>
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

function QueueCard({ item }: { item: AdminQueueItem }) {
  const tones = {
    gold: "border-amber-400/30 bg-amber-500/8",
    blue: "border-sky-400/30 bg-sky-500/8",
    rose: "border-rose-400/30 bg-rose-500/8",
  };

  return (
    <div className={`rounded-[24px] border p-4 ${tones[item.tone]}`}>
      <p className="font-display text-xl text-white">{item.title}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
    </div>
  );
}

function EstablishmentCard({ establishment }: { establishment: AdminEstablishment }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/4 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-2xl text-white">{establishment.name}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{establishment.city}</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]">
          {establishment.status}
        </span>
      </div>
      <div className="mt-5 grid gap-2 text-sm text-[var(--muted)]">
        <p>Categoria: {establishment.category}</p>
        <p>Slug: /{establishment.slug}</p>
      </div>
    </div>
  );
}
