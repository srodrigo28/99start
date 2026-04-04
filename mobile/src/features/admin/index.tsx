import { Pressable, Text, View } from "react-native";

import { GlassPanel, ScreenContainer, SectionLabel } from "../../shared/components";
import { useResponsive } from "../../shared/hooks";
import { AdminMetricCard, EstablishmentCard } from "./components";

type AdminScreenProps = {
  onBackHome: () => void;
};

const establishments = [
  {
    id: "1",
    name: "Saraiva Bar",
    city: "Aparecida de Goiania - GO",
    status: "ativo" as const,
    products: 128,
    orders: 942,
  },
  {
    id: "2",
    name: "Quinta da Serra",
    city: "Goiania - GO",
    status: "ativo" as const,
    products: 94,
    orders: 611,
  },
  {
    id: "3",
    name: "Bistro Central",
    city: "Anapolis - GO",
    status: "pendente" as const,
    products: 47,
    orders: 103,
  },
];

export function AdminScreen({ onBackHome }: AdminScreenProps) {
  const { heroTitleLineHeight, heroTitleSize, letterSpacingWide, sectionPadding } =
    useResponsive();

  const totalProducts = establishments.reduce((sum, item) => sum + item.products, 0);
  const totalOrders = establishments.reduce((sum, item) => sum + item.orders, 0);
  const activeStores = establishments.filter((item) => item.status === "ativo").length;

  return (
    <ScreenContainer>
      <GlassPanel className="mb-4">
        <View className="gap-4" style={{ padding: sectionPadding }}>
          <Pressable onPress={onBackHome}>
            <Text
              className="text-[11px] font-bold uppercase text-[#d8e3f5]"
              style={{ letterSpacing: letterSpacingWide }}
            >
              Voltar para o inicio
            </Text>
          </Pressable>
          <SectionLabel eyebrow="Painel administrativo" subtitle="visao global da plataforma" />
          <Text
            className="font-bold text-white"
            style={{ fontSize: heroTitleSize, lineHeight: heroTitleLineHeight }}
          >
            Controle executivo da operacao.
          </Text>
          <Text className="text-sm leading-7 text-[#a7bdd7]">
            Acompanhe estabelecimentos cadastrados, produtos totais e pedidos
            realizados em um painel unico para administracao master.
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
              eyebrow="Receita monitorada"
              value="R$ 94 mil"
              detail="Indicador mockado para futura leitura administrativa da API"
              tone="pink"
            />
          </View>
        </View>
      </GlassPanel>

      <GlassPanel>
        <View className="gap-5" style={{ padding: sectionPadding }}>
          <SectionLabel
            eyebrow="Estabelecimentos cadastrados"
            subtitle="Base inicial para administracao e futura integracao com filtros e detalhes."
          />
          <View className="gap-3">
            {establishments.map((item) => (
              <EstablishmentCard
                key={item.id}
                name={item.name}
                city={item.city}
                status={item.status}
                products={item.products}
                orders={item.orders}
              />
            ))}
          </View>
        </View>
      </GlassPanel>
    </ScreenContainer>
  );
}
