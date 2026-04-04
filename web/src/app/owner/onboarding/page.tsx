"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  onboardingMenuDrafts,
  onboardingStages,
  
  
 } from "@/data/owner-data";
import type { MenuDraft, OnboardingStage } from "@/types/owner";

type SetupStep = "basic" | "media" | "menu" | "experience";

type EstablishmentForm = {
  name: string;
  description: string;
  category: string;
  priceRange: string;
  whatsapp: string;
  city: string;
  state: string;
  neighborhood: string;
  capacity: string;
  openTime: string;
  closeTime: string;
  instagram: string;
  coverImage: string;
  galleryInfo: string;
  musicStyle: string;
  audience: string;
  amenities: string;
};

type MenuItemForm = {
  type: "Comida" | "Bebida";
  name: string;
  description: string;
  price: string;
  quantity: string;
};

type EstablishmentErrors = Partial<Record<keyof EstablishmentForm, string>>;
type MenuItemErrors = Partial<Record<keyof MenuItemForm, string>>;

const initialForm: EstablishmentForm = {
  name: "Saraiva Bar",
  description: "Bar com música ao vivo, ambiente casual e foco em espetos.",
  category: "Bar",
  priceRange: "Médio",
  whatsapp: "(62) 99999-9999",
  city: "Goiânia",
  state: "GO",
  neighborhood: "Setor Sul",
  capacity: "120",
  openTime: "18:00",
  closeTime: "02:00",
  instagram: "@saraivabar",
  coverImage: "",
  galleryInfo: "3 fotos de ambiente e 1 vídeo curto do palco.",
  musicStyle: "Pop, rock e sertanejo",
  audience: "Adulto jovem e grupos para happy hour",
  amenities: "Área coberta, palco, espaço para aniversários e acessibilidade",
};

const initialMenuItemForm: MenuItemForm = {
  type: "Comida",
  name: "",
  description: "",
  price: "",
  quantity: "",
};

const stepOrder: SetupStep[] = ["basic", "media", "menu", "experience"];

const stepLabels: Record<SetupStep, string> = {
  basic: "Basico",
  media: "Midia",
  menu: "Cardapio",
  experience: "Ambiente",
};

export default function OwnerOnboardingPage() {
  const [activeStep, setActiveStep] = useState<SetupStep>("basic");
  const [form, setForm] = useState<EstablishmentForm>(initialForm);
  const [errors, setErrors] = useState<EstablishmentErrors>({});
  const [formMessage, setFormMessage] = useState("");
  const [isAddMenuModalOpen, setIsAddMenuModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [newItem, setNewItem] = useState<MenuItemForm>(initialMenuItemForm);
  const [menuItemErrors, setMenuItemErrors] = useState<MenuItemErrors>({});
  const [menuItems, setMenuItems] = useState<MenuDraft[]>(onboardingMenuDrafts);

  const activeStepIndex = stepOrder.indexOf(activeStep);

  const completion = useMemo(() => {
    const requiredChecks = [
      form.name.trim(),
      form.description.trim(),
      form.category.trim(),
      form.priceRange.trim(),
      form.whatsapp.replace(/\D/g, "").length >= 10,
      form.city.trim(),
      form.state.trim().length === 2,
      form.openTime.trim(),
      form.closeTime.trim(),
      form.musicStyle.trim(),
      form.audience.trim(),
    ];

    const filled = requiredChecks.filter(Boolean).length;
    return Math.round((filled / requiredChecks.length) * 100);
  }, [form]);

  const updateField = <K extends keyof EstablishmentForm>(
    field: K,
    value: EstablishmentForm[K],
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setFormMessage("");
  };

  const updateMenuField = <K extends keyof MenuItemForm>(
    field: K,
    value: MenuItemForm[K],
  ) => {
    setNewItem((prev) => ({ ...prev, [field]: value }));
    setMenuItemErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleWhatsappChange = (value: string) => {
    let digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length > 0) {
      digits = digits.replace(/^(\d{2})(\d)/g, "($1) $2");
      digits = digits.replace(/(\d)(\d{4})$/, "$1-$2");
    }
    updateField("whatsapp", digits);
  };

  const handlePriceChange = (value: string) => {
    const sanitized = value.replace(/[^\d,]/g, "").slice(0, 10);
    updateMenuField("price", sanitized);
  };

  const validateCurrentStep = (step: SetupStep) => {
    const nextErrors: EstablishmentErrors = {};

    if (step === "basic") {
      if (!form.name.trim()) nextErrors.name = "Informe o nome do estabelecimento.";
      if (!form.description.trim() || form.description.trim().length < 20) {
        nextErrors.description = "Descreva o local com pelo menos 20 caracteres.";
      }
      if (!form.category.trim()) nextErrors.category = "Escolha a categoria principal.";
      if (!form.priceRange.trim()) nextErrors.priceRange = "Defina a faixa de preço.";
      if (form.whatsapp.replace(/\D/g, "").length < 10) {
        nextErrors.whatsapp = "Informe um WhatsApp com DDD.";
      }
      if (!form.city.trim()) nextErrors.city = "Informe a cidade.";
      if (form.state.trim().length !== 2) nextErrors.state = "Use a UF com 2 letras.";
    }

    if (step === "media" && !form.galleryInfo.trim()) {
      nextErrors.galleryInfo = "Descreva o material visual disponível.";
    }

    if (step === "experience") {
      if (!form.openTime.trim()) nextErrors.openTime = "Informe o horário de abertura.";
      if (!form.closeTime.trim()) nextErrors.closeTime = "Informe o horário de fechamento.";
      if (!form.musicStyle.trim()) nextErrors.musicStyle = "Defina o estilo musical.";
      if (!form.audience.trim()) nextErrors.audience = "Descreva o público principal.";
      if (!form.amenities.trim()) nextErrors.amenities = "Liste os diferenciais do ambiente.";
    }

    setErrors((prev) => ({ ...prev, ...nextErrors }));
    return Object.keys(nextErrors).length === 0;
  };

  const validateMenuStep = () => {
    const nextErrors: MenuItemErrors = {};

    if (modalStep >= 2 && !newItem.name.trim()) {
      nextErrors.name = "Informe o nome do item.";
    }
    if (modalStep >= 2 && newItem.description.trim().length < 10) {
      nextErrors.description = "Descreva o item com pelo menos 10 caracteres.";
    }
    if (modalStep === 3 && !/^\d+(,\d{2})?$/.test(newItem.price.trim())) {
      nextErrors.price = "Use o formato 00,00.";
    }
    if (modalStep === 3 && newItem.quantity.trim() && !/^\d+$/.test(newItem.quantity.trim())) {
      nextErrors.quantity = "Use somente números ou deixe em branco.";
    }

    setMenuItemErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goToStep = (step: SetupStep) => {
    const currentStep = stepOrder[activeStepIndex];
    if (stepOrder.indexOf(step) > activeStepIndex && !validateCurrentStep(currentStep)) {
      setFormMessage("Preencha os campos obrigatórios da etapa atual antes de avançar.");
      return;
    }
    setActiveStep(step);
    setFormMessage("");
  };

  const goToNextStep = () => {
    if (!validateCurrentStep(activeStep)) {
      setFormMessage("Revise os campos destacados para continuar.");
      return;
    }
    const nextStep = stepOrder[activeStepIndex + 1];
    if (nextStep) {
      setActiveStep(nextStep);
      setFormMessage("");
    }
  };

  const goToPreviousStep = () => {
    const previousStep = stepOrder[activeStepIndex - 1];
    if (previousStep) {
      setActiveStep(previousStep);
      setFormMessage("");
    }
  };

  const closeModal = () => {
    setIsAddMenuModalOpen(false);
    setModalStep(1);
    setNewItem(initialMenuItemForm);
    setMenuItemErrors({});
  };

  const nextModalStep = () => {
    if (!validateMenuStep()) return;
    setModalStep((prev) => Math.min(prev + 1, 3));
  };

  const prevModalStep = () => {
    setModalStep((prev) => Math.max(prev - 1, 1));
    setMenuItemErrors({});
  };

  const handleAddMenuItem = () => {
    if (!validateMenuStep()) return;

    const category = newItem.type === "Comida" ? "🍔 Comidas" : "🍻 Bebidas";
    const formattedItem = `${newItem.name} · R$ ${newItem.price}`;

    setMenuItems((prev) => {
      const existingCategory = prev.find((item) => item.category === category);
      if (!existingCategory) {
        return [...prev, { category, items: [formattedItem] }];
      }

      return prev.map((item) =>
        item.category === category ? { ...item, items: [...item.items, formattedItem] } : item,
      );
    });

    setFormMessage("Item adicionado ao cardápio rascunho.");
    closeModal();
  };

  const saveDraft = () => {
    setFormMessage("Rascunho salvo com sucesso para continuar depois.");
  };

  const publishSetup = () => {
    const stepsAreValid = stepOrder.every((step) => (step === "menu" ? true : validateCurrentStep(step)));

    if (!stepsAreValid) {
      setFormMessage("Ainda faltam campos obrigatórios antes de publicar o estabelecimento.");
      return;
    }

    setFormMessage("Cadastro validado. O estabelecimento já pode seguir para o dashboard.");
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <header className="flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">
              voltar para inicio
            </Link>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl">
              Onboarding do estabelecimento
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              O fluxo agora é funcional no mobile: etapas claras, erros por campo,
              rascunho de cardápio e preview vivo para a vitrine do app.
            </p>
          </div>
          <div className="w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]">
            {completion}% concluido
          </div>
        </header>
        
        <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.4)] sm:p-6">
            <div className="space-y-3">
              <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
                por onde comecar
              </span>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                Primeiro o local. Depois cardápio, mesas e operação.
              </h2>
              <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                Cada etapa foi organizada para funcionar bem em tela estreita e continuar
                elegante no desktop, sem esconder o que ainda falta validar.
              </p>
            </div>

            <div className="grid gap-3">
              {onboardingStages.map((stage) => (
                <StageCard key={stage.number} stage={stage} />
              ))}
              <StageCard
                stage={{
                  number: "04",
                  title: "Ambiente",
                  description: "Horários, público, diferenciais e experiência do local.",
                }}
              />
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[var(--panel)] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">
                checklist de publicação
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                <li className="rounded-2xl bg-white/4 px-4 py-3">
                  nome, categoria, WhatsApp, cidade e UF precisam estar válidos;
                </li>
                <li className="rounded-2xl bg-white/4 px-4 py-3">
                  descrição curta do local e do material de mídia evitam cadastro incompleto;
                </li>
                <li className="rounded-2xl bg-white/4 px-4 py-3">
                  itens do cardápio só entram no rascunho após passar por validação.
                </li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[var(--panel)] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">
                resumo rapido
              </p>
              <div className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
                <SummaryRow label="Estabelecimento" value={form.name || "Sem nome"} />
                <SummaryRow label="Cidade" value={`${form.city || "Cidade"}${form.state ? ` - ${form.state}` : ""}`} />
                <SummaryRow label="Horario" value={`${form.openTime || "--:--"} às ${form.closeTime || "--:--"}`} />
                <SummaryRow
                  label="Itens no rascunho"
                  value={`${menuItems.reduce((acc, item) => acc + item.items.length, 0)} itens`}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                    formulario mobile first
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    navegação por etapas, validações visíveis e ações claras
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]">
                  etapa {activeStepIndex + 1} de 4
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-[var(--panel)] p-4 sm:p-5">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {stepOrder.map((step) => (
                    <StepPill key={step} active={activeStep === step} onClick={() => goToStep(step)}>
                      {stepLabels[step]}
                    </StepPill>
                  ))}
                </div>

                <div className="mt-5">
                  {activeStep === "basic" ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="md:col-span-2">
                        <ValidatedInput
                          label="Nome do estabelecimento"
                          value={form.name}
                          onChange={(event) => updateField("name", event.target.value)}
                          error={errors.name}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <ValidatedTextarea
                          label="Descricao"
                          value={form.description}
                          onChange={(event) => updateField("description", event.target.value)}
                          hint="Use uma descrição curta e objetiva para a vitrine do app."
                          error={errors.description}
                        />
                      </div>
                      <ValidatedInput
                        label="Categoria"
                        value={form.category}
                        onChange={(event) => updateField("category", event.target.value)}
                        error={errors.category}
                      />
                      <ValidatedInput
                        label="Faixa de preco"
                        value={form.priceRange}
                        onChange={(event) => updateField("priceRange", event.target.value)}
                        error={errors.priceRange}
                      />
                      <ValidatedInput
                        label="WhatsApp"
                        value={form.whatsapp}
                        onChange={(event) => handleWhatsappChange(event.target.value)}
                        error={errors.whatsapp}
                      />
                      <ValidatedInput
                        label="Bairro"
                        value={form.neighborhood}
                        onChange={(event) => updateField("neighborhood", event.target.value)}
                      />
                      <ValidatedInput
                        label="Cidade"
                        value={form.city}
                        onChange={(event) => updateField("city", event.target.value)}
                        error={errors.city}
                      />
                      <ValidatedInput
                        label="UF"
                        value={form.state}
                        onChange={(event) => updateField("state", event.target.value.toUpperCase().slice(0, 2))}
                        error={errors.state}
                      />
                    </div>
                  ) : null}

                  {activeStep === "media" ? (
                    <div className="grid gap-4">
                      <div className="rounded-[24px] border border-dashed border-white/12 bg-white/4 p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
                          upload de capa
                        </p>
                        <div className="mt-3 flex min-h-40 items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,rgba(255,139,54,0.18),rgba(56,109,249,0.14))] p-4 text-center text-sm text-[var(--muted)]">
                          Arraste fotos ou toque para adicionar imagem principal.
                        </div>
                      </div>
                      <ValidatedInput
                        label="Link ou nome da imagem principal"
                        value={form.coverImage}
                        onChange={(event) => updateField("coverImage", event.target.value)}
                        hint="Opcional para a demo de hoje, mas útil para apresentação."
                      />
                      <ValidatedTextarea
                        label="Material de galeria"
                        value={form.galleryInfo}
                        onChange={(event) => updateField("galleryInfo", event.target.value)}
                        hint="Exemplo: 3 fotos do ambiente, 1 vídeo do palco e 1 foto da fachada."
                        error={errors.galleryInfo}
                      />
                    </div>
                  ) : null}

                  {activeStep === "menu" ? (
                    <div className="grid gap-4">
                      <div className="rounded-[24px] border border-white/8 bg-white/4 p-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-sm font-semibold text-white">Cardápio inicial</p>
                            <p className="text-xs leading-5 text-[var(--muted)]">
                              Cadastre itens essenciais para a demo e refine depois no dashboard.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setIsAddMenuModalOpen(true)}
                            className="rounded-full bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-4 py-2 text-sm font-semibold text-white"
                          >
                            Adicionar item
                          </button>
                        </div>
                      </div>

                      <div className="grid gap-3 md:grid-cols-2">
                        {menuItems.map((draft) => (
                          <MenuDraftCard key={draft.category} draft={draft} />
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {activeStep === "experience" ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      <ValidatedInput
                        label="Capacidade"
                        value={form.capacity}
                        onChange={(event) => updateField("capacity", event.target.value.replace(/\D/g, "").slice(0, 4))}
                        hint="Quantidade aproximada de pessoas."
                      />
                      <ValidatedInput
                        label="Instagram"
                        value={form.instagram}
                        onChange={(event) => updateField("instagram", event.target.value)}
                      />
                      <ValidatedInput
                        label="Abre as"
                        type="time"
                        value={form.openTime}
                        onChange={(event) => updateField("openTime", event.target.value)}
                        error={errors.openTime}
                      />
                      <ValidatedInput
                        label="Fecha as"
                        type="time"
                        value={form.closeTime}
                        onChange={(event) => updateField("closeTime", event.target.value)}
                        error={errors.closeTime}
                      />
                      <div className="md:col-span-2">
                        <ValidatedTextarea
                          label="Estilo musical"
                          value={form.musicStyle}
                          onChange={(event) => updateField("musicStyle", event.target.value)}
                          error={errors.musicStyle}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <ValidatedTextarea
                          label="Publico principal"
                          value={form.audience}
                          onChange={(event) => updateField("audience", event.target.value)}
                          error={errors.audience}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <ValidatedTextarea
                          label="Diferenciais do ambiente"
                          value={form.amenities}
                          onChange={(event) => updateField("amenities", event.target.value)}
                          error={errors.amenities}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>

                {formMessage ? (
                  <p className="mt-5 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-[var(--muted)]">
                    {formMessage}
                  </p>
                ) : null}

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  {activeStepIndex > 0 ? (
                    <button
                      type="button"
                      onClick={goToPreviousStep}
                      className="rounded-2xl border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-[var(--text)]"
                    >
                      Voltar etapa
                    </button>
                  ) : null}
                  {activeStepIndex < stepOrder.length - 1 ? (
                    <button
                      type="button"
                      onClick={goToNextStep}
                      className="rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-sm font-semibold text-white"
                    >
                      Salvar e continuar
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={publishSetup}
                      className="rounded-2xl bg-[linear-gradient(135deg,#ff8b36,#ff5f6d)] px-5 py-3 text-sm font-semibold text-white"
                    >
                      Validar cadastro
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={saveDraft}
                    className="rounded-2xl border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-[var(--text)]"
                  >
                    Salvar rascunho
                  </button>
                </div>
              </div>
            </section>

            <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
              <div className="mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                    preview da vitrine
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    dados atualizados ao vivo conforme o cadastro avança
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]">
                  publico
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-[var(--panel)] p-4 sm:p-5">
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[var(--panel-2)]">
                  <div className="h-32 bg-[linear-gradient(135deg,#1a5f31,#0d1f14_58%,#d7a52e)] sm:h-40" />
                  <div className="space-y-4 p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-display text-2xl">{form.name || "Seu estabelecimento"}</h3>
                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {form.category || "Categoria"} · {form.city || "Cidade"}
                          {form.state ? ` - ${form.state}` : ""} · {form.musicStyle || "Estilo musical"}
                        </p>
                      </div>
                      <span className="w-fit rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                        Rascunho ativo
                      </span>
                    </div>

                    <p className="text-sm leading-7 text-[var(--muted)]">
                      {form.description || "Descreva o ambiente para aparecer aqui."}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs">
                      <Tag active>{form.priceRange || "Faixa de preço"}</Tag>
                      <Tag>{form.neighborhood || "Bairro"}</Tag>
                      <Tag active>{form.openTime && form.closeTime ? `${form.openTime} - ${form.closeTime}` : "Horários"}</Tag>
                      <Tag>{form.audience || "Público"}</Tag>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      {menuItems.map((draft) => (
                        <MenuDraftCard key={`preview-${draft.category}`} draft={draft} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-[24px] border border-white/10 bg-white/4 p-4">
                  <p className="text-sm leading-7 text-[var(--muted)]">
                    Depois desta etapa, o proprietário segue para o dashboard com atalhos
                    para mesas, comandas e ajustes finos do cardápio.
                  </p>
                  <Link
                    href="/owner/dashboard"
                    className="mt-4 inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-[var(--text)]"
                  >
                    Ir para dashboard
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      <button
        type="button"
        onClick={() => setIsAddMenuModalOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(56,109,249,0.3)] transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
      >
        <span className="text-lg leading-none">+</span>
        Novo item
      </button>

      {isAddMenuModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#050505]/80 p-4 backdrop-blur-sm sm:items-center">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[28px] border border-white/10 bg-[var(--panel)] p-6 shadow-2xl sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-2xl">Adicionar ao cardápio</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Cadastre uma nova bebida ou comida com validação por etapa.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm text-[var(--muted)] hover:bg-white/10 hover:text-white"
              >
                x
              </button>
            </div>

            <div className="mb-6 flex items-center justify-center gap-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-2 flex-1 rounded-full ${modalStep >= step ? "bg-[var(--gold)]" : "bg-white/10"}`}
                />
              ))}
            </div>

            {modalStep === 1 ? (
              <div>
                <div className="mb-5 grid grid-cols-2 gap-2 text-center text-sm">
                  <button
                    type="button"
                    onClick={() => updateMenuField("type", "Comida")}
                    className={`rounded-2xl px-4 py-3 font-semibold transition-all ${
                      newItem.type === "Comida"
                        ? "bg-[linear-gradient(135deg,#ff8b36,#ff5f6d)] text-white shadow-lg"
                        : "bg-white/5 text-[var(--muted)] hover:bg-white/10"
                    }`}
                  >
                    Comida
                  </button>
                  <button
                    type="button"
                    onClick={() => updateMenuField("type", "Bebida")}
                    className={`rounded-2xl px-4 py-3 font-semibold transition-all ${
                      newItem.type === "Bebida"
                        ? "bg-[linear-gradient(135deg,#4582ff,#24c6dc)] text-white shadow-lg"
                        : "bg-white/5 text-[var(--muted)] hover:bg-white/10"
                    }`}
                  >
                    Bebida
                  </button>
                </div>

                <div className="rounded-[24px] border border-dashed border-white/12 bg-white/4 p-4 text-center">
                  <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-[20px] bg-white/5 text-[var(--muted)]">
                    Foto
                  </div>
                  <p className="text-xs font-semibold text-[var(--text)]">Adicionar foto de destaque</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">Formatos suportados: JPG e PNG</p>
                </div>
              </div>
            ) : null}

            {modalStep === 2 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <ValidatedInput
                    label="Nome do item"
                    value={newItem.name}
                    onChange={(event) => updateMenuField("name", event.target.value)}
                    placeholder="Ex: Porção de fritas com bacon"
                    error={menuItemErrors.name}
                  />
                </div>
                <div className="sm:col-span-2">
                  <ValidatedTextarea
                    label="Descricao curta"
                    value={newItem.description}
                    onChange={(event) => updateMenuField("description", event.target.value)}
                    placeholder="Batata frita crocante com cheddar e bacon..."
                    error={menuItemErrors.description}
                  />
                </div>
              </div>
            ) : null}

            {modalStep === 3 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <ValidatedInput
                  label="Valor (R$)"
                  value={newItem.price}
                  onChange={(event) => handlePriceChange(event.target.value)}
                  placeholder="00,00"
                  error={menuItemErrors.price}
                />
                <ValidatedInput
                  label="Quantidade / Estoque"
                  value={newItem.quantity}
                  onChange={(event) => updateMenuField("quantity", event.target.value)}
                  placeholder="Ilimitado ou número"
                  hint="Deixe vazio para ilimitado"
                  error={menuItemErrors.quantity}
                />
              </div>
            ) : null}

            <div className="mt-8 flex gap-3">
              {modalStep > 1 ? (
                <button
                  type="button"
                  onClick={prevModalStep}
                  className="w-1/3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Voltar
                </button>
              ) : null}
              {modalStep < 3 ? (
                <button
                  type="button"
                  onClick={nextModalStep}
                  className={`rounded-2xl bg-[var(--gold)] px-5 py-3 text-center text-sm font-semibold text-black transition-transform hover:scale-[1.02] ${
                    modalStep > 1 ? "w-2/3" : "w-full"
                  }`}
                >
                  Continuar
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleAddMenuItem}
                  className="w-2/3 rounded-2xl bg-white px-5 py-3 text-center text-sm font-semibold text-black shadow-[0_16px_35px_rgba(255,255,255,0.2)] transition-transform hover:scale-[1.02]"
                >
                  Concluir cadastro
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function StageCard({ stage }: { stage: OnboardingStage }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 rounded-[24px] border border-white/8 bg-white/4 p-4">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)] font-display text-lg text-[#2f2100]">
        {stage.number}
      </span>
      <div>
        <h3 className="font-display text-xl">{stage.title}</h3>
        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{stage.description}</p>
      </div>
    </div>
  );
}

function StepPill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl px-3 py-2 text-sm transition-colors ${
        active
          ? "bg-[var(--accent)] font-semibold text-white"
          : "bg-white/5 text-[var(--muted)]"
      }`}
    >
      {children}
    </button>
  );
}

function ValidatedInput({
  label,
  value,
  placeholder,
  onChange,
  hint,
  type = "text",
  error,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
        {label}
      </p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-2xl border px-4 py-3 text-base text-[var(--text)] outline-none transition-all sm:text-sm ${
          error
            ? "border-rose-400/70 bg-rose-500/8 focus:border-rose-300 focus:ring-1 focus:ring-rose-300"
            : "border-white/8 bg-white/5 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]"
        } placeholder-white/20`}
      />
      {error ? (
        <p className="mt-2 text-xs leading-5 text-rose-300">{error}</p>
      ) : hint ? (
        <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{hint}</p>
      ) : null}
    </div>
  );
}

function ValidatedTextarea({
  label,
  value,
  placeholder,
  onChange,
  hint,
  error,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  hint?: string;
  error?: string;
}) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
        {label}
      </p>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className={`w-full rounded-2xl border px-4 py-3 text-base text-[var(--text)] outline-none transition-all sm:text-sm ${
          error
            ? "border-rose-400/70 bg-rose-500/8 focus:border-rose-300 focus:ring-1 focus:ring-rose-300"
            : "border-white/8 bg-white/5 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]"
        } placeholder-white/20`}
      />
      {error ? (
        <p className="mt-2 text-xs leading-5 text-rose-300">{error}</p>
      ) : hint ? (
        <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{hint}</p>
      ) : null}
    </div>
  );
}

function Tag({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
        active
          ? "bg-[var(--gold)] text-[#2d2003]"
          : "border border-white/10 bg-white/6 text-[var(--text)]"
      }`}
    >
      {children}
    </span>
  );
}

function MenuDraftCard({ draft }: { draft: MenuDraft }) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-white/4 p-4">
      <p className="font-display text-xl">{draft.category}</p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">
        {draft.items.map((item) => (
          <li key={item} className="rounded-2xl bg-black/14 px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/4 px-4 py-3">
      <span>{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}

