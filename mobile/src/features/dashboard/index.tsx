import { Pressable, Text, View } from "react-native";

import {
  GlassPanel,
  MenuIcon,
  PinIcon,
  PlateIcon,
  ScreenContainer,
  SectionLabel,
  StoreIcon,
} from "../../shared/components";
import { useResponsive } from "../../shared/hooks";
import { ActionCard, MetricCard, ShortcutCard } from "./components";

type DashboardScreenProps = {
  onBackHome: () => void;
  onOpenConfig: () => void;
  onOpenCommandas: () => void;
};

export function DashboardScreen({
  onBackHome,
  onOpenConfig,
  onOpenCommandas,
}: DashboardScreenProps) {
  const { heroTitleLineHeight, heroTitleSize, letterSpacingWide, sectionPadding } =
    useResponsive();

  return (
    <ScreenContainer>
      <GlassPanel className="mb-4">
        <View className="flex-row items-center justify-between gap-4" style={{ padding: sectionPadding }}>
          <View className="flex-1">
            <Text
              className="text-[11px] font-bold uppercase text-[#f0bb57]"
              style={{ letterSpacing: letterSpacingWide }}
            >
              99Start
            </Text>
            <Text className="mt-2 text-base font-semibold text-white">Saraiva Bar ativo</Text>
          </View>
          <Pressable
            onPress={onBackHome}
            className="h-12 w-12 items-center justify-center rounded-2xl border border-[#32435b] bg-[#1b2432]"
          >
            <MenuIcon />
          </Pressable>
        </View>
      </GlassPanel>

      <GlassPanel className="mb-4">
        <View className="gap-5" style={{ padding: sectionPadding }}>
          <SectionLabel eyebrow="Resumo operacional" subtitle="visao do dia" />
          <View className="self-start rounded-full border border-[#374861] bg-[#1d2735] px-4 py-2">
            <Text className="text-xs text-[#d7e2f5]">visao do dia</Text>
          </View>
          <Text
            className="font-bold text-white"
            style={{ fontSize: heroTitleSize, lineHeight: heroTitleLineHeight }}
          >
            Visao do dia em um unico painel.
          </Text>

          <View className="gap-3">
            <MetricCard eyebrow="Receita hoje" value="R$ 611" detail="8 comandas somadas no dia" tone="green" />
            <MetricCard eyebrow="Comandas abertas" value="8" detail="3 aguardando fechamento" tone="amber" />
            <MetricCard eyebrow="Mesas ocupadas" value="12/20" detail="4 livres neste momento" tone="blue" />
            <MetricCard eyebrow="Mensagens" value="1" detail="Cliente aguardando retorno" tone="pink" />
          </View>

          <View className="gap-3">
            <ActionCard
              title="Configuracoes da loja"
              description="Atualizar dados, recebimentos, endereco e identidade"
              colors="bg-[#ff6f67]"
              onPress={onOpenConfig}
            />
            <ActionCard
              title="Controle de comandas"
              description="Ver comandas ativas, fechamentos e pendencias"
              colors="bg-[#2fbde7]"
              onPress={onOpenCommandas}
            />
            <ActionCard
              title="Gerenciar mesas"
              description="Acompanhar status, capacidade e ocupacao"
              colors="bg-[#36dcb6]"
            />
            <ActionCard
              title="Trocar perfil"
              description="Voltar para a entrada inicial"
              colors="bg-[#1a2331]"
              icon={<MenuIcon size={18} />}
            />
          </View>
        </View>
      </GlassPanel>

      <GlassPanel>
        <View className="gap-5" style={{ padding: sectionPadding }}>
          <SectionLabel
            eyebrow="Atalhos principais"
            subtitle="Use o dashboard como resumo e entre nas rotas especificas para operar com mais foco."
          />
          <Text className="text-[24px] font-bold leading-9 text-white">
            Acesse cada area no detalhe.
          </Text>
          <View className="gap-3">
            <ShortcutCard
              icon={<StoreIcon />}
              title="Comandas ativas"
              description="Abra a rota completa para ver itens, totais, historico e acoes de pagamento."
              badge="8 comandas"
              cta="Abrir comandas"
              onPress={onOpenCommandas}
            />
            <ShortcutCard
              icon={<PlateIcon />}
              title="Mesas"
              description="Entre na visao dedicada para acompanhar status, ocupacao, pedidos e detalhes por mesa."
              badge="20 mesas"
              cta="Abrir mesas"
            />
            <ShortcutCard
              icon={<PinIcon />}
              title="Voltar ao inicio"
              description="Use este atalho para retornar ao fluxo inicial ou trocar o contexto atual do estabelecimento."
              badge="inicio"
              cta="Trocar perfil"
              onPress={onBackHome}
            />
          </View>
        </View>
      </GlassPanel>
    </ScreenContainer>
  );
}
