import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

type ActionCardProps = {
  title: string;
  description: string;
  colors: string;
  icon?: ReactNode;
  onPress?: () => void;
};

export function ActionCard({
  title,
  description,
  colors,
  icon,
  onPress,
}: ActionCardProps) {
  return (
    <Pressable onPress={onPress} className={`rounded-[24px] px-5 py-5 ${colors}`}>
      {icon ? <View className="mb-3">{icon}</View> : null}
      <Text className="mb-2 text-[22px] font-semibold text-white">{title}</Text>
      <Text className="text-sm leading-6 text-[#e3efff]">{description}</Text>
    </Pressable>
  );
}
