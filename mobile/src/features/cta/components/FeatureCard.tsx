import { ReactNode } from "react";
import { Text, View } from "react-native";

import { useResponsive } from "../../../shared/hooks";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  const { cardTitleSize } = useResponsive();

  return (
    <View className="gap-4 rounded-[24px] border border-[#2a374d] bg-[#1a2331] px-6 py-5">
      <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#684638]">
        {icon}
      </View>
      <View className="gap-2">
        <Text
          className="font-semibold text-[#eef4ff]"
          style={{ fontSize: cardTitleSize, lineHeight: cardTitleSize + 8 }}
        >
          {title}
        </Text>
        <Text className="text-sm leading-6 text-[#98abc8]">{description}</Text>
      </View>
    </View>
  );
}
