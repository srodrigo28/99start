"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ownerDashboardActions,
  ownerDashboardHeader,
  ownerDashboardMetrics,
  ownerDashboardNav,
  ownerDashboardRouteSpotlights,
  ownerDashboardRoutesIntro,
  ownerDashboardSummaryIntro,
} from "@/data/owner-data";
import type {
  DashboardSectionIntro,
  OwnerAction,
  OwnerMetric,
  OwnerNavItem,
  OwnerRouteSpotlight,
} from "@/types/owner";

export default function OwnerDashboardPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <nav className="sticky top-0 z-40 rounded-[26px] border border-white/10 bg-[rgba(10,13,20,0.92)] px-4 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">99start</p>
              <p className="mt-1 text-sm text-white">{ownerDashboardHeader.status}</p>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              {ownerDashboardNav.map((item) => (
                <DesktopNavLink key={item.href} item={item} />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-xl text-white md:hidden"
              aria-label="Abrir menu"
            >
              ☰
            </button>
          </div>
        </nav>

        {drawerOpen ? (
          <div className="fixed inset-0 z-50 bg-[#050505]/70 backdrop-blur-sm md:hidden" onClick={() => setDrawerOpen(false)}>
            <div className="ml-auto flex h-full w-[84vw] max-w-sm flex-col border-l border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.98),rgba(10,13,20,0.99))] p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">menu</p>
                  <p className="mt-1 text-sm text-white">{ownerDashboardHeader.title}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-lg text-white"
                  aria-label="Fechar menu"
                >
                  ×
                </button>
              </div>

              <div className="mt-6 grid gap-3">
                {ownerDashboardNav.map((item) => (
                  <MobileNavLink key={item.href} item={item} onNavigate={() => setDrawerOpen(false)} />
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                {ownerDashboardHeader.status}
              </div>

              <Link
                href={ownerDashboardHeader.backHref}
                onClick={() => setDrawerOpen(false)}
                className="mt-auto rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                {ownerDashboardHeader.backLabel}
              </Link>
            </div>
          </div>
        ) : null}

        <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <section className="order-1 flex h-full flex-col justify-between rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-6">
            <SectionHeader intro={ownerDashboardSummaryIntro} />

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

          <section className="order-2 rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)] sm:p-5">
            <SectionHeader intro={ownerDashboardRoutesIntro} />

            <div className="grid gap-4">
              {ownerDashboardRouteSpotlights.map((item) => (
                <RouteSpotlightCard key={item.href} item={item} />
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

function DesktopNavLink({ item }: { item: OwnerNavItem }) {
  return (
    <Link
      href={item.href}
      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-white/10 hover:text-white"
    >
      <span aria-hidden="true">{item.icon}</span>
      <span>{item.shortLabel || item.label}</span>
    </Link>
  );
}

function MobileNavLink({ item, onNavigate }: { item: OwnerNavItem; onNavigate: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 text-sm font-semibold text-white"
    >
      <span className="text-lg" aria-hidden="true">{item.icon}</span>
      <span>{item.label}</span>
    </Link>
  );
}

function SectionHeader({ intro }: { intro: DashboardSectionIntro }) {
  return (
    <div className="mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
          {intro.eyebrow}
        </p>
        {intro.title ? (
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            {intro.title}
          </h2>
        ) : null}
        <p className="mt-1 text-sm text-[var(--muted)]">
          {intro.description}
        </p>
      </div>

      {intro.badge ? (
        <div className="w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]">
          {intro.badge}
        </div>
      ) : null}
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

function RouteSpotlightCard({ item }: { item: OwnerRouteSpotlight }) {
  return (
    <Link
      href={item.href}
      className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 transition hover:bg-white/8"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,139,54,0.22),rgba(56,109,249,0.22))] text-2xl">
            {item.icon}
          </span>
          <div>
            <p className="font-display text-2xl text-white">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
          </div>
        </div>
        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]">
          {item.badge}
        </span>
      </div>
      <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white">
        {item.cta}
      </div>
    </Link>
  );
}
