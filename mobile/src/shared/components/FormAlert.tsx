import { Pressable, Text, View } from "react-native";
import Animated, { FadeInDown, FadeOutUp, LinearTransition } from "react-native-reanimated";

type AlertVariant = "error" | "success" | "info";

type FormAlertProps = {
  title: string;
  message?: string;
  variant?: AlertVariant;
  onClose?: () => void;
};

const variantStyles: Record<
  AlertVariant,
  { border: string; bg: string; badge: string; badgeText: string }
> = {
  error: {
    border: "#a73a57",
    bg: "#341823",
    badge: "#ff6b8c",
    badgeText: "#fff5f7",
  },
  success: {
    border: "#177a5a",
    bg: "#102d25",
    badge: "#1ddc88",
    badgeText: "#effff7",
  },
  info: {
    border: "#2c5f92",
    bg: "#122133",
    badge: "#53a8ff",
    badgeText: "#eff7ff",
  },
};

export function FormAlert({
  title,
  message,
  variant = "info",
  onClose,
}: FormAlertProps) {
  const styles = variantStyles[variant];

  return (
    <Animated.View
      entering={FadeInDown.duration(260)}
      exiting={FadeOutUp.duration(180)}
      layout={LinearTransition.duration(200)}
      className="mb-4 rounded-[22px] border px-4 py-4"
      style={{ borderColor: styles.border, backgroundColor: styles.bg }}
    >
      <View className="flex-row items-start justify-between gap-3">
        <View className="flex-1 gap-2">
          <View
            className="self-start rounded-full px-3 py-1"
            style={{ backgroundColor: styles.badge }}
          >
            <Text className="text-[11px] font-bold uppercase" style={{ color: styles.badgeText }}>
              {variant === "error" ? "Ajuste necessario" : variant === "success" ? "Tudo certo" : "Atenção"}
            </Text>
          </View>
          <Text className="text-base font-semibold text-white">{title}</Text>
          {message ? (
            <Text className="text-sm leading-6 text-[#d5e2f5]">{message}</Text>
          ) : null}
        </View>
        {onClose ? (
          <Pressable onPress={onClose} className="rounded-full border border-[#415269] px-3 py-1">
            <Text className="text-xs font-semibold text-white">Fechar</Text>
          </Pressable>
        ) : null}
      </View>
    </Animated.View>
  );
}
