import { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
  formatCnpj,
  formatPhone,
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

type CadastroScreenProps = {
  onBackHome: () => void;
  onComplete: (payload: { ownerName: string; city: string }) => void;
};

type StepId = 1 | 2 | 3;

type FormState = {
  businessName: string;
  cnpj: string;
  ownerName: string;
  email: string;
  phone: string;
  address: string;
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
  address: "",
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

    if (!isRequired(form.address)) {
      nextErrors.address = "Informe o endereco do estabelecimento.";
    }
    if (!isRequired(form.neighborhood)) {
      nextErrors.neighborhood = "Informe o bairro.";
    }
    if (!isRequired(form.city)) {
      nextErrors.city = "Informe a cidade.";
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

  const finalizeRegistration = () => {
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

    setAlert({
      title: "Cadastro validado com sucesso",
      message: "Todos os campos principais passaram nas validacoes. A proxima etapa sera integrar com a API de cadastro real.",
      variant: "success",
    });
    onComplete({
      ownerName: form.ownerName || "Sebastiao Rodrigo",
      city: form.city || "Aparecida de Goiania - GO",
    });
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
              <GradientButton label="Voltar" variant="secondary" onPress={onBackHome} />
              <LinearGradient
                colors={["#4476ff", "#28c8e8"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={{ borderRadius: 18 }}
              >
                <Pressable onPress={nextStep} className="px-5 py-4">
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
        </FormCard>
      ) : null}

      {currentStep === 2 ? (
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
              label="Endereco"
              placeholder="Rua, numero e complemento"
              help="Este endereco sera usado para cadastro e operacao."
              value={form.address}
              onChangeText={(value) => {
                updateField("address", trimMultilineSpaces(value));
                clearFieldError("address");
              }}
              error={errors.address}
            />
            <TextField
              label="Bairro"
              placeholder="Centro"
              value={form.neighborhood}
              onChangeText={(value) => {
                updateField("neighborhood", trimMultilineSpaces(value));
                clearFieldError("neighborhood");
              }}
              error={errors.neighborhood}
            />
            <TextField
              label="Cidade"
              placeholder="Sao Paulo"
              value={form.city}
              onChangeText={(value) => {
                updateField("city", trimMultilineSpaces(value));
                clearFieldError("city");
              }}
              error={errors.city}
            />
            <View className="gap-3 pt-2">
              <GradientButton label="Voltar" variant="secondary" onPress={previousStep} />
              <LinearGradient
                colors={["#4476ff", "#28c8e8"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={{ borderRadius: 18 }}
              >
                <Pressable onPress={nextStep} className="px-5 py-4">
                  <Text className="text-center text-base font-semibold text-white">
                    Proximo
                  </Text>
                </Pressable>
              </LinearGradient>
            </View>
          </View>
        </FormCard>
      ) : null}

      {currentStep === 3 ? (
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
              <GradientButton label="Voltar" variant="secondary" onPress={previousStep} />
              <LinearGradient
                colors={["#4476ff", "#28c8e8"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={{ borderRadius: 18 }}
              >
                <Pressable onPress={finalizeRegistration} className="px-5 py-4">
                  <Text className="text-center text-base font-semibold text-white">
                    Finalizar cadastro
                  </Text>
                </Pressable>
              </LinearGradient>
              <Text className="text-center text-sm text-[#d7e3f6]">
                Ja tem conta? <Text className="font-semibold">Entrar agora</Text>
              </Text>
            </View>
          </View>
        </FormCard>
      ) : null}
    </ScreenContainer>
  );
}
