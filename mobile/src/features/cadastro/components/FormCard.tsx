import { ReactNode } from "react";
import { Text, View } from "react-native";

import { GlassPanel } from "../../../shared/components";

type FormCardProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function FormCard({ icon, title, subtitle, children }: FormCardProps) {
  return (
    <GlassPanel>
      <View className="gap-5 px-5 py-5">
        <View className="flex-row gap-4 rounded-[22px] border border-[#36465d] bg-[#1a2331] px-4 py-4">
          <View className="h-14 w-14 items-center justify-center rounded-2xl bg-[#49588c]">
            {icon}
          </View>
          <View className="flex-1 gap-1">
            <Text className="text-[15px] font-semibold text-white">{title}</Text>
            <Text className="text-sm leading-6 text-[#b4c3dd]">{subtitle}</Text>
          </View>
        </View>
        {children}
      </View>
    </GlassPanel>
  );
}
