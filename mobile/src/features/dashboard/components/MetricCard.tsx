import { Text, View } from "react-native";

type MetricCardProps = {
  eyebrow: string;
  value: string;
  detail: string;
  tone: "green" | "amber" | "blue" | "pink";
};

const toneClasses = {
  green: "bg-[#103732]",
  amber: "bg-[#43331f]",
  blue: "bg-[#0f2f4c]",
  pink: "bg-[#42172d]",
};

export function MetricCard({ eyebrow, value, detail, tone }: MetricCardProps) {
  return (
    <View className={`rounded-[24px] px-5 py-5 ${toneClasses[tone]}`}>
      <Text className="mb-2 text-[11px] font-bold uppercase tracking-[3px] text-[#f0bb57]">
        {eyebrow}
      </Text>
      <Text className="text-[18px] font-bold text-white">{value}</Text>
      <Text className="mt-2 text-sm leading-6 text-[#bcd0ea]">{detail}</Text>
    </View>
  );
}
