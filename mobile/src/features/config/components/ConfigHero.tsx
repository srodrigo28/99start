import { Text, View } from "react-native";

import { GlassPanel, SectionLabel } from "../../../shared/components";
import { useResponsive } from "../../../shared/hooks";

export function ConfigHero() {
  const { heroTitleLineHeight, heroTitleSize, sectionPadding } = useResponsive();

  return (
    <GlassPanel className="mb-4">
      <View className="gap-5" style={{ padding: sectionPadding }}>
        <SectionLabel eyebrow="Configuracoes da loja" />
        <Text
          className="font-bold text-white"
          style={{ fontSize: heroTitleSize, lineHeight: heroTitleLineHeight }}
        >
          Gerencie os dados do seu estabelecimento
        </Text>
        <Text className="text-sm leading-7 text-[#a6bad4]">
          Ajuste os dados da loja, endereco, localizacao, identidade visual,
          slug publico e categorias do negocio em etapas organizadas.
        </Text>

        <View className="gap-2">
          <Text className="self-start rounded-full border border-[#3b4b62] bg-[#1c2635] px-3 py-1 text-xs text-[#d7e3f5]">
            33% concluido
          </Text>
          <View className="h-3 rounded-full bg-[#293548]">
            <View className="h-3 w-1/3 rounded-full bg-[#4daafc]" />
          </View>
        </View>
      </View>
    </GlassPanel>
  );
}
