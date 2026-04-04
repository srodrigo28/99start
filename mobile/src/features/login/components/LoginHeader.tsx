import { Pressable, Text, View } from "react-native";

import { GlassPanel } from "../../../shared/components";
import { useResponsive } from "../../../shared/hooks";

type LoginHeaderProps = {
  onBackHome: () => void;
};

export function LoginHeader({ onBackHome }: LoginHeaderProps) {
  const { letterSpacingWide, pageTitleLineHeight, pageTitleSize, sectionPadding } =
    useResponsive();

  return (
    <GlassPanel className="mb-4">
      <View className="gap-4" style={{ padding: sectionPadding }}>
        <Pressable onPress={onBackHome}>
          <Text
            className="text-[11px] font-bold uppercase text-[#d8e3f5]"
            style={{ letterSpacing: letterSpacingWide }}
          >
            Voltar para o inicio
          </Text>
        </Pressable>
        <Text
          className="font-bold text-white"
          style={{ fontSize: pageTitleSize, lineHeight: pageTitleLineHeight }}
        >
          Login do proprietario
        </Text>
        <Text className="text-sm leading-6 text-[#9cb0cd]">
          Tela dedicada para entrar no ambiente logado e acessar dashboard,
          mesas e comandas.
        </Text>
        <View className="self-start rounded-full border border-[#3a4960] bg-[#1c2635] px-4 py-2">
          <Text className="text-xs text-[#d6e3f7]">area logada</Text>
        </View>
      </View>
    </GlassPanel>
  );
}
