(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/owner-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminEstablishments",
    ()=>adminEstablishments,
    "adminEstablishmentsIntro",
    ()=>adminEstablishmentsIntro,
    "adminHeader",
    ()=>adminHeader,
    "adminMetrics",
    ()=>adminMetrics,
    "adminNav",
    ()=>adminNav,
    "adminQueue",
    ()=>adminQueue,
    "adminQueueIntro",
    ()=>adminQueueIntro,
    "adminSummaryIntro",
    ()=>adminSummaryIntro,
    "onboardingFields",
    ()=>onboardingFields,
    "onboardingMenuDrafts",
    ()=>onboardingMenuDrafts,
    "onboardingStages",
    ()=>onboardingStages,
    "ownerBenefits",
    ()=>ownerBenefits,
    "ownerCommands",
    ()=>ownerCommands,
    "ownerDashboardActions",
    ()=>ownerDashboardActions,
    "ownerDashboardHeader",
    ()=>ownerDashboardHeader,
    "ownerDashboardMetrics",
    ()=>ownerDashboardMetrics,
    "ownerDashboardNav",
    ()=>ownerDashboardNav,
    "ownerDashboardRoadmap",
    ()=>ownerDashboardRoadmap,
    "ownerDashboardRouteSpotlights",
    ()=>ownerDashboardRouteSpotlights,
    "ownerDashboardRoutesIntro",
    ()=>ownerDashboardRoutesIntro,
    "ownerDashboardSummaryIntro",
    ()=>ownerDashboardSummaryIntro,
    "ownerPreviewMetrics",
    ()=>ownerPreviewMetrics,
    "ownerSettingsSections",
    ()=>ownerSettingsSections,
    "ownerStartSteps",
    ()=>ownerStartSteps,
    "ownerTableAlerts",
    ()=>ownerTableAlerts,
    "ownerTables",
    ()=>ownerTables
]);
const ownerBenefits = [
    {
        icon: "🏪",
        title: "Cadastre seu estabelecimento",
        text: "Informe nome, CNPJ, localização, horários, cardápio e identidade do seu negócio."
    },
    {
        icon: "🧾",
        title: "Gerencie mesas e comandas",
        text: "Acompanhe ocupação, pedidos e fechamento com uma visão simples e prática."
    }
];
const ownerStartSteps = [
    {
        id: "01",
        title: "Criar conta",
        text: "Cadastre seu acesso com e-mail, senha e informações iniciais do responsável."
    },
    {
        id: "02",
        title: "Cadastrar produtos",
        text: "Adicione os produtos do seu estabelecimento com nome, preço, categoria e descrição."
    },
    {
        id: "03",
        title: "Criar campanhas de vendas",
        text: "Monte campanhas promocionais para atrair clientes e aumentar as vendas do seu negócio."
    }
];
const ownerDashboardHeader = {
    backHref: "/owner/settings",
    backLabel: "ir para configurações",
    badge: "dashboard",
    title: "Painel do proprietário",
    description: "Estrutura desenhada primeiro para leitura rápida no celular e depois expandida em blocos para desktop. Aqui o dono do local enxerga operação, mesas e comandas sem perder prioridade.",
    status: "Saraiva Bar ativo"
};
const ownerDashboardNav = [
    {
        href: "/owner/dashboard",
        label: "Dashboard",
        shortLabel: "Início",
        icon: "🏠"
    },
    {
        href: "/owner/tables",
        label: "Mesas",
        icon: "🍽️"
    },
    {
        href: "/owner/tabs",
        label: "Comandas",
        icon: "🧾"
    },
    {
        href: "/owner/settings",
        label: "Configurações",
        shortLabel: "Config.",
        icon: "⚙️"
    }
];
const ownerDashboardSummaryIntro = {
    eyebrow: "resumo operacional",
    title: "Visão do dia em um único painel.",
    description: "visão do dia",
    badge: "visão do dia"
};
const ownerDashboardRoutesIntro = {
    eyebrow: "atalhos principais",
    title: "Acesse cada área no detalhe.",
    description: "Use o dashboard como resumo e entre nas rotas específicas para operar com mais foco."
};
const ownerDashboardRouteSpotlights = [
    {
        href: "/owner/tabs",
        icon: "🧾",
        title: "Comandas ativas",
        text: "Abra a rota completa para ver itens, totais, histórico e ações de pagamento.",
        badge: "8 comandas",
        cta: "Abrir comandas"
    },
    {
        href: "/owner/tables",
        icon: "🍽️",
        title: "Mesas",
        text: "Entre na visão dedicada para acompanhar status, ocupação, pedidos e detalhes por mesa.",
        badge: "20 mesas",
        cta: "Abrir mesas"
    }
];
const ownerSettingsSections = [
    {
        id: "store",
        icon: "🏪",
        title: "Dados da loja",
        description: "Informações principais do estabelecimento e recebimentos.",
        fields: [
            "Nome da loja",
            "CNPJ",
            "Telefone",
            "Responsável",
            "E-mail",
            "Chave PIX"
        ]
    },
    {
        id: "address",
        icon: "📍",
        title: "Endereço e localização",
        description: "Dados do endereço comercial e ponto do mapa.",
        fields: [
            "CEP",
            "Rua",
            "Número",
            "Complemento",
            "Bairro",
            "Cidade",
            "UF",
            "Localização"
        ]
    },
    {
        id: "brand",
        icon: "🖼️",
        title: "Logo, slug e categorias",
        description: "Identidade da marca e segmentação do negócio.",
        fields: [
            "Logo da empresa",
            "Slug público",
            "Categorias do estabelecimento"
        ]
    }
];
const ownerDashboardMetrics = [
    {
        label: "Receita hoje",
        value: "R$ 611",
        detail: "8 comandas somadas no dia",
        tone: "mint"
    },
    {
        label: "Comandas abertas",
        value: "8",
        detail: "3 aguardando fechamento",
        tone: "gold"
    },
    {
        label: "Mesas ocupadas",
        value: "12/20",
        detail: "4 livres neste momento",
        tone: "blue"
    },
    {
        label: "Mensagens",
        value: "1",
        detail: "Cliente aguardando retorno",
        tone: "rose"
    }
];
const ownerDashboardRoadmap = [
    {
        step: "01",
        title: "Tela de mesas em detalhe",
        text: "Mapa visual por número, status e pedidos pendentes."
    },
    {
        step: "02",
        title: "Tela de comanda detalhada",
        text: "Itens, total, ação de marcar como paga e histórico."
    },
    {
        step: "03",
        title: "Login do proprietário",
        text: "Separar visualmente criar conta de entrar."
    }
];
const ownerPreviewMetrics = [
    {
        label: "Comandas abertas",
        value: "8",
        tone: "gold"
    },
    {
        label: "Receita hoje",
        value: "R$ 611",
        tone: "mint"
    },
    {
        label: "Mesas ocupadas",
        value: "12/20",
        tone: "blue"
    }
];
const ownerDashboardActions = [
    {
        href: "/owner/settings",
        title: "Configurações da loja",
        text: "Atualizar dados, recebimentos, endereço e identidade",
        tone: "warm"
    },
    {
        href: "/owner/tabs",
        title: "Controle de comandas",
        text: "Ver comandas ativas, fechamentos e pendências",
        tone: "cool"
    },
    {
        href: "/owner/tables",
        title: "Gerenciar mesas",
        text: "Acompanhar status, capacidade e ocupação",
        tone: "mint"
    },
    {
        href: "/",
        title: "Trocar perfil",
        text: "Voltar para a entrada inicial",
        tone: "neutral"
    }
];
const onboardingStages = [
    {
        number: "01",
        title: "Básico",
        description: "Nome, descrição, categoria, faixa de preço e contato."
    },
    {
        number: "02",
        title: "Mídia",
        description: "Fotos do local, imagem de capa e vídeo opcional para a vitrine."
    },
    {
        number: "03",
        title: "Cardápio e ambiente",
        description: "Itens iniciais, estilo musical e perfil principal do público."
    }
];
const onboardingFields = [
    {
        label: "Nome do estabelecimento",
        value: "Saraiva Bar"
    },
    {
        label: "Descrição",
        value: "Bar com música ao vivo, ambiente casual e foco em espetos."
    },
    {
        label: "Categoria",
        value: "Bar"
    },
    {
        label: "Faixa de preço",
        value: "Médio"
    },
    {
        label: "WhatsApp",
        value: "(62) 99999-9999"
    },
    {
        label: "Cidade",
        value: "Goiânia - GO",
        hint: "A localização será usada na busca por proximidade."
    }
];
const onboardingMenuDrafts = [
    {
        category: "🍔 Comidas",
        items: [
            "Picanha na chapa",
            "Espeto de carne",
            "Porção mista"
        ]
    },
    {
        category: "🍻 Bebidas",
        items: [
            "Balde de cerveja",
            "Gin tropical",
            "Refrigerante em lata"
        ]
    }
];
const ownerCommands = [
    {
        code: "#1768343621162",
        customer: "Mateus Vinicius",
        location: "Mesa 12 · Saraiva Bar",
        createdAt: "13/01/2026, 23:34",
        total: "R$ 27,00",
        status: "Ativa",
        items: [
            {
                name: "3x carne no espeto",
                price: "R$ 27,00"
            }
        ],
        actions: [
            {
                href: "/owner/tabs",
                label: "Ver detalhes",
                tone: "primary"
            },
            {
                href: "/owner/tabs",
                label: "Marcar como paga",
                tone: "secondary"
            }
        ]
    },
    {
        code: "#1766423921796",
        customer: "Heionekm",
        location: "Balcão · Saraiva Bar",
        createdAt: "22/12/2025, 18:43",
        total: "R$ 75,00",
        status: "Fechando",
        items: [
            {
                name: "3x heionekm",
                price: "R$ 75,00"
            },
            {
                name: "1x carne no espeto",
                price: "R$ 9,00"
            }
        ],
        actions: [
            {
                href: "/owner/tabs",
                label: "Ver detalhes",
                tone: "primary"
            },
            {
                href: "/owner/tabs",
                label: "Marcar como paga",
                tone: "secondary"
            }
        ]
    },
    {
        code: "#1765400128872",
        customer: "Julia Costa",
        location: "Mesa 05 · Quintal da Serra",
        createdAt: "09/03/2026, 19:21",
        total: "R$ 122,00",
        status: "Pagamento",
        items: [
            {
                name: "2x picanha na chapa",
                price: "R$ 89,90"
            },
            {
                name: "1x refrigerante em lata",
                price: "R$ 12,00"
            },
            {
                name: "1x batata rústica",
                price: "R$ 20,10"
            }
        ],
        actions: [
            {
                href: "/owner/tabs",
                label: "Ver detalhes",
                tone: "primary"
            },
            {
                href: "/owner/tabs",
                label: "Marcar como paga",
                tone: "secondary"
            }
        ]
    }
];
const ownerTables = [
    {
        number: "01",
        seats: 4,
        status: "Ocupada",
        orders: 2,
        total: "R$ 25,00",
        href: "/owner/tables"
    },
    {
        number: "02",
        seats: 4,
        status: "Livre",
        orders: 0,
        href: "/owner/tables"
    },
    {
        number: "03",
        seats: 2,
        status: "Livre",
        orders: 0,
        href: "/owner/tables"
    },
    {
        number: "04",
        seats: 6,
        status: "Reservada",
        orders: 0,
        href: "/owner/tables"
    },
    {
        number: "05",
        seats: 4,
        status: "Ocupada",
        orders: 3,
        total: "R$ 72,00",
        href: "/owner/tables"
    },
    {
        number: "06",
        seats: 8,
        status: "Bloqueada",
        orders: 0,
        href: "/owner/tables"
    }
];
const ownerTableAlerts = [
    {
        table: "Mesa 01",
        customer: "Heionekm",
        item: "1x carne no espeto",
        total: "R$ 25,00"
    },
    {
        table: "Mesa 05",
        customer: "Julia Costa",
        item: "2x picanha na chapa",
        total: "R$ 72,00"
    }
];
const adminNav = [
    {
        href: "/admin",
        label: "Visão geral",
        icon: "🛡️"
    },
    {
        href: "/owner/dashboard",
        label: "Painel da loja",
        icon: "🏪"
    },
    {
        href: "/owner/settings",
        label: "Configurações",
        icon: "⚙️"
    }
];
const adminHeader = {
    backHref: "/owner/dashboard",
    backLabel: "voltar para o dashboard da loja",
    badge: "admin",
    title: "Admin geral",
    description: "Área pensada para controlar múltiplos estabelecimentos, acompanhar pendências e preparar a operação para contratos reais de API.",
    status: "3 estabelecimentos monitorados"
};
const adminSummaryIntro = {
    eyebrow: "controle global",
    title: "Tudo que precisa de decisão rápida.",
    description: "Acompanhe o volume de lojas, pendências e categorias sem depender do painel individual de cada estabelecimento.",
    badge: "visão central"
};
const adminMetrics = [
    {
        label: "Lojas ativas",
        value: "3",
        detail: "2 prontas para operar hoje",
        tone: "mint"
    },
    {
        label: "Pendências",
        value: "5",
        detail: "cadastros, logos e validações",
        tone: "rose"
    },
    {
        label: "Categorias",
        value: "12",
        detail: "segmentos públicos disponíveis",
        tone: "blue"
    },
    {
        label: "Receita monitorada",
        value: "R$ 4,2 mil",
        detail: "somatório do dia nas lojas conectadas",
        tone: "gold"
    }
];
const adminEstablishmentsIntro = {
    eyebrow: "estabelecimentos",
    title: "Visão rápida das lojas cadastradas.",
    description: "Cada card representa uma unidade pronta para receber status, filtros e ações administrativas via API."
};
const adminEstablishments = [
    {
        name: "Saraiva Bar",
        city: "Goiânia - GO",
        category: "Bar e música ao vivo",
        status: "Ativa",
        slug: "saraiva-bar"
    },
    {
        name: "Quintal da Serra",
        city: "Anápolis - GO",
        category: "Espetaria",
        status: "Onboarding",
        slug: "quintal-da-serra"
    },
    {
        name: "Café Horizonte",
        city: "Brasília - DF",
        category: "Cafeteria",
        status: "Revisão",
        slug: "cafe-horizonte"
    }
];
const adminQueueIntro = {
    eyebrow: "fila administrativa",
    title: "Próximas ações do admin.",
    description: "Lista inicial de prioridades para validar cadastros, revisar identidade visual e organizar categorias globais."
};
const adminQueue = [
    {
        title: "Validar CNPJs pendentes",
        text: "Dois estabelecimentos ainda precisam de conferência documental antes da liberação completa.",
        tone: "gold"
    },
    {
        title: "Revisar logos enviadas",
        text: "Uma loja enviou imagem fora do padrão e precisa de ajuste antes da publicação.",
        tone: "blue"
    },
    {
        title: "Aprovar nova categoria",
        text: "Existe um pedido para incluir 'Adega' no catálogo global de categorias.",
        tone: "rose"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/owner/settings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OwnerSettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/owner-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const stepOrder = [
    "store",
    "address",
    "brand"
];
const categoryOptions = [
    "Bar",
    "Restaurante",
    "Pizzaria",
    "Hamburgueria",
    "Espetaria",
    "Música ao vivo",
    "Delivery",
    "Cafeteria"
];
const settingsDraftKey = "owner-settings-draft-v1";
const printFormatOptions = [
    {
        id: "thermal-58",
        title: "Bobina 58 mm",
        text: "Modelo compacto para balcão e impressoras térmicas menores.",
        badge: "Mais comum",
        emoji: "🧾"
    },
    {
        id: "thermal-80",
        title: "Bobina 80 mm",
        text: "Formato ideal para cupom mais legível, com espaço para logo e observações.",
        badge: "Profissional",
        emoji: "🖨️"
    },
    {
        id: "a4",
        title: "Folha A4",
        text: "Perfeito para relatórios, fechamento administrativo e comprovantes completos.",
        badge: "Escritório",
        emoji: "📄"
    }
];
const initialForm = {
    storeName: "Saraiva Bar",
    cnpj: "12.345.678/0001-99",
    phone: "(62) 99999-9999",
    ownerName: "Mateus Vinicius",
    email: "contato@saraivabar.com",
    pixKey: "01046038109",
    cep: "74000-000",
    street: "Rua 9",
    number: "120",
    complement: "Sala 02",
    district: "Setor Sul",
    city: "Goiânia",
    state: "GO",
    location: "-16.6869, -49.2648",
    logoName: "logo-saraiva-bar.png",
    slug: "saraiva-bar",
    categories: "Bar, Música ao vivo, Espetaria",
    printFormat: "thermal-80"
};
function OwnerSettingsPage() {
    _s();
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("store");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialForm);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cepStatus, setCepStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [cepMessage, setCepMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [draftReady, setDraftReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeSection = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerSettingsSections"].find((section)=>section.id === activeStep);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OwnerSettingsPage.useMemo[progress]": ()=>Math.round((stepOrder.indexOf(activeStep) + 1) / stepOrder.length * 100)
    }["OwnerSettingsPage.useMemo[progress]"], [
        activeStep
    ]);
    const selectedCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OwnerSettingsPage.useMemo[selectedCategories]": ()=>form.categories.split(",").map({
                "OwnerSettingsPage.useMemo[selectedCategories]": (item)=>item.trim()
            }["OwnerSettingsPage.useMemo[selectedCategories]"]).filter(Boolean)
    }["OwnerSettingsPage.useMemo[selectedCategories]"], [
        form.categories
    ]);
    const logoPreviewLetter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OwnerSettingsPage.useMemo[logoPreviewLetter]": ()=>(form.storeName.trim().charAt(0) || "L").toUpperCase()
    }["OwnerSettingsPage.useMemo[logoPreviewLetter]"], [
        form.storeName
    ]);
    const locationPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OwnerSettingsPage.useMemo[locationPreview]": ()=>{
            const address = [
                form.street,
                form.number,
                form.district,
                form.city,
                form.state
            ].filter(Boolean).join(", ");
            return address || form.location || "Defina o endereço para visualizar a localização resumida.";
        }
    }["OwnerSettingsPage.useMemo[locationPreview]"], [
        form.city,
        form.district,
        form.location,
        form.number,
        form.state,
        form.street
    ]);
    const selectedPrintFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OwnerSettingsPage.useMemo[selectedPrintFormat]": ()=>printFormatOptions.find({
                "OwnerSettingsPage.useMemo[selectedPrintFormat]": (item_0)=>item_0.id === form.printFormat
            }["OwnerSettingsPage.useMemo[selectedPrintFormat]"])
    }["OwnerSettingsPage.useMemo[selectedPrintFormat]"], [
        form.printFormat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OwnerSettingsPage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const rawDraft = window.localStorage.getItem(settingsDraftKey);
                if (!rawDraft) {
                    setDraftReady(true);
                    return;
                }
                const parsedDraft = JSON.parse(rawDraft);
                if (parsedDraft.form) {
                    setForm({
                        "OwnerSettingsPage.useEffect": (prev)=>({
                                ...prev,
                                ...parsedDraft.form
                            })
                    }["OwnerSettingsPage.useEffect"]);
                }
                if (parsedDraft.activeStep && stepOrder.includes(parsedDraft.activeStep)) {
                    setActiveStep(parsedDraft.activeStep);
                }
                setMessage("Rascunho recuperado com sucesso.");
            } catch  {
                setMessage("Não foi possível recuperar o rascunho salvo.");
            } finally{
                setDraftReady(true);
            }
        }
    }["OwnerSettingsPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OwnerSettingsPage.useEffect": ()=>{
            if (!draftReady || ("TURBOPACK compile-time value", "object") === "undefined") return;
            const draft = {
                activeStep,
                form
            };
            window.localStorage.setItem(settingsDraftKey, JSON.stringify(draft));
        }
    }["OwnerSettingsPage.useEffect"], [
        activeStep,
        draftReady,
        form
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OwnerSettingsPage.useEffect": ()=>{
            const digits = form.cep.replace(/\D/g, "");
            if (digits.length !== 8) {
                setCepStatus("idle");
                setCepMessage("");
                return;
            }
            let cancelled = false;
            const lookupCep = {
                "OwnerSettingsPage.useEffect.lookupCep": async ()=>{
                    try {
                        setCepStatus("loading");
                        setCepMessage("Buscando endereço pelo CEP...");
                        const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
                        const data = await response.json();
                        if (cancelled) return;
                        if (!response.ok || data.erro) {
                            setCepStatus("error");
                            setCepMessage("Não foi possível localizar este CEP.");
                            return;
                        }
                        setForm({
                            "OwnerSettingsPage.useEffect.lookupCep": (prev_0)=>({
                                    ...prev_0,
                                    street: data.logradouro || prev_0.street,
                                    district: data.bairro || prev_0.district,
                                    city: data.localidade || prev_0.city,
                                    state: data.uf || prev_0.state,
                                    location: prev_0.location || `${data.localidade || prev_0.city} - ${data.uf || prev_0.state}`
                                })
                        }["OwnerSettingsPage.useEffect.lookupCep"]);
                        setErrors({
                            "OwnerSettingsPage.useEffect.lookupCep": (prev_1)=>({
                                    ...prev_1,
                                    cep: undefined,
                                    street: undefined,
                                    district: undefined,
                                    city: undefined,
                                    state: undefined
                                })
                        }["OwnerSettingsPage.useEffect.lookupCep"]);
                        setCepStatus("success");
                        setCepMessage("Endereço preenchido automaticamente pelo CEP.");
                    } catch  {
                        if (cancelled) return;
                        setCepStatus("error");
                        setCepMessage("Não foi possível consultar o CEP agora.");
                    }
                }
            }["OwnerSettingsPage.useEffect.lookupCep"];
            void lookupCep();
            return ({
                "OwnerSettingsPage.useEffect": ()=>{
                    cancelled = true;
                }
            })["OwnerSettingsPage.useEffect"];
        }
    }["OwnerSettingsPage.useEffect"], [
        form.cep
    ]);
    const updateField = (field, value)=>{
        setForm((prev_2)=>({
                ...prev_2,
                [field]: value
            }));
        setErrors((prev_3)=>({
                ...prev_3,
                [field]: undefined
            }));
        setMessage("");
    };
    const handleCnpjChange = (value_0)=>{
        const digits_0 = value_0.replace(/\D/g, "").slice(0, 14);
        let formatted = digits_0;
        if (digits_0.length > 2) formatted = formatted.replace(/^(\d{2})(\d)/, "$1.$2");
        if (digits_0.length > 5) formatted = formatted.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        if (digits_0.length > 8) formatted = formatted.replace(/\.(\d{3})(\d)/, ".$1/$2");
        if (digits_0.length > 12) formatted = formatted.replace(/(\d{4})(\d)/, "$1-$2");
        updateField("cnpj", formatted);
    };
    const handlePhoneChange = (value_1)=>{
        let digits_1 = value_1.replace(/\D/g, "").slice(0, 11);
        if (digits_1.length > 0) {
            digits_1 = digits_1.replace(/^(\d{2})(\d)/g, "($1) $2");
            digits_1 = digits_1.replace(/(\d)(\d{4})$/, "$1-$2");
        }
        updateField("phone", digits_1);
    };
    const handleCepChange = (value_2)=>{
        const digits_2 = value_2.replace(/\D/g, "").slice(0, 8);
        const formatted_0 = digits_2.length > 5 ? digits_2.replace(/^(\d{5})(\d)/, "$1-$2") : digits_2;
        updateField("cep", formatted_0);
    };
    const handleSlugChange = (value_3)=>{
        const slug = value_3.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 50);
        updateField("slug", slug);
    };
    const handleLogoFile = (event)=>{
        const file = event.target.files?.[0];
        if (!file) return;
        updateField("logoName", file.name);
        setMessage("Logo selecionada com sucesso. A integração com upload real pode ser ligada na API depois.");
    };
    const toggleCategory = (category)=>{
        const nextCategories = selectedCategories.includes(category) ? selectedCategories.filter((item_1)=>item_1 !== category) : [
            ...selectedCategories,
            category
        ];
        updateField("categories", nextCategories.join(", "));
    };
    const validateStep = (step)=>{
        const nextErrors = {};
        if (step === "store") {
            if (!form.storeName.trim()) nextErrors.storeName = "Informe o nome da loja.";
            if (form.cnpj.replace(/\D/g, "").length !== 14) nextErrors.cnpj = "Digite um CNPJ válido.";
            if (form.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Informe um telefone com DDD.";
            if (!form.ownerName.trim()) nextErrors.ownerName = "Informe o responsável.";
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Digite um e-mail válido.";
            if (!form.pixKey.trim()) nextErrors.pixKey = "Informe uma chave PIX.";
        }
        if (step === "address") {
            if (form.cep.replace(/\D/g, "").length !== 8) nextErrors.cep = "Digite um CEP válido.";
            if (!form.street.trim()) nextErrors.street = "Informe a rua.";
            if (!form.number.trim()) nextErrors.number = "Informe o número.";
            if (!form.district.trim()) nextErrors.district = "Informe o bairro.";
            if (!form.city.trim()) nextErrors.city = "Informe a cidade.";
            if (form.state.trim().length !== 2) nextErrors.state = "Use a UF com 2 letras.";
            if (!form.location.trim()) nextErrors.location = "Informe a localização.";
        }
        if (step === "brand") {
            if (!form.logoName.trim()) nextErrors.logoName = "Informe o arquivo da logo.";
            if (!form.slug.trim()) nextErrors.slug = "Informe um slug público.";
            if (selectedCategories.length === 0) nextErrors.categories = "Selecione pelo menos uma categoria.";
            if (!form.printFormat) nextErrors.printFormat = "Escolha um formato de impressão.";
        }
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };
    const saveDraft = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            const draft_0 = {
                activeStep,
                form
            };
            window.localStorage.setItem(settingsDraftKey, JSON.stringify(draft_0));
        }
        setMessage("Rascunho salvo neste dispositivo com sucesso.");
    };
    const clearDraft = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            window.localStorage.removeItem(settingsDraftKey);
        }
        setForm(initialForm);
        setActiveStep("store");
        setErrors({});
        setCepStatus("idle");
        setCepMessage("");
        setMessage("Rascunho removido. Os dados voltaram ao modelo inicial.");
    };
    const goNext = ()=>{
        if (!validateStep(activeStep)) {
            setMessage("Revise os campos destacados antes de continuar.");
            return;
        }
        const currentIndex = stepOrder.indexOf(activeStep);
        const nextStep = stepOrder[currentIndex + 1];
        if (nextStep) {
            setActiveStep(nextStep);
            setMessage("");
            return;
        }
        setMessage("Configurações salvas com sucesso.");
    };
    const goBack = ()=>{
        const currentIndex_0 = stepOrder.indexOf(activeStep);
        const previousStep = stepOrder[currentIndex_0 - 1];
        if (previousStep) {
            setActiveStep(previousStep);
            setMessage("");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[var(--bg)] text-[var(--text)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "rounded-[30px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardNav"].map((item_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsNavLink, {
                                    item: item_2
                                }, item_2.href, false, {
                                    fileName: "[project]/src/app/owner/settings/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 46
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/settings/page.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                                            children: "configurações da loja"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/settings/page.tsx",
                                            lineNumber: 310,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-2 font-display text-3xl sm:text-4xl",
                                            children: "Gerencie os dados do seu estabelecimento"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/settings/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)] sm:text-base",
                                            children: "Ajuste os dados da loja, endereço, localização, identidade visual, slug público e categorias do negócio em etapas organizadas."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/settings/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/settings/page.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]",
                                    children: [
                                        progress,
                                        "% concluído"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/settings/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/settings/page.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/settings/page.tsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid gap-6 lg:grid-cols-[0.92fr_1.08fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                                                    children: "etapas da configuração"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/settings/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "mt-2 font-display text-3xl",
                                                    children: "Tudo separado por tema"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/settings/page.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-sm leading-7 text-[var(--muted)]",
                                                    children: "Cada etapa organiza um grupo de informações para deixar a manutenção da loja mais simples no celular e no desktop."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/settings/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/owner/settings/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: clearDraft,
                                            className: "rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)] transition hover:bg-white/10 hover:text-white",
                                            children: "Limpar rascunho"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/settings/page.tsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/settings/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 grid gap-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerSettingsSections"].map((section_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveStep(section_0.id),
                                            className: `rounded-[24px] border p-4 text-left transition ${activeStep === section_0.id ? "border-[var(--gold)] bg-white/8" : "border-white/8 bg-white/4"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,139,54,0.22),rgba(56,109,249,0.22))] text-2xl",
                                                        children: section_0.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-display text-xl text-white",
                                                                children: section_0.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-sm leading-6 text-[var(--muted)]",
                                                                children: section_0.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                lineNumber: 339,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this)
                                        }, section_0.id, false, {
                                            fileName: "[project]/src/app/owner/settings/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 55
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/settings/page.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/settings/page.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.48)] sm:p-6",
                            children: activeSection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,139,54,0.22),rgba(56,109,249,0.22))] text-2xl",
                                                children: activeSection.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.24em] text-[var(--gold)]",
                                                        children: "área de configuração"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "mt-2 font-display text-2xl text-white sm:text-3xl",
                                                        children: activeSection.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm leading-6 text-[var(--muted)]",
                                                        children: activeSection.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 17
                                    }, this),
                                    activeStep === "store" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid gap-4 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                label: "Nome da loja",
                                                value: form.storeName,
                                                onChange: (e)=>updateField("storeName", e.target.value),
                                                error: errors.storeName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                label: "CNPJ",
                                                value: form.cnpj,
                                                onChange: (e_0)=>handleCnpjChange(e_0.target.value),
                                                error: errors.cnpj
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                label: "Telefone",
                                                value: form.phone,
                                                onChange: (e_1)=>handlePhoneChange(e_1.target.value),
                                                error: errors.phone
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 360,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                label: "Responsável",
                                                value: form.ownerName,
                                                onChange: (e_2)=>updateField("ownerName", e_2.target.value),
                                                error: errors.ownerName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 361,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                label: "E-mail",
                                                value: form.email,
                                                onChange: (e_3)=>updateField("email", e_3.target.value),
                                                error: errors.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                label: "Chave PIX",
                                                value: form.pixKey,
                                                onChange: (e_4)=>updateField("pixKey", e_4.target.value),
                                                error: errors.pixKey,
                                                hint: "Essa chave será usada para gerar recebimentos PIX."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 43
                                    }, this) : null,
                                    activeStep === "address" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 grid gap-4 sm:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                        label: "CEP",
                                                        value: form.cep,
                                                        onChange: (e_5)=>handleCepChange(e_5.target.value),
                                                        error: errors.cep
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                        label: "Localização",
                                                        value: form.location,
                                                        onChange: (e_6)=>updateField("location", e_6.target.value),
                                                        error: errors.location,
                                                        hint: "Pode ser latitude e longitude ou um ponto de referência."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                            label: "Rua",
                                                            value: form.street,
                                                            onChange: (e_7)=>updateField("street", e_7.target.value),
                                                            error: errors.street
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/owner/settings/page.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                        label: "Número",
                                                        value: form.number,
                                                        onChange: (e_8)=>updateField("number", e_8.target.value),
                                                        error: errors.number
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                        label: "Complemento",
                                                        value: form.complement,
                                                        onChange: (e_9)=>updateField("complement", e_9.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                        label: "Bairro",
                                                        value: form.district,
                                                        onChange: (e_10)=>updateField("district", e_10.target.value),
                                                        error: errors.district
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                        label: "Cidade",
                                                        value: form.city,
                                                        onChange: (e_11)=>updateField("city", e_11.target.value),
                                                        error: errors.city
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                        label: "UF",
                                                        value: form.state,
                                                        onChange: (e_12)=>updateField("state", e_12.target.value.toUpperCase().slice(0, 2)),
                                                        error: errors.state
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusCard, {
                                                        title: "Consulta de CEP",
                                                        emoji: cepStatus === "success" ? "✅" : cepStatus === "error" ? "⚠️" : "📮",
                                                        text: cepMessage || "Digite um CEP válido para preencher rua, bairro, cidade e UF automaticamente.",
                                                        tone: cepStatus
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusCard, {
                                                        title: "Prévia da localização",
                                                        emoji: "🗺️",
                                                        text: locationPreview,
                                                        tone: "idle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : null,
                                    activeStep === "brand" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[28px] border border-white/10 bg-white/4 p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.18em] text-[var(--gold)]",
                                                        children: "identidade visual"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex h-20 w-20 shrink-0 items-center justify-center rounded-[26px] bg-[linear-gradient(135deg,rgba(255,139,54,0.3),rgba(56,109,249,0.3))] text-3xl font-semibold text-white",
                                                                children: logoPreviewLetter
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-display text-xl text-white",
                                                                        children: form.storeName || "Sua loja"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                        lineNumber: 392,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-sm text-[var(--muted)]",
                                                                        children: [
                                                                            "Arquivo atual: ",
                                                                            form.logoName || "Nenhum arquivo selecionado"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                        lineNumber: 393,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "mt-4 flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-white/14 bg-white/4 px-4 py-4 text-sm font-semibold text-white transition hover:bg-white/8",
                                                        children: [
                                                            "Escolher logo",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                onChange: handleLogoFile,
                                                                className: "hidden"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 23
                                                    }, this),
                                                    errors.logoName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-xs text-rose-300",
                                                        children: errors.logoName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 42
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-xs text-[var(--muted)]",
                                                        children: "Você pode trocar a logo da empresa por aqui."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 108
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 387,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                        label: "Slug público",
                                                        value: form.slug,
                                                        onChange: (e_13)=>handleSlugChange(e_13.target.value),
                                                        error: errors.slug,
                                                        hint: "Exemplo: saraiva-bar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]",
                                                                children: "Categorias do estabelecimento"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: categoryOptions.map((category_0)=>{
                                                                    const selected = selectedCategories.includes(category_0);
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>toggleCategory(category_0),
                                                                        className: `rounded-full border px-4 py-2 text-sm font-medium transition ${selected ? "border-[var(--gold)] bg-[rgba(255,196,82,0.16)] text-white" : "border-white/10 bg-white/4 text-[var(--muted)] hover:bg-white/8 hover:text-white"}`,
                                                                        children: [
                                                                            selected ? "✨ " : "",
                                                                            category_0
                                                                        ]
                                                                    }, category_0, true, {
                                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                        lineNumber: 411,
                                                                        columnNumber: 30
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                lineNumber: 408,
                                                                columnNumber: 25
                                                            }, this),
                                                            errors.categories ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-xs text-rose-300",
                                                                children: errors.categories
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 46
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-xs text-[var(--muted)]",
                                                                children: "Selecione uma ou mais categorias para segmentar melhor o negócio."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 114
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[28px] border border-white/10 bg-white/4 p-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs uppercase tracking-[0.18em] text-[var(--gold)]",
                                                                                children: "impressão padrão"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                                lineNumber: 423,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mt-2 text-sm leading-6 text-[var(--muted)]",
                                                                                children: "Escolha o modelo que será usado por padrão no fechamento e no comprovante."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                                lineNumber: 424,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                        lineNumber: 422,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]",
                                                                        children: "3 formatos"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                        lineNumber: 426,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 grid gap-3",
                                                                children: printFormatOptions.map((option)=>{
                                                                    const selected_0 = form.printFormat === option.id;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>updateField("printFormat", option.id),
                                                                        className: `rounded-[22px] border p-4 text-left transition ${selected_0 ? "border-[var(--gold)] bg-[rgba(255,196,82,0.12)]" : "border-white/10 bg-white/4 hover:bg-white/8"}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start justify-between gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-start gap-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-2xl",
                                                                                            children: option.emoji
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                                            lineNumber: 435,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "font-semibold text-white",
                                                                                                    children: option.title
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                                                    lineNumber: 437,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "mt-1 text-sm leading-6 text-[var(--muted)]",
                                                                                                    children: option.text
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                                                    lineNumber: 438,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                                            lineNumber: 436,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                                    lineNumber: 434,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] text-[var(--muted)]",
                                                                                    children: option.badge
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                                    lineNumber: 441,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                            lineNumber: 433,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, option.id, false, {
                                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                        lineNumber: 432,
                                                                        columnNumber: 30
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 25
                                                            }, this),
                                                            errors.printFormat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-xs text-rose-300",
                                                                children: errors.printFormat
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 47
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusCard, {
                                                        title: "Resumo público",
                                                        emoji: "🌐",
                                                        text: `/${form.slug || "slug-da-loja"} • ${selectedCategories.join(" • ") || "Escolha as categorias principais"}`,
                                                        tone: "success"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusCard, {
                                                        title: "Formato selecionado",
                                                        emoji: "🧾",
                                                        text: `${selectedPrintFormat?.title || "Formato não definido"} • ${selectedPrintFormat?.text || "Escolha um formato de impressão para a loja."}`,
                                                        tone: "idle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 43
                                    }, this) : null,
                                    message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 rounded-[22px] border border-white/8 bg-white/4 px-4 py-3 text-sm text-[var(--muted)]",
                                        children: message
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 28
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 sm:flex-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: goBack,
                                                        disabled: stepOrder.indexOf(activeStep) === 0,
                                                        className: "rounded-2xl border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white disabled:opacity-40",
                                                        children: "Voltar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: saveDraft,
                                                        className: "rounded-2xl border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-white",
                                                        children: "Salvar rascunho"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 458,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: goNext,
                                                className: "rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-sm font-semibold text-white",
                                                children: stepOrder.indexOf(activeStep) === stepOrder.length - 1 ? "Salvar configurações" : "Próxima etapa"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/settings/page.tsx",
                                                lineNumber: 466,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/owner/settings/page.tsx",
                                        lineNumber: 457,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : null
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/settings/page.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/settings/page.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 302,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/owner/settings/page.tsx",
        lineNumber: 301,
        columnNumber: 10
    }, this);
}
_s(OwnerSettingsPage, "nucEACsfBo0IoD95roxGDgtv4W8=");
_c = OwnerSettingsPage;
function SettingsNavLink(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "52c9ea519bbded0796c5e5096527897b14b1c75272dd5fd71e25a396b45964ad") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "52c9ea519bbded0796c5e5096527897b14b1c75272dd5fd71e25a396b45964ad";
    }
    const { item } = t0;
    let t1;
    if ($[1] !== item.icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            children: item.icon
        }, void 0, false, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 489,
            columnNumber: 10
        }, this);
        $[1] = item.icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = item.shortLabel || item.label;
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 498,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== item.href || $[6] !== t1 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: item.href,
            className: "flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-white/10 hover:text-white",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 506,
            columnNumber: 10
        }, this);
        $[5] = item.href;
        $[6] = t1;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_c1 = SettingsNavLink;
function Field(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "52c9ea519bbded0796c5e5096527897b14b1c75272dd5fd71e25a396b45964ad") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "52c9ea519bbded0796c5e5096527897b14b1c75272dd5fd71e25a396b45964ad";
    }
    const { label, value, onChange, error, hint } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 533,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = `w-full rounded-2xl border px-4 py-3 text-base text-[var(--text)] outline-none transition-all sm:text-sm ${error ? "border-rose-400/70 bg-rose-500/8 focus:border-rose-300" : "border-white/8 bg-white/5 focus:border-[var(--gold)]"}`;
    let t3;
    if ($[3] !== onChange || $[4] !== t2 || $[5] !== value) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: value,
            onChange: onChange,
            autoComplete: "off",
            className: t2
        }, void 0, false, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 542,
            columnNumber: 10
        }, this);
        $[3] = onChange;
        $[4] = t2;
        $[5] = value;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== error || $[8] !== hint) {
        t4 = error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-rose-300",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 552,
            columnNumber: 18
        }, this) : hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-[var(--muted)]",
            children: hint
        }, void 0, false, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 552,
            columnNumber: 81
        }, this) : null;
        $[7] = error;
        $[8] = hint;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t1 || $[11] !== t3 || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 561,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
}
_c2 = Field;
function StatusCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "52c9ea519bbded0796c5e5096527897b14b1c75272dd5fd71e25a396b45964ad") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "52c9ea519bbded0796c5e5096527897b14b1c75272dd5fd71e25a396b45964ad";
    }
    const { title, emoji, text, tone } = t0;
    const toneClass = tone === "success" ? "border-emerald-400/30 bg-emerald-500/8" : tone === "error" ? "border-rose-400/30 bg-rose-500/8" : tone === "loading" ? "border-sky-400/30 bg-sky-500/8" : "border-white/10 bg-white/4";
    const t1 = `rounded-[24px] border p-4 transition-all ${toneClass}`;
    let t2;
    if ($[1] !== emoji) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-2xl",
            children: emoji
        }, void 0, false, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 589,
            columnNumber: 10
        }, this);
        $[1] = emoji;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-display text-lg text-white",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 597,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== text) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm leading-6 text-[var(--muted)]",
            children: text
        }, void 0, false, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 605,
            columnNumber: 10
        }, this);
        $[5] = text;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 613,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t2 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                t2,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 622,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t1 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/owner/settings/page.tsx",
            lineNumber: 631,
            columnNumber: 10
        }, this);
        $[13] = t1;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    return t7;
}
_c3 = StatusCard;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "OwnerSettingsPage");
__turbopack_context__.k.register(_c1, "SettingsNavLink");
__turbopack_context__.k.register(_c2, "Field");
__turbopack_context__.k.register(_c3, "StatusCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1ae29ed5._.js.map