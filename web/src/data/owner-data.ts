import type {
  AdminEstablishment,
  AdminNavItem,
  AdminQueueItem,
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
  OwnerNavItem,
  OwnerRouteSpotlight,
  OwnerSettingsSection,
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
  backHref: "/owner/settings",
  backLabel: "ir para configurações",
  badge: "dashboard",
  title: "Painel do proprietário",
  description:
    "Estrutura desenhada primeiro para leitura rápida no celular e depois expandida em blocos para desktop. Aqui o dono do local enxerga operação, mesas e comandas sem perder prioridade.",
  status: "Saraiva Bar ativo",
};

export const ownerDashboardNav: OwnerNavItem[] = [
  { href: "/owner/dashboard", label: "Dashboard", shortLabel: "Início", icon: "🏠" },
  { href: "/owner/tables", label: "Mesas", icon: "🍽️" },
  { href: "/owner/tabs", label: "Comandas", icon: "🧾" },
  { href: "/owner/settings", label: "Configurações", shortLabel: "Config.", icon: "⚙️" },
];

export const ownerDashboardSummaryIntro: DashboardSectionIntro = {
  eyebrow: "resumo operacional",
  title: "Visão do dia em um único painel.",
  description: "visão do dia",
  badge: "visão do dia",
};

export const ownerDashboardRoutesIntro: DashboardSectionIntro = {
  eyebrow: "atalhos principais",
  title: "Acesse cada área no detalhe.",
  description: "Use o dashboard como resumo e entre nas rotas específicas para operar com mais foco.",
};

export const ownerDashboardRouteSpotlights: OwnerRouteSpotlight[] = [
  {
    href: "/owner/tabs",
    icon: "🧾",
    title: "Comandas ativas",
    text: "Abra a rota completa para ver itens, totais, histórico e ações de pagamento.",
    badge: "8 comandas",
    cta: "Abrir comandas",
  },
  {
    href: "/owner/tables",
    icon: "🍽️",
    title: "Mesas",
    text: "Entre na visão dedicada para acompanhar status, ocupação, pedidos e detalhes por mesa.",
    badge: "20 mesas",
    cta: "Abrir mesas",
  },
];

export const ownerSettingsSections: OwnerSettingsSection[] = [
  {
    id: "store",
    icon: "🏪",
    title: "Dados da loja",
    description: "Informações principais do estabelecimento e recebimentos.",
    fields: ["Nome da loja", "CNPJ", "Telefone", "Responsável", "E-mail", "Chave PIX"],
  },
  {
    id: "address",
    icon: "📍",
    title: "Endereço e localização",
    description: "Dados do endereço comercial e ponto do mapa.",
    fields: ["CEP", "Rua", "Número", "Complemento", "Bairro", "Cidade", "UF", "Localização"],
  },
  {
    id: "brand",
    icon: "🖼️",
    title: "Logo, slug e categorias",
    description: "Identidade da marca e segmentação do negócio.",
    fields: ["Logo da empresa", "Slug público", "Categorias do estabelecimento"],
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
    href: "/owner/settings",
    title: "Configurações da loja",
    text: "Atualizar dados, recebimentos, endereço e identidade",
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
    actions: [
      { href: "/owner/tabs", label: "Ver detalhes", tone: "primary" },
      { href: "/owner/tabs", label: "Marcar como paga", tone: "secondary" },
    ],
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
    actions: [
      { href: "/owner/tabs", label: "Ver detalhes", tone: "primary" },
      { href: "/owner/tabs", label: "Marcar como paga", tone: "secondary" },
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
    actions: [
      { href: "/owner/tabs", label: "Ver detalhes", tone: "primary" },
      { href: "/owner/tabs", label: "Marcar como paga", tone: "secondary" },
    ],
  },
];

export const ownerTables: OwnerTable[] = [
  { number: "01", seats: 4, status: "Ocupada", orders: 2, total: "R$ 25,00", href: "/owner/tables" },
  { number: "02", seats: 4, status: "Livre", orders: 0, href: "/owner/tables" },
  { number: "03", seats: 2, status: "Livre", orders: 0, href: "/owner/tables" },
  { number: "04", seats: 6, status: "Reservada", orders: 0, href: "/owner/tables" },
  { number: "05", seats: 4, status: "Ocupada", orders: 3, total: "R$ 72,00", href: "/owner/tables" },
  { number: "06", seats: 8, status: "Bloqueada", orders: 0, href: "/owner/tables" },
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

export const adminNav: AdminNavItem[] = [
  { href: "/admin", label: "Visão geral", icon: "🛡️" },
  { href: "/owner/dashboard", label: "Painel da loja", icon: "🏪" },
  { href: "/owner/settings", label: "Configurações", icon: "⚙️" },
];

export const adminHeader: DashboardHeader = {
  backHref: "/owner/dashboard",
  backLabel: "voltar para o dashboard da loja",
  badge: "admin",
  title: "Admin geral",
  description: "Área pensada para controlar múltiplos estabelecimentos, acompanhar pendências e preparar a operação para contratos reais de API.",
  status: "3 estabelecimentos monitorados",
};

export const adminSummaryIntro: DashboardSectionIntro = {
  eyebrow: "controle global",
  title: "Tudo que precisa de decisão rápida.",
  description: "Acompanhe o volume de lojas, pendências e categorias sem depender do painel individual de cada estabelecimento.",
  badge: "visão central",
};

export const adminMetrics: OwnerMetric[] = [
  { label: "Lojas ativas", value: "3", detail: "2 prontas para operar hoje", tone: "mint" },
  { label: "Pendências", value: "5", detail: "cadastros, logos e validações", tone: "rose" },
  { label: "Categorias", value: "12", detail: "segmentos públicos disponíveis", tone: "blue" },
  { label: "Receita monitorada", value: "R$ 4,2 mil", detail: "somatório do dia nas lojas conectadas", tone: "gold" },
];

export const adminEstablishmentsIntro: DashboardSectionIntro = {
  eyebrow: "estabelecimentos",
  title: "Visão rápida das lojas cadastradas.",
  description: "Cada card representa uma unidade pronta para receber status, filtros e ações administrativas via API.",
};

export const adminEstablishments: AdminEstablishment[] = [
  { name: "Saraiva Bar", city: "Goiânia - GO", category: "Bar e música ao vivo", status: "Ativa", slug: "saraiva-bar" },
  { name: "Quintal da Serra", city: "Anápolis - GO", category: "Espetaria", status: "Onboarding", slug: "quintal-da-serra" },
  { name: "Café Horizonte", city: "Brasília - DF", category: "Cafeteria", status: "Revisão", slug: "cafe-horizonte" },
];

export const adminQueueIntro: DashboardSectionIntro = {
  eyebrow: "fila administrativa",
  title: "Próximas ações do admin.",
  description: "Lista inicial de prioridades para validar cadastros, revisar identidade visual e organizar categorias globais.",
};

export const adminQueue: AdminQueueItem[] = [
  { title: "Validar CNPJs pendentes", text: "Dois estabelecimentos ainda precisam de conferência documental antes da liberação completa.", tone: "gold" },
  { title: "Revisar logos enviadas", text: "Uma loja enviou imagem fora do padrão e precisa de ajuste antes da publicação.", tone: "blue" },
  { title: "Aprovar nova categoria", text: "Existe um pedido para incluir 'Adega' no catálogo global de categorias.", tone: "rose" },
];
