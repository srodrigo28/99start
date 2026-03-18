export type OwnerBenefit = {
  title: string;
  text: string;
};

export type OwnerStep = {
  id: string;
  title: string;
  text: string;
};

export type OwnerMetricTone = "mint" | "gold" | "blue" | "rose";

export type OwnerMetric = {
  label: string;
  value: string;
  tone: OwnerMetricTone;
  detail?: string;
};

export type OnboardingStage = {
  number: string;
  title: string;
  description: string;
};

export type OnboardingField = {
  label: string;
  value: string;
  hint?: string;
};

export type MenuDraft = {
  category: string;
  items: string[];
};

export type OwnerAction = {
  href: string;
  title: string;
  text: string;
  tone: "warm" | "cool" | "mint" | "neutral";
};

export type CommandStatus = "Ativa" | "Fechando" | "Pagamento";

export type OwnerCommand = {
  code: string;
  customer: string;
  location: string;
  total: string;
  status: CommandStatus;
  createdAt?: string;
  items?: { name: string; price: string }[];
};

export type TableStatus = "Livre" | "Ocupada" | "Reservada" | "Bloqueada";

export type OwnerTable = {
  number: string;
  seats: number;
  status: TableStatus;
  orders: number;
  total?: string;
};

export type TableAlert = {
  table: string;
  customer: string;
  item: string;
  total: string;
};

export const ownerBenefits: OwnerBenefit[] = [
  {
    title: "Cadastre seu estabelecimento",
    text: "Nome, CNPJ, localizacao, horarios, cardapio e identidade do local.",
  },
  {
    title: "Gerencie mesas e comandas",
    text: "Visual simples para acompanhar ocupacao, pedidos e fechamento.",
  },
  {
    title: "Organize a operacao",
    text: "Painel unico para status de comanda, faturamento e fluxo do dia.",
  },
];

export const ownerStartSteps: OwnerStep[] = [
  {
    id: "01",
    title: "Criar conta",
    text: "Entrada inicial para proprietario com email, senha e dados basicos.",
  },
  {
    id: "02",
    title: "Cadastrar o local",
    text: "Preencher informacoes do estabelecimento e preparar a vitrine.",
  },
  {
    id: "03",
    title: "Comecar a operar",
    text: "Adicionar mesas, cardapio e acompanhar comandas abertas.",
  },
];

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
    detail: "cliente aguardando retorno",
    tone: "rose",
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
    text: "Iniciar ou ajustar onboarding do local",
    tone: "warm",
  },
  {
    href: "/owner/tabs",
    title: "Controle de comandas",
    text: "Ver ativas, fechamento e pendencias",
    tone: "cool",
  },
  {
    href: "/owner/tables",
    title: "Gerenciar mesas",
    text: "Status, capacidade e ocupacao",
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
    title: "Basico",
    description: "Nome, descricao, categoria, faixa de preco e contato.",
  },
  {
    number: "02",
    title: "Midia",
    description: "Fotos do local, capa e video opcional para a vitrine.",
  },
  {
    number: "03",
    title: "Cardapio e ambiente",
    description: "Itens iniciais, estilo musical e faixa etaria principal.",
  },
];

export const onboardingFields: OnboardingField[] = [
  { label: "Nome do estabelecimento", value: "Saraiva Bar" },
  {
    label: "Descricao",
    value: "Bar com musica ao vivo, ambiente casual e foco em espetos.",
  },
  { label: "Categoria", value: "Bar" },
  { label: "Faixa de preco", value: "Medio" },
  { label: "WhatsApp", value: "(62) 99999-9999" },
  {
    label: "Cidade",
    value: "Goiania - GO",
    hint: "Localizacao sera usada na busca por proximidade.",
  },
];

export const onboardingMenuDrafts: MenuDraft[] = [
  {
    category: "🍔 Comidas",
    items: ["Picanha na chapa", "Espeto de carne", "Porcao mista"],
  },
  {
    category: "🍻 Bebidas",
    items: ["Balde de cerveja", "Gin tropical", "Refrigerante lata"],
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
    items: [{ name: "3x carne espeto", price: "R$ 27,00" }],
  },
  {
    code: "#1766423921796",
    customer: "Heionekm",
    location: "Balcao · Saraiva Bar",
    createdAt: "22/12/2025, 18:43",
    total: "R$ 75,00",
    status: "Fechando",
    items: [
      { name: "3x heionekm", price: "R$ 75,00" },
      { name: "1x carne espeto", price: "R$ 9,00" },
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
      { name: "1x refrigerante lata", price: "R$ 12,00" },
      { name: "1x batata rustica", price: "R$ 20,10" },
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
    item: "1x carne espeto",
    total: "R$ 25,00",
  },
  {
    table: "Mesa 05",
    customer: "Julia Costa",
    item: "2x picanha na chapa",
    total: "R$ 72,00",
  },
];
