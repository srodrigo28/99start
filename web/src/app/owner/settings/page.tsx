"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ownerDashboardNav, ownerSettingsSections } from "@/data/owner-data";
import type { OwnerNavItem } from "@/types/owner";

type SettingsStep = "store" | "address" | "brand";
type PrintFormat = "thermal-58" | "thermal-80" | "a4";

type SettingsForm = {
  storeName: string;
  cnpj: string;
  phone: string;
  ownerName: string;
  email: string;
  pixKey: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  location: string;
  logoName: string;
  slug: string;
  categories: string;
  printFormat: PrintFormat;
};

type SettingsErrors = Partial<Record<keyof SettingsForm, string>>;

type LookupStatus = "idle" | "loading" | "success" | "error";

type SettingsDraft = {
  activeStep: SettingsStep;
  form: SettingsForm;
};

const stepOrder: SettingsStep[] = ["store", "address", "brand"];
const categoryOptions = ["Bar", "Restaurante", "Pizzaria", "Hamburgueria", "Espetaria", "Música ao vivo", "Delivery", "Cafeteria"];
const settingsDraftKey = "owner-settings-draft-v1";
const printFormatOptions: Array<{ id: PrintFormat; title: string; text: string; badge: string; emoji: string }> = [
  {
    id: "thermal-58",
    title: "Bobina 58 mm",
    text: "Modelo compacto para balcão e impressoras térmicas menores.",
    badge: "Mais comum",
    emoji: "🧾",
  },
  {
    id: "thermal-80",
    title: "Bobina 80 mm",
    text: "Formato ideal para cupom mais legível, com espaço para logo e observações.",
    badge: "Profissional",
    emoji: "🖨️",
  },
  {
    id: "a4",
    title: "Folha A4",
    text: "Perfeito para relatórios, fechamento administrativo e comprovantes completos.",
    badge: "Escritório",
    emoji: "📄",
  },
];

const initialForm: SettingsForm = {
  storeName: "Saraiva Bar",
  cnpj: "12.345.678/0001-99",
  phone: "(62) 99999-9999",
  ownerName: "Mateus Vinicius",
  email: "contato@saraivabar.com",
  pixKey: "01046038109",
  cep: "74000-000",
  street: "Rua 9",
  number: "120",
  complement: "Sala 02",
  district: "Setor Sul",
  city: "Goiânia",
  state: "GO",
  location: "-16.6869, -49.2648",
  logoName: "logo-saraiva-bar.png",
  slug: "saraiva-bar",
  categories: "Bar, Música ao vivo, Espetaria",
  printFormat: "thermal-80",
};

export default function OwnerSettingsPage() {
  const [activeStep, setActiveStep] = useState<SettingsStep>("store");
  const [form, setForm] = useState<SettingsForm>(initialForm);
  const [errors, setErrors] = useState<SettingsErrors>({});
  const [message, setMessage] = useState("");
  const [cepStatus, setCepStatus] = useState<LookupStatus>("idle");
  const [cepMessage, setCepMessage] = useState("");
  const [draftReady, setDraftReady] = useState(false);

  const activeSection = ownerSettingsSections.find((section) => section.id === activeStep);
  const progress = useMemo(() => Math.round(((stepOrder.indexOf(activeStep) + 1) / stepOrder.length) * 100), [activeStep]);
  const selectedCategories = useMemo(() => form.categories.split(",").map((item) => item.trim()).filter(Boolean), [form.categories]);
  const logoPreviewLetter = useMemo(() => (form.storeName.trim().charAt(0) || "L").toUpperCase(), [form.storeName]);
  const locationPreview = useMemo(() => {
    const address = [form.street, form.number, form.district, form.city, form.state].filter(Boolean).join(", ");
    return address || form.location || "Defina o endereço para visualizar a localização resumida.";
  }, [form.city, form.district, form.location, form.number, form.state, form.street]);
  const selectedPrintFormat = useMemo(() => printFormatOptions.find((item) => item.id === form.printFormat), [form.printFormat]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const rawDraft = window.localStorage.getItem(settingsDraftKey);
      if (!rawDraft) {
        setDraftReady(true);
        return;
      }

      const parsedDraft = JSON.parse(rawDraft) as Partial<SettingsDraft>;
      if (parsedDraft.form) {
        setForm((prev) => ({ ...prev, ...parsedDraft.form }));
      }
      if (parsedDraft.activeStep && stepOrder.includes(parsedDraft.activeStep)) {
        setActiveStep(parsedDraft.activeStep);
      }
      setMessage("Rascunho recuperado com sucesso.");
    } catch {
      setMessage("Não foi possível recuperar o rascunho salvo.");
    } finally {
      setDraftReady(true);
    }
  }, []);

  useEffect(() => {
    if (!draftReady || typeof window === "undefined") return;

    const draft: SettingsDraft = { activeStep, form };
    window.localStorage.setItem(settingsDraftKey, JSON.stringify(draft));
  }, [activeStep, draftReady, form]);

  useEffect(() => {
    const digits = form.cep.replace(/\D/g, "");
    if (digits.length !== 8) {
      setCepStatus("idle");
      setCepMessage("");
      return;
    }

    let cancelled = false;
    const lookupCep = async () => {
      try {
        setCepStatus("loading");
        setCepMessage("Buscando endereço pelo CEP...");
        const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
        const data = await response.json();

        if (cancelled) return;

        if (!response.ok || data.erro) {
          setCepStatus("error");
          setCepMessage("Não foi possível localizar este CEP.");
          return;
        }

        setForm((prev) => ({
          ...prev,
          street: data.logradouro || prev.street,
          district: data.bairro || prev.district,
          city: data.localidade || prev.city,
          state: data.uf || prev.state,
          location: prev.location || `${data.localidade || prev.city} - ${data.uf || prev.state}`,
        }));
        setErrors((prev) => ({ ...prev, cep: undefined, street: undefined, district: undefined, city: undefined, state: undefined }));
        setCepStatus("success");
        setCepMessage("Endereço preenchido automaticamente pelo CEP.");
      } catch {
        if (cancelled) return;
        setCepStatus("error");
        setCepMessage("Não foi possível consultar o CEP agora.");
      }
    };

    void lookupCep();

    return () => {
      cancelled = true;
    };
  }, [form.cep]);

  const updateField = <K extends keyof SettingsForm>(field: K, value: SettingsForm[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setMessage("");
  };

  const handleCnpjChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 14);
    let formatted = digits;
    if (digits.length > 2) formatted = formatted.replace(/^(\d{2})(\d)/, "$1.$2");
    if (digits.length > 5) formatted = formatted.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    if (digits.length > 8) formatted = formatted.replace(/\.(\d{3})(\d)/, ".$1/$2");
    if (digits.length > 12) formatted = formatted.replace(/(\d{4})(\d)/, "$1-$2");
    updateField("cnpj", formatted);
  };

  const handlePhoneChange = (value: string) => {
    let digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length > 0) {
      digits = digits.replace(/^(\d{2})(\d)/g, "($1) $2");
      digits = digits.replace(/(\d)(\d{4})$/, "$1-$2");
    }
    updateField("phone", digits);
  };

  const handleCepChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);
    const formatted = digits.length > 5 ? digits.replace(/^(\d{5})(\d)/, "$1-$2") : digits;
    updateField("cep", formatted);
  };

  const handleSlugChange = (value: string) => {
    const slug = value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .slice(0, 50);
    updateField("slug", slug);
  };

  const handleLogoFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    updateField("logoName", file.name);
    setMessage("Logo selecionada com sucesso. A integração com upload real pode ser ligada na API depois.");
  };

  const toggleCategory = (category: string) => {
    const nextCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];
    updateField("categories", nextCategories.join(", "));
  };

  const validateStep = (step: SettingsStep) => {
    const nextErrors: SettingsErrors = {};

    if (step === "store") {
      if (!form.storeName.trim()) nextErrors.storeName = "Informe o nome da loja.";
      if (form.cnpj.replace(/\D/g, "").length !== 14) nextErrors.cnpj = "Digite um CNPJ válido.";
      if (form.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Informe um telefone com DDD.";
      if (!form.ownerName.trim()) nextErrors.ownerName = "Informe o responsável.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Digite um e-mail válido.";
      if (!form.pixKey.trim()) nextErrors.pixKey = "Informe uma chave PIX.";
    }

    if (step === "address") {
      if (form.cep.replace(/\D/g, "").length !== 8) nextErrors.cep = "Digite um CEP válido.";
      if (!form.street.trim()) nextErrors.street = "Informe a rua.";
      if (!form.number.trim()) nextErrors.number = "Informe o número.";
      if (!form.district.trim()) nextErrors.district = "Informe o bairro.";
      if (!form.city.trim()) nextErrors.city = "Informe a cidade.";
      if (form.state.trim().length !== 2) nextErrors.state = "Use a UF com 2 letras.";
      if (!form.location.trim()) nextErrors.location = "Informe a localização.";
    }

    if (step === "brand") {
      if (!form.logoName.trim()) nextErrors.logoName = "Informe o arquivo da logo.";
      if (!form.slug.trim()) nextErrors.slug = "Informe um slug público.";
      if (selectedCategories.length === 0) nextErrors.categories = "Selecione pelo menos uma categoria.";
      if (!form.printFormat) nextErrors.printFormat = "Escolha um formato de impressão.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const saveDraft = () => {
    if (typeof window !== "undefined") {
      const draft: SettingsDraft = { activeStep, form };
      window.localStorage.setItem(settingsDraftKey, JSON.stringify(draft));
    }
    setMessage("Rascunho salvo neste dispositivo com sucesso.");
  };

  const clearDraft = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(settingsDraftKey);
    }
    setForm(initialForm);
    setActiveStep("store");
    setErrors({});
    setCepStatus("idle");
    setCepMessage("");
    setMessage("Rascunho removido. Os dados voltaram ao modelo inicial.");
  };

  const goNext = () => {
    if (!validateStep(activeStep)) {
      setMessage("Revise os campos destacados antes de continuar.");
      return;
    }
    const currentIndex = stepOrder.indexOf(activeStep);
    const nextStep = stepOrder[currentIndex + 1];
    if (nextStep) {
      setActiveStep(nextStep);
      setMessage("");
      return;
    }
    setMessage("Configurações salvas com sucesso.");
  };

  const goBack = () => {
    const currentIndex = stepOrder.indexOf(activeStep);
    const previousStep = stepOrder[currentIndex - 1];
    if (previousStep) {
      setActiveStep(previousStep);
      setMessage("");
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <header className="rounded-[30px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-5">
          <div className="flex flex-wrap items-center gap-3">
            {ownerDashboardNav.map((item) => (
              <SettingsNavLink key={item.href} item={item} />
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">configurações da loja</p>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl">Gerencie os dados do seu estabelecimento</h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)] sm:text-base">
                Ajuste os dados da loja, endereço, localização, identidade visual, slug público e categorias do negócio em etapas organizadas.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]">{progress}% concluído</div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <section className="rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">etapas da configuração</p>
                <h2 className="mt-2 font-display text-3xl">Tudo separado por tema</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Cada etapa organiza um grupo de informações para deixar a manutenção da loja mais simples no celular e no desktop.</p>
              </div>
              <button type="button" onClick={clearDraft} className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)] transition hover:bg-white/10 hover:text-white">
                Limpar rascunho
              </button>
            </div>

            <div className="mt-5 grid gap-3">
              {ownerSettingsSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveStep(section.id as SettingsStep)}
                  className={`rounded-[24px] border p-4 text-left transition ${activeStep === section.id ? "border-[var(--gold)] bg-white/8" : "border-white/8 bg-white/4"}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,139,54,0.22),rgba(56,109,249,0.22))] text-2xl">{section.icon}</span>
                    <div>
                      <p className="font-display text-xl text-white">{section.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{section.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.48)] sm:p-6">
            {activeSection ? (
              <>
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,139,54,0.22),rgba(56,109,249,0.22))] text-2xl">{activeSection.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">área de configuração</p>
                    <h2 className="mt-2 font-display text-2xl text-white sm:text-3xl">{activeSection.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{activeSection.description}</p>
                  </div>
                </div>

                {activeStep === "store" ? (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field label="Nome da loja" value={form.storeName} onChange={(e) => updateField("storeName", e.target.value)} error={errors.storeName} />
                    <Field label="CNPJ" value={form.cnpj} onChange={(e) => handleCnpjChange(e.target.value)} error={errors.cnpj} />
                    <Field label="Telefone" value={form.phone} onChange={(e) => handlePhoneChange(e.target.value)} error={errors.phone} />
                    <Field label="Responsável" value={form.ownerName} onChange={(e) => updateField("ownerName", e.target.value)} error={errors.ownerName} />
                    <Field label="E-mail" value={form.email} onChange={(e) => updateField("email", e.target.value)} error={errors.email} />
                    <Field label="Chave PIX" value={form.pixKey} onChange={(e) => updateField("pixKey", e.target.value)} error={errors.pixKey} hint="Essa chave será usada para gerar recebimentos PIX." />
                  </div>
                ) : null}

                {activeStep === "address" ? (
                  <>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <Field label="CEP" value={form.cep} onChange={(e) => handleCepChange(e.target.value)} error={errors.cep} />
                      <Field label="Localização" value={form.location} onChange={(e) => updateField("location", e.target.value)} error={errors.location} hint="Pode ser latitude e longitude ou um ponto de referência." />
                      <div className="sm:col-span-2">
                        <Field label="Rua" value={form.street} onChange={(e) => updateField("street", e.target.value)} error={errors.street} />
                      </div>
                      <Field label="Número" value={form.number} onChange={(e) => updateField("number", e.target.value)} error={errors.number} />
                      <Field label="Complemento" value={form.complement} onChange={(e) => updateField("complement", e.target.value)} />
                      <Field label="Bairro" value={form.district} onChange={(e) => updateField("district", e.target.value)} error={errors.district} />
                      <Field label="Cidade" value={form.city} onChange={(e) => updateField("city", e.target.value)} error={errors.city} />
                      <Field label="UF" value={form.state} onChange={(e) => updateField("state", e.target.value.toUpperCase().slice(0, 2))} error={errors.state} />
                    </div>

                    <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                      <StatusCard title="Consulta de CEP" emoji={cepStatus === "success" ? "✅" : cepStatus === "error" ? "⚠️" : "📮"} text={cepMessage || "Digite um CEP válido para preencher rua, bairro, cidade e UF automaticamente."} tone={cepStatus} />
                      <StatusCard title="Prévia da localização" emoji="🗺️" text={locationPreview} tone="idle" />
                    </div>
                  </>
                ) : null}

                {activeStep === "brand" ? (
                  <div className="mt-6 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
                    <div className="rounded-[28px] border border-white/10 bg-white/4 p-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">identidade visual</p>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[26px] bg-[linear-gradient(135deg,rgba(255,139,54,0.3),rgba(56,109,249,0.3))] text-3xl font-semibold text-white">{logoPreviewLetter}</div>
                        <div>
                          <p className="font-display text-xl text-white">{form.storeName || "Sua loja"}</p>
                          <p className="mt-1 text-sm text-[var(--muted)]">Arquivo atual: {form.logoName || "Nenhum arquivo selecionado"}</p>
                        </div>
                      </div>
                      <label className="mt-4 flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-white/14 bg-white/4 px-4 py-4 text-sm font-semibold text-white transition hover:bg-white/8">
                        Escolher logo
                        <input type="file" accept="image/*" onChange={handleLogoFile} className="hidden" />
                      </label>
                      {errors.logoName ? <p className="mt-2 text-xs text-rose-300">{errors.logoName}</p> : <p className="mt-2 text-xs text-[var(--muted)]">Você pode trocar a logo da empresa por aqui.</p>}
                    </div>

                    <div className="grid gap-4">
                      <Field label="Slug público" value={form.slug} onChange={(e) => handleSlugChange(e.target.value)} error={errors.slug} hint="Exemplo: saraiva-bar" />

                      <div>
                        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Categorias do estabelecimento</p>
                        <div className="flex flex-wrap gap-2">
                          {categoryOptions.map((category) => {
                            const selected = selectedCategories.includes(category);
                            return (
                              <button
                                key={category}
                                type="button"
                                onClick={() => toggleCategory(category)}
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${selected ? "border-[var(--gold)] bg-[rgba(255,196,82,0.16)] text-white" : "border-white/10 bg-white/4 text-[var(--muted)] hover:bg-white/8 hover:text-white"}`}
                              >
                                {selected ? "✨ " : ""}
                                {category}
                              </button>
                            );
                          })}
                        </div>
                        {errors.categories ? <p className="mt-2 text-xs text-rose-300">{errors.categories}</p> : <p className="mt-2 text-xs text-[var(--muted)]">Selecione uma ou mais categorias para segmentar melhor o negócio.</p>}
                      </div>

                      <div className="rounded-[28px] border border-white/10 bg-white/4 p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">impressão padrão</p>
                            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Escolha o modelo que será usado por padrão no fechamento e no comprovante.</p>
                          </div>
                          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]">3 formatos</span>
                        </div>

                        <div className="mt-4 grid gap-3">
                          {printFormatOptions.map((option) => {
                            const selected = form.printFormat === option.id;
                            return (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => updateField("printFormat", option.id)}
                                className={`rounded-[22px] border p-4 text-left transition ${selected ? "border-[var(--gold)] bg-[rgba(255,196,82,0.12)]" : "border-white/10 bg-white/4 hover:bg-white/8"}`}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div className="flex items-start gap-3">
                                    <span className="text-2xl">{option.emoji}</span>
                                    <div>
                                      <p className="font-semibold text-white">{option.title}</p>
                                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{option.text}</p>
                                    </div>
                                  </div>
                                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] text-[var(--muted)]">{option.badge}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {errors.printFormat ? <p className="mt-2 text-xs text-rose-300">{errors.printFormat}</p> : null}
                      </div>

                      <StatusCard title="Resumo público" emoji="🌐" text={`/${form.slug || "slug-da-loja"} • ${selectedCategories.join(" • ") || "Escolha as categorias principais"}`} tone="success" />
                      <StatusCard title="Formato selecionado" emoji="🧾" text={`${selectedPrintFormat?.title || "Formato não definido"} • ${selectedPrintFormat?.text || "Escolha um formato de impressão para a loja."}`} tone="idle" />
                    </div>
                  </div>
                ) : null}

                {message ? <div className="mt-5 rounded-[22px] border border-white/8 bg-white/4 px-4 py-3 text-sm text-[var(--muted)]">{message}</div> : null}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button type="button" onClick={goBack} disabled={stepOrder.indexOf(activeStep) === 0} className="rounded-2xl border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white disabled:opacity-40">
                      Voltar
                    </button>
                    <button type="button" onClick={saveDraft} className="rounded-2xl border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-white">
                      Salvar rascunho
                    </button>
                  </div>
                  <button type="button" onClick={goNext} className="rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-sm font-semibold text-white">
                    {stepOrder.indexOf(activeStep) === stepOrder.length - 1 ? "Salvar configurações" : "Próxima etapa"}
                  </button>
                </div>
              </>
            ) : null}
          </section>
        </section>
      </div>
    </main>
  );
}

function SettingsNavLink({ item }: { item: OwnerNavItem }) {
  return (
    <Link href={item.href} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-white/10 hover:text-white">
      <span aria-hidden="true">{item.icon}</span>
      <span>{item.shortLabel || item.label}</span>
    </Link>
  );
}

function Field({ label, value, onChange, error, hint }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; error?: string; hint?: string }) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
      <input value={value} onChange={onChange} autoComplete="off" className={`w-full rounded-2xl border px-4 py-3 text-base text-[var(--text)] outline-none transition-all sm:text-sm ${error ? "border-rose-400/70 bg-rose-500/8 focus:border-rose-300" : "border-white/8 bg-white/5 focus:border-[var(--gold)]"}`} />
      {error ? <p className="mt-2 text-xs text-rose-300">{error}</p> : hint ? <p className="mt-2 text-xs text-[var(--muted)]">{hint}</p> : null}
    </div>
  );
}

function StatusCard({ title, emoji, text, tone }: { title: string; emoji: string; text: string; tone: LookupStatus }) {
  const toneClass =
    tone === "success"
      ? "border-emerald-400/30 bg-emerald-500/8"
      : tone === "error"
        ? "border-rose-400/30 bg-rose-500/8"
        : tone === "loading"
          ? "border-sky-400/30 bg-sky-500/8"
          : "border-white/10 bg-white/4";

  return (
    <div className={`rounded-[24px] border p-4 transition-all ${toneClass}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl">{emoji}</span>
        <div>
          <p className="font-display text-lg text-white">{title}</p>
          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
        </div>
      </div>
    </div>
  );
}
