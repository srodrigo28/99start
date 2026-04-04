import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GlassPanel, SectionLabel } from "../../../shared/components";
import type { OrderStatus } from "./OrderCard";

type OrderDetailProps = {
  code: string;
  customer: string;
  place: string;
  status: OrderStatus;
  items: Array<{ label: string; value: string }>;
  total: string;
  onPayment: (method: "pix" | "dinheiro" | "cartao") => void;
};

export function OrderDetail({
  code,
  customer,
  place,
  status,
  items,
  total,
  onPayment,
}: OrderDetailProps) {
  return (
    <GlassPanel>
      <View className="gap-5 px-5 py-5">
        <SectionLabel
          eyebrow="Detalhe da comanda"
          subtitle="Exemplo de leitura da comanda selecionada no mobile."
        />

        <View className="rounded-[24px] border border-[#24344a] bg-[#101827] px-4 py-4">
          <Text className="text-[18px] font-bold text-white">{code}</Text>
          <Text className="mt-2 text-base text-[#dbe7f6]">Cliente: {customer}</Text>
          <Text className="mt-1 text-base text-[#97acc8]">{place}</Text>

          <View className="mt-4 self-start rounded-full bg-[#5d491b] px-3 py-1">
            <Text className="text-sm font-semibold capitalize text-[#ffe9a5]">
              {status}
            </Text>
          </View>

          <View className="mt-4 gap-3">
            {items.map((item) => (
              <View
                key={`${code}-detail-${item.label}`}
                className="flex-row items-center justify-between rounded-2xl bg-[#182233] px-4 py-3"
              >
                <Text className="flex-1 text-sm text-[#d0ddf5]">{item.label}</Text>
                <Text className="text-base font-semibold text-white">{item.value}</Text>
              </View>
            ))}
          </View>

          <View className="mt-5 rounded-[22px] bg-[#1a2638] px-4 py-4">
            <View className="flex-row items-center justify-between gap-3">
              <Text className="text-base text-[#c3d3eb]">Total a receber</Text>
              <Text className="text-[20px] font-bold text-[#f0bb57]">{total}</Text>
            </View>
          </View>

          <View className="mt-5 gap-3">
            <Text className="text-[11px] font-bold uppercase tracking-[3px] text-[#d7e3f5]">
              Pagar com:
            </Text>
            <View className="flex-row gap-3">
              <Pressable
                onPress={() => onPayment("pix")}
                className="flex-1 rounded-[18px] border border-[#176f57] bg-[#10352d] px-4 py-4"
              >
                <Text className="text-center text-base font-semibold text-[#aef3d7]">Pix</Text>
              </Pressable>
              <Pressable
                onPress={() => onPayment("dinheiro")}
                className="flex-1 rounded-[18px] border border-[#176f57] bg-[#10352d] px-4 py-4"
              >
                <Text className="text-center text-base font-semibold text-[#aef3d7]">
                  Dinheiro
                </Text>
              </Pressable>
            </View>
            <Pressable
              onPress={() => onPayment("cartao")}
              className="rounded-[18px] border border-[#1f537b] bg-[#10324f] px-4 py-4"
            >
              <Text className="text-center text-base font-semibold text-[#d8f1ff]">
                Cartao
              </Text>
            </Pressable>
          </View>

          <LinearGradient
            colors={["#23c8a0", "#63e2a4"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{ borderRadius: 18, marginTop: 20 }}
          >
            <Pressable className="px-5 py-4">
              <Text className="text-center text-base font-semibold text-[#092118]">
                Marcar paga e imprimir
              </Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </GlassPanel>
  );
}
