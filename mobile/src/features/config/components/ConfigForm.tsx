import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  FormAlert,
  GlassPanel,
  GradientButton,
  SectionLabel,
  StoreIcon,
} from "../../../shared/components";
import { useResponsive } from "../../../shared/hooks";
import { TextField } from "../../cadastro/components";

type ConfigFormProps = {
  values: {
    storeName: string;
    cnpj: string;
    phone: string;
    ownerName: string;
    email: string;
    pixKey: string;
  };
  errors: Partial<Record<"storeName" | "cnpj" | "phone" | "ownerName" | "email" | "pixKey", string>>;
  alert?: { title: string; message?: string; variant: "error" | "success" | "info" };
  onDismissAlert: () => void;
  onChange: (key: "storeName" | "cnpj" | "phone" | "ownerName" | "email" | "pixKey", value: string) => void;
  onBack: () => void;
  onSaveDraft: () => void;
  onNext: () => void;
};

export function ConfigForm({
  values,
  errors,
  alert,
  onDismissAlert,
  onChange,
  onBack,
  onSaveDraft,
  onNext,
}: ConfigFormProps) {
  const { sectionPadding, letterSpacingWide } = useResponsive();

  return (
    <GlassPanel>
      <View className="gap-5" style={{ padding: sectionPadding }}>
        <View className="flex-row gap-4 rounded-[24px] border border-[#36465d] bg-[#1a2331] px-4 py-4">
          <View className="mt-1 h-14 w-14 items-center justify-center rounded-2xl bg-[#49588c]">
            <StoreIcon size={28} />
          </View>
          <View className="flex-1 gap-1">
            <SectionLabel eyebrow="Area de configuracao" />
            <Text className="text-[18px] font-semibold text-white">Dados da loja</Text>
            <Text className="text-sm leading-6 text-[#b4c3dd]">
              Informacoes principais do estabelecimento e recebimentos.
            </Text>
          </View>
        </View>

        {alert ? (
          <FormAlert
            title={alert.title}
            message={alert.message}
            variant={alert.variant}
            onClose={onDismissAlert}
          />
        ) : null}

        <TextField
          label="Nome da loja"
          placeholder="Saraiva Bar"
          value={values.storeName}
          onChangeText={(value) => onChange("storeName", value)}
          error={errors.storeName}
        />
        <TextField
          label="CNPJ"
          placeholder="12.345.678/0001-99"
          value={values.cnpj}
          onChangeText={(value) => onChange("cnpj", value)}
          error={errors.cnpj}
          keyboardType="number-pad"
        />
        <TextField
          label="Telefone"
          placeholder="(62) 99999-9999"
          value={values.phone}
          onChangeText={(value) => onChange("phone", value)}
          error={errors.phone}
          keyboardType="phone-pad"
        />
        <TextField
          label="Responsavel"
          placeholder="Mateus Vinicius"
          value={values.ownerName}
          onChangeText={(value) => onChange("ownerName", value)}
          error={errors.ownerName}
        />
        <TextField
          label="E-mail"
          placeholder="contato@saraivabar.com"
          value={values.email}
          onChangeText={(value) => onChange("email", value)}
          error={errors.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextField
          label="Chave pix"
          placeholder="01046038109"
          help="Essa chave sera usada para gerar recebimentos PIX."
          value={values.pixKey}
          onChangeText={(value) => onChange("pixKey", value)}
          error={errors.pixKey}
          keyboardType="number-pad"
        />

        <View className="gap-3 pt-2">
          <GradientButton label="Voltar" variant="secondary" onPress={onBack} />
          <GradientButton label="Salvar rascunho" variant="secondary" onPress={onSaveDraft} />
          <LinearGradient
            colors={["#4476ff", "#28c8e8"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{ borderRadius: 18 }}
          >
            <Pressable onPress={onNext} className="px-5 py-4">
              <Text className="text-center text-base font-semibold text-white">
                Proxima etapa
              </Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </GlassPanel>
  );
}
