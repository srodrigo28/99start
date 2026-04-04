import { Text, View } from "react-native";

import {
  GlassPanel,
  GradientButton,
  MenuIcon,
  ScreenContainer,
  SectionLabel,
  StoreIcon,
} from "../../shared/components";
import { useResponsive } from "../../shared/hooks";
import { AccessCard, FeatureCard, StepCard } from "./components";

type StartScreenProps = {
  onCreateAccount: () => void;
  onLogin: () => void;
};

export function StartScreen({ onCreateAccount, onLogin }: StartScreenProps) {
  const {
    heroTitleLineHeight,
    heroTitleSize,
    letterSpacingWide,
    sectionPadding,
  } = useResponsive();

  return (
    <ScreenContainer>
      <GlassPanel className="mb-4">
        <View className="gap-6" style={{ padding: sectionPadding }}>
          <View className="self-start rounded-full border border-[#36465d] bg-[#202b3a] px-4 py-2">
            <Text
              className="font-bold uppercase text-[#ffc457]"
              style={{ fontSize: 11, letterSpacing: letterSpacingWide }}
            >
              Cadastro de estabelecimentos
            </Text>
          </View>

          <View className="gap-4">
            <Text
              className="font-bold text-white"
              style={{ fontSize: heroTitleSize, lineHeight: heroTitleLineHeight }}
            >
              Tudo o que voce precisa para cadastrar, divulgar e vender mais.
            </Text>
            <Text className="text-base leading-7 text-[#9cb0cd]">
              Cadastre seu estabelecimento, organize seus produtos e prepare
              sua operacao para atrair clientes com mais praticidade.
            </Text>
          </View>

          <View className="gap-3">
            <GradientButton label="Criar conta" onPress={onCreateAccount} />
            <GradientButton
              label="Entrar"
              variant="secondary"
              onPress={onLogin}
            />
          </View>

          <View className="gap-4">
            <FeatureCard
              icon={<StoreIcon />}
              title="Cadastre seu estabelecimento"
              description="Informe nome, CNPJ, localizacao, horarios, cardapio e identidade do seu negocio."
            />
            <FeatureCard
              icon={<MenuIcon />}
              title="Gerencie mesas e comandas"
              description="Acompanhe ocupacao, pedidos e fechamento com uma visao simples e pratica."
            />
          </View>
        </View>
      </GlassPanel>

      <GlassPanel className="mb-4">
        <View className="gap-5" style={{ padding: sectionPadding }}>
          <SectionLabel
            eyebrow="Como funciona"
            subtitle="tres passos simples para comecar a vender"
          />
          <View className="self-start rounded-full border border-[#374861] bg-[#1d2735] px-4 py-2">
            <Text className="text-xs text-[#d7e2f5]">inicio rapido</Text>
          </View>
          <View className="gap-3 rounded-[24px] border border-[#213147] bg-[#101826] px-3 py-3">
            <StepCard
              step="01"
              title="Criar conta"
              description="Cadastre seu acesso com e-mail, senha e informacoes iniciais do responsavel."
            />
            <StepCard
              step="02"
              title="Cadastrar produtos"
              description="Adicione os produtos do seu estabelecimento com nome, preco, categoria e descricao."
            />
            <StepCard
              step="03"
              title="Criar campanhas de vendas"
              description="Monte campanhas promocionais para atrair clientes e aumentar as vendas do seu negocio."
            />
          </View>
        </View>
      </GlassPanel>

      <GlassPanel>
        <View className="gap-5" style={{ padding: sectionPadding }}>
          <SectionLabel eyebrow="Acessos disponiveis" />
          <View className="gap-3">
            <AccessCard
              title="Cadastro do proprietario"
              description="Crie sua conta e informe os dados iniciais do seu estabelecimento."
            />
            <AccessCard
              title="Login do proprietario"
              description="Acesse sua conta para gerenciar produtos, campanhas e atendimento."
            />
          </View>
        </View>
      </GlassPanel>
    </ScreenContainer>
  );
}
