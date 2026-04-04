import { Text, View } from "react-native";

import { CheckIcon } from "../../../shared/components";

type PasswordRuleProps = {
  label: string;
  met: boolean;
};

export function PasswordRule({ label, met }: PasswordRuleProps) {
  return (
    <View
      className={`flex-row items-center gap-3 rounded-2xl border px-3 py-3 ${
        met
          ? "border-[#1e8c65] bg-[#123d34]"
          : "border-[#37465b] bg-[#1d2735]"
      }`}
    >
      {met ? (
        <CheckIcon />
      ) : (
        <View className="h-[18px] w-[18px] rounded-full border border-[#6e7e97]" />
      )}
      <Text className="text-sm font-medium text-white">{label}</Text>
    </View>
  );
}
