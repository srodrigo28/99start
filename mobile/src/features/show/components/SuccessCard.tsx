import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  GlassPanel,
  LockIcon,
  PinIcon,
  SparkIcon,
  StoreIcon,
} from "../../../shared/components";
import { useResponsive } from "../../../shared/hooks";
import { StatusPill } from "./StatusPill";

type SuccessCardProps = {
  ownerName: string;
  city: string;
  onGoDashboard: () => void;
};

export function SuccessCard({
  ownerName,
  city,
  onGoDashboard,
}: SuccessCardProps) {
  const { sectionPadding, pageTitleSize } = useResponsive();

  return (
    <GlassPanel>
      <View className="gap-5" style={{ padding: sectionPadding }}>
        <View className="items-center gap-4 rounded-[26px] border border-[#26354a] bg-[#101826] px-5 py-6">
          <View className="h-20 w-20 items-center justify-center rounded-[24px] bg-[#27c4a7]">
            <SparkIcon size={44} />
          </View>

          <View className="items-center gap-3">
            <Text
              className="text-center font-bold text-white"
              style={{ fontSize: pageTitleSize + 3, lineHeight: pageTitleSize + 10 }}
            >
              Boas-vindas ao 99Start
            </Text>
            <Text className="text-center text-sm leading-7 text-[#d5e2f5]">
              Seu cadastro foi concluido com sucesso. Agora voce ja pode
              acessar o dashboard e comecar a organizar seu estabelecimento.
            </Text>
          </View>

          <View className="w-full gap-3">
            <StatusPill icon={<StoreIcon size={18} />} label={ownerName} />
            <StatusPill icon={<PinIcon size={18} />} label={city} />
            <StatusPill
              icon={<LockIcon size={18} />}
              label="Acesso protegido com senha cadastrada"
            />
          </View>

          <LinearGradient
            colors={["#4476ff", "#28c8e8"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{ width: "100%", borderRadius: 18 }}
          >
            <Pressable onPress={onGoDashboard} className="px-5 py-4">
              <Text className="text-center text-base font-semibold text-white">
                Ir para o dashboard
              </Text>
            </Pressable>
          </LinearGradient>

          <Text className="text-center text-sm text-[#d7e3f6]">
            Ja tem conta? <Text className="font-semibold">Entrar agora</Text>
          </Text>
        </View>
      </View>
    </GlassPanel>
  );
}
