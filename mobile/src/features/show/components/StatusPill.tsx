import { ReactNode } from "react";
import { Text, View } from "react-native";

type StatusPillProps = {
  icon: ReactNode;
  label: string;
};

export function StatusPill({ icon, label }: StatusPillProps) {
  return (
    <View className="rounded-[20px] border border-[#177a5a] bg-[#11332b] px-4 py-3">
      <View className="flex-row items-center justify-center gap-2">
        {icon}
        <Text className="flex-1 text-center text-sm font-semibold text-white">{label}</Text>
      </View>
    </View>
  );
}
