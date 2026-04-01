import type {
  DashboardHeader,
  DashboardRoadmapItem,
  DashboardSectionIntro,
  MenuDraft,
  OnboardingField,
  OnboardingStage,
  OwnerAction,
  OwnerBenefit,
  OwnerCommand,
  OwnerMetric,
  OwnerStep,
  OwnerTable,
  TableAlert,
} from "@/types/owner";

export const ownerBenefits: OwnerBenefit[] = [
  {
    icon: "🏪",
    title: "Cadastre seu estabelecimento",
    text: "Informe nome, CNPJ, localização, horários, cardápio e identidade do seu negócio.",
  },
  {
    icon: "🧾",
    title: "Gerencie mesas e comandas",
    text: "Acompanhe ocupação, pedidos e fechamento com uma visão simples e prática.",
  },
];

export const ownerStartSteps: OwnerStep[] = [
  {
    id: "01",
    title: "Criar conta",
    text: "Cadastre seu acesso com e-mail, senha e informações iniciais do responsável.",
  },
  {
    id: "02",
    title: "Cadastrar produtos",
    text: "Adicione os produtos do seu estabelecimento com nome, preço, categoria e descrição.",
  },
  {
    id: "03",
    title: "Criar campanhas de vendas",
    text: "Monte campanhas promocionais para atrair clientes e aumentar as vendas do seu negócio.",
  },
];

export const ownerDashboardHeader: DashboardHeader = {
  backHref: "/owner/onboarding",
  backLabel: "voltar para onboarding",
  badge: "dashboard",
  title: "Painel do proprietário",
  description:
    "Estrutura desenhada primeiro para leitura rápida no celular e depois expandida em blocos para desktop. Aqui o dono do local enxerga operação, mesas e comandas sem perder prioridade.",
  status: "Saraiva Bar ativo",
};

export const ownerDashboardSummaryIntro: DashboardSectionIntro = {
  eyebrow: "resumo operacional",
  title: "Visão do dia em um único painel.",
  description: "visão do dia",
  badge: "visão do dia",
};

export const ownerDashboardCommandsIntro: DashboardSectionIntro = {
  eyebrow: "comandas ativas",
  description: "prioridade visual para o que impacta caixa e operação",
  actionLabel: "Filtrar estabelecimento",
};

export const ownerDashboardTablesIntro: DashboardSectionIntro = {
  eyebrow: "gerenciamento de mesas",
  description: "grade simples no celular e leitura ampliada no desktop",
  badge: "20 mesas",
};

export const ownerDashboardRoadmapIntro: DashboardSectionIntro = {
  eyebrow: "próximas áreas",
  description:
    "Depois desta tela, as próximas rotas mais naturais são mesas e controle de comandas em detalhe. O layout já está preparado para reaproveitar cards, métricas e status.",
};

export const ownerDashboardMetrics: OwnerMetric[] = [
  {
    label: "Receita hoje",
    value: "R$ 611",
    detail: "8 comandas somadas no dia",
    tone: "mint",
  },
  {
    label: "Comandas abertas",
    value: "8",
    detail: "3 aguardando fechamento",
    tone: "gold",
  },
  {
    label: "Mesas ocupadas",
    value: "12/20",
    detail: "4 livres neste momento",
    tone: "blue",
  },
  {
    label: "Mensagens",
    value: "1",
    detail: "Cliente aguardando retorno",
    tone: "rose",
  },
];

export const ownerDashboardRoadmap: DashboardRoadmapItem[] = [
  {
    step: "01",
    title: "Tela de mesas em detalhe",
    text: "Mapa visual por número, status e pedidos pendentes.",
  },
  {
    step: "02",
    title: "Tela de comanda detalhada",
    text: "Itens, total, ação de marcar como paga e histórico.",
  },
  {
    step: "03",
    title: "Login do proprietário",
    text: "Separar visualmente criar conta de entrar.",
  },
];

export const ownerPreviewMetrics: OwnerMetric[] = [
  { label: "Comandas abertas", value: "8", tone: "gold" },
  { label: "Receita hoje", value: "R$ 611", tone: "mint" },
  { label: "Mesas ocupadas", value: "12/20", tone: "blue" },
];

export const ownerDashboardActions: OwnerAction[] = [
  {
    href: "/owner/onboarding",
    title: "Novo estabelecimento",
    text: "Iniciar ou ajustar o cadastro do local",
    tone: "warm",
  },
  {
    href: "/owner/tabs",
    title: "Controle de comandas",
    text: "Ver comandas ativas, fechamentos e pendências",
    tone: "cool",
  },
  {
    href: "/owner/tables",
    title: "Gerenciar mesas",
    text: "Acompanhar status, capacidade e ocupação",
    tone: "mint",
  },
  {
    href: "/",
    title: "Trocar perfil",
    text: "Voltar para a entrada inicial",
    tone: "neutral",
  },
];

export const onboardingStages: OnboardingStage[] = [
  {
    number: "01",
    title: "Básico",
    description: "Nome, descrição, categoria, faixa de preço e contato.",
  },
  {
    number: "02",
    title: "Mídia",
    description: "Fotos do local, imagem de capa e vídeo opcional para a vitrine.",
  },
  {
    number: "03",
    title: "Cardápio e ambiente",
    description: "Itens iniciais, estilo musical e perfil principal do público.",
  },
];

export const onboardingFields: OnboardingField[] = [
  { label: "Nome do estabelecimento", value: "Saraiva Bar" },
  {
    label: "Descrição",
    value: "Bar com música ao vivo, ambiente casual e foco em espetos.",
  },
  { label: "Categoria", value: "Bar" },
  { label: "Faixa de preço", value: "Médio" },
  { label: "WhatsApp", value: "(62) 99999-9999" },
  {
    label: "Cidade",
    value: "Goiânia - GO",
    hint: "A localização será usada na busca por proximidade.",
  },
];

export const onboardingMenuDrafts: MenuDraft[] = [
  {
    category: "🍔 Comidas",
    items: ["Picanha na chapa", "Espeto de carne", "Porção mista"],
  },
  {
    category: "🍻 Bebidas",
    items: ["Balde de cerveja", "Gin tropical", "Refrigerante em lata"],
  },
];

export const ownerCommands: OwnerCommand[] = [
  {
    code: "#1768343621162",
    customer: "Mateus Vinicius",
    location: "Mesa 12 · Saraiva Bar",
    createdAt: "13/01/2026, 23:34",
    total: "R$ 27,00",
    status: "Ativa",
    items: [{ name: "3x carne no espeto", price: "R$ 27,00" }],
  },
  {
    code: "#1766423921796",
    customer: "Heionekm",
    location: "Balcão · Saraiva Bar",
    createdAt: "22/12/2025, 18:43",
    total: "R$ 75,00",
    status: "Fechando",
    items: [
      { name: "3x heionekm", price: "R$ 75,00" },
      { name: "1x carne no espeto", price: "R$ 9,00" },
    ],
  },
  {
    code: "#1765400128872",
    customer: "Julia Costa",
    location: "Mesa 05 · Quintal da Serra",
    createdAt: "09/03/2026, 19:21",
    total: "R$ 122,00",
    status: "Pagamento",
    items: [
      { name: "2x picanha na chapa", price: "R$ 89,90" },
      { name: "1x refrigerante em lata", price: "R$ 12,00" },
      { name: "1x batata rústica", price: "R$ 20,10" },
    ],
  },
];

export const ownerTables: OwnerTable[] = [
  { number: "01", seats: 4, status: "Ocupada", orders: 2, total: "R$ 25,00" },
  { number: "02", seats: 4, status: "Livre", orders: 0 },
  { number: "03", seats: 2, status: "Livre", orders: 0 },
  { number: "04", seats: 6, status: "Reservada", orders: 0 },
  { number: "05", seats: 4, status: "Ocupada", orders: 3, total: "R$ 72,00" },
  { number: "06", seats: 8, status: "Bloqueada", orders: 0 },
];

export const ownerTableAlerts: TableAlert[] = [
  {
    table: "Mesa 01",
    customer: "Heionekm",
    item: "1x carne no espeto",
    total: "R$ 25,00",
  },
  {
    table: "Mesa 05",
    customer: "Julia Costa",
    item: "2x picanha na chapa",
    total: "R$ 72,00",
  },
];
