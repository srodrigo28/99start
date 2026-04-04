import { KeyboardTypeOptions, Text, TextInput, TextInputProps, View } from "react-native";

import { useResponsive } from "../../../shared/hooks";

type TextFieldProps = {
  label: string;
  placeholder: string;
  help?: string;
  error?: string;
  value: string;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
  highlight?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: TextInputProps["autoCapitalize"];
  autoCorrect?: boolean;
};

export function TextField({
  label,
  placeholder,
  help,
  error,
  value,
  onChangeText,
  secureTextEntry,
  highlight,
  keyboardType,
  autoCapitalize = "sentences",
  autoCorrect = false,
}: TextFieldProps) {
  const { isSmallPhone, letterSpacingWide } = useResponsive();
  const hasError = Boolean(error);

  return (
    <View className="gap-2">
      <Text
        className="text-[11px] font-bold uppercase text-[#d5e0f2]"
        style={{ letterSpacing: letterSpacingWide }}
      >
        {label}
      </Text>
      <TextInput
        className={`rounded-[16px] border bg-[#202936] px-4 py-4 text-base text-white ${
          hasError
            ? "border-[#ff6b8c]"
            : highlight
              ? "border-[#f1ba4a]"
              : "border-[#35455d]"
        }`}
        style={{
          minHeight: isSmallPhone ? 52 : 56,
          fontSize: isSmallPhone ? 15 : 16,
        }}
        placeholder={placeholder}
        placeholderTextColor="#64758f"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
      />
      {error ? (
        <Text className="text-xs leading-5 text-[#ff9ab0]">{error}</Text>
      ) : null}
      {!error && help ? (
        <Text className="text-xs leading-5 text-[#9fb1cb]">{help}</Text>
      ) : null}
    </View>
  );
}
