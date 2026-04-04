import { ReactNode } from "react";
import { Text, View } from "react-native";

import { useResponsive } from "../../../shared/hooks";

type StepState = "current" | "complete" | "upcoming";

type StepStatusCardProps = {
  icon: ReactNode;
  step: string;
  title: string;
  description: string;
  state: StepState;
};

const stateClasses: Record<StepState, string> = {
  current: "border-[#f0b84a] bg-[#1a2432]",
  complete: "border-[#0cae7d] bg-[#0f3131]",
  upcoming: "border-[#2b384d] bg-[#1a2331]",
};

export function StepStatusCard({
  icon,
  step,
  title,
  description,
  state,
}: StepStatusCardProps) {
  const { cardTitleSize, isSmallPhone, letterSpacingWide } = useResponsive();

  return (
    <View
      className={`rounded-[22px] border px-4 py-4 ${stateClasses[state]}`}
    >
      <View className="flex-row gap-4">
        <View className="mt-1 h-12 w-12 items-center justify-center rounded-2xl bg-[#33415b]">
          {icon}
        </View>
        <View className="flex-1 gap-1" style={{ flexShrink: 1 }}>
          <Text
            className="text-[11px] font-bold uppercase text-[#d7e4f7]"
            style={{ letterSpacing: letterSpacingWide }}
          >
            {step}
          </Text>
          <Text
            className="font-semibold text-white"
            style={{
              fontSize: cardTitleSize,
              lineHeight: cardTitleSize + (isSmallPhone ? 7 : 8),
            }}
          >
            {title}
          </Text>
          <Text className="text-sm leading-6 text-[#b7c7de]">{description}</Text>
        </View>
      </View>
    </View>
  );
}
