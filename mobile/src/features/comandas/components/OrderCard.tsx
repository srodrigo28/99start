import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export type OrderStatus = "ativa" | "fechando" | "pagamento";

type OrderCardProps = {
  code: string;
  customer: string;
  place: string;
  date: string;
  status: OrderStatus;
  total: string;
  items: Array<{ label: string; value: string }>;
  onOpenDetail: () => void;
  onUpdateStatus: () => void;
};

const statusStyles: Record<OrderStatus, string> = {
  ativa: "bg-[#123b63] text-[#cde8ff]",
  fechando: "bg-[#5d491b] text-[#ffe9a5]",
  pagamento: "bg-[#0f5a47] text-[#b8ffe0]",
};

export function OrderCard({
  code,
  customer,
  place,
  date,
  status,
  total,
  items,
  onOpenDetail,
  onUpdateStatus,
}: OrderCardProps) {
  const badgeClass = statusStyles[status];
  const [bgClass, textClass] = badgeClass.split(" ");

  return (
    <View className="rounded-[26px] border border-[#2a374d] bg-[#1a2331] px-5 py-5">
      <View className="gap-2">
        <Text className="text-[18px] font-bold text-white">{code}</Text>
        <Text className="text-base text-[#dce7f6]">{customer}</Text>
        <Text className="text-base text-[#97acc8]">{place}</Text>
        <Text className="text-sm text-[#97acc8]">{date}</Text>
      </View>

      <View className={`mt-4 self-start rounded-full px-3 py-1 ${bgClass}`}>
        <Text className={`text-sm font-semibold capitalize ${textClass}`}>{status}</Text>
      </View>

      <Text className="mt-4 text-[22px] font-bold text-[#f0bb57]">{total}</Text>

      <View className="mt-4 gap-3">
        {items.map((item) => (
          <View
            key={`${code}-${item.label}`}
            className="flex-row items-center justify-between rounded-2xl bg-[#121b2a] px-4 py-3"
          >
            <Text className="flex-1 text-sm text-[#c7d6ec]">{item.label}</Text>
            <Text className="text-sm font-semibold text-white">{item.value}</Text>
          </View>
        ))}
      </View>

      <LinearGradient
        colors={["#4476ff", "#28c8e8"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ borderRadius: 18, marginTop: 18 }}
      >
        <Pressable onPress={onOpenDetail} className="px-5 py-4">
          <Text className="text-center text-base font-semibold text-white">
            Abrir detalhe
          </Text>
        </Pressable>
      </LinearGradient>

      <Pressable
        onPress={onUpdateStatus}
        className="mt-3 rounded-[18px] border border-[#33435a] bg-[#222c3b] px-5 py-4"
      >
        <Text className="text-center text-base font-semibold text-white">
          Atualizar status
        </Text>
      </Pressable>
    </View>
  );
}
