import { Pressable, Text, View } from "react-native";

import { TextField } from "../../cadastro/components";

type AdminFilterBarProps = {
  search: string;
  statusFilter: "todos" | "ativo" | "pendente" | "bloqueado";
  onSearchChange: (value: string) => void;
  onStatusChange: (value: "todos" | "ativo" | "pendente" | "bloqueado") => void;
};

const filters: Array<"todos" | "ativo" | "pendente" | "bloqueado"> = [
  "todos",
  "ativo",
  "pendente",
  "bloqueado",
];

export function AdminFilterBar({
  search,
  statusFilter,
  onSearchChange,
  onStatusChange,
}: AdminFilterBarProps) {
  return (
    <View className="gap-4">
      <TextField
        label="Buscar estabelecimento"
        placeholder="Nome, cidade ou telefone"
        value={search}
        onChangeText={onSearchChange}
      />
      <View className="flex-row flex-wrap gap-3">
        {filters.map((filter) => (
          <Pressable
            key={filter}
            onPress={() => onStatusChange(filter)}
            className={`rounded-full border px-4 py-2 ${
              statusFilter === filter
                ? "border-[#f0b84a] bg-[#3f3219]"
                : "border-[#33435a] bg-[#202938]"
            }`}
          >
            <Text className="text-sm font-semibold capitalize text-white">{filter}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
