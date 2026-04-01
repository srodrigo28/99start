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

export type OwnerCardAction = {
  href: string;
  label: string;
  tone: "primary" | "secondary";
};

export type OwnerNavItem = {
  href: string;
  label: string;
  shortLabel?: string;
  icon: string;
};

export type OwnerRouteSpotlight = {
  href: string;
  icon: string;
  title: string;
  text: string;
  badge: string;
  cta: string;
};

export type OwnerSettingsSection = {
  id: string;
  icon: string;
  title: string;
  description: string;
  fields: string[];
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
  actions?: OwnerCardAction[];
};

export type TableStatus = "Livre" | "Ocupada" | "Reservada" | "Bloqueada";

export type OwnerTable = {
  number: string;
  seats: number;
  status: TableStatus;
  orders: number;
  total?: string;
  href?: string;
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

export type AdminNavItem = {
  href: string;
  label: string;
  icon: string;
};

export type AdminEstablishment = {
  name: string;
  city: string;
  category: string;
  status: string;
  slug: string;
};

export type AdminQueueItem = {
  title: string;
  text: string;
  tone: "gold" | "blue" | "rose";
};
