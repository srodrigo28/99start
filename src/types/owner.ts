export type OwnerBenefit = {
  icon: string;
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

export type DashboardRoadmapItem = {
  step: string;
  title: string;
  text: string;
};

export type DashboardHeader = {
  backHref: string;
  backLabel: string;
  badge: string;
  title: string;
  description: string;
  status: string;
};

export type DashboardSectionIntro = {
  eyebrow: string;
  title?: string;
  description: string;
  badge?: string;
  actionLabel?: string;
};
