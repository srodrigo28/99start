import { Text, View } from "react-native";

import { useResponsive } from "../../../shared/hooks";

type StepCardProps = {
  step: string;
  title: string;
  description: string;
};

export function StepCard({ step, title, description }: StepCardProps) {
  const { stepTitleSize, isSmallPhone } = useResponsive();

  return (
    <View className="flex-row gap-4 rounded-[22px] border border-[#2a374d] bg-[#161f2d] px-4 py-4">
      <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#f4c450]">
        <Text className="text-base font-bold text-[#111827]">{step}</Text>
      </View>
      <View className="flex-1 gap-1" style={{ flexShrink: 1 }}>
        <Text
          className="font-semibold text-white"
          style={{
            fontSize: stepTitleSize,
            lineHeight: stepTitleSize + (isSmallPhone ? 7 : 9),
            flexShrink: 1,
          }}
        >
          {title}
        </Text>
        <Text className="text-sm leading-6 text-[#b4c3dd]">{description}</Text>
      </View>
    </View>
  );
}
