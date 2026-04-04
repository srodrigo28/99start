import { Pressable, Text, View } from "react-native";

import { GlassPanel } from "../../../shared/components";
import { useResponsive } from "../../../shared/hooks";

type CommandaHeaderProps = {
  onBackDashboard: () => void;
  onGoTables: () => void;
};

export function CommandaHeader({
  onBackDashboard,
  onGoTables,
}: CommandaHeaderProps) {
  const { letterSpacingWide, pageTitleLineHeight, pageTitleSize, sectionPadding } =
    useResponsive();

  return (
    <GlassPanel className="mb-4">
      <View className="gap-4" style={{ padding: sectionPadding }}>
        <View className="flex-row items-center justify-between gap-3">
          <Pressable onPress={onBackDashboard}>
            <Text
              className="text-[11px] font-bold uppercase text-[#d8e3f5]"
              style={{ letterSpacing: letterSpacingWide }}
            >
              Voltar para o dashboard
            </Text>
          </Pressable>
          <View className="rounded-full border border-[#3b4b62] bg-[#1c2635] px-4 py-2">
            <Text className="text-xs text-[#d7e3f5]">comandas</Text>
          </View>
        </View>
        <Text
          className="font-bold text-white"
          style={{ fontSize: pageTitleSize, lineHeight: pageTitleLineHeight }}
        >
          Controle de comandas
        </Text>
        <Text className="text-sm leading-7 text-[#9cb0cd]">
          Aqui fica o centro da operacao: comandas abertas, total do consumo e
          acao de marcar como paga. O layout continua priorizando celular.
        </Text>
        <Pressable
          onPress={onGoTables}
          className="self-start rounded-full border border-[#405067] bg-[#1d2735] px-5 py-3"
        >
          <Text className="text-sm font-semibold text-white">Ir para mesas</Text>
        </Pressable>
      </View>
    </GlassPanel>
  );
}
