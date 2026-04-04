import Link from "next/link";
import { notFound } from "next/navigation";

const receiptItems = [
  { name: "3x heionekm", price: "R$ 75,00" },
  { name: "1x carne espeto", price: "R$ 9,00" },
  { name: "2x refrigerante lata", price: "R$ 14,00" },
  { name: "1x porção de fritas", price: "R$ 28,00" },
  { name: "1x molho da casa", price: "R$ 6,00" },
  { name: "2x água com gás", price: "R$ 12,00" },
];

const receiptMap = {
  "1766423921796": {
    store: "Saraiva Bar",
    customer: "Heionekm",
    total: "R$ 144,00",
    paymentMethod: "Pix",
    status: "Pagamento confirmado",
    issuedAt: "01/04/2026 20:45",
    items: receiptItems,
  },
};

export default async function ReceiptPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const receipt = receiptMap[code as keyof typeof receiptMap];

  if (!receipt) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-4 py-8 sm:px-6">
        <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.48)] sm:p-8">
          <div className="flex flex-col gap-4 border-b border-white/8 pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">comprovante digital</p>
              <h1 className="mt-2 font-display text-3xl text-white">{receipt.store}</h1>
              <p className="mt-2 text-sm text-[var(--muted)]">Comanda #{code}</p>
            </div>
            <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              {receipt.status}
            </span>
          </div>

          <div className="mt-5 grid gap-3 rounded-[24px] bg-black/18 p-4 text-sm sm:grid-cols-2">
            <ReceiptRow label="Cliente" value={receipt.customer} />
            <ReceiptRow label="Pagamento" value={receipt.paymentMethod} />
            <ReceiptRow label="Emitido em" value={receipt.issuedAt} />
            <ReceiptRow label="Total" value={receipt.total} strong />
          </div>

          <div className="mt-5 rounded-[28px] border border-white/8 bg-white/4 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">itens da comanda</p>
            <div className="mt-4 grid gap-2">
              {receipt.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-2xl bg-black/14 px-4 py-3 text-sm text-[var(--muted)]">
                  <span>{item.name}</span>
                  <span className="text-white">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/owner/tabs" className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white">
              Voltar para comandas
            </Link>
            <button type="button" onClick={() => window.print()} className="flex-1 rounded-2xl bg-[linear-gradient(135deg,#f7b733,#fc4a1a)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(252,74,26,0.2)]">
              Imprimir
            </button>
          </div>
        </section>
      </div>
    </main>
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
