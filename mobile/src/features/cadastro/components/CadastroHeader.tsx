import { Pressable, Text, View } from "react-native";

import { GlassPanel } from "../../../shared/components";
import { useResponsive } from "../../../shared/hooks";

type CadastroHeaderProps = {
  onBackHome: () => void;
};

export function CadastroHeader({ onBackHome }: CadastroHeaderProps) {
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
          Cadastro do estabelecimento
        </Text>
        <Text className="text-sm leading-6 text-[#9cb0cd]">
          Informe os dados principais do seu negocio para iniciar o cadastro e
          seguir para a proxima etapa.
        </Text>
        <View className="self-start rounded-full border border-[#3a4960] bg-[#1c2635] px-4 py-2">
          <Text className="text-xs text-[#d6e3f7]">etapa inicial</Text>
        </View>
      </View>
    </GlassPanel>
  );
}
