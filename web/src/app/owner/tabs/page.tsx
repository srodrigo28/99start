"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ownerCommands } from "@/data/owner-data";
import type { OwnerCommand } from "@/types/owner";

type PrintFormat = "thermal-58" | "thermal-80" | "a4";

type SettingsDraft = {
  activeStep?: string;
  form?: {
    printFormat?: PrintFormat;
  };
};

const selectedCommandItems = [
  { name: "3x heionekm", price: 75 },
  { name: "1x carne espeto", price: 9 },
  { name: "2x refrigerante lata", price: 14 },
  { name: "1x porção de fritas", price: 28 },
  { name: "1x molho da casa", price: 6 },
  { name: "2x água com gás", price: 12 },
];

const settingsDraftKey = "owner-settings-draft-v1";
const printFormatMeta: Record<PrintFormat, { label: string; text: string; wrapper: string; receipt: string }> = {
  "thermal-58": {
    label: "Bobina 58 mm",
    text: "Cupom compacto para impressora térmica pequena.",
    wrapper: "max-w-xs",
    receipt: "max-w-[300px] text-[12px]",
  },
  "thermal-80": {
    label: "Bobina 80 mm",
    text: "Cupom térmico mais largo, com melhor leitura para balcão.",
    wrapper: "max-w-sm",
    receipt: "max-w-[360px] text-[13px]",
  },
  a4: {
    label: "Folha A4",
    text: "Layout mais amplo para administrativo e impressão completa.",
    wrapper: "max-w-2xl",
    receipt: "max-w-[720px] text-sm",
  },
};

export default function OwnerTabsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <header className="flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/owner/dashboard" className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">
                voltar para dashboard
              </Link>
              <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                comandas
              </span>
            </div>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl">Controle de comandas</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Aqui fica o centro da operacao: comandas abertas, total do consumo e acao de marcar como paga. O layout continua priorizando celular.
            </p>
          </div>
          <Link href="/owner/tables" className="w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]">
            Ir para mesas
          </Link>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <section className="rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">fila operacional</p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">Priorize caixa e atendimento.</h2>
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
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">detalhe da comanda</p>
                <p className="mt-1 text-sm text-[var(--muted)]">Exemplo de leitura da comanda selecionada no mobile.</p>
              </div>

              <CommandDetails />
            </section>

            <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="mb-4 px-2">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">estados da comanda</p>
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
          <span className={`w-fit rounded-full px-3 py-1 text-xs ${statusClasses[tab.status]}`}>{tab.status}</span>
          <span className="font-display text-2xl text-[var(--gold)]">{tab.total}</span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {tab.items?.map((item) => (
          <div key={`${tab.code}-${item.name}`} className="flex items-center justify-between rounded-2xl bg-black/14 px-3 py-2 text-sm">
            <span className="text-[var(--muted)]">{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button className="rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-4 py-2 text-sm font-semibold text-white">Abrir detalhe</button>
        <button className="rounded-2xl border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-[var(--text)]">Atualizar status</button>
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

function StatusPill({ label, tone }: { label: string; tone: "blue" | "amber" | "mint" }) {
  const classes = {
    blue: "bg-sky-500/14 text-sky-200",
    amber: "bg-amber-500/14 text-amber-200",
    mint: "bg-emerald-500/14 text-emerald-300",
  };

  return <div className={`rounded-[22px] px-4 py-3 text-sm font-medium ${classes[tone]}`}>{label}</div>;
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatCardNumber(value: string) {
  return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function parseMoneyInput(value: string) {
  const normalized = value.replace(/[^\d,.-]/g, "").replace(".", "").replace(",", ".");
  const amount = Number(normalized);
  return Number.isFinite(amount) ? amount : 0;
}

function CommandDetails() {
  const [modalPixOpen, setModalPixOpen] = useState(false);
  const [modalCardOpen, setModalCardOpen] = useState(false);
  const [modalCashOpen, setModalCashOpen] = useState(false);
  const [modalReceiptOpen, setModalReceiptOpen] = useState(false);
  const [lastPaymentMethod, setLastPaymentMethod] = useState("Pix");
  const [cardName, setCardName] = useState("HEIONEKM");
  const [cardNumber, setCardNumber] = useState("4557 0900 1122 3344");
  const [cardExpiry, setCardExpiry] = useState("12/28");
  const [cardCvv, setCardCvv] = useState("123");
  const [cardType, setCardType] = useState<"credito" | "debito">("credito");
  const [cashReceived, setCashReceived] = useState("150,00");
  const [changeMethod, setChangeMethod] = useState<"dinheiro" | "pix">("dinheiro");
  const [pixChangeKey, setPixChangeKey] = useState("cliente@pix.com");
  const [printFormat, setPrintFormat] = useState<PrintFormat>("thermal-80");
  const [receiptBaseUrl, setReceiptBaseUrl] = useState("http://localhost:3000");
  const CHAVE_PIX = process.env.NEXT_PUBLIC_CHAVE_PIX || "01046038109";
  const NOME_RECEBEDOR = "MATEUS VINICIUS";
  const CIDADE = "GOIANIA";
  const totalValue = useMemo(() => selectedCommandItems.reduce((sum, item) => sum + item.price, 0), []);
  const valorPix = totalValue.toFixed(2);
  const valorBrl = formatCurrency(totalValue);
  const receivedValue = useMemo(() => parseMoneyInput(cashReceived), [cashReceived]);
  const changeValue = Math.max(receivedValue - totalValue, 0);
  const missingValue = Math.max(totalValue - receivedValue, 0);
  const cardBrand = useMemo(() => {
    const digits = cardNumber.replace(/\D/g, "");
    if (digits.startsWith("4")) return "VISA";
    if (/^5[1-5]/.test(digits)) return "MASTERCARD";
    if (/^3[47]/.test(digits)) return "AMEX";
    return "CARTAO";
  }, [cardNumber]);
  const changeDescription =
    changeMethod === "pix"
      ? `Troco devolvido por PIX${pixChangeKey ? ` para ${pixChangeKey}` : ""}`
      : "Troco devolvido em dinheiro";
  const selectedFormat = printFormatMeta[printFormat];

  useEffect(() => {
    if (typeof window === "undefined") return;
    setReceiptBaseUrl(window.location.origin);
    try {
      const rawDraft = window.localStorage.getItem(settingsDraftKey);
      if (!rawDraft) return;
      const parsed = JSON.parse(rawDraft) as SettingsDraft;
      if (parsed.form?.printFormat) {
        setPrintFormat(parsed.form.printFormat);
      }
    } catch {
      return;
    }
  }, []);

  const payloadPix = `00020126430014br.gov.bcb.pix0121${CHAVE_PIX}5204000053039865405${valorPix}5802BR5915${NOME_RECEBEDOR}6007${CIDADE}62070503***6304`;
  const receiptUrl = `${receiptBaseUrl}/receipt/1766423921796`;

  const openReceipt = (paymentMethod: string) => {
    setLastPaymentMethod(paymentMethod);
    setModalReceiptOpen(true);
  };

  return (
    <>
      <div className="rounded-[28px] border border-white/8 bg-[var(--panel)] p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-semibold">#1766423921796</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Cliente: Heionekm</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Saraiva Bar · Balcao</p>
          </div>
          <span className="w-fit rounded-full bg-amber-500/14 px-3 py-1 text-xs text-amber-200">Fechando</span>
        </div>

        <div className="mt-4 space-y-3">
          {selectedCommandItems.map((item) => (
            <LineItem key={item.name} name={item.name} price={formatCurrency(item.price)} />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-[22px] bg-white/4 px-4 py-3">
          <span className="text-sm text-[var(--muted)]">Total a receber</span>
          <span className="font-display text-3xl text-[var(--gold)]">{valorBrl}</span>
        </div>

        <div className="mt-5 rounded-[22px] border border-white/8 bg-white/4 px-4 py-3 text-sm text-[var(--muted)]">
          Impressão atual: <strong className="text-white">{selectedFormat.label}</strong>
        </div>

        <div className="mt-5 space-y-3">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Pagar com:</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <button onClick={() => setModalPixOpen(true)} className="flex items-center justify-center gap-2 rounded-2xl border border-[#32BCAD]/20 bg-[#32BCAD]/10 px-3 py-3 text-sm font-semibold text-[#32BCAD] transition-transform hover:scale-105">💠 Pix</button>
            <button onClick={() => setModalCashOpen(true)} className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-3 py-3 text-sm font-semibold text-emerald-200 transition-transform hover:scale-105">💵 Dinheiro</button>
            <button onClick={() => setModalCardOpen(true)} className="col-span-2 flex items-center justify-center gap-2 rounded-2xl border border-[#4e8cff]/20 bg-[linear-gradient(135deg,rgba(78,140,255,0.16),rgba(34,211,238,0.14))] px-3 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 sm:col-auto">💳 Cartão</button>
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-white/5 pt-4">
            <button onClick={() => openReceipt(lastPaymentMethod)} className="rounded-2xl bg-[linear-gradient(135deg,#0dbb95,#66e4b5)] px-4 py-3 text-sm font-semibold text-[#05241d]">Marcar Paga e Imprimir</button>
          </div>
        </div>
      </div>

      {modalPixOpen && (
        <div className={`print-receipt-shell print-format-${printFormat} fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/80 p-4 backdrop-blur-sm`}>
          <div className="w-full max-w-sm rounded-[28px] border border-white/10 bg-[var(--panel)] p-6 text-center shadow-2xl sm:p-8">
            <h3 className="flex items-center justify-center gap-2 font-display text-2xl text-[var(--gold)]">💠 Pagamento Pix</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">Mostre a tela para o cliente ou copie o código abaixo pelo valor exato de <strong>{valorBrl}</strong>.</p>
            <div className="mt-6 flex justify-center"><div className="rounded-2xl bg-white p-2 shadow-inner"><QRCodeSVG value={payloadPix} size={200} /></div></div>
            <button className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10" onClick={() => navigator.clipboard.writeText(payloadPix)}>📄 Copiar Código (Copia e Cola)</button>
            <button onClick={() => { setModalPixOpen(false); openReceipt("Pix"); }} className="mt-3 w-full rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_35px_rgba(56,109,249,0.2)]">Confirmar Fechamento</button>
          </div>
        </div>
      )}

      {modalCashOpen && (
        <div className={`print-receipt-shell print-format-${printFormat} fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/80 p-4 backdrop-blur-sm`}>
          <div className="w-full max-w-md rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,24,20,0.98),rgba(8,13,11,1))] p-5 shadow-2xl sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-300">pagamento em dinheiro</p>
                <h3 className="mt-2 font-display text-2xl text-white">Troco inteligente</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Digite quanto foi recebido e escolha como devolver o troco ao cliente.</p>
              </div>
              <button type="button" onClick={() => setModalCashOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-lg text-white" aria-label="Fechar pagamento em dinheiro">×</button>
            </div>

            <div className="mt-5 rounded-[28px] border border-emerald-400/20 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.22),transparent_28%),linear-gradient(135deg,rgba(10,56,38,1),rgba(5,22,17,1))] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-200/80">Resumo do caixa</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2"><CashStat label="Total da comanda" value={valorBrl} /><CashStat label="Recebido" value={formatCurrency(receivedValue)} /></div>
              <div className="mt-3"><CashStat label="Troco" value={formatCurrency(changeValue)} highlight wide /></div>
            </div>

            <div className="mt-5 grid gap-4">
              <FieldShell label="Valor recebido em dinheiro"><input value={cashReceived} onChange={(event) => setCashReceived(event.target.value)} autoComplete="off" inputMode="decimal" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--gold)]" /></FieldShell>

              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Devolver troco por</p>
                <div className="grid grid-cols-2 gap-3">
                  <button type="button" onClick={() => setChangeMethod("dinheiro")} className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${changeMethod === "dinheiro" ? "border-emerald-400/30 bg-emerald-500/12 text-white" : "border-white/10 bg-white/5 text-[var(--muted)]"}`}>💵 Dinheiro</button>
                  <button type="button" onClick={() => setChangeMethod("pix")} className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${changeMethod === "pix" ? "border-sky-400/30 bg-sky-500/12 text-white" : "border-white/10 bg-white/5 text-[var(--muted)]"}`}>💠 PIX</button>
                </div>
              </div>

              {changeMethod === "pix" ? <FieldShell label="Chave PIX para devolver o troco"><input value={pixChangeKey} onChange={(event) => setPixChangeKey(event.target.value)} autoComplete="off" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--gold)]" /></FieldShell> : null}
            </div>

            {missingValue > 0 ? <div className="mt-5 rounded-[22px] border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">Ainda faltam <strong>{formatCurrency(missingValue)}</strong> para completar o pagamento.</div> : <div className={`mt-5 rounded-[22px] border px-4 py-3 text-sm ${changeMethod === "pix" ? "border-sky-400/20 bg-sky-500/10 text-sky-100" : "border-emerald-400/20 bg-emerald-500/10 text-emerald-100"}`}>{changeMethod === "pix" ? `Troco de ${formatCurrency(changeValue)} será devolvido por PIX${pixChangeKey ? ` para ${pixChangeKey}` : ""}.` : `Troco de ${formatCurrency(changeValue)} será devolvido em dinheiro.`}</div>}

            <div className="print-hide mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => setModalCashOpen(false)} className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">Cancelar</button>
              <button type="button" onClick={() => { setModalCashOpen(false); openReceipt("Dinheiro"); }} className="flex-1 rounded-2xl bg-[linear-gradient(135deg,#0dbb95,#66e4b5)] px-4 py-3 text-sm font-semibold text-[#05241d] shadow-[0_16px_35px_rgba(13,187,149,0.22)]">Confirmar dinheiro</button>
            </div>
          </div>
        </div>
      )}

      {modalCardOpen && (
        <div className={`print-receipt-shell print-format-${printFormat} fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/80 p-4 backdrop-blur-sm`}>
          <div className="w-full max-w-md rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,21,31,0.98),rgba(8,11,18,1))] p-5 shadow-2xl sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">pagamento com cartão</p>
                <h3 className="mt-2 font-display text-2xl text-white">Checkout premium</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Preencha os dados do cartão e confirme o recebimento de {valorBrl}.</p>
              </div>
              <button type="button" onClick={() => setModalCardOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-lg text-white" aria-label="Fechar pagamento com cartão">×</button>
            </div>

            <div className="mt-5 rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(102,228,181,0.35),transparent_30%),linear-gradient(135deg,#102646,#0b1220_45%,#1e3d78_100%)] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.32)]">
              <div className="flex items-center justify-between text-white/80"><span className="text-xs uppercase tracking-[0.22em]">99start pay</span><span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">{cardType}</span></div>
              <div className="mt-8 flex items-center justify-between gap-4"><div className="h-10 w-14 rounded-xl bg-[linear-gradient(135deg,#f7d774,#d8a92f)] shadow-inner" /><span className="font-display text-lg text-white/90">{cardBrand}</span></div>
              <p className="mt-8 font-display text-2xl tracking-[0.18em] text-white">{cardNumber || "0000 0000 0000 0000"}</p>
              <div className="mt-6 flex items-end justify-between gap-4 text-white"><div><p className="text-[10px] uppercase tracking-[0.22em] text-white/60">titular</p><p className="mt-2 text-sm uppercase tracking-[0.12em]">{cardName || "NOME DO CLIENTE"}</p></div><div><p className="text-[10px] uppercase tracking-[0.22em] text-white/60">validade</p><p className="mt-2 text-sm tracking-[0.12em]">{cardExpiry || "00/00"}</p></div></div>
            </div>

            <div className="mt-5 grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setCardType("credito")} className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${cardType === "credito" ? "border-[var(--gold)] bg-[rgba(255,196,82,0.16)] text-white" : "border-white/10 bg-white/5 text-[var(--muted)]"}`}>Crédito</button>
                <button type="button" onClick={() => setCardType("debito")} className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${cardType === "debito" ? "border-[var(--gold)] bg-[rgba(255,196,82,0.16)] text-white" : "border-white/10 bg-white/5 text-[var(--muted)]"}`}>Débito</button>
              </div>

              <FieldShell label="Nome impresso no cartão"><input value={cardName} onChange={(event) => setCardName(event.target.value.toUpperCase())} autoComplete="off" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--gold)]" /></FieldShell>
              <FieldShell label="Número do cartão"><input value={cardNumber} onChange={(event) => setCardNumber(formatCardNumber(event.target.value))} autoComplete="off" inputMode="numeric" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--gold)]" /></FieldShell>
              <div className="grid grid-cols-2 gap-3">
                <FieldShell label="Validade"><input value={cardExpiry} onChange={(event) => setCardExpiry(formatExpiry(event.target.value))} autoComplete="off" inputMode="numeric" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--gold)]" /></FieldShell>
                <FieldShell label="CVV"><input value={cardCvv} onChange={(event) => setCardCvv(event.target.value.replace(/\D/g, "").slice(0, 4))} autoComplete="off" inputMode="numeric" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--gold)]" /></FieldShell>
              </div>
            </div>

            <div className="mt-5 rounded-[22px] border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">Valor final no cartão: <strong>{valorBrl}</strong></div>

            <div className="print-hide mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => setModalCardOpen(false)} className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">Cancelar</button>
              <button type="button" onClick={() => { setModalCardOpen(false); openReceipt(cardType === "credito" ? "Cartão de crédito" : "Cartão de débito"); }} className="flex-1 rounded-2xl bg-[linear-gradient(135deg,#4e8cff,#22d3ee)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(56,109,249,0.24)]">Confirmar cartão</button>
            </div>
          </div>
        </div>
      )}

      {modalReceiptOpen && (
        <div className={`print-receipt-shell print-format-${printFormat} fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/80 p-4 backdrop-blur-sm`}>
          <div className={`w-full ${selectedFormat.wrapper} rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,19,28,0.98),rgba(8,11,18,1))] p-5 shadow-2xl sm:p-6`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">fechamento concluído</p>
                <h3 className="mt-2 font-display text-2xl text-white">Comprovante pronto para imprimir</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Formato escolhido: <strong className="text-white">{selectedFormat.label}</strong>. {selectedFormat.text}</p>
              </div>
              <button type="button" onClick={() => setModalReceiptOpen(false)} className="print-hide flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-lg text-white" aria-label="Fechar comprovante">×</button>
            </div>

            <div className={`print-receipt-card mt-5 rounded-[28px] border border-white/10 bg-white/4 p-5 ${selectedFormat.receipt}`}><div className="mb-4 border-t border-dashed border-white/10 pt-4 text-center text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">cupom fiscal simplificado</div>
              <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                <div>
                  <p className="font-display text-2xl text-white">Saraiva Bar</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">Comanda #1766423921796</p>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">Paga</span>
              </div>

              <div className={`mt-4 space-y-2 ${printFormat === "a4" ? "columns-2 gap-6 space-y-3" : ""}`}>
                {selectedCommandItems.map((item) => (
                  <div key={`receipt-${item.name}`} className="flex items-center justify-between text-sm text-[var(--muted)] break-inside-avoid">
                    <span>{item.name}</span>
                    <span className="text-white">{formatCurrency(item.price)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 rounded-[24px] bg-black/18 p-4 text-sm">
                <ReceiptRow label="Cliente" value="Heionekm" />
                <ReceiptRow label="Forma de pagamento" value={lastPaymentMethod} />
                <ReceiptRow label="Formato" value={selectedFormat.label} />
                <ReceiptRow label="Valor total" value={valorBrl} strong />
                {lastPaymentMethod === "Dinheiro" ? <ReceiptRow label="Recebido" value={formatCurrency(receivedValue)} /> : null}
                {lastPaymentMethod === "Dinheiro" ? <ReceiptRow label="Troco" value={formatCurrency(changeValue)} /> : null}
                {lastPaymentMethod === "Dinheiro" && changeValue > 0 ? <ReceiptRow label="Devolução" value={changeDescription} /> : null}
              </div>
            </div>

            <div className="print-hide mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => setModalReceiptOpen(false)} className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">Fechar</button>
              <button type="button" onClick={() => window.print()} className="flex-1 rounded-2xl bg-[linear-gradient(135deg,#f7b733,#fc4a1a)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(252,74,26,0.2)]">Imprimir comprovante</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FieldShell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
      {children}
    </div>
  );
}

function CashStat({ label, value, highlight, wide }: { label: string; value: string; highlight?: boolean; wide?: boolean }) {
  return (
    <div className={`rounded-[22px] px-4 py-3 ${highlight ? "bg-white/12 text-white" : "bg-black/14 text-emerald-50"} ${wide ? "w-full" : ""}`}>
      <p className="text-[10px] uppercase tracking-[0.18em] text-current/70">{label}</p>
      <p className="mt-2 font-display text-2xl">{value}</p>
    </div>
  );
}

function ReceiptRow({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-[var(--muted)]">{label}</span>
      <span className={strong ? "font-semibold text-white" : "text-white"}>{value}</span>
    </div>
  );
}





