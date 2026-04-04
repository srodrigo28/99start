import { Pressable, Text, View } from "react-native";

import { GlassPanel, ScreenContainer, SectionLabel } from "../../shared/components";
import { useResponsive } from "../../shared/hooks";

export type AdminStore = {
  id: string;
  name: string;
  city: string;
  state: string;
  status: "ativo" | "pendente" | "bloqueado";
  products: number;
  orders: number;
  customers: number;
  phone: string;
  createdAt: string;
};

type StoreAdminDetailScreenProps = {
  store: AdminStore;
  onBack: () => void;
  onLogout: () => void;
};

export function StoreAdminDetailScreen({
  store,
  onBack,
  onLogout,
}: StoreAdminDetailScreenProps) {
  const { heroTitleLineHeight, heroTitleSize, letterSpacingWide, sectionPadding } =
    useResponsive();

  return (
    <ScreenContainer>
      <GlassPanel className="mb-4">
        <View className="gap-4" style={{ padding: sectionPadding }}>
          <View className="flex-row items-center justify-between gap-3">
            <Pressable onPress={onBack}>
              <Text
                className="text-[11px] font-bold uppercase text-[#d8e3f5]"
                style={{ letterSpacing: letterSpacingWide }}
              >
                Voltar para o admin
              </Text>
            </Pressable>
            <View className="rounded-full bg-[#10352d] px-3 py-1">
              <Text className="text-sm font-semibold capitalize text-[#aef3d7]">
                {store.status}
              </Text>
            </View>
          </View>
          <SectionLabel eyebrow="Detalhe administrativo" subtitle="visao completa do estabelecimento" />
          <Text
            className="font-bold text-white"
            style={{ fontSize: heroTitleSize, lineHeight: heroTitleLineHeight }}
          >
            {store.name}
          </Text>
          <Text className="text-sm leading-7 text-[#a7bdd7]">
            Acompanhe dados cadastrais, operacionais e indicadores principais do estabelecimento.
          </Text>
        </View>
      </GlassPanel>

      <GlassPanel className="mb-4">
        <View className="gap-4" style={{ padding: sectionPadding }}>
          <SectionLabel eyebrow="Dados principais" />
          <View className="gap-3">
            <InfoRow label="Data de cadastro" value={store.createdAt} />
            <InfoRow label="Telefone" value={store.phone} />
            <InfoRow label="Cidade / Estado" value={`${store.city} - ${store.state}`} />
            <InfoRow label="Status" value={store.status} />
          </View>
        </View>
      </GlassPanel>

      <GlassPanel className="mb-4">
        <View className="gap-4" style={{ padding: sectionPadding }}>
          <SectionLabel eyebrow="Indicadores do estabelecimento" />
          <View className="gap-3">
            <StatBox label="Produtos cadastrados" value={String(store.products)} />
            <StatBox label="Pedidos realizados" value={String(store.orders)} />
            <StatBox label="Clientes usando" value={String(store.customers)} />
          </View>
        </View>
      </GlassPanel>

      <GlassPanel>
        <View className="gap-3" style={{ padding: sectionPadding }}>
          <Pressable
            onPress={onBack}
            className="rounded-[18px] border border-[#46576d] bg-[#1f2938] px-5 py-4"
          >
            <Text className="text-center text-base font-semibold text-white">
              Voltar para estabelecimentos
            </Text>
          </Pressable>
          <Pressable
            onPress={onLogout}
            className="rounded-[18px] border border-[#5a4251] bg-[#2d1d28] px-5 py-4"
          >
            <Text className="text-center text-base font-semibold text-white">
              Sair e trocar usuario
            </Text>
          </Pressable>
        </View>
      </GlassPanel>
    </ScreenContainer>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View className="rounded-[18px] bg-[#131c2b] px-4 py-3">
      <Text className="text-[11px] uppercase tracking-[2px] text-[#8fa5c3]">{label}</Text>
      <Text className="mt-2 text-base font-semibold capitalize text-white">{value}</Text>
    </View>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <View className="rounded-[18px] bg-[#131c2b] px-4 py-4">
      <Text className="text-[11px] uppercase tracking-[2px] text-[#8fa5c3]">{label}</Text>
      <Text className="mt-2 text-[24px] font-bold text-white">{value}</Text>
    </View>
  );
}
