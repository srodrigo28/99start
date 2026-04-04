import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { FormAlert, GlassPanel, SectionLabel } from "../../../shared/components";
import { useResponsive } from "../../../shared/hooks";
import { TextField } from "../../cadastro/components";

type LoginFormProps = {
  email: string;
  password: string;
  emailError?: string;
  passwordError?: string;
  alert?: { title: string; message: string; variant: "error" | "success" | "info" };
  onDismissAlert: () => void;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onEnterPanel: () => void;
  onCreateAccount: () => void;
};

export function LoginForm({
  email,
  password,
  emailError,
  passwordError,
  alert,
  onDismissAlert,
  onEmailChange,
  onPasswordChange,
  onEnterPanel,
  onCreateAccount,
}: LoginFormProps) {
  const { sectionPadding } = useResponsive();

  return (
    <GlassPanel>
      <View className="gap-5" style={{ padding: sectionPadding }}>
        <SectionLabel
          eyebrow="Acesso do proprietario"
          subtitle="entre para acessar produtos, campanhas, mesas e comandas"
        />

        <View className="self-start rounded-full border border-[#374861] bg-[#1d2735] px-4 py-2">
          <Text className="text-xs text-[#d7e2f5]">acesso rapido</Text>
        </View>

        <View className="rounded-[26px] border border-[#25354b] bg-[#101826] px-4 py-5">
          <View className="gap-4">
            {alert ? (
              <FormAlert
                title={alert.title}
                message={alert.message}
                variant={alert.variant}
                onClose={onDismissAlert}
              />
            ) : null}
            <TextField
              label="E-mail"
              placeholder="voce@empresa.com"
              value={email}
              onChangeText={onEmailChange}
              error={emailError}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextField
              label="Senha"
              placeholder="Digite sua senha"
              value={password}
              onChangeText={onPasswordChange}
              secureTextEntry
              error={passwordError}
              autoCapitalize="none"
            />
            <Text className="text-sm leading-6 text-[#9cb0cd]">
              Acesso direto ao painel do proprietario.
            </Text>

            <LinearGradient
              colors={["#ff8a38", "#ff5d78"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{ borderRadius: 18 }}
            >
              <Pressable onPress={onEnterPanel} className="px-5 py-4">
                <Text className="text-center text-base font-semibold text-white">
                  Entrar no painel
                </Text>
              </Pressable>
            </LinearGradient>

            <Pressable onPress={onCreateAccount}>
              <Text className="text-center text-base text-[#d7e3f6]">
                Ainda nao tem conta?{" "}
                <Text className="font-semibold text-[#c9d7ef]">Criar cadastro</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </GlassPanel>
  );
}
