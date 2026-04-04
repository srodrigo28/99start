import { useState } from "react";
import { Text, View } from "react-native";

import {
  GlassPanel,
  MenuIcon,
  PinIcon,
  ScreenContainer,
  SectionLabel,
  StoreIcon,
} from "../../shared/components";
import { useResponsive } from "../../shared/hooks";
import {
  formatCnpj,
  formatPhone,
  formatPixKey,
  isCnpj,
  isEmail,
  isPhone,
  isPixKey,
  isRequired,
  trimMultilineSpaces,
} from "../../shared/utils";
import { AreaChip, ConfigForm, ConfigHero, ConfigStepCard } from "./components";

type ConfigScreenProps = {
  onBackDashboard: () => void;
};

type ConfigFormState = {
  storeName: string;
  cnpj: string;
  phone: string;
  ownerName: string;
  email: string;
  pixKey: string;
};

const initialConfigState: ConfigFormState = {
  storeName: "Saraiva Bar",
  cnpj: "12.345.678/0001-99",
  phone: "(62) 99999-9999",
  ownerName: "Mateus Vinicius",
  email: "contato@saraivabar.com",
  pixKey: "01046038109",
};

export function ConfigScreen({ onBackDashboard }: ConfigScreenProps) {
  const { heroTitleLineHeight, heroTitleSize, sectionPadding } = useResponsive();
  const [form, setForm] = useState<ConfigFormState>(initialConfigState);
  const [errors, setErrors] = useState<Partial<Record<keyof ConfigFormState, string>>>({});
  const [alert, setAlert] = useState<
    { title: string; message?: string; variant: "error" | "success" | "info" } | undefined
  >();

  const updateField = (key: keyof ConfigFormState, value: string) => {
    let nextValue = value;

    if (key === "cnpj") nextValue = formatCnpj(value);
    if (key === "phone") nextValue = formatPhone(value);
    if (key === "pixKey") nextValue = formatPixKey(value);
    if (key === "storeName" || key === "ownerName") {
      nextValue = trimMultilineSpaces(value);
    }
    if (key === "email") nextValue = value.trim();

    setForm((previous) => ({ ...previous, [key]: nextValue }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof ConfigFormState, string>> = {};

    if (!isRequired(form.storeName)) nextErrors.storeName = "Informe o nome da loja.";
    if (!isCnpj(form.cnpj)) nextErrors.cnpj = "Digite um CNPJ valido.";
    if (!isPhone(form.phone)) nextErrors.phone = "Digite um telefone valido com DDD.";
    if (!isRequired(form.ownerName)) nextErrors.ownerName = "Informe o responsavel.";
    if (!isEmail(form.email)) nextErrors.email = "Digite um e-mail valido.";
    if (!isPixKey(form.pixKey)) nextErrors.pixKey = "Informe uma chave PIX valida.";

    return nextErrors;
  };

  const handleSaveDraft = () => {
    setAlert({
      title: "Rascunho salvo",
      message: "Os dados atuais da configuracao foram mantidos localmente para continuar depois.",
      variant: "success",
    });
  };

  const handleNext = () => {
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setAlert({
        title: "Revise os dados da configuracao",
        message: "Alguns campos ainda precisam de ajuste antes de seguir para a proxima etapa.",
        variant: "error",
      });
      return;
    }

    setAlert({
      title: "Dados da loja validados",
      message: "A estrutura da proxima etapa ja pode receber endereco, localizacao e mapa.",
      variant: "success",
    });
  };

  return (
    <ScreenContainer>
      <GlassPanel className="mb-4">
        <View className="gap-3" style={{ padding: sectionPadding }}>
          <View className="flex-row flex-wrap gap-3">
            <AreaChip label="Inicio" />
            <AreaChip label="Mesas" />
            <AreaChip label="Comandas" />
            <AreaChip label="Config." active />
          </View>
        </View>
      </GlassPanel>

      <ConfigHero />

      <GlassPanel className="mb-4">
        <View className="gap-5" style={{ padding: sectionPadding }}>
          <View className="flex-row items-start justify-between gap-3">
            <View className="flex-1 gap-3">
              <SectionLabel eyebrow="Etapas da configuracao" />
              <Text
                className="font-bold text-white"
                style={{ fontSize: heroTitleSize, lineHeight: heroTitleLineHeight }}
              >
                Tudo separado por tema
              </Text>
              <Text className="text-sm leading-7 text-[#a6bad4]">
                Cada etapa organiza um grupo de informacoes para deixar a
                manutencao da loja mais simples no celular e no desktop.
              </Text>
            </View>
            <View className="rounded-full border border-[#3d4c62] bg-[#1d2735] px-4 py-2">
              <Text className="text-[11px] font-bold uppercase tracking-[2px] text-[#dce7f6]">
                Limpar rascunho
              </Text>
            </View>
          </View>

          <View className="gap-3">
            <ConfigStepCard
              icon={<StoreIcon size={26} />}
              title="Dados da loja"
              description="Informacoes principais do estabelecimento e recebimentos."
              active
            />
            <ConfigStepCard
              icon={<PinIcon size={26} />}
              title="Endereco e localizacao"
              description="Dados do endereco comercial e ponto no mapa."
            />
            <ConfigStepCard
              icon={<MenuIcon size={22} />}
              title="Logo, slug e categorias"
              description="Identidade da marca e segmentacao do negocio."
            />
          </View>
        </View>
      </GlassPanel>

      <ConfigForm
        values={form}
        errors={errors}
        alert={alert}
        onDismissAlert={() => setAlert(undefined)}
        onChange={updateField}
        onBack={onBackDashboard}
        onSaveDraft={handleSaveDraft}
        onNext={handleNext}
      />
    </ScreenContainer>
  );
}
