import { Pressable, Text } from "react-native";

type AreaChipProps = {
  label: string;
  active?: boolean;
  onPress?: () => void;
};

export function AreaChip({ label, active, onPress }: AreaChipProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-2xl border px-4 py-3 ${
        active ? "border-[#44536b] bg-[#1d2735]" : "border-[#314258] bg-[#151f2d]"
      }`}
    >
      <Text className="text-sm font-semibold text-[#e8f0ff]">{label}</Text>
    </Pressable>
  );
}
