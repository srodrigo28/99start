import { Text, View } from "react-native";

type SectionLabelProps = {
  eyebrow: string;
  subtitle?: string;
};

export function SectionLabel({ eyebrow, subtitle }: SectionLabelProps) {
  return (
    <View className="gap-1">
      <Text className="text-[11px] font-bold uppercase tracking-[3px] text-[#ffbb4b]">
        {eyebrow}
      </Text>
      {subtitle ? (
        <Text className="text-sm leading-5 text-[#d0ddf6]">{subtitle}</Text>
      ) : null}
    </View>
  );
}
