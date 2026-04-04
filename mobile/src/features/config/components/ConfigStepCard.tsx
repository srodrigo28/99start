import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

type ConfigStepCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  active?: boolean;
  onPress?: () => void;
};

export function ConfigStepCard({
  icon,
  title,
  description,
  active,
  onPress,
}: ConfigStepCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-[24px] border px-4 py-4 ${
        active ? "border-[#efb449] bg-[#1a2331]" : "border-[#2a374d] bg-[#1a2331]"
      }`}
    >
      <View className="flex-row gap-4">
        <View className="mt-1 h-14 w-14 items-center justify-center rounded-2xl bg-[#41486f]">
          {icon}
        </View>
        <View className="flex-1 gap-2">
          <Text className="text-[18px] font-semibold text-white">{title}</Text>
          <Text className="text-sm leading-6 text-[#b8c8df]">{description}</Text>
        </View>
      </View>
    </Pressable>
  );
}
