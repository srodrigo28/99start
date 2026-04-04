import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type GradientButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
};

export function GradientButton({
  label,
  onPress,
  variant = "primary",
}: GradientButtonProps) {
  if (variant === "secondary") {
    return (
      <Pressable onPress={onPress}>
        <View className="rounded-[18px] border border-[#32435e] bg-[#161f2d] px-5 py-4">
          <Text className="text-center text-base font-semibold text-white">
            {label}
          </Text>
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={["#ff8a38", "#ff5d78"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ borderRadius: 18 }}
      >
        <View className="px-5 py-4">
          <Text className="text-center text-base font-semibold text-white">
            {label}
          </Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}
