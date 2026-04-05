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
  establishmentName?: string;
  onBackHome: () => void;
  onOpenConfig: () => void;
  onOpenCommandas: () => void;
};

export function DashboardScreen({
  establishmentName,
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
            <Text className="mt-2 text-base font-semibold text-white">
              {establishmentName?.trim() || "Nova loja ativa"}
            </Text>
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
            Sua operacao comeca por aqui.
          </Text>

          <View className="gap-3">
            <MetricCard eyebrow="Receita hoje" value="R$ 0,00" detail="Nenhuma venda registrada ainda." tone="green" />
            <MetricCard eyebrow="Comandas abertas" value="0" detail="Sua fila de comandas ainda esta vazia." tone="amber" />
            <MetricCard eyebrow="Mesas ocupadas" value="0" detail="Nenhuma mesa ocupada neste momento." tone="blue" />
            <MetricCard eyebrow="Mensagens" value="0" detail="Sem alertas ou mensagens pendentes." tone="pink" />
          </View>

          <View className="gap-3">
            <ActionCard
              title="Configuracoes da loja"
              description="Complete os dados da loja, recebimentos, endereco e identidade visual."
              colors="bg-[#ff6f67]"
              onPress={onOpenConfig}
            />
            <ActionCard
              title="Controle de comandas"
              description="Quando a operacao comecar, acompanhe aqui comandas, fechamentos e pendencias."
              colors="bg-[#2fbde7]"
              onPress={onOpenCommandas}
            />
            <ActionCard
              title="Gerenciar mesas"
              description="Prepare o mapa de mesas para iniciar o atendimento da loja."
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
            subtitle="Sua conta foi criada. Agora o ideal e configurar a operacao antes de receber os primeiros pedidos."
          />
          <Text className="text-[24px] font-bold leading-9 text-white">
            Comece preparando sua loja.
          </Text>
          <View className="gap-3">
            <ShortcutCard
              icon={<StoreIcon />}
              title="Primeiros passos"
              description="Revise os dados basicos da sua loja antes de iniciar atendimento e pagamentos."
              badge="onboarding"
              cta="Abrir configuracoes"
              onPress={onOpenConfig}
            />
            <ShortcutCard
              icon={<PlateIcon />}
              title="Mesas"
              description="Quando essa area estiver conectada aos dados reais, voce acompanhara ocupacao, pedidos e status por mesa."
              badge="0 mesas"
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
