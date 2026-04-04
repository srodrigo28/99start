import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import {
  GlassPanel,
  MenuIcon,
  ScreenContainer,
  SectionLabel,
} from "../../shared/components";
import { useResponsive } from "../../shared/hooks";
import { AdminFilterBar, AdminMetricCard, EstablishmentCard } from "./components";
import type { AdminStore } from "./StoreAdminDetailScreen";

type AdminScreenProps = {
  onBackHome: () => void;
  onOpenStoreDetail: (store: AdminStore) => void;
};

const establishments: AdminStore[] = [
  {
    id: "1",
    name: "Saraiva Bar",
    city: "Aparecida de Goiania",
    state: "GO",
    status: "ativo" as const,
    products: 128,
    orders: 942,
    customers: 584,
    phone: "(62) 99999-9999",
    createdAt: "12/01/2026",
  },
  {
    id: "2",
    name: "Quinta da Serra",
    city: "Goiania",
    state: "GO",
    status: "ativo" as const,
    products: 94,
    orders: 611,
    customers: 403,
    phone: "(62) 98888-1111",
    createdAt: "02/02/2026",
  },
  {
    id: "3",
    name: "Bistro Central",
    city: "Anapolis",
    state: "GO",
    status: "pendente" as const,
    products: 47,
    orders: 103,
    customers: 96,
    phone: "(62) 97777-2222",
    createdAt: "17/03/2026",
  },
];

export function AdminScreen({ onBackHome, onOpenStoreDetail }: AdminScreenProps) {
  const { heroTitleLineHeight, heroTitleSize, letterSpacingWide, sectionPadding } =
    useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedStoreId, setSelectedStoreId] = useState(establishments[0].id);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "todos" | "ativo" | "pendente" | "bloqueado"
  >("todos");

  const filteredStores = establishments.filter((item) => {
    const searchValue = search.trim().toLowerCase();
    const matchesStatus = statusFilter === "todos" || item.status === statusFilter;
    const matchesSearch =
      searchValue.length === 0 ||
      item.name.toLowerCase().includes(searchValue) ||
      item.city.toLowerCase().includes(searchValue) ||
      item.phone.toLowerCase().includes(searchValue);

    return matchesStatus && matchesSearch;
  });

  const metricsBase = filteredStores.length > 0 ? filteredStores : establishments;
  const totalProducts = metricsBase.reduce((sum, item) => sum + item.products, 0);
  const totalOrders = metricsBase.reduce((sum, item) => sum + item.orders, 0);
  const totalCustomers = metricsBase.reduce((sum, item) => sum + item.customers, 0);
  const activeStores = metricsBase.filter((item) => item.status === "ativo").length;
  const selectedStore =
    filteredStores.find((item) => item.id === selectedStoreId) ??
    establishments.find((item) => item.id === selectedStoreId) ??
    metricsBase[0];

  return (
    <ScreenContainer>
      <GlassPanel className="mb-4">
        <View className="gap-4" style={{ padding: sectionPadding }}>
          <View className="flex-row items-center justify-between gap-3">
            <Pressable onPress={onBackHome}>
              <Text
                className="text-[11px] font-bold uppercase text-[#d8e3f5]"
                style={{ letterSpacing: letterSpacingWide }}
              >
                Voltar para o inicio
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setMenuOpen((previous) => !previous)}
              className="h-12 w-12 items-center justify-center rounded-2xl border border-[#32435b] bg-[#1b2432]"
            >
              <MenuIcon />
            </Pressable>
          </View>

          {menuOpen ? (
            <View className="rounded-[22px] border border-[#2d3c53] bg-[#111b2a] px-4 py-4">
              <Text className="mb-3 text-[11px] font-bold uppercase tracking-[3px] text-[#f0bb57]">
                Menu mobile admin
              </Text>
              <View className="gap-3">
                <View className="rounded-[18px] bg-[#172132] px-4 py-3">
                  <Text className="text-base font-semibold text-white">Resumo global</Text>
                  <Text className="mt-1 text-sm text-[#a8bdd7]">
                    Visao executiva da plataforma inteira.
                  </Text>
                </View>
                <View className="rounded-[18px] bg-[#172132] px-4 py-3">
                  <Text className="text-base font-semibold text-white">
                    Estabelecimentos cadastrados
                  </Text>
                  <Text className="mt-1 text-sm text-[#a8bdd7]">
                    Lista com status, clientes, produtos e pedidos.
                  </Text>
                </View>
                <View className="rounded-[18px] bg-[#172132] px-4 py-3">
                  <Text className="text-base font-semibold text-white">Total de clientes</Text>
                  <Text className="mt-1 text-sm text-[#a8bdd7]">
                    Indicador consolidado dos clientes usando os estabelecimentos.
                  </Text>
                </View>
                <Pressable
                  onPress={onBackHome}
                  className="rounded-[18px] border border-[#4a5364] bg-[#202938] px-4 py-4"
                >
                  <Text className="text-center text-base font-semibold text-white">
                    Sair e entrar com outro usuario
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : null}

          <SectionLabel eyebrow="Painel administrativo" subtitle="visao global da plataforma" />
          <Text
            className="font-bold text-white"
            style={{ fontSize: heroTitleSize, lineHeight: heroTitleLineHeight }}
          >
            Controle executivo da operacao.
          </Text>
          <Text className="text-sm leading-7 text-[#a7bdd7]">
            Acompanhe estabelecimentos cadastrados, produtos totais, pedidos
            realizados e a base de clientes em um painel unico para administracao master.
          </Text>
        </View>
      </GlassPanel>

      <GlassPanel className="mb-4">
        <View className="gap-4" style={{ padding: sectionPadding }}>
          <SectionLabel eyebrow="Resumo global" />
          <View className="gap-3">
            <AdminMetricCard
              eyebrow="Estabelecimentos"
              value={String(establishments.length)}
              detail={`${activeStores} estabelecimentos ativos na base atual`}
              tone="amber"
            />
            <AdminMetricCard
              eyebrow="Produtos cadastrados"
              value={String(totalProducts)}
              detail="Total consolidado de itens publicados pelos estabelecimentos"
              tone="green"
            />
            <AdminMetricCard
              eyebrow="Pedidos realizados"
              value={String(totalOrders)}
              detail="Volume total de pedidos processados na plataforma"
              tone="blue"
            />
            <AdminMetricCard
              eyebrow="Clientes usando"
              value={String(totalCustomers)}
              detail="Base consolidada de clientes atendidos pelos estabelecimentos"
              tone="pink"
            />
          </View>
        </View>
      </GlassPanel>

      <GlassPanel className="mb-4">
        <View className="gap-5" style={{ padding: sectionPadding }}>
          <SectionLabel
            eyebrow="Estabelecimentos cadastrados"
            subtitle="Base inicial para administracao e futura integracao com filtros e detalhes."
          />
          <AdminFilterBar
            search={search}
            statusFilter={statusFilter}
            onSearchChange={setSearch}
            onStatusChange={setStatusFilter}
          />
          <View className="gap-3">
            {filteredStores.map((item) => (
              <EstablishmentCard
                key={item.id}
                name={item.name}
                city={item.city}
                state={item.state}
                status={item.status}
                products={item.products}
                orders={item.orders}
                customers={item.customers}
                phone={item.phone}
                createdAt={item.createdAt}
                selected={item.id === selectedStoreId}
                onPress={() => setSelectedStoreId(item.id)}
              />
            ))}
            {filteredStores.length === 0 ? (
              <View className="rounded-[24px] border border-[#2a374d] bg-[#1a2331] px-4 py-4">
                <Text className="text-base font-semibold text-white">
                  Nenhum estabelecimento encontrado
                </Text>
                <Text className="mt-2 text-sm leading-6 text-[#a8bdd7]">
                  Ajuste a busca ou altere o filtro de status para continuar.
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      </GlassPanel>

      <GlassPanel>
        <View className="gap-5" style={{ padding: sectionPadding }}>
          <SectionLabel
            eyebrow="Resumo do estabelecimento"
            subtitle="Detalhe rapido para leitura administrativa no mobile."
          />
          <View className="rounded-[24px] border border-[#2a374d] bg-[#1a2331] px-4 py-4">
            <View className="flex-row items-start justify-between gap-3">
              <View className="flex-1 gap-2">
                <Text className="text-[20px] font-semibold text-white">{selectedStore.name}</Text>
                <Text className="text-sm text-[#a8bdd7]">
                  {selectedStore.city} - {selectedStore.state}
                </Text>
              </View>
              <View className="rounded-full bg-[#10352d] px-3 py-1">
                <Text className="text-sm font-semibold capitalize text-[#aef3d7]">
                  {selectedStore.status}
                </Text>
              </View>
            </View>

            <View className="mt-4 gap-3">
              <View className="rounded-[18px] bg-[#131c2b] px-4 py-3">
                <Text className="text-[11px] uppercase tracking-[2px] text-[#8fa5c3]">
                  Data de cadastro
                </Text>
                <Text className="mt-2 text-base font-semibold text-white">
                  {selectedStore.createdAt}
                </Text>
              </View>
              <View className="rounded-[18px] bg-[#131c2b] px-4 py-3">
                <Text className="text-[11px] uppercase tracking-[2px] text-[#8fa5c3]">
                  Telefone
                </Text>
                <Text className="mt-2 text-base font-semibold text-white">
                  {selectedStore.phone}
                </Text>
              </View>
              <View className="rounded-[18px] bg-[#131c2b] px-4 py-3">
                <Text className="text-[11px] uppercase tracking-[2px] text-[#8fa5c3]">
                  Cidade / Estado
                </Text>
                <Text className="mt-2 text-base font-semibold text-white">
                  {selectedStore.city} - {selectedStore.state}
                </Text>
              </View>
              <View className="rounded-[18px] bg-[#131c2b] px-4 py-3">
                <Text className="text-[11px] uppercase tracking-[2px] text-[#8fa5c3]">
                  Estatisticas do estabelecimento
                </Text>
                <Text className="mt-2 text-base font-semibold text-white">
                  {selectedStore.products} produtos, {selectedStore.orders} pedidos e{" "}
                  {selectedStore.customers} clientes usando.
                </Text>
              </View>
              <Pressable
                onPress={() => onOpenStoreDetail(selectedStore)}
                className="rounded-[18px] border border-[#2b5b86] bg-[#17324b] px-5 py-4"
              >
                <Text className="text-center text-base font-semibold text-white">
                  Abrir detalhe completo
                </Text>
              </Pressable>
              <Pressable
                onPress={onBackHome}
                className="rounded-[18px] border border-[#46576d] bg-[#1f2938] px-5 py-4"
              >
                <Text className="text-center text-base font-semibold text-white">
                  Sair do painel admin
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GlassPanel>
    </ScreenContainer>
  );
}
