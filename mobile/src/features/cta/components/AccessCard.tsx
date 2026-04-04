import { Text, View } from "react-native";

type AccessCardProps = {
  title: string;
  description: string;
};

export function AccessCard({ title, description }: AccessCardProps) {
  return (
    <View className="rounded-[22px] border border-[#2a374d] bg-[#182230] px-5 py-4">
      <Text className="mb-2 text-lg font-semibold text-white">{title}</Text>
      <Text className="text-sm leading-6 text-[#b4c3dd]">{description}</Text>
    </View>
  );
}
