import { Text, View } from "react-native";

type AdminMetricCardProps = {
  eyebrow: string;
  value: string;
  detail: string;
  tone: "amber" | "green" | "blue" | "pink";
};

const toneClasses = {
  amber: "bg-[#43331f]",
  green: "bg-[#103732]",
  blue: "bg-[#0f2f4c]",
  pink: "bg-[#42172d]",
};

export function AdminMetricCard({
  eyebrow,
  value,
  detail,
  tone,
}: AdminMetricCardProps) {
  return (
    <View className={`rounded-[24px] px-5 py-5 ${toneClasses[tone]}`}>
      <Text className="mb-2 text-[11px] font-bold uppercase tracking-[3px] text-[#f0bb57]">
        {eyebrow}
      </Text>
      <Text className="text-[24px] font-bold text-white">{value}</Text>
      <Text className="mt-2 text-sm leading-6 text-[#c8d8ef]">{detail}</Text>
    </View>
  );
}
