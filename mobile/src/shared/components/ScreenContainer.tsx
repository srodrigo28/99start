import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useResponsive } from "../hooks";

type ScreenContainerProps = {
  children: ReactNode;
};

export function ScreenContainer({ children }: ScreenContainerProps) {
  const { contentWidth, horizontalPadding } = useResponsive();

  return (
    <LinearGradient
      colors={["#0b1827", "#07111f", "#05101b"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 32,
            paddingHorizontal: horizontalPadding,
            paddingTop: 12,
            alignItems: "center",
          }}
        >
          <View style={{ width: "100%", maxWidth: contentWidth }}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
