import { Pressable, Text, View } from "react-native";

type EstablishmentCardProps = {
  name: string;
  city: string;
  state: string;
  status: "ativo" | "pendente" | "bloqueado";
  products: number;
  orders: number;
  customers: number;
  phone: string;
  createdAt: string;
  selected?: boolean;
  onPress?: () => void;
};

const statusStyle = {
  ativo: "bg-[#10352d] text-[#aef3d7]",
  pendente: "bg-[#4b3917] text-[#ffe29e]",
  bloqueado: "bg-[#4a1d2f] text-[#ffc0d0]",
};

export function EstablishmentCard({
  name,
  city,
  state,
  status,
  products,
  orders,
  customers,
  phone,
  createdAt,
  selected,
  onPress,
}: EstablishmentCardProps) {
  const [bgClass, textClass] = statusStyle[status].split(" ");

  return (
    <Pressable
      onPress={onPress}
      className={`rounded-[24px] border bg-[#1a2331] px-4 py-4 ${
        selected ? "border-[#f0b84a]" : "border-[#2a374d]"
      }`}
    >
      <View className="flex-row items-start justify-between gap-3">
        <View className="flex-1 gap-2">
          <Text className="text-[18px] font-semibold text-white">{name}</Text>
          <Text className="text-sm text-[#a8bdd7]">
            {city} - {state}
          </Text>
          <Text className="text-xs text-[#8fa5c3]">Cadastro: {createdAt}</Text>
        </View>
        <View className={`rounded-full px-3 py-1 ${bgClass}`}>
          <Text className={`text-sm font-semibold capitalize ${textClass}`}>{status}</Text>
        </View>
      </View>

      <View className="mt-4 flex-row gap-3">
        <View className="flex-1 rounded-[18px] bg-[#131c2b] px-4 py-3">
          <Text className="text-[11px] uppercase tracking-[2px] text-[#8fa5c3]">Produtos</Text>
          <Text className="mt-2 text-[20px] font-bold text-white">{products}</Text>
        </View>
        <View className="flex-1 rounded-[18px] bg-[#131c2b] px-4 py-3">
          <Text className="text-[11px] uppercase tracking-[2px] text-[#8fa5c3]">Pedidos</Text>
          <Text className="mt-2 text-[20px] font-bold text-white">{orders}</Text>
        </View>
      </View>

      <View className="mt-3 flex-row gap-3">
        <View className="flex-1 rounded-[18px] bg-[#131c2b] px-4 py-3">
          <Text className="text-[11px] uppercase tracking-[2px] text-[#8fa5c3]">Clientes</Text>
          <Text className="mt-2 text-[20px] font-bold text-white">{customers}</Text>
        </View>
        <View className="flex-1 rounded-[18px] bg-[#131c2b] px-4 py-3">
          <Text className="text-[11px] uppercase tracking-[2px] text-[#8fa5c3]">Telefone</Text>
          <Text className="mt-2 text-sm font-semibold text-white">{phone}</Text>
        </View>
      </View>
    </Pressable>
  );
}
