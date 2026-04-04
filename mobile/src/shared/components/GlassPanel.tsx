import { ReactNode } from "react";
import { View } from "react-native";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <View
      className={`overflow-hidden rounded-[28px] border border-[#20304a] bg-[#111a28]/95 ${className}`}
    >
      {children}
    </View>
  );
}
