import { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
  LinearTransition,
} from "react-native-reanimated";

import {
  FormAlert,
  GlassPanel,
  GradientButton,
  LockIcon,
  PinIcon,
  ScreenContainer,
  SectionLabel,
  StoreIcon,
} from "../../shared/components";
import { useResponsive } from "../../shared/hooks";
import {
  formatCep,
  formatCnpj,
  formatPhone,
  isCep,
  isCnpj,
  isEmail,
  isPhone,
  isRequired,
  isStrongPassword,
  trimMultilineSpaces,
} from "../../shared/utils";
import {
  CadastroHeader,
  FormCard,
  PasswordRule,
  StepStatusCard,
  TextField,
} from "./components";
import { ApiRequestError, lookupCep, registerOwner } from "../../services";
import type { AuthSession } from "../../types";

type CadastroScreenProps = {
  onBackHome: () => void;
  onComplete: (payload: { ownerName: string; city: string; session: AuthSession }) => void;
};

type StepId = 1 | 2 | 3;

type FormState = {
  businessName: string;
  cnpj: string;
  ownerName: string;
  email: string;
  phone: string;
  cep: string;
  address: string;
  complement: string;
  neighborhood: string;
  city: string;
  password: string;
  confirmPassword: string;
};

const initialState: FormState = {
  businessName: "",
  cnpj: "",
  ownerName: "",
  email: "",
  phone: "",
  cep: "",
  address: "",
  complement: "",
  neighborhood: "",
  city: "",
  password: "",
  confirmPassword: "",
};

export function CadastroScreen({ onBackHome, onComplete }: CadastroScreenProps) {
  const { isSmallPhone, sectionPadding } = useResponsive();
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [alert, setAlert] = useState<
    { title: string; message?: string; variant: "error" | "success" | "info" } | undefined
  >();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLookingUpCep, setIsLookingUpCep] = useState(false);

  const passwordRules = useMemo(
    () => [
      {
        label: "Pelo menos 8 caracteres",
        met: form.password.length >= 8,
      },
      {
        label: "Uma letra maiuscula",
        met: /[A-Z]/.test(form.password),
      },
      {
        label: "Uma letra minuscula",
        met: /[a-z]/.test(form.password),
      },
      {
        label: "Um numero",
        met: /\d/.test(form.password),
      },
    ],
    [form.password],
  );

  const strength = passwordRules.filter((rule) => rule.met).length;
  const progress = currentStep === 1 ? 33 : currentStep === 2 ? 66 : 100;
  const strengthLabel = strength >= 4 ? "Forte" : "Fraca";
  const strengthColor = strength >= 4 ? "#24d98a" : "#ff4b72";

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((previous) => ({ ...previous, [key]: value }));

  const clearFieldError = (key: keyof FormState) =>
    setErrors((previous) => ({ ...previous, [key]: undefined }));

  const validateStepOne = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!isRequired(form.businessName)) {
      nextErrors.businessName = "Informe o nome do estabelecimento.";
    }
    if (!isCnpj(form.cnpj)) {
      nextErrors.cnpj = "Digite um CNPJ valido.";
    }
    if (!isRequired(form.ownerName)) {
      nextErrors.ownerName = "Informe o nome do responsavel.";
    }
    if (!isEmail(form.email)) {
      nextErrors.email = "Digite um e-mail valido.";
    }
    if (!isPhone(form.phone)) {
      nextErrors.phone = "Digite um telefone valido com DDD.";
    }

    return nextErrors;
  };

  const validateStepTwo = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!isCep(form.cep)) {
      nextErrors.cep = "Informe um CEP valido com 8 digitos.";
    }
    if (!isRequired(form.address)) {
      nextErrors.address = "Busque um CEP valido para preencher o endereco.";
    }
    if (!isRequired(form.neighborhood)) {
      nextErrors.neighborhood = "Busque um CEP valido para preencher o bairro.";
    }
    if (!isRequired(form.city)) {
      nextErrors.city = "Busque um CEP valido para preencher a cidade.";
    }

    return nextErrors;
  };

  const validateStepThree = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!isStrongPassword(form.password)) {
      nextErrors.password = "A senha precisa cumprir todos os requisitos de seguranca.";
    }
    if (form.confirmPassword !== form.password || !isRequired(form.confirmPassword)) {
      nextErrors.confirmPassword = "A confirmacao precisa ser igual a senha.";
    }

    return nextErrors;
  };

  const nextStep = () => {
    const nextErrors =
      currentStep === 1 ? validateStepOne() : currentStep === 2 ? validateStepTwo() : {};

    setErrors((previous) => ({ ...previous, ...nextErrors }));

    if (Object.keys(nextErrors).length > 0) {
      setAlert({
        title: "Faltam alguns dados para avancar",
        variant: "error",
      });
      return;
    }

    setAlert(undefined);
    setCurrentStep((previous) => {
      if (previous >= 3) return previous;
      return (previous + 1) as StepId;
    });
  };

  const previousStep = () => {
    setAlert(undefined);
    setCurrentStep((previous) => {
      if (previous <= 1) return previous;
      return (previous - 1) as StepId;
    });
  };

  const renderStepContainer = (step: StepId, children: React.ReactNode) => {
    const isForwardMotion = step >= currentStep;

    return (
      <Animated.View
        key={`cadastro-step-${step}`}
        entering={isForwardMotion ? FadeInRight.duration(240) : FadeInLeft.duration(240)}
        exiting={isForwardMotion ? FadeOutLeft.duration(180) : FadeOutRight.duration(180)}
        layout={LinearTransition.duration(220)}
      >
        {children}
      </Animated.View>
    );
  };

  const buildRegisterPayload = () => ({
    owner_name: form.ownerName.trim(),
    email: form.email.trim().toLowerCase(),
    password: form.password,
    establishment_name: form.businessName.trim(),
    cnpj: form.cnpj.trim(),
    phone: form.phone.trim(),
    address: [form.address.trim(), form.complement.trim()].filter(Boolean).join(", "),
    neighborhood: form.neighborhood.trim(),
    city: form.city.trim(),
  });

  const handleCepLookup = async (cepValue: string) => {
    if (!isCep(cepValue)) {
      return;
    }

    setIsLookingUpCep(true);
    setAlert({
      title: "Consultando CEP",
      message: "Estamos preenchendo seu endereco automaticamente.",
      variant: "info",
    });

    try {
      const result = await lookupCep(cepValue);

      if (!result.address || !result.neighborhood || !result.city) {
        setErrors((previous) => ({
          ...previous,
          cep: "O CEP encontrado nao trouxe endereco completo.",
        }));
        setAlert({
          title: "CEP com retorno incompleto",
          message: "Tente outro CEP ou revise os dados da localizacao.",
          variant: "error",
        });
        return;
      }

      setForm((previous) => ({
        ...previous,
        address: result.address,
        neighborhood: result.neighborhood,
        city: result.state ? `${result.city} - ${result.state}` : result.city,
      }));
      setErrors((previous) => ({
        ...previous,
        cep: undefined,
        address: undefined,
        neighborhood: undefined,
        city: undefined,
      }));
      setAlert({
        title: "Endereco preenchido com sucesso",
        message: "Agora falta apenas informar o complemento, se necessario.",
        variant: "success",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Nao foi possivel consultar o CEP.";

      setForm((previous) => ({
        ...previous,
        address: "",
        neighborhood: "",
        city: "",
      }));
      setErrors((previous) => ({
        ...previous,
        cep: message,
      }));
      setAlert({
        title: "Falha ao consultar o CEP",
        message,
        variant: "error",
      });
    } finally {
      setIsLookingUpCep(false);
    }
  };

  const finalizeRegistration = async () => {
    const nextErrors = validateStepThree();
    setErrors((previous) => ({ ...previous, ...nextErrors }));

    if (Object.keys(nextErrors).length > 0) {
      setAlert({
        title: "Senha ainda nao aprovada",
        message: "Ajuste os campos de seguranca para finalizar o cadastro com confianca.",
        variant: "error",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const session = await registerOwner(buildRegisterPayload());
      setAlert({
        title: "Cadastro realizado com sucesso",
        message: "Seu estabelecimento foi criado e a sessao inicial ja foi aberta.",
        variant: "success",
      });
      onComplete({
        ownerName: session.user.owner_name || form.ownerName || "Sebastiao Rodrigo",
        city: session.establishment.city || form.city || "Aparecida de Goiania - GO",
        session,
      });
    } catch (error) {
      if (error instanceof ApiRequestError) {
        const apiFieldErrors: Partial<Record<keyof FormState, string>> = {};
        const normalizedMessage = error.message.toLowerCase();

        if (error.errors.includes("owner_name")) apiFieldErrors.ownerName = "Informe o nome do responsavel.";
        if (error.errors.includes("email")) apiFieldErrors.email = "Informe um e-mail valido.";
        if (error.errors.includes("password")) apiFieldErrors.password = "Revise a senha informada.";
        if (error.errors.includes("establishment_name")) apiFieldErrors.businessName = "Informe o nome do estabelecimento.";
        if (error.errors.includes("cnpj")) apiFieldErrors.cnpj = "Revise o CNPJ informado.";
        if (error.errors.includes("phone")) apiFieldErrors.phone = "Revise o telefone informado.";
        if (error.errors.includes("address")) apiFieldErrors.address = "Informe o endereco.";
        if (error.errors.includes("neighborhood")) apiFieldErrors.neighborhood = "Informe o bairro.";
        if (error.errors.includes("city")) apiFieldErrors.city = "Informe a cidade.";
        if (normalizedMessage.includes("este nome")) {
          apiFieldErrors.businessName = "Ja existe um estabelecimento com este nome.";
        }
        if (normalizedMessage.includes("este cnpj")) {
          apiFieldErrors.cnpj = "Ja existe um estabelecimento com este CNPJ.";
        }
        if (normalizedMessage.includes("este e-mail")) {
          apiFieldErrors.email = "Ja existe um usuario com este e-mail.";
        }

        setErrors((previous) => ({ ...previous, ...apiFieldErrors }));
        setAlert({
          title: "Nao foi possivel concluir o cadastro",
          message: error.message,
          variant: "error",
        });
      } else {
        setAlert({
          title: "Falha de conexao com a API",
          message: "Verifique a URL ativa da API e tente novamente em instantes.",
          variant: "error",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScreenContainer>
      <CadastroHeader onBackHome={onBackHome} />

      <GlassPanel className="mb-4">
        <View className="gap-5" style={{ padding: sectionPadding }}>
          <SectionLabel
            eyebrow="Cadastro em etapas"
            subtitle="preencha uma etapa por vez para avancar sem rolagem longa"
          />

          <View className="gap-2">
            <Text className="self-start rounded-full border border-[#3b4b62] bg-[#1c2635] px-3 py-1 text-xs text-[#d7e3f5]">
              {progress}% concluido
            </Text>
            <View className="h-3 rounded-full bg-[#293548]">
              <View
                className="h-3 rounded-full bg-[#4daafc]"
                style={{ width: `${progress}%` }}
              />
            </View>
          </View>

          <View className="gap-3">
            <StepStatusCard
              icon={<StoreIcon />}
              step="Etapa 1"
              title="Estabelecimento"
              description="Dados principais do seu negocio."
              state={currentStep === 1 ? "current" : currentStep > 1 ? "complete" : "upcoming"}
            />
            <StepStatusCard
              icon={<PinIcon />}
              step="Etapa 2"
              title="Endereco"
              description="Localizacao para cadastro e operacao."
              state={currentStep === 2 ? "current" : currentStep > 2 ? "complete" : "upcoming"}
            />
            <StepStatusCard
              icon={<LockIcon />}
              step="Etapa 3"
              title="Seguranca"
              description="Crie uma senha forte para acessar."
              state={currentStep === 3 ? "current" : "upcoming"}
            />
          </View>
        </View>
      </GlassPanel>

      {currentStep === 1 ? (
        renderStepContainer(
          1,
          <FormCard
            icon={<StoreIcon size={28} />}
            title="Dados do local"
            subtitle="Preencha os dados principais."
          >
            <View className="gap-4">
              {alert ? (
                <FormAlert
                  title={alert.title}
                  message={alert.message}
                  variant={alert.variant}
                  onClose={() => setAlert(undefined)}
                />
              ) : null}
              <TextField
                label="Nome do estabelecimento"
                placeholder="Ex: Restaurante Sabor da Casa"
                help="Digite o nome comercial que sera exibido para seus clientes."
                value={form.businessName}
                onChangeText={(value) => {
                  updateField("businessName", trimMultilineSpaces(value));
                  clearFieldError("businessName");
                }}
                error={errors.businessName}
              />
              <TextField
                label="CNPJ"
                placeholder="00.000.000/0000-00"
                help="Informe o CNPJ do estabelecimento com 14 numeros."
                value={form.cnpj}
                onChangeText={(value) => {
                  updateField("cnpj", formatCnpj(value));
                  clearFieldError("cnpj");
                }}
                error={errors.cnpj}
                keyboardType="number-pad"
              />
              <TextField
                label="Nome do responsavel"
                placeholder="Ex: Mateus Vinicius"
                value={form.ownerName}
                onChangeText={(value) => {
                  updateField("ownerName", trimMultilineSpaces(value));
                  clearFieldError("ownerName");
                }}
                error={errors.ownerName}
              />
              <TextField
                label="E-mail"
                placeholder="voce@empresa.com"
                value={form.email}
                onChangeText={(value) => {
                  updateField("email", value.trim());
                  clearFieldError("email");
                }}
                error={errors.email}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextField
                label="Telefone"
                placeholder="(00) 00000-0000"
                help="Use DDD e o principal numero de contato."
                value={form.phone}
                onChangeText={(value) => {
                  updateField("phone", formatPhone(value));
                  clearFieldError("phone");
                }}
                error={errors.phone}
                keyboardType="phone-pad"
              />
              <View className="gap-3 pt-2">
                <GradientButton label="Voltar" variant="secondary" onPress={onBackHome} disabled={isSubmitting} />
                <LinearGradient
                  colors={["#4476ff", "#28c8e8"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={{ borderRadius: 18 }}
                >
                  <Pressable onPress={nextStep} className="px-5 py-4" disabled={isSubmitting}>
                    <Text className="text-center text-base font-semibold text-white">
                      Proximo
                    </Text>
                  </Pressable>
                </LinearGradient>
                <Text className="text-center text-sm text-[#d7e3f6]">
                  Ja tem conta? <Text className="font-semibold">Entrar agora</Text>
                </Text>
              </View>
            </View>
          </FormCard>,
        )
      ) : null}

      {currentStep === 2 ? (
        renderStepContainer(
          2,
          <FormCard
            icon={<PinIcon size={28} />}
            title="Endereco do estabelecimento"
            subtitle="Defina a localizacao de atendimento."
          >
            <View className="gap-4">
              {alert ? (
                <FormAlert
                  title={alert.title}
                  message={alert.message}
                  variant={alert.variant}
                  onClose={() => setAlert(undefined)}
                />
              ) : null}
              <TextField
                label="CEP"
                placeholder="00000-000"
                help={
                  isLookingUpCep
                    ? "Consultando o CEP informado..."
                    : "Digite o CEP para preencher endereco, bairro e cidade automaticamente."
                }
                value={form.cep}
                onChangeText={(value) => {
                  const formatted = formatCep(value);
                  updateField("cep", formatted);
                  clearFieldError("cep");

                  if (formatted.length < 9) {
                    setForm((previous) => ({
                      ...previous,
                      cep: formatted,
                      address: "",
                      neighborhood: "",
                      city: "",
                    }));
                  }

                  if (formatted.length === 9) {
                    void handleCepLookup(formatted);
                  }
                }}
                error={errors.cep}
                keyboardType="number-pad"
              />
              <TextField
                label="Endereco"
                placeholder="Endereco preenchido pelo CEP"
                help="Campo preenchido automaticamente a partir do CEP."
                value={form.address}
                onChangeText={() => undefined}
                error={errors.address}
                editable={false}
              />
              <TextField
                label="Complemento"
                placeholder="Ex: Quadra 18, lote 4, sala 2"
                help="Digite apenas o complemento necessario para localizar melhor o estabelecimento."
                value={form.complement}
                onChangeText={(value) => {
                  updateField("complement", trimMultilineSpaces(value));
                  clearFieldError("complement");
                }}
                error={errors.complement}
              />
              <TextField
                label="Bairro"
                placeholder="Bairro preenchido pelo CEP"
                value={form.neighborhood}
                onChangeText={() => undefined}
                error={errors.neighborhood}
                editable={false}
              />
              <TextField
                label="Cidade"
                placeholder="Cidade preenchida pelo CEP"
                value={form.city}
                onChangeText={() => undefined}
                error={errors.city}
                editable={false}
              />
              <View className="gap-3 pt-2">
                <GradientButton label="Voltar" variant="secondary" onPress={previousStep} disabled={isSubmitting || isLookingUpCep} />
                <LinearGradient
                  colors={["#4476ff", "#28c8e8"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={{ borderRadius: 18 }}
                >
                  <Pressable onPress={nextStep} className="px-5 py-4" disabled={isSubmitting || isLookingUpCep}>
                    <Text className="text-center text-base font-semibold text-white">
                      {isLookingUpCep ? "Buscando CEP..." : "Proximo"}
                    </Text>
                  </Pressable>
                </LinearGradient>
              </View>
            </View>
          </FormCard>,
        )
      ) : null}

      {currentStep === 3 ? (
        renderStepContainer(
          3,
          <FormCard
            icon={<LockIcon size={28} />}
            title="Criar senha"
            subtitle="Defina uma senha segura."
          >
            <View className="gap-4">
              {alert ? (
                <FormAlert
                  title={alert.title}
                  message={alert.message}
                  variant={alert.variant}
                  onClose={() => setAlert(undefined)}
                />
              ) : null}
              <TextField
                label="Senha"
                placeholder="••••••••"
                help="Use letras maiusculas, minusculas, numeros e simbolos."
                value={form.password}
                onChangeText={(value) => {
                  updateField("password", value);
                  clearFieldError("password");
                }}
                secureTextEntry
                error={errors.password}
                autoCapitalize="none"
              />
              <TextField
                label="Confirmar senha"
                placeholder="••••••••"
                value={form.confirmPassword}
                onChangeText={(value) => {
                  updateField("confirmPassword", value);
                  clearFieldError("confirmPassword");
                }}
                secureTextEntry
                highlight
                error={errors.confirmPassword}
                autoCapitalize="none"
              />

              <GlassPanel>
                <View className="gap-4 px-4 py-4">
                  <View className="flex-row items-center justify-between">
                    <View className="gap-1">
                      <Text
                        className="font-semibold text-white"
                        style={{ fontSize: isSmallPhone ? 15 : 16 }}
                      >
                        Qualidade da senha
                      </Text>
                      <Text className="text-sm leading-5 text-[#b4c3dd]">
                        {strength >= 4
                          ? "Otima senha para proteger seu acesso."
                          : "Use mais caracteres, numeros e simbolos."}
                      </Text>
                    </View>
                    <View className="rounded-full border border-[#36465d] bg-[#1c2635] px-3 py-1">
                      <Text className="text-xs font-semibold text-white">
                        {strengthLabel}
                      </Text>
                    </View>
                  </View>

                  <View className="h-3 rounded-full bg-[#303b4d]">
                    <View
                      className="h-3 rounded-full"
                      style={{
                        width: `${Math.max(20, strength * 25)}%`,
                        backgroundColor: strengthColor,
                      }}
                    />
                  </View>

                  <View className="gap-3">
                    {passwordRules.map((rule) => (
                      <PasswordRule key={rule.label} label={rule.label} met={rule.met} />
                    ))}
                  </View>
                </View>
              </GlassPanel>

              <View className="gap-3 pt-2">
                <GradientButton label="Voltar" variant="secondary" onPress={previousStep} disabled={isSubmitting} />
                <LinearGradient
                  colors={["#4476ff", "#28c8e8"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={{ borderRadius: 18 }}
                >
                  <Pressable onPress={finalizeRegistration} className="px-5 py-4" disabled={isSubmitting}>
                    <Text className="text-center text-base font-semibold text-white">
                      {isSubmitting ? "Finalizando..." : "Finalizar cadastro"}
                    </Text>
                  </Pressable>
                </LinearGradient>
                <Text className="text-center text-sm text-[#d7e3f6]">
                  Ja tem conta? <Text className="font-semibold">Entrar agora</Text>
                </Text>
              </View>
            </View>
          </FormCard>,
        )
      ) : null}
    </ScreenContainer>
  );
}
