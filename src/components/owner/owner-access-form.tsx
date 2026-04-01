"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type AccessMode = "register" | "login";

type RegisterForm = {
  establishmentName: string;
  cnpj: string;
  ownerName: string;
  email: string;
  phone: string;
  cep: string;
  password: string;
  confirmPassword: string;
};

type LoginForm = {
  email: string;
  password: string;
};

type AddressForm = {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
};

type FormErrors<T extends string> = Partial<Record<T, string>>;

type RegisterStep = 1 | 2 | 3 | 4;

const initialRegisterForm: RegisterForm = {
  establishmentName: "",
  cnpj: "",
  ownerName: "",
  email: "",
  phone: "",
  cep: "",
  password: "",
  confirmPassword: "",
};

const initialLoginForm: LoginForm = {
  email: "",
  password: "",
};

const initialAddressForm: AddressForm = {
  logradouro: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  uf: "",
};

const registerSteps = [
  { id: 1, emoji: "🏪", title: "Estabelecimento", text: "Dados principais do seu negócio." },
  { id: 2, emoji: "📍", title: "Endereço", text: "Localização para cadastro e operação." },
  { id: 3, emoji: "🔐", title: "Segurança", text: "Crie uma senha forte para acessar." },
] as const;

export function OwnerAccessForm({ mode }: { mode: AccessMode }) {
  const router = useRouter();
  const [registerForm, setRegisterForm] = useState<RegisterForm>(initialRegisterForm);
  const [loginForm, setLoginForm] = useState<LoginForm>(initialLoginForm);
  const [address, setAddress] = useState<AddressForm>(initialAddressForm);
  const [registerErrors, setRegisterErrors] = useState<
    FormErrors<keyof RegisterForm | keyof AddressForm>
  >({});
  const [loginErrors, setLoginErrors] = useState<FormErrors<keyof LoginForm>>({});
  const [submitMessage, setSubmitMessage] = useState("");
  const [addressLookupMessage, setAddressLookupMessage] = useState("");
  const [isFetchingCep, setIsFetchingCep] = useState(false);
  const [currentStep, setCurrentStep] = useState<RegisterStep>(1);

  const registerProgress = useMemo(() => {
    if (currentStep === 4) return 100;
    return Math.round((currentStep / 3) * 100);
  }, [currentStep]);

  const passwordStrength = useMemo(() => {
    const password = registerForm.password;
    let score = 0;

    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 2) {
      return { label: "Fraca", tone: "bg-rose-500", text: "Use mais caracteres, números e símbolos." };
    }
    if (score <= 4) {
      return { label: "Boa", tone: "bg-amber-400", text: "Está no caminho certo. Dá para reforçar mais." };
    }
    return { label: "Forte", tone: "bg-emerald-400", text: "Ótima senha para proteger seu acesso." };
  }, [registerForm.password]);

  const updateRegisterField = <K extends keyof RegisterForm>(field: K, value: RegisterForm[K]) => {
    setRegisterForm((prev) => ({ ...prev, [field]: value }));
    setRegisterErrors((prev) => ({ ...prev, [field]: undefined }));
    setSubmitMessage("");
  };

  const updateLoginField = <K extends keyof LoginForm>(field: K, value: LoginForm[K]) => {
    setLoginForm((prev) => ({ ...prev, [field]: value }));
    setLoginErrors((prev) => ({ ...prev, [field]: undefined }));
    setSubmitMessage("");
  };

  const updateAddressField = <K extends keyof AddressForm>(field: K, value: AddressForm[K]) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
    setRegisterErrors((prev) => ({ ...prev, [field]: undefined }));
    setSubmitMessage("");
  };

  const handlePhoneChange = (value: string) => {
    let digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length > 0) {
      digits = digits.replace(/^(\d{2})(\d)/g, "($1) $2");
      digits = digits.replace(/(\d)(\d{4})$/, "$1-$2");
    }
    updateRegisterField("phone", digits);
  };

  const handleCnpjChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 14);
    let formatted = digits;

    if (digits.length > 2) formatted = formatted.replace(/^(\d{2})(\d)/, "$1.$2");
    if (digits.length > 5) formatted = formatted.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    if (digits.length > 8) formatted = formatted.replace(/\.(\d{3})(\d)/, ".$1/$2");
    if (digits.length > 12) formatted = formatted.replace(/(\d{4})(\d)/, "$1-$2");

    updateRegisterField("cnpj", formatted);
  };

  const handleCepChange = async (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);
    const formatted = digits.length > 5 ? digits.replace(/^(\d{5})(\d)/, "$1-$2") : digits;

    updateRegisterField("cep", formatted);
    setAddressLookupMessage("");

    if (digits.length !== 8) return;

    setIsFetchingCep(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
      const data = await response.json();

      if (data.erro) {
        setAddressLookupMessage("CEP não encontrado. Preencha o endereço manualmente.");
        return;
      }

      setAddress((prev) => ({
        ...prev,
        logradouro: data.logradouro || prev.logradouro,
        bairro: data.bairro || prev.bairro,
        cidade: data.localidade || prev.cidade,
        uf: data.uf || prev.uf,
      }));
      setAddressLookupMessage("Endereço localizado. Complete número e complemento, se necessário.");
    } catch {
      setAddressLookupMessage("Não foi possível consultar o CEP agora. Preencha o endereço manualmente.");
    } finally {
      setIsFetchingCep(false);
    }
  };

  const validateRegisterStep = (step: RegisterStep) => {
    const errors: FormErrors<keyof RegisterForm | keyof AddressForm> = {};

    if (step === 1) {
      if (!registerForm.establishmentName.trim()) {
        errors.establishmentName = "Informe o nome do estabelecimento.";
      }
      if (registerForm.cnpj.replace(/\D/g, "").length !== 14) {
        errors.cnpj = "Digite um CNPJ válido com 14 números.";
      }
      if (!registerForm.ownerName.trim()) {
        errors.ownerName = "Informe o nome do responsável.";
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerForm.email)) {
        errors.email = "Digite um e-mail válido.";
      }
      if (registerForm.phone.replace(/\D/g, "").length < 10) {
        errors.phone = "Informe um telefone com DDD.";
      }
    }

    if (step === 2) {
      if (registerForm.cep.replace(/\D/g, "").length !== 8) {
        errors.cep = "Digite um CEP válido.";
      }
      if (!address.logradouro.trim()) errors.logradouro = "Informe o logradouro.";
      if (!address.numero.trim()) errors.numero = "Informe o número.";
      if (!address.bairro.trim()) errors.bairro = "Informe o bairro.";
      if (!address.cidade.trim()) errors.cidade = "Informe a cidade.";
      if (address.uf.trim().length !== 2) errors.uf = "Use a UF com 2 letras.";
    }

    if (step === 3) {
      if (registerForm.password.length < 8) {
        errors.password = "A senha precisa ter pelo menos 8 caracteres.";
      }
      if (passwordStrength.label === "Fraca") {
        errors.password = "Crie uma senha mais forte para continuar.";
      }
      if (registerForm.confirmPassword !== registerForm.password) {
        errors.confirmPassword = "As senhas precisam ser iguais.";
      }
    }

    setRegisterErrors((prev) => ({ ...prev, ...errors }));
    return Object.keys(errors).length === 0;
  };

  const validateLogin = () => {
    const errors: FormErrors<keyof LoginForm> = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) {
      errors.email = "Digite um e-mail válido.";
    }
    if (loginForm.password.length < 8) {
      errors.password = "A senha precisa ter pelo menos 8 caracteres.";
    }

    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const goToNextStep = () => {
    if (!validateRegisterStep(currentStep)) {
      setSubmitMessage("Revise os campos destacados para avançar.");
      return;
    }

    setSubmitMessage("");
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as RegisterStep);
    }
  };

  const goToPreviousStep = () => {
    setSubmitMessage("");
    if (currentStep > 1 && currentStep < 4) {
      setCurrentStep((prev) => (prev - 1) as RegisterStep);
    }
  };

  const finishRegistration = () => {
    router.push("/owner/dashboard");
  };

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateLogin()) {
      setSubmitMessage("Preencha e-mail e senha corretamente para entrar.");
      return;
    }

    setSubmitMessage("Acesso validado. Entrando no painel do proprietário...");
    router.push("/owner/dashboard");
  };

  return (
    <section className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)] sm:p-5">
      <div className="mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
            {mode === "register" ? "cadastro em etapas" : "acesso do proprietário"}
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {mode === "register"
              ? currentStep === 4
                ? "cadastro concluído com sucesso"
                : "preencha uma etapa por vez para avançar sem rolagem longa"
              : "entre para acessar produtos, campanhas, mesas e comandas"}
          </p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]">
          {mode === "register" ? `${registerProgress}% concluído` : "acesso rápido"}
        </div>
      </div>

      <div className="rounded-[28px] border border-white/8 bg-[var(--panel)] p-5 sm:p-6">
        {mode === "register" ? (
          <div className="space-y-6">
            <div className="grid gap-3 sm:grid-cols-3">
              {registerSteps.map((step) => {
                const isActive = currentStep === step.id;
                const isDone = currentStep > step.id || currentStep === 4;
                return (
                  <div
                    key={step.id}
                    className={`rounded-[24px] border px-4 py-4 transition-all duration-300 ${
                      isActive
                        ? "border-[var(--gold)] bg-white/8 shadow-[0_12px_30px_rgba(245,194,85,0.12)]"
                        : isDone
                          ? "border-emerald-400/30 bg-emerald-500/8"
                          : "border-white/8 bg-white/4"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl">
                        {isDone ? "✅" : step.emoji}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                          Etapa {step.id}
                        </p>
                        <p className="font-display text-lg text-white">{step.title}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 transition-all duration-300">
              {currentStep === 1 ? (
                <div className="space-y-5 animate-[fadeIn_.35s_ease]">
                  <StepIntro
                    emoji="🏪"
                    mobileTitle="Dados do local"
                    title="Informações do estabelecimento"
                    mobileText="Preencha os dados principais."
                    text="Vamos começar com os dados principais do seu negócio e da pessoa responsável."
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <ValidatedInput
                      label="Nome do estabelecimento"
                      value={registerForm.establishmentName}
                      onChange={(event) => updateRegisterField("establishmentName", event.target.value)}
                      placeholder="Ex: Restaurante Sabor da Casa"
                      hint="Digite o nome comercial que será exibido para seus clientes."
                      error={registerErrors.establishmentName}
                    />
                    <ValidatedInput
                      label="CNPJ"
                      value={registerForm.cnpj}
                      onChange={(event) => handleCnpjChange(event.target.value)}
                      placeholder="00.000.000/0000-00"
                      hint="Informe o CNPJ do estabelecimento com 14 números."
                      error={registerErrors.cnpj}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <ValidatedInput
                      label="Nome do responsável"
                      value={registerForm.ownerName}
                      onChange={(event) => updateRegisterField("ownerName", event.target.value)}
                      placeholder="Ex: Mateus Vinicius"
                      error={registerErrors.ownerName}
                    />
                    <ValidatedInput
                      label="E-mail"
                      type="email"
                      value={registerForm.email}
                      onChange={(event) => updateRegisterField("email", event.target.value)}
                      placeholder="voce@empresa.com"
                      error={registerErrors.email}
                    />
                  </div>

                  <ValidatedInput
                    label="Telefone"
                    value={registerForm.phone}
                    onChange={(event) => handlePhoneChange(event.target.value)}
                    placeholder="(00) 00000-0000"
                    hint="Use DDD e o principal número de contato."
                    error={registerErrors.phone}
                  />
                </div>
              ) : null}

              {currentStep === 2 ? (
                <div className="space-y-5 animate-[fadeIn_.35s_ease]">
                  <StepIntro
                    emoji="📍"
                    mobileTitle="Endereço"
                    title="Endereço do estabelecimento"
                    mobileText="Informe onde seu negócio funciona."
                    text="Agora vamos registrar a localização do seu negócio para manter tudo organizado."
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <ValidatedInput
                      label="CEP"
                      value={registerForm.cep}
                      onChange={(event) => void handleCepChange(event.target.value)}
                      placeholder="00000-000"
                      hint={isFetchingCep ? "Buscando endereço..." : "Ao informar o CEP, tentamos preencher o endereço automaticamente."}
                      error={registerErrors.cep}
                    />
                    <AnimatedFeedback
                      tone={addressLookupMessage ? "info" : "neutral"}
                      emoji={addressLookupMessage ? "✨" : "🧭"}
                      text={addressLookupMessage || "Preencha os campos abaixo para continuar para a próxima etapa."}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <ValidatedInput
                        label="Rua / Logradouro"
                        value={address.logradouro}
                        onChange={(event) => updateAddressField("logradouro", event.target.value)}
                        error={registerErrors.logradouro}
                      />
                    </div>
                    <ValidatedInput
                      label="Número"
                      value={address.numero}
                      onChange={(event) => updateAddressField("numero", event.target.value)}
                      error={registerErrors.numero}
                    />
                    <ValidatedInput
                      label="Complemento"
                      value={address.complemento}
                      onChange={(event) => updateAddressField("complemento", event.target.value)}
                      hint="Opcional"
                    />
                    <ValidatedInput
                      label="Bairro"
                      value={address.bairro}
                      onChange={(event) => updateAddressField("bairro", event.target.value)}
                      error={registerErrors.bairro}
                    />
                    <ValidatedInput
                      label="Cidade"
                      value={address.cidade}
                      onChange={(event) => updateAddressField("cidade", event.target.value)}
                      error={registerErrors.cidade}
                    />
                    <ValidatedInput
                      label="UF"
                      value={address.uf}
                      onChange={(event) => updateAddressField("uf", event.target.value.toUpperCase().slice(0, 2))}
                      placeholder="SP"
                      error={registerErrors.uf}
                    />
                  </div>
                </div>
              ) : null}

              {currentStep === 3 ? (
                <div className="space-y-5 animate-[fadeIn_.35s_ease]">
                  <StepIntro
                    emoji="🔐"
                    mobileTitle="Criar senha"
                    title="Crie sua senha"
                    mobileText="Defina uma senha segura."
                    text="Finalize seu cadastro com uma senha segura para proteger o acesso ao painel."
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <ValidatedInput
                      label="Senha"
                      type="password"
                      value={registerForm.password}
                      onChange={(event) => updateRegisterField("password", event.target.value)}
                      placeholder="Mínimo de 8 caracteres"
                      hint="Use letras maiúsculas, minúsculas, números e símbolos."
                      error={registerErrors.password}
                    />
                    <ValidatedInput
                      label="Confirmar senha"
                      type="password"
                      value={registerForm.confirmPassword}
                      onChange={(event) => updateRegisterField("confirmPassword", event.target.value)}
                      placeholder="Repita a senha"
                      error={registerErrors.confirmPassword}
                    />
                  </div>

                  <div className="rounded-[24px] border border-white/8 bg-white/4 p-4 transition-all duration-300">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white">Qualidade da senha</p>
                        <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{passwordStrength.text}</p>
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white">
                        {passwordStrength.label}
                      </span>
                    </div>
                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/8">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${passwordStrength.tone}`}
                        style={{
                          width:
                            passwordStrength.label === "Fraca"
                              ? "34%"
                              : passwordStrength.label === "Boa"
                                ? "68%"
                                : "100%",
                        }}
                      />
                    </div>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      <PasswordRule ok={registerForm.password.length >= 8} text="Pelo menos 8 caracteres" />
                      <PasswordRule ok={/[A-Z]/.test(registerForm.password)} text="Uma letra maiúscula" />
                      <PasswordRule ok={/[a-z]/.test(registerForm.password)} text="Uma letra minúscula" />
                      <PasswordRule ok={/\d/.test(registerForm.password)} text="Um número" />
                    </div>
                  </div>
                </div>
              ) : null}

              {currentStep === 4 ? (
                <div className="space-y-5 text-center animate-[fadeIn_.4s_ease]">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[linear-gradient(135deg,#22c55e,#14b8a6)] text-4xl shadow-[0_18px_45px_rgba(20,184,166,0.22)]">
                    🎉
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-white">Boas-vindas ao 99Start</h3>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                      Seu cadastro foi concluído com sucesso. Agora você já pode acessar o dashboard e começar a organizar seu estabelecimento.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <AnimatedFeedback tone="success" emoji="🏪" text={registerForm.establishmentName || "Estabelecimento cadastrado"} />
                    <AnimatedFeedback tone="success" emoji="📍" text={`${address.cidade || "Cidade"}${address.uf ? ` - ${address.uf}` : ""}`} />
                    <AnimatedFeedback tone="success" emoji="🔐" text="Acesso protegido com senha cadastrada" />
                  </div>
                  <button
                    type="button"
                    onClick={finishRegistration}
                    className="mx-auto block w-full max-w-md rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_35px_rgba(56,109,249,0.24)] transition-transform hover:scale-[1.01]"
                  >
                    Ir para o dashboard
                  </button>
                </div>
              ) : null}
            </div>

            {submitMessage ? (
              <AnimatedFeedback tone="error" emoji="⚠️" text={submitMessage} />
            ) : null}

            {currentStep < 4 ? (
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={goToPreviousStep}
                  disabled={currentStep === 1}
                  className="rounded-2xl border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={goToNextStep}
                  className="rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(56,109,249,0.22)] transition-transform hover:scale-[1.01]"
                >
                  {currentStep === 3 ? "Finalizar cadastro" : "Próximo"}
                </button>
              </div>
            ) : null}

            <p className="text-center text-sm text-[var(--muted)]">
              Já tem conta?{" "}
              <Link href="/owner/login" className="font-semibold text-white">
                Entrar agora
              </Link>
            </p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleLoginSubmit} autoComplete="off">
            <ValidatedInput
              label="E-mail"
              type="email"
              value={loginForm.email}
              onChange={(event) => updateLoginField("email", event.target.value)}
              placeholder="voce@empresa.com"
              error={loginErrors.email}
            />
            <ValidatedInput
              label="Senha"
              type="password"
              value={loginForm.password}
              onChange={(event) => updateLoginField("password", event.target.value)}
              placeholder="Digite sua senha"
              hint="Acesso direto ao painel do proprietário."
              error={loginErrors.password}
            />

            {submitMessage ? <AnimatedFeedback tone="error" emoji="⚠️" text={submitMessage} /> : null}

            <button
              type="submit"
              className="block w-full rounded-2xl bg-[linear-gradient(135deg,#ff8b36,#ff5f6d)] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Entrar no painel
            </button>

            <p className="text-center text-sm text-[var(--muted)]">
              Ainda não tem conta?{" "}
              <Link href="/owner/register" className="font-semibold text-white">
                Criar cadastro
              </Link>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function StepIntro({
  emoji,
  title,
  text,
  mobileTitle,
  mobileText,
}: {
  emoji: string;
  title: string;
  text: string;
  mobileTitle?: string;
  mobileText?: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-[24px] border border-white/8 bg-white/4 p-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,139,54,0.24),rgba(56,109,249,0.22))] text-2xl">
        {emoji}
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-xl leading-tight text-white sm:text-2xl">
          <span className="sm:hidden">{mobileTitle || title}</span>
          <span className="hidden sm:inline">{title}</span>
        </h3>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          <span className="sm:hidden">{mobileText || text}</span>
          <span className="hidden sm:inline">{text}</span>
        </p>
      </div>
    </div>
  );
}

function AnimatedFeedback({
  emoji,
  text,
  tone,
}: {
  emoji: string;
  text: string;
  tone: "info" | "success" | "error" | "neutral";
}) {
  const toneClass = {
    info: "border-sky-400/20 bg-sky-500/10 text-sky-100",
    success: "border-emerald-400/20 bg-emerald-500/10 text-emerald-100",
    error: "border-rose-400/20 bg-rose-500/10 text-rose-100",
    neutral: "border-white/10 bg-white/4 text-[var(--muted)]",
  }[tone];

  return (
    <div className={`rounded-[22px] border px-4 py-3 transition-all duration-300 animate-[fadeIn_.35s_ease] ${toneClass}`}>
      <p className="text-sm leading-6">
        <span className="mr-2">{emoji}</span>
        {text}
      </p>
    </div>
  );
}

function PasswordRule({ ok, text }: { ok: boolean; text: string }) {
  return (
    <div className={`rounded-2xl border px-3 py-2 text-sm transition-all duration-300 ${ok ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-100" : "border-white/8 bg-white/4 text-[var(--muted)]"}`}>
      <span className="mr-2">{ok ? "✅" : "•"}</span>
      {text}
    </div>
  );
}

function ValidatedInput({
  label,
  value,
  hint,
  placeholder,
  onChange,
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
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
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
