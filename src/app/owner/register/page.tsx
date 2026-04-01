import Link from "next/link";
import { OwnerAccessForm } from "@/components/owner/owner-access-form";

export default function OwnerRegisterPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <header className="flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">
              voltar para o início
            </Link>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl">
              Cadastro do estabelecimento
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Informe os dados principais do seu negócio para iniciar o cadastro e seguir para a próxima etapa.
            </p>
          </div>
          <div className="w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]">
            etapa inicial
          </div>
        </header>

        <OwnerAccessForm mode="register" />
      </div>
    </main>
  );
}
