"use client";

import Link from "next/link";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ownerCommands } from "@/data/owner-data";
import type { OwnerCommand } from "@/types/owner";

export default function OwnerTabsPage() {
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
                comandas
              </span>
            </div>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl">
              Controle de comandas
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Aqui fica o centro da operacao: comandas abertas, total do consumo
              e acao de marcar como paga. O layout continua priorizando celular.
            </p>
          </div>
          <Link
            href="/owner/tables"
            className="w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]"
          >
            Ir para mesas
          </Link>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <section className="rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                  fila operacional
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                  Priorize caixa e atendimento.
                </h2>
              </div>
              <button className="w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-[var(--text)]">
                Filtrar status
              </button>
            </div>

            <div className="mt-5 grid gap-3">
              {ownerCommands.map((tab) => (
                <TabRow key={tab.code} tab={tab} />
              ))}
            </div>
          </section>

          <div className="grid gap-6">
            <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="mb-4 px-2">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                  detalhe da comanda
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Exemplo de leitura da comanda selecionada no mobile.
                </p>
              </div>

              <CommandDetails />
            </section>

            <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="mb-4 px-2">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                  estados da comanda
                </p>
              </div>

              <div className="grid gap-3">
                <StatusPill label="Ativa" tone="blue" />
                <StatusPill label="Fechando" tone="amber" />
                <StatusPill label="Pagamento" tone="mint" />
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function TabRow({ tab }: { tab: OwnerCommand }) {
  const statusClasses: Record<string, string> = {
    Ativa: "bg-sky-500/14 text-sky-200",
    Fechando: "bg-amber-500/14 text-amber-200",
    Pagamento: "bg-emerald-500/14 text-emerald-300",
  };

  return (
    <div className="rounded-[24px] border border-white/8 bg-white/4 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold">{tab.code}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{tab.customer}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{tab.location}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{tab.createdAt}</p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <span className={`w-fit rounded-full px-3 py-1 text-xs ${statusClasses[tab.status]}`}>
            {tab.status}
          </span>
          <span className="font-display text-2xl text-[var(--gold)]">
            {tab.total}
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {tab.items?.map((item) => (
          <div
            key={`${tab.code}-${item.name}`}
            className="flex items-center justify-between rounded-2xl bg-black/14 px-3 py-2 text-sm"
          >
            <span className="text-[var(--muted)]">{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button className="rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-4 py-2 text-sm font-semibold text-white">
          Abrir detalhe
        </button>
        <button className="rounded-2xl border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-[var(--text)]">
          Atualizar status
        </button>
      </div>
    </div>
  );
}

function LineItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-black/14 px-3 py-2 text-sm">
      <span className="text-[var(--muted)]">{name}</span>
      <span>{price}</span>
    </div>
  );
}

function StatusPill({
  label,
  tone,
}: {
  label: string;
  tone: "blue" | "amber" | "mint";
}) {
  const classes = {
    blue: "bg-sky-500/14 text-sky-200",
    amber: "bg-amber-500/14 text-amber-200",
    mint: "bg-emerald-500/14 text-emerald-300",
  };

  return (
    <div className={`rounded-[22px] px-4 py-3 text-sm font-medium ${classes[tone]}`}>
      {label}
    </div>
  );
}

// Novo componente dinâmico para os detalhes da comanda.
function CommandDetails() {
  const [modalPixOpen, setModalPixOpen] = useState(false);
  const CHAVE_PIX = process.env.NEXT_PUBLIC_CHAVE_PIX || "01046038109";
  const NOME_RECEBEDOR = "MATEUS VINICIUS";
  const CIDADE = "GOIANIA";
  const VALOR = "84.00"; // formatado
  const VALOR_BRL = "R$ 84,00";

  // Payload BR Code minimo real
  // Na pratica de prod usa lib especifica para PIX EMV
  const payloadPix = `00020126430014br.gov.bcb.pix0121${CHAVE_PIX}5204000053039865405${VALOR}5802BR5915${NOME_RECEBEDOR}6007${CIDADE}62070503***6304`;

  return (
    <>
      <div className="rounded-[28px] border border-white/8 bg-[var(--panel)] p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-semibold">#1766423921796</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Cliente: Heionekm</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Saraiva Bar · Balcao</p>
          </div>
          <span className="w-fit rounded-full bg-amber-500/14 px-3 py-1 text-xs text-amber-200">
            Fechando
          </span>
        </div>

        <div className="mt-4 space-y-3">
          <LineItem name="3x heionekm" price="R$ 75,00" />
          <LineItem name="1x carne espeto" price="R$ 9,00" />
        </div>

        <div className="mt-5 flex items-center justify-between rounded-[22px] bg-white/4 px-4 py-3">
          <span className="text-sm text-[var(--muted)]">Total a receber</span>
          <span className="font-display text-3xl text-[var(--gold)]">
            {VALOR_BRL}
          </span>
        </div>

        {/* Action Buttons with Payment */}
        <div className="mt-5 space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-2">Pagar com:</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <button 
              onClick={() => setModalPixOpen(true)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#32BCAD]/10 text-[#32BCAD] border border-[#32BCAD]/20 px-3 py-3 text-sm font-semibold transition-transform hover:scale-105"
            >
              💠 Pix
            </button>
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-3 py-3 text-sm font-semibold transition-transform hover:scale-105">
              💵 Dinheiro
            </button>
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-3 py-3 text-sm font-semibold transition-transform hover:scale-105 sm:col-auto col-span-2">
              💳 Cartão
            </button>
          </div>

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/5">
            <button className="rounded-2xl bg-[linear-gradient(135deg,#0dbb95,#66e4b5)] px-4 py-3 text-sm font-semibold text-[#05241d]">
              Marcar Paga e Imprimir
            </button>
          </div>
        </div>
      </div>

      {modalPixOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-[28px] border border-white/10 bg-[var(--panel)] p-6 shadow-2xl sm:p-8 text-center">
            <h3 className="font-display text-2xl text-[var(--gold)] flex justify-center items-center gap-2">💠 Pagamento Pix</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">Mostre a tela para o cliente ou copie o código abaixo pelo valor exato de <strong>{VALOR_BRL}</strong>.</p>
            
            <div className="mt-6 flex justify-center">
              <div className="rounded-2xl bg-white p-2 shadow-inner">
                <QRCodeSVG value={payloadPix} size={200} />
              </div>
            </div>

            <button 
              className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              onClick={() => navigator.clipboard.writeText(payloadPix)}
            >
              📄 Copiar Código (Copia e Cola)
            </button>
            
            <button 
              onClick={() => setModalPixOpen(false)} 
              className="mt-3 w-full rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_35px_rgba(56,109,249,0.2)]"
            >
              Confirmar Fechamento
            </button>
          </div>
        </div>
      )}
    </>
  );
}

