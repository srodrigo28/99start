import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

type ShortcutCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  badge: string;
  cta: string;
  onPress?: () => void;
};

export function ShortcutCard({
  icon,
  title,
  description,
  badge,
  cta,
  onPress,
}: ShortcutCardProps) {
  return (
    <Pressable onPress={onPress} className="rounded-[26px] border border-[#2a374d] bg-[#1a2331] px-4 py-4">
      <View className="mb-4 flex-row items-start gap-4">
        <View className="h-14 w-14 items-center justify-center rounded-2xl bg-[#5b4a52]">
          {icon}
        </View>
        <View className="flex-1 gap-2">
          <View className="flex-row items-start justify-between gap-3">
            <Text className="flex-1 text-[18px] font-semibold leading-7 text-white">
              {title}
            </Text>
            <View className="rounded-full border border-[#3d4b62] bg-[#242f40] px-3 py-1">
              <Text className="text-[11px] text-[#d9e4f5]">{badge}</Text>
            </View>
          </View>
          <Text className="text-sm leading-7 text-[#d0ddf5]">{description}</Text>
        </View>
      </View>

      <View className="self-start rounded-full border border-[#3d4b62] bg-[#242f40] px-4 py-2">
        <Text className="text-sm font-semibold text-white">{cta}</Text>
      </View>
    </Pressable>
  );
}
