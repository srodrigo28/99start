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

export function OwnerAccessForm({ mode }: { mode: AccessMode }) {
  const router = useRouter();
  const [registerForm, setRegisterForm] = useState<RegisterForm>(initialRegisterForm);
  const [loginForm, setLoginForm] = useState<LoginForm>(initialLoginForm);
  const [address, setAddress] = useState<AddressForm>(initialAddressForm);
  const [registerErrors, setRegisterErrors] = useState<
    FormErrors<keyof RegisterForm | keyof AddressForm>
  >({});
  const [loginErrors, setLoginErrors] = useState<FormErrors<keyof LoginForm>>({});
  const [addressLookupMessage, setAddressLookupMessage] = useState("");
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isFetchingCep, setIsFetchingCep] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const registerProgress = useMemo(() => {
    const requiredChecks = [
      registerForm.establishmentName.trim(),
      registerForm.cnpj.replace(/\D/g, "").length === 14,
      registerForm.ownerName.trim(),
      registerForm.email.trim(),
      registerForm.phone.replace(/\D/g, "").length >= 10,
      registerForm.cep.replace(/\D/g, "").length === 8,
      registerForm.password.length >= 8,
      registerForm.confirmPassword.length >= 8,
      address.logradouro.trim(),
      address.numero.trim(),
      address.bairro.trim(),
      address.cidade.trim(),
      address.uf.trim(),
    ];

    const completed = requiredChecks.filter(Boolean).length;
    return Math.round((completed / requiredChecks.length) * 100);
  }, [address, registerForm]);

  const updateRegisterField = <K extends keyof RegisterForm>(
    field: K,
    value: RegisterForm[K],
  ) => {
    setRegisterForm((prev) => ({ ...prev, [field]: value }));
    setRegisterErrors((prev) => ({ ...prev, [field]: undefined }));
    setSubmitMessage("");
  };

  const updateLoginField = <K extends keyof LoginForm>(
    field: K,
    value: LoginForm[K],
  ) => {
    setLoginForm((prev) => ({ ...prev, [field]: value }));
    setLoginErrors((prev) => ({ ...prev, [field]: undefined }));
    setSubmitMessage("");
  };

  const updateAddressField = <K extends keyof AddressForm>(
    field: K,
    value: AddressForm[K],
  ) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
    setRegisterErrors((prev) => ({ ...prev, [field]: undefined }));
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

    if (digits.length !== 8) {
      return;
    }

    setIsFetchingCep(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
      const data = await response.json();

      if (data.erro) {
        setAddressLookupMessage("CEP não encontrado. Complete o endereço manualmente.");
        setIsAddressModalOpen(true);
        return;
      }

      setAddress((prev) => ({
        ...prev,
        logradouro: data.logradouro || prev.logradouro,
        bairro: data.bairro || prev.bairro,
        cidade: data.localidade || prev.cidade,
        uf: data.uf || prev.uf,
      }));
      setAddressLookupMessage("Endereço localizado. Revise e complete o número.");
      setIsAddressModalOpen(true);
    } catch {
      setAddressLookupMessage("Não foi possível consultar o CEP agora. Preencha o endereço manualmente.");
      setIsAddressModalOpen(true);
    } finally {
      setIsFetchingCep(false);
    }
  };

  const validateRegister = () => {
    const errors: FormErrors<keyof RegisterForm | keyof AddressForm> = {};

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
    if (registerForm.cep.replace(/\D/g, "").length !== 8) {
      errors.cep = "Digite um CEP válido.";
    }
    if (registerForm.password.length < 8) {
      errors.password = "A senha precisa ter pelo menos 8 caracteres.";
    }
    if (registerForm.confirmPassword !== registerForm.password) {
      errors.confirmPassword = "As senhas precisam ser iguais.";
    }
    if (!address.logradouro.trim()) errors.logradouro = "Informe o logradouro.";
    if (!address.numero.trim()) errors.numero = "Informe o número.";
    if (!address.bairro.trim()) errors.bairro = "Informe o bairro.";
    if (!address.cidade.trim()) errors.cidade = "Informe a cidade.";
    if (address.uf.trim().length !== 2) errors.uf = "Use a UF com 2 letras.";

    setRegisterErrors(errors);
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

  const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateRegister()) {
      setSubmitMessage("Revise os campos destacados para continuar.");
      return;
    }

    setSubmitMessage("Cadastro validado. Redirecionando para a próxima etapa...");
    router.push("/owner/onboarding");
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

  const confirmAddress = () => {
    const nextErrors: FormErrors<keyof RegisterForm | keyof AddressForm> = {};

    if (!address.logradouro.trim()) nextErrors.logradouro = "Informe o logradouro.";
    if (!address.numero.trim()) nextErrors.numero = "Informe o número.";
    if (!address.bairro.trim()) nextErrors.bairro = "Informe o bairro.";
    if (!address.cidade.trim()) nextErrors.cidade = "Informe a cidade.";
    if (address.uf.trim().length !== 2) nextErrors.uf = "Use a UF com 2 letras.";

    setRegisterErrors((prev) => ({ ...prev, ...nextErrors }));
    if (Object.keys(nextErrors).length > 0) return;
    setIsAddressModalOpen(false);
  };

  return (
    <>
      <section className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]">
        <div className="mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
              {mode === "register" ? "cadastro do estabelecimento" : "acesso do proprietário"}
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {mode === "register"
                ? "preencha os dados principais do negócio e do responsável"
                : "entre para acessar produtos, campanhas, mesas e comandas"}
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]">
            {mode === "register" ? `${registerProgress}% completo` : "acesso rápido"}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/8 bg-[var(--panel)] p-5">
          {mode === "register" ? (
            <form className="space-y-4" onSubmit={handleRegisterSubmit}>
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

              <div className="grid gap-4 sm:grid-cols-2">
                <ValidatedInput
                  label="Telefone"
                  value={registerForm.phone}
                  onChange={(event) => handlePhoneChange(event.target.value)}
                  placeholder="(00) 00000-0000"
                  hint="Use DDD e o principal número de contato."
                  error={registerErrors.phone}
                />
                <ValidatedInput
                  label="CEP"
                  value={registerForm.cep}
                  onChange={(event) => void handleCepChange(event.target.value)}
                  placeholder="00000-000"
                  hint={isFetchingCep ? "Buscando endereço..." : "Ao completar o CEP, abrimos a revisão do endereço."}
                  error={registerErrors.cep}
                />
              </div>

              <div className="rounded-[24px] border border-white/8 bg-white/4 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">Endereço do estabelecimento</p>
                    <p className="text-xs leading-5 text-[var(--muted)]">
                      {addressLookupMessage || "Revise rua, número, bairro, cidade e UF antes de continuar."}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsAddressModalOpen(true)}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold text-white"
                  >
                    Revisar endereço
                  </button>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
                  <AddressSummary label="Rua" value={address.logradouro || "Aguardando CEP"} />
                  <AddressSummary label="Número" value={address.numero || "Não informado"} />
                  <AddressSummary label="Bairro" value={address.bairro || "Não informado"} />
                  <AddressSummary
                    label="Cidade / UF"
                    value={
                      address.cidade || address.uf
                        ? `${address.cidade || "Cidade"}${address.uf ? ` - ${address.uf}` : ""}`
                        : "Não informado"
                    }
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <ValidatedInput
                  label="Senha"
                  type="password"
                  value={registerForm.password}
                  onChange={(event) => updateRegisterField("password", event.target.value)}
                  placeholder="Mínimo de 8 caracteres"
                  hint="Use uma senha segura para o primeiro acesso."
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

              {submitMessage ? (
                <p className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-[var(--muted)]">
                  {submitMessage}
                </p>
              ) : null}

              <button
                type="submit"
                className="block w-full rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Continuar cadastro
              </button>

              <p className="text-center text-xs leading-6 text-[var(--muted)]">
                Próximo passo: concluir o onboarding do estabelecimento com os dados básicos já validados.
              </p>

              <p className="text-center text-sm text-[var(--muted)]">
                Já tem conta?{" "}
                <Link href="/owner/login" className="font-semibold text-white">
                  Entrar agora
                </Link>
              </p>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleLoginSubmit}>
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

              {submitMessage ? (
                <p className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-[var(--muted)]">
                  {submitMessage}
                </p>
              ) : null}

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

      {isAddressModalOpen && mode === "register" ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#050505]/80 p-4 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-xl rounded-[28px] border border-white/10 bg-[var(--panel)] p-6 shadow-2xl sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-2xl">Endereço do estabelecimento</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Complete ou revise os dados do CEP {registerForm.cep || "informado"}.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsAddressModalOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm text-[var(--muted)] hover:bg-white/10 hover:text-white"
              >
                x
              </button>
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
              <div className="grid grid-cols-2 gap-4 sm:col-span-2">
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
                  error={registerErrors.uf}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={confirmAddress}
              className="mt-8 w-full rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_35px_rgba(56,109,249,0.2)] transition-transform hover:scale-[1.02]"
            >
              Confirmar endereço
            </button>
          </div>
        </div>
      ) : null}
    </>
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
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
        {label}
      </p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={type === "password" ? "current-password" : "on"}
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

function AddressSummary({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-black/14 px-3 py-3">
      <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">{label}</p>
      <p className="mt-2 text-sm text-white">{value}</p>
    </div>
  );
}
