(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/owner-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
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
    backHref: "/owner/onboarding",
    backLabel: "voltar para onboarding",
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
        href: "/owner/onboarding",
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
        href: "/owner/onboarding",
        title: "Novo estabelecimento",
        text: "Iniciar ou ajustar o cadastro do local",
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/owner/onboarding/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OwnerOnboardingPage
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
const initialForm = {
    name: "Saraiva Bar",
    description: "Bar com música ao vivo, ambiente casual e foco em espetos.",
    category: "Bar",
    priceRange: "Médio",
    whatsapp: "(62) 99999-9999",
    city: "Goiânia",
    state: "GO",
    neighborhood: "Setor Sul",
    capacity: "120",
    openTime: "18:00",
    closeTime: "02:00",
    instagram: "@saraivabar",
    coverImage: "",
    galleryInfo: "3 fotos de ambiente e 1 vídeo curto do palco.",
    musicStyle: "Pop, rock e sertanejo",
    audience: "Adulto jovem e grupos para happy hour",
    amenities: "Área coberta, palco, espaço para aniversários e acessibilidade"
};
const initialMenuItemForm = {
    type: "Comida",
    name: "",
    description: "",
    price: "",
    quantity: ""
};
const stepOrder = [
    "basic",
    "media",
    "menu",
    "experience"
];
const stepLabels = {
    basic: "Basico",
    media: "Midia",
    menu: "Cardapio",
    experience: "Ambiente"
};
function OwnerOnboardingPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(233);
    if ($[0] !== "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45") {
        for(let $i = 0; $i < 233; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45";
    }
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("basic");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialForm);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {};
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [formMessage, setFormMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAddMenuModalOpen, setIsAddMenuModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalStep, setModalStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [newItem, setNewItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMenuItemForm);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [menuItemErrors, setMenuItemErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [menuItems, setMenuItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onboardingMenuDrafts"]);
    const activeStepIndex = stepOrder.indexOf(activeStep);
    let t2;
    if ($[3] !== form.name) {
        t2 = form.name.trim();
        $[3] = form.name;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== form.description) {
        t3 = form.description.trim();
        $[5] = form.description;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== form.category) {
        t4 = form.category.trim();
        $[7] = form.category;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== form.priceRange) {
        t5 = form.priceRange.trim();
        $[9] = form.priceRange;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== form.whatsapp) {
        let t7;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /\D/g;
            $[13] = t7;
        } else {
            t7 = $[13];
        }
        t6 = form.whatsapp.replace(t7, "");
        $[11] = form.whatsapp;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const t7 = t6.length >= 10;
    let t8;
    if ($[14] !== form.city) {
        t8 = form.city.trim();
        $[14] = form.city;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== form.state) {
        t9 = form.state.trim();
        $[16] = form.state;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const t10 = t9.length === 2;
    let t11;
    if ($[18] !== form.openTime) {
        t11 = form.openTime.trim();
        $[18] = form.openTime;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== form.closeTime) {
        t12 = form.closeTime.trim();
        $[20] = form.closeTime;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== form.musicStyle) {
        t13 = form.musicStyle.trim();
        $[22] = form.musicStyle;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== form.audience) {
        t14 = form.audience.trim();
        $[24] = form.audience;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t10 || $[27] !== t11 || $[28] !== t12 || $[29] !== t13 || $[30] !== t14 || $[31] !== t2 || $[32] !== t3 || $[33] !== t4 || $[34] !== t5 || $[35] !== t7 || $[36] !== t8) {
        t15 = [
            t2,
            t3,
            t4,
            t5,
            t7,
            t8,
            t10,
            t11,
            t12,
            t13,
            t14
        ];
        $[26] = t10;
        $[27] = t11;
        $[28] = t12;
        $[29] = t13;
        $[30] = t14;
        $[31] = t2;
        $[32] = t3;
        $[33] = t4;
        $[34] = t5;
        $[35] = t7;
        $[36] = t8;
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    const requiredChecks = t15;
    let t16;
    if ($[38] !== requiredChecks) {
        t16 = requiredChecks.filter(Boolean);
        $[38] = requiredChecks;
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    const filled = t16.length;
    let t17;
    if ($[40] !== filled || $[41] !== requiredChecks.length) {
        t17 = Math.round(filled / requiredChecks.length * 100);
        $[40] = filled;
        $[41] = requiredChecks.length;
        $[42] = t17;
    } else {
        t17 = $[42];
    }
    const completion = t17;
    let t18;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "OwnerOnboardingPage[updateField]": (field, value)=>{
                setForm({
                    "OwnerOnboardingPage[updateField > setForm()]": (prev)=>({
                            ...prev,
                            [field]: value
                        })
                }["OwnerOnboardingPage[updateField > setForm()]"]);
                setErrors({
                    "OwnerOnboardingPage[updateField > setErrors()]": (prev_0)=>({
                            ...prev_0,
                            [field]: undefined
                        })
                }["OwnerOnboardingPage[updateField > setErrors()]"]);
                setFormMessage("");
            }
        })["OwnerOnboardingPage[updateField]"];
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    const updateField = t18;
    let t19;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "OwnerOnboardingPage[updateMenuField]": (field_0, value_0)=>{
                setNewItem({
                    "OwnerOnboardingPage[updateMenuField > setNewItem()]": (prev_1)=>({
                            ...prev_1,
                            [field_0]: value_0
                        })
                }["OwnerOnboardingPage[updateMenuField > setNewItem()]"]);
                setMenuItemErrors({
                    "OwnerOnboardingPage[updateMenuField > setMenuItemErrors()]": (prev_2)=>({
                            ...prev_2,
                            [field_0]: undefined
                        })
                }["OwnerOnboardingPage[updateMenuField > setMenuItemErrors()]"]);
            }
        })["OwnerOnboardingPage[updateMenuField]"];
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    const updateMenuField = t19;
    let t20;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "OwnerOnboardingPage[handleWhatsappChange]": (value_1)=>{
                let digits = value_1.replace(/\D/g, "").slice(0, 11);
                if (digits.length > 0) {
                    digits = digits.replace(/^(\d{2})(\d)/g, "($1) $2");
                    digits = digits.replace(/(\d)(\d{4})$/, "$1-$2");
                }
                updateField("whatsapp", digits);
            }
        })["OwnerOnboardingPage[handleWhatsappChange]"];
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    const handleWhatsappChange = t20;
    let t21;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "OwnerOnboardingPage[handlePriceChange]": (value_2)=>{
                const sanitized = value_2.replace(/[^\d,]/g, "").slice(0, 10);
                updateMenuField("price", sanitized);
            }
        })["OwnerOnboardingPage[handlePriceChange]"];
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    const handlePriceChange = t21;
    let t22;
    if ($[47] !== form.amenities || $[48] !== form.audience || $[49] !== form.category || $[50] !== form.city || $[51] !== form.closeTime || $[52] !== form.description || $[53] !== form.galleryInfo || $[54] !== form.musicStyle || $[55] !== form.name || $[56] !== form.openTime || $[57] !== form.priceRange || $[58] !== form.state || $[59] !== form.whatsapp) {
        t22 = ({
            "OwnerOnboardingPage[validateCurrentStep]": (step)=>{
                const nextErrors = {};
                if (step === "basic") {
                    if (!form.name.trim()) {
                        nextErrors.name = "Informe o nome do estabelecimento.";
                    }
                    if (!form.description.trim() || form.description.trim().length < 20) {
                        nextErrors.description = "Descreva o local com pelo menos 20 caracteres.";
                    }
                    if (!form.category.trim()) {
                        nextErrors.category = "Escolha a categoria principal.";
                    }
                    if (!form.priceRange.trim()) {
                        nextErrors.priceRange = "Defina a faixa de pre\xE7o.";
                    }
                    if (form.whatsapp.replace(/\D/g, "").length < 10) {
                        nextErrors.whatsapp = "Informe um WhatsApp com DDD.";
                    }
                    if (!form.city.trim()) {
                        nextErrors.city = "Informe a cidade.";
                    }
                    if (form.state.trim().length !== 2) {
                        nextErrors.state = "Use a UF com 2 letras.";
                    }
                }
                if (step === "media" && !form.galleryInfo.trim()) {
                    nextErrors.galleryInfo = "Descreva o material visual dispon\xEDvel.";
                }
                if (step === "experience") {
                    if (!form.openTime.trim()) {
                        nextErrors.openTime = "Informe o hor\xE1rio de abertura.";
                    }
                    if (!form.closeTime.trim()) {
                        nextErrors.closeTime = "Informe o hor\xE1rio de fechamento.";
                    }
                    if (!form.musicStyle.trim()) {
                        nextErrors.musicStyle = "Defina o estilo musical.";
                    }
                    if (!form.audience.trim()) {
                        nextErrors.audience = "Descreva o p\xFAblico principal.";
                    }
                    if (!form.amenities.trim()) {
                        nextErrors.amenities = "Liste os diferenciais do ambiente.";
                    }
                }
                setErrors({
                    "OwnerOnboardingPage[validateCurrentStep > setErrors()]": (prev_3)=>({
                            ...prev_3,
                            ...nextErrors
                        })
                }["OwnerOnboardingPage[validateCurrentStep > setErrors()]"]);
                return Object.keys(nextErrors).length === 0;
            }
        })["OwnerOnboardingPage[validateCurrentStep]"];
        $[47] = form.amenities;
        $[48] = form.audience;
        $[49] = form.category;
        $[50] = form.city;
        $[51] = form.closeTime;
        $[52] = form.description;
        $[53] = form.galleryInfo;
        $[54] = form.musicStyle;
        $[55] = form.name;
        $[56] = form.openTime;
        $[57] = form.priceRange;
        $[58] = form.state;
        $[59] = form.whatsapp;
        $[60] = t22;
    } else {
        t22 = $[60];
    }
    const validateCurrentStep = t22;
    let t23;
    if ($[61] !== modalStep || $[62] !== newItem) {
        t23 = ({
            "OwnerOnboardingPage[validateMenuStep]": ()=>{
                const nextErrors_0 = {};
                if (modalStep >= 2 && !newItem.name.trim()) {
                    nextErrors_0.name = "Informe o nome do item.";
                }
                if (modalStep >= 2 && newItem.description.trim().length < 10) {
                    nextErrors_0.description = "Descreva o item com pelo menos 10 caracteres.";
                }
                if (modalStep === 3 && !/^\d+(,\d{2})?$/.test(newItem.price.trim())) {
                    nextErrors_0.price = "Use o formato 00,00.";
                }
                if (modalStep === 3 && newItem.quantity.trim() && !/^\d+$/.test(newItem.quantity.trim())) {
                    nextErrors_0.quantity = "Use somente n\xFAmeros ou deixe em branco.";
                }
                setMenuItemErrors(nextErrors_0);
                return Object.keys(nextErrors_0).length === 0;
            }
        })["OwnerOnboardingPage[validateMenuStep]"];
        $[61] = modalStep;
        $[62] = newItem;
        $[63] = t23;
    } else {
        t23 = $[63];
    }
    const validateMenuStep = t23;
    let t24;
    if ($[64] !== activeStepIndex || $[65] !== validateCurrentStep) {
        t24 = ({
            "OwnerOnboardingPage[goToStep]": (step_0)=>{
                const currentStep = stepOrder[activeStepIndex];
                if (stepOrder.indexOf(step_0) > activeStepIndex && !validateCurrentStep(currentStep)) {
                    setFormMessage("Preencha os campos obrigat\xF3rios da etapa atual antes de avan\xE7ar.");
                    return;
                }
                setActiveStep(step_0);
                setFormMessage("");
            }
        })["OwnerOnboardingPage[goToStep]"];
        $[64] = activeStepIndex;
        $[65] = validateCurrentStep;
        $[66] = t24;
    } else {
        t24 = $[66];
    }
    const goToStep = t24;
    let t25;
    if ($[67] !== activeStep || $[68] !== activeStepIndex || $[69] !== validateCurrentStep) {
        t25 = ({
            "OwnerOnboardingPage[goToNextStep]": ()=>{
                if (!validateCurrentStep(activeStep)) {
                    setFormMessage("Revise os campos destacados para continuar.");
                    return;
                }
                const nextStep = stepOrder[activeStepIndex + 1];
                if (nextStep) {
                    setActiveStep(nextStep);
                    setFormMessage("");
                }
            }
        })["OwnerOnboardingPage[goToNextStep]"];
        $[67] = activeStep;
        $[68] = activeStepIndex;
        $[69] = validateCurrentStep;
        $[70] = t25;
    } else {
        t25 = $[70];
    }
    const goToNextStep = t25;
    let t26;
    if ($[71] !== activeStepIndex) {
        t26 = ({
            "OwnerOnboardingPage[goToPreviousStep]": ()=>{
                const previousStep = stepOrder[activeStepIndex - 1];
                if (previousStep) {
                    setActiveStep(previousStep);
                    setFormMessage("");
                }
            }
        })["OwnerOnboardingPage[goToPreviousStep]"];
        $[71] = activeStepIndex;
        $[72] = t26;
    } else {
        t26 = $[72];
    }
    const goToPreviousStep = t26;
    let t27;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ({
            "OwnerOnboardingPage[closeModal]": ()=>{
                setIsAddMenuModalOpen(false);
                setModalStep(1);
                setNewItem(initialMenuItemForm);
                setMenuItemErrors({});
            }
        })["OwnerOnboardingPage[closeModal]"];
        $[73] = t27;
    } else {
        t27 = $[73];
    }
    const closeModal = t27;
    let t28;
    if ($[74] !== validateMenuStep) {
        t28 = ({
            "OwnerOnboardingPage[nextModalStep]": ()=>{
                if (!validateMenuStep()) {
                    return;
                }
                setModalStep(_OwnerOnboardingPageNextModalStepSetModalStep);
            }
        })["OwnerOnboardingPage[nextModalStep]"];
        $[74] = validateMenuStep;
        $[75] = t28;
    } else {
        t28 = $[75];
    }
    const nextModalStep = t28;
    let t29;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = ({
            "OwnerOnboardingPage[prevModalStep]": ()=>{
                setModalStep(_OwnerOnboardingPagePrevModalStepSetModalStep);
                setMenuItemErrors({});
            }
        })["OwnerOnboardingPage[prevModalStep]"];
        $[76] = t29;
    } else {
        t29 = $[76];
    }
    const prevModalStep = t29;
    let t30;
    if ($[77] !== newItem || $[78] !== validateMenuStep) {
        t30 = ({
            "OwnerOnboardingPage[handleAddMenuItem]": ()=>{
                if (!validateMenuStep()) {
                    return;
                }
                const category = newItem.type === "Comida" ? "\uD83C\uDF54 Comidas" : "\uD83C\uDF7B Bebidas";
                const formattedItem = `${newItem.name} · R$ ${newItem.price}`;
                setMenuItems({
                    "OwnerOnboardingPage[handleAddMenuItem > setMenuItems()]": (prev_6)=>{
                        const existingCategory = prev_6.find({
                            "OwnerOnboardingPage[handleAddMenuItem > setMenuItems() > prev_6.find()]": (item)=>item.category === category
                        }["OwnerOnboardingPage[handleAddMenuItem > setMenuItems() > prev_6.find()]"]);
                        if (!existingCategory) {
                            return [
                                ...prev_6,
                                {
                                    category,
                                    items: [
                                        formattedItem
                                    ]
                                }
                            ];
                        }
                        return prev_6.map({
                            "OwnerOnboardingPage[handleAddMenuItem > setMenuItems() > prev_6.map()]": (item_0)=>item_0.category === category ? {
                                    ...item_0,
                                    items: [
                                        ...item_0.items,
                                        formattedItem
                                    ]
                                } : item_0
                        }["OwnerOnboardingPage[handleAddMenuItem > setMenuItems() > prev_6.map()]"]);
                    }
                }["OwnerOnboardingPage[handleAddMenuItem > setMenuItems()]"]);
                setFormMessage("Item adicionado ao card\xE1pio rascunho.");
                closeModal();
            }
        })["OwnerOnboardingPage[handleAddMenuItem]"];
        $[77] = newItem;
        $[78] = validateMenuStep;
        $[79] = t30;
    } else {
        t30 = $[79];
    }
    const handleAddMenuItem = t30;
    let t31;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = ({
            "OwnerOnboardingPage[saveDraft]": ()=>{
                setFormMessage("Rascunho salvo com sucesso para continuar depois.");
            }
        })["OwnerOnboardingPage[saveDraft]"];
        $[80] = t31;
    } else {
        t31 = $[80];
    }
    const saveDraft = t31;
    let t32;
    if ($[81] !== validateCurrentStep) {
        t32 = ({
            "OwnerOnboardingPage[publishSetup]": ()=>{
                const stepsAreValid = stepOrder.every({
                    "OwnerOnboardingPage[publishSetup > stepOrder.every()]": (step_1)=>step_1 === "menu" ? true : validateCurrentStep(step_1)
                }["OwnerOnboardingPage[publishSetup > stepOrder.every()]"]);
                if (!stepsAreValid) {
                    setFormMessage("Ainda faltam campos obrigat\xF3rios antes de publicar o estabelecimento.");
                    return;
                }
                setFormMessage("Cadastro validado. O estabelecimento j\xE1 pode seguir para o dashboard.");
            }
        })["OwnerOnboardingPage[publishSetup]"];
        $[81] = validateCurrentStep;
        $[82] = t32;
    } else {
        t32 = $[82];
    }
    const publishSetup = t32;
    let t33;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-xs uppercase tracking-[0.32em] text-[var(--gold)]",
                    children: "voltar para inicio"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 594,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-3 font-display text-3xl sm:text-4xl",
                    children: "Onboarding do estabelecimento"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 594,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base",
                    children: "O fluxo agora é funcional no mobile: etapas claras, erros por campo, rascunho de cardápio e preview vivo para a vitrine do app."
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 594,
                    columnNumber: 212
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 594,
            columnNumber: 11
        }, this);
        $[83] = t33;
    } else {
        t33 = $[83];
    }
    let t34;
    if ($[84] !== completion) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between",
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]",
                    children: [
                        completion,
                        "% concluido"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 601,
                    columnNumber: 179
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 601,
            columnNumber: 11
        }, this);
        $[84] = completion;
        $[85] = t34;
    } else {
        t34 = $[85];
    }
    let t35;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]",
                    children: "por onde comecar"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 609,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-3xl leading-tight sm:text-4xl",
                    children: "Primeiro o local. Depois cardápio, mesas e operação."
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 609,
                    columnNumber: 217
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm leading-7 text-[var(--muted)] sm:text-base",
                    children: "Cada etapa foi organizada para funcionar bem em tela estreita e continuar elegante no desktop, sem esconder o que ainda falta validar."
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 609,
                    columnNumber: 338
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 609,
            columnNumber: 11
        }, this);
        $[86] = t35;
    } else {
        t35 = $[86];
    }
    let t36;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onboardingStages"].map(_OwnerOnboardingPageOnboardingStagesMap);
        $[87] = t36;
    } else {
        t36 = $[87];
    }
    let t37;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3",
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StageCard, {
                    stage: {
                        number: "04",
                        title: "Ambiente",
                        description: "Hor\xE1rios, p\xFAblico, diferenciais e experi\xEAncia do local."
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 623,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 623,
            columnNumber: 11
        }, this);
        $[88] = t37;
    } else {
        t37 = $[88];
    }
    let t38;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs uppercase tracking-[0.24em] text-[var(--gold)]",
            children: "checklist de publicação"
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 634,
            columnNumber: 11
        }, this);
        $[89] = t38;
    } else {
        t38 = $[89];
    }
    let t39;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-[28px] border border-white/10 bg-[var(--panel)] p-5",
            children: [
                t38,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "rounded-2xl bg-white/4 px-4 py-3",
                            children: "nome, categoria, WhatsApp, cidade e UF precisam estar válidos;"
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/onboarding/page.tsx",
                            lineNumber: 641,
                            columnNumber: 162
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "rounded-2xl bg-white/4 px-4 py-3",
                            children: "descrição curta do local e do material de mídia evitam cadastro incompleto;"
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/onboarding/page.tsx",
                            lineNumber: 641,
                            columnNumber: 278
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "rounded-2xl bg-white/4 px-4 py-3",
                            children: "itens do cardápio só entram no rascunho após passar por validação."
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/onboarding/page.tsx",
                            lineNumber: 641,
                            columnNumber: 407
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 641,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 641,
            columnNumber: 11
        }, this);
        $[90] = t39;
    } else {
        t39 = $[90];
    }
    let t40;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs uppercase tracking-[0.24em] text-[var(--gold)]",
            children: "resumo rapido"
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 648,
            columnNumber: 11
        }, this);
        $[91] = t40;
    } else {
        t40 = $[91];
    }
    const t41 = form.name || "Sem nome";
    let t42;
    if ($[92] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
            label: "Estabelecimento",
            value: t41
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 656,
            columnNumber: 11
        }, this);
        $[92] = t41;
        $[93] = t42;
    } else {
        t42 = $[93];
    }
    const t43 = `${form.city || "Cidade"}${form.state ? ` - ${form.state}` : ""}`;
    let t44;
    if ($[94] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
            label: "Cidade",
            value: t43
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, this);
        $[94] = t43;
        $[95] = t44;
    } else {
        t44 = $[95];
    }
    const t45 = `${form.openTime || "--:--"} às ${form.closeTime || "--:--"}`;
    let t46;
    if ($[96] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
            label: "Horario",
            value: t45
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 674,
            columnNumber: 11
        }, this);
        $[96] = t45;
        $[97] = t46;
    } else {
        t46 = $[97];
    }
    let t47;
    if ($[98] !== menuItems) {
        t47 = menuItems.reduce(_OwnerOnboardingPageMenuItemsReduce, 0);
        $[98] = menuItems;
        $[99] = t47;
    } else {
        t47 = $[99];
    }
    const t48 = `${t47} itens`;
    let t49;
    if ($[100] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
            label: "Itens no rascunho",
            value: t48
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 691,
            columnNumber: 11
        }, this);
        $[100] = t48;
        $[101] = t49;
    } else {
        t49 = $[101];
    }
    let t50;
    if ($[102] !== t42 || $[103] !== t44 || $[104] !== t46 || $[105] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.4)] sm:p-6",
            children: [
                t35,
                t37,
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[28px] border border-white/10 bg-[var(--panel)] p-5",
                    children: [
                        t40,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-3 text-sm text-[var(--muted)]",
                            children: [
                                t42,
                                t44,
                                t46,
                                t49
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/onboarding/page.tsx",
                            lineNumber: 699,
                            columnNumber: 365
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 699,
                    columnNumber: 283
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 699,
            columnNumber: 11
        }, this);
        $[102] = t42;
        $[103] = t44;
        $[104] = t46;
        $[105] = t49;
        $[106] = t50;
    } else {
        t50 = $[106];
    }
    let t51;
    if ($[107] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                    children: "formulario mobile first"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 710,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-[var(--muted)]",
                    children: "navegação por etapas, validações visíveis e ações claras"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 710,
                    columnNumber: 113
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 710,
            columnNumber: 11
        }, this);
        $[107] = t51;
    } else {
        t51 = $[107];
    }
    const t52 = activeStepIndex + 1;
    let t53;
    if ($[108] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between",
            children: [
                t51,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]",
                    children: [
                        "etapa ",
                        t52,
                        " de 4"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 718,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 718,
            columnNumber: 11
        }, this);
        $[108] = t52;
        $[109] = t53;
    } else {
        t53 = $[109];
    }
    let t54;
    if ($[110] !== activeStep || $[111] !== goToStep) {
        t54 = stepOrder.map({
            "OwnerOnboardingPage[stepOrder.map()]": (step_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepPill, {
                    active: activeStep === step_2,
                    onClick: {
                        "OwnerOnboardingPage[stepOrder.map() > <StepPill>.onClick]": ()=>goToStep(step_2)
                    }["OwnerOnboardingPage[stepOrder.map() > <StepPill>.onClick]"],
                    children: stepLabels[step_2]
                }, step_2, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 727,
                    columnNumber: 57
                }, this)
        }["OwnerOnboardingPage[stepOrder.map()]"]);
        $[110] = activeStep;
        $[111] = goToStep;
        $[112] = t54;
    } else {
        t54 = $[112];
    }
    let t55;
    if ($[113] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
            children: t54
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 739,
            columnNumber: 11
        }, this);
        $[113] = t54;
        $[114] = t55;
    } else {
        t55 = $[114];
    }
    let t56;
    if ($[115] !== activeStep || $[116] !== errors || $[117] !== form.category || $[118] !== form.city || $[119] !== form.description || $[120] !== form.name || $[121] !== form.neighborhood || $[122] !== form.priceRange || $[123] !== form.state || $[124] !== form.whatsapp) {
        t56 = activeStep === "basic" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 md:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                        label: "Nome do estabelecimento",
                        value: form.name,
                        onChange: {
                            "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event)=>updateField("name", event.target.value)
                        }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                        error: errors.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                        lineNumber: 747,
                        columnNumber: 110
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 747,
                    columnNumber: 79
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedTextarea, {
                        label: "Descricao",
                        value: form.description,
                        onChange: {
                            "OwnerOnboardingPage[<ValidatedTextarea>.onChange]": (event_0)=>updateField("description", event_0.target.value)
                        }["OwnerOnboardingPage[<ValidatedTextarea>.onChange]"],
                        hint: "Use uma descri\xE7\xE3o curta e objetiva para a vitrine do app.",
                        error: errors.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                        lineNumber: 749,
                        columnNumber: 121
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 749,
                    columnNumber: 90
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                    label: "Categoria",
                    value: form.category,
                    onChange: {
                        "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_1)=>updateField("category", event_1.target.value)
                    }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                    error: errors.category
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 751,
                    columnNumber: 173
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                    label: "Faixa de preco",
                    value: form.priceRange,
                    onChange: {
                        "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_2)=>updateField("priceRange", event_2.target.value)
                    }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                    error: errors.priceRange
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 753,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                    label: "WhatsApp",
                    value: form.whatsapp,
                    onChange: {
                        "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_3)=>handleWhatsappChange(event_3.target.value)
                    }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                    error: errors.whatsapp
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 755,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                    label: "Bairro",
                    value: form.neighborhood,
                    onChange: {
                        "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_4)=>updateField("neighborhood", event_4.target.value)
                    }["OwnerOnboardingPage[<ValidatedInput>.onChange]"]
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 757,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                    label: "Cidade",
                    value: form.city,
                    onChange: {
                        "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_5)=>updateField("city", event_5.target.value)
                    }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                    error: errors.city
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 759,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                    label: "UF",
                    value: form.state,
                    onChange: {
                        "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_6)=>updateField("state", event_6.target.value.toUpperCase().slice(0, 2))
                    }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                    error: errors.state
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 761,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 747,
            columnNumber: 36
        }, this) : null;
        $[115] = activeStep;
        $[116] = errors;
        $[117] = form.category;
        $[118] = form.city;
        $[119] = form.description;
        $[120] = form.name;
        $[121] = form.neighborhood;
        $[122] = form.priceRange;
        $[123] = form.state;
        $[124] = form.whatsapp;
        $[125] = t56;
    } else {
        t56 = $[125];
    }
    let t57;
    if ($[126] !== activeStep || $[127] !== errors || $[128] !== form.coverImage || $[129] !== form.galleryInfo) {
        t57 = activeStep === "media" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[24px] border border-dashed border-white/12 bg-white/4 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-[0.22em] text-[var(--gold)]",
                            children: "upload de capa"
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/onboarding/page.tsx",
                            lineNumber: 780,
                            columnNumber: 148
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex min-h-40 items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,rgba(255,139,54,0.18),rgba(56,109,249,0.14))] p-4 text-center text-sm text-[var(--muted)]",
                            children: "Arraste fotos ou toque para adicionar imagem principal."
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/onboarding/page.tsx",
                            lineNumber: 780,
                            columnNumber: 236
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 780,
                    columnNumber: 64
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                    label: "Link ou nome da imagem principal",
                    value: form.coverImage,
                    onChange: {
                        "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_7)=>updateField("coverImage", event_7.target.value)
                    }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                    hint: "Opcional para a demo de hoje, mas \xFAtil para apresenta\xE7\xE3o."
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 780,
                    columnNumber: 499
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedTextarea, {
                    label: "Material de galeria",
                    value: form.galleryInfo,
                    onChange: {
                        "OwnerOnboardingPage[<ValidatedTextarea>.onChange]": (event_8)=>updateField("galleryInfo", event_8.target.value)
                    }["OwnerOnboardingPage[<ValidatedTextarea>.onChange]"],
                    hint: "Exemplo: 3 fotos do ambiente, 1 v\xEDdeo do palco e 1 foto da fachada.",
                    error: errors.galleryInfo
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 782,
                    columnNumber: 138
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 780,
            columnNumber: 36
        }, this) : null;
        $[126] = activeStep;
        $[127] = errors;
        $[128] = form.coverImage;
        $[129] = form.galleryInfo;
        $[130] = t57;
    } else {
        t57 = $[130];
    }
    let t58;
    if ($[131] !== activeStep || $[132] !== menuItems) {
        t58 = activeStep === "menu" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[24px] border border-white/8 bg-white/4 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-white",
                                        children: "Cardápio inicial"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                        lineNumber: 795,
                                        columnNumber: 221
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs leading-5 text-[var(--muted)]",
                                        children: "Cadastre itens essenciais para a demo e refine depois no dashboard."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                        lineNumber: 795,
                                        columnNumber: 289
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 795,
                                columnNumber: 216
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "OwnerOnboardingPage[<button>.onClick]": ()=>setIsAddMenuModalOpen(true)
                                }["OwnerOnboardingPage[<button>.onClick]"],
                                className: "rounded-full bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-4 py-2 text-sm font-semibold text-white",
                                children: "Adicionar item"
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 795,
                                columnNumber: 419
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                        lineNumber: 795,
                        columnNumber: 132
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 795,
                    columnNumber: 63
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-2",
                    children: menuItems.map(_OwnerOnboardingPageMenuItemsMap)
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 797,
                    columnNumber: 203
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 795,
            columnNumber: 35
        }, this) : null;
        $[131] = activeStep;
        $[132] = menuItems;
        $[133] = t58;
    } else {
        t58 = $[133];
    }
    let t59;
    if ($[134] !== activeStep || $[135] !== errors || $[136] !== form.amenities || $[137] !== form.audience || $[138] !== form.capacity || $[139] !== form.closeTime || $[140] !== form.instagram || $[141] !== form.musicStyle || $[142] !== form.openTime) {
        t59 = activeStep === "experience" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 md:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                    label: "Capacidade",
                    value: form.capacity,
                    onChange: {
                        "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_9)=>updateField("capacity", event_9.target.value.replace(/\D/g, "").slice(0, 4))
                    }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                    hint: "Quantidade aproximada de pessoas."
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 806,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                    label: "Instagram",
                    value: form.instagram,
                    onChange: {
                        "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_10)=>updateField("instagram", event_10.target.value)
                    }["OwnerOnboardingPage[<ValidatedInput>.onChange]"]
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 808,
                    columnNumber: 103
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                    label: "Abre as",
                    type: "time",
                    value: form.openTime,
                    onChange: {
                        "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_11)=>updateField("openTime", event_11.target.value)
                    }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                    error: errors.openTime
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 810,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                    label: "Fecha as",
                    type: "time",
                    value: form.closeTime,
                    onChange: {
                        "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_12)=>updateField("closeTime", event_12.target.value)
                    }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                    error: errors.closeTime
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 812,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedTextarea, {
                        label: "Estilo musical",
                        value: form.musicStyle,
                        onChange: {
                            "OwnerOnboardingPage[<ValidatedTextarea>.onChange]": (event_13)=>updateField("musicStyle", event_13.target.value)
                        }["OwnerOnboardingPage[<ValidatedTextarea>.onChange]"],
                        error: errors.musicStyle
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                        lineNumber: 814,
                        columnNumber: 118
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 814,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedTextarea, {
                        label: "Publico principal",
                        value: form.audience,
                        onChange: {
                            "OwnerOnboardingPage[<ValidatedTextarea>.onChange]": (event_14)=>updateField("audience", event_14.target.value)
                        }["OwnerOnboardingPage[<ValidatedTextarea>.onChange]"],
                        error: errors.audience
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                        lineNumber: 816,
                        columnNumber: 130
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 816,
                    columnNumber: 99
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedTextarea, {
                        label: "Diferenciais do ambiente",
                        value: form.amenities,
                        onChange: {
                            "OwnerOnboardingPage[<ValidatedTextarea>.onChange]": (event_15)=>updateField("amenities", event_15.target.value)
                        }["OwnerOnboardingPage[<ValidatedTextarea>.onChange]"],
                        error: errors.amenities
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                        lineNumber: 818,
                        columnNumber: 128
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 818,
                    columnNumber: 97
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 806,
            columnNumber: 41
        }, this) : null;
        $[134] = activeStep;
        $[135] = errors;
        $[136] = form.amenities;
        $[137] = form.audience;
        $[138] = form.capacity;
        $[139] = form.closeTime;
        $[140] = form.instagram;
        $[141] = form.musicStyle;
        $[142] = form.openTime;
        $[143] = t59;
    } else {
        t59 = $[143];
    }
    let t60;
    if ($[144] !== t56 || $[145] !== t57 || $[146] !== t58 || $[147] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5",
            children: [
                t56,
                t57,
                t58,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 836,
            columnNumber: 11
        }, this);
        $[144] = t56;
        $[145] = t57;
        $[146] = t58;
        $[147] = t59;
        $[148] = t60;
    } else {
        t60 = $[148];
    }
    let t61;
    if ($[149] !== formMessage) {
        t61 = formMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-5 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-[var(--muted)]",
            children: formMessage
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 847,
            columnNumber: 25
        }, this) : null;
        $[149] = formMessage;
        $[150] = t61;
    } else {
        t61 = $[150];
    }
    let t62;
    if ($[151] !== activeStepIndex || $[152] !== goToPreviousStep) {
        t62 = activeStepIndex > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: goToPreviousStep,
            className: "rounded-2xl border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-[var(--text)]",
            children: "Voltar etapa"
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 855,
            columnNumber: 33
        }, this) : null;
        $[151] = activeStepIndex;
        $[152] = goToPreviousStep;
        $[153] = t62;
    } else {
        t62 = $[153];
    }
    let t63;
    if ($[154] !== activeStepIndex || $[155] !== goToNextStep || $[156] !== publishSetup) {
        t63 = activeStepIndex < stepOrder.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: goToNextStep,
            className: "rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-sm font-semibold text-white",
            children: "Salvar e continuar"
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 864,
            columnNumber: 52
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: publishSetup,
            className: "rounded-2xl bg-[linear-gradient(135deg,#ff8b36,#ff5f6d)] px-5 py-3 text-sm font-semibold text-white",
            children: "Validar cadastro"
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 864,
            columnNumber: 239
        }, this);
        $[154] = activeStepIndex;
        $[155] = goToNextStep;
        $[156] = publishSetup;
        $[157] = t63;
    } else {
        t63 = $[157];
    }
    let t64;
    if ($[158] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: saveDraft,
            className: "rounded-2xl border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-[var(--text)]",
            children: "Salvar rascunho"
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 874,
            columnNumber: 11
        }, this);
        $[158] = t64;
    } else {
        t64 = $[158];
    }
    let t65;
    if ($[159] !== t62 || $[160] !== t63) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 flex flex-col gap-3 sm:flex-row",
            children: [
                t62,
                t63,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 881,
            columnNumber: 11
        }, this);
        $[159] = t62;
        $[160] = t63;
        $[161] = t65;
    } else {
        t65 = $[161];
    }
    let t66;
    if ($[162] !== t55 || $[163] !== t60 || $[164] !== t61 || $[165] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-[28px] border border-white/8 bg-[var(--panel)] p-4 sm:p-5",
            children: [
                t55,
                t60,
                t61,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 890,
            columnNumber: 11
        }, this);
        $[162] = t55;
        $[163] = t60;
        $[164] = t61;
        $[165] = t65;
        $[166] = t66;
    } else {
        t66 = $[166];
    }
    let t67;
    if ($[167] !== t53 || $[168] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]",
            children: [
                t53,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 901,
            columnNumber: 11
        }, this);
        $[167] = t53;
        $[168] = t66;
        $[169] = t67;
    } else {
        t67 = $[169];
    }
    let t68;
    if ($[170] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                            children: "preview da vitrine"
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/onboarding/page.tsx",
                            lineNumber: 910,
                            columnNumber: 110
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-[var(--muted)]",
                            children: "dados atualizados ao vivo conforme o cadastro avança"
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/onboarding/page.tsx",
                            lineNumber: 910,
                            columnNumber: 202
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 910,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]",
                    children: "publico"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 910,
                    columnNumber: 312
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 910,
            columnNumber: 11
        }, this);
        $[170] = t68;
    } else {
        t68 = $[170];
    }
    let t69;
    if ($[171] === Symbol.for("react.memo_cache_sentinel")) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-32 bg-[linear-gradient(135deg,#1a5f31,#0d1f14_58%,#d7a52e)] sm:h-40"
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 917,
            columnNumber: 11
        }, this);
        $[171] = t69;
    } else {
        t69 = $[171];
    }
    const t70 = form.name || "Seu estabelecimento";
    let t71;
    if ($[172] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-2xl",
            children: t70
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 925,
            columnNumber: 11
        }, this);
        $[172] = t70;
        $[173] = t71;
    } else {
        t71 = $[173];
    }
    const t72 = form.category || "Categoria";
    const t73 = form.city || "Cidade";
    const t74 = form.state ? ` - ${form.state}` : "";
    const t75 = form.musicStyle || "Estilo musical";
    let t76;
    if ($[174] !== t72 || $[175] !== t73 || $[176] !== t74 || $[177] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-[var(--muted)]",
            children: [
                t72,
                " · ",
                t73,
                t74,
                " · ",
                t75
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 937,
            columnNumber: 11
        }, this);
        $[174] = t72;
        $[175] = t73;
        $[176] = t74;
        $[177] = t75;
        $[178] = t76;
    } else {
        t76 = $[178];
    }
    let t77;
    if ($[179] !== t71 || $[180] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t71,
                t76
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 948,
            columnNumber: 11
        }, this);
        $[179] = t71;
        $[180] = t76;
        $[181] = t77;
    } else {
        t77 = $[181];
    }
    let t78;
    if ($[182] === Symbol.for("react.memo_cache_sentinel")) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-fit rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300",
            children: "Rascunho ativo"
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 957,
            columnNumber: 11
        }, this);
        $[182] = t78;
    } else {
        t78 = $[182];
    }
    let t79;
    if ($[183] !== t77) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
            children: [
                t77,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 964,
            columnNumber: 11
        }, this);
        $[183] = t77;
        $[184] = t79;
    } else {
        t79 = $[184];
    }
    const t80 = form.description || "Descreva o ambiente para aparecer aqui.";
    let t81;
    if ($[185] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm leading-7 text-[var(--muted)]",
            children: t80
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 973,
            columnNumber: 11
        }, this);
        $[185] = t80;
        $[186] = t81;
    } else {
        t81 = $[186];
    }
    const t82 = form.priceRange || "Faixa de pre\xE7o";
    let t83;
    if ($[187] !== t82) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            active: true,
            children: t82
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 982,
            columnNumber: 11
        }, this);
        $[187] = t82;
        $[188] = t83;
    } else {
        t83 = $[188];
    }
    const t84 = form.neighborhood || "Bairro";
    let t85;
    if ($[189] !== t84) {
        t85 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            children: t84
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 991,
            columnNumber: 11
        }, this);
        $[189] = t84;
        $[190] = t85;
    } else {
        t85 = $[190];
    }
    const t86 = form.openTime && form.closeTime ? `${form.openTime} - ${form.closeTime}` : "Hor\xE1rios";
    let t87;
    if ($[191] !== t86) {
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            active: true,
            children: t86
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1000,
            columnNumber: 11
        }, this);
        $[191] = t86;
        $[192] = t87;
    } else {
        t87 = $[192];
    }
    const t88 = form.audience || "P\xFAblico";
    let t89;
    if ($[193] !== t88) {
        t89 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            children: t88
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1009,
            columnNumber: 11
        }, this);
        $[193] = t88;
        $[194] = t89;
    } else {
        t89 = $[194];
    }
    let t90;
    if ($[195] !== t83 || $[196] !== t85 || $[197] !== t87 || $[198] !== t89) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 text-xs",
            children: [
                t83,
                t85,
                t87,
                t89
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1017,
            columnNumber: 11
        }, this);
        $[195] = t83;
        $[196] = t85;
        $[197] = t87;
        $[198] = t89;
        $[199] = t90;
    } else {
        t90 = $[199];
    }
    let t91;
    if ($[200] !== menuItems) {
        t91 = menuItems.map(_OwnerOnboardingPageMenuItemsMap2);
        $[200] = menuItems;
        $[201] = t91;
    } else {
        t91 = $[201];
    }
    let t92;
    if ($[202] !== t91) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 md:grid-cols-2",
            children: t91
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1036,
            columnNumber: 11
        }, this);
        $[202] = t91;
        $[203] = t92;
    } else {
        t92 = $[203];
    }
    let t93;
    if ($[204] !== t79 || $[205] !== t81 || $[206] !== t90 || $[207] !== t92) {
        t93 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden rounded-[24px] border border-white/10 bg-[var(--panel-2)]",
            children: [
                t69,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 p-4",
                    children: [
                        t79,
                        t81,
                        t90,
                        t92
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 1044,
                    columnNumber: 107
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1044,
            columnNumber: 11
        }, this);
        $[204] = t79;
        $[205] = t81;
        $[206] = t90;
        $[207] = t92;
        $[208] = t93;
    } else {
        t93 = $[208];
    }
    let t94;
    if ($[209] === Symbol.for("react.memo_cache_sentinel")) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 rounded-[24px] border border-white/10 bg-white/4 p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm leading-7 text-[var(--muted)]",
                    children: "Depois desta etapa, o proprietário segue para o dashboard com atalhos para mesas, comandas e ajustes finos do cardápio."
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 1055,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/owner/dashboard",
                    className: "mt-4 inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-[var(--text)]",
                    children: "Ir para dashboard"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 1055,
                    columnNumber: 262
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1055,
            columnNumber: 11
        }, this);
        $[209] = t94;
    } else {
        t94 = $[209];
    }
    let t95;
    if ($[210] !== t93) {
        t95 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]",
            children: [
                t68,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[28px] border border-white/8 bg-[var(--panel)] p-4 sm:p-5",
                    children: [
                        t93,
                        t94
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 1062,
                    columnNumber: 186
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1062,
            columnNumber: 11
        }, this);
        $[210] = t93;
        $[211] = t95;
    } else {
        t95 = $[211];
    }
    let t96;
    if ($[212] !== t67 || $[213] !== t95) {
        t96 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6",
            children: [
                t67,
                t95
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1070,
            columnNumber: 11
        }, this);
        $[212] = t67;
        $[213] = t95;
        $[214] = t96;
    } else {
        t96 = $[214];
    }
    let t97;
    if ($[215] !== t50 || $[216] !== t96) {
        t97 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "grid gap-6 xl:grid-cols-[0.9fr_1.1fr]",
            children: [
                t50,
                t96
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1079,
            columnNumber: 11
        }, this);
        $[215] = t50;
        $[216] = t96;
        $[217] = t97;
    } else {
        t97 = $[217];
    }
    let t98;
    if ($[218] !== t34 || $[219] !== t97) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10",
            children: [
                t34,
                t97
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1088,
            columnNumber: 11
        }, this);
        $[218] = t34;
        $[219] = t97;
        $[220] = t98;
    } else {
        t98 = $[220];
    }
    let t99;
    if ($[221] === Symbol.for("react.memo_cache_sentinel")) {
        t99 = ({
            "OwnerOnboardingPage[<button>.onClick]": ()=>setIsAddMenuModalOpen(true)
        })["OwnerOnboardingPage[<button>.onClick]"];
        $[221] = t99;
    } else {
        t99 = $[221];
    }
    let t100;
    if ($[222] === Symbol.for("react.memo_cache_sentinel")) {
        t100 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t99,
            className: "fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(56,109,249,0.3)] transition-transform hover:scale-105 sm:bottom-8 sm:right-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg leading-none",
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                    lineNumber: 1106,
                    columnNumber: 315
                }, this),
                "Novo item"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1106,
            columnNumber: 12
        }, this);
        $[222] = t100;
    } else {
        t100 = $[222];
    }
    let t101;
    if ($[223] !== handleAddMenuItem || $[224] !== isAddMenuModalOpen || $[225] !== menuItemErrors || $[226] !== modalStep || $[227] !== newItem || $[228] !== nextModalStep) {
        t101 = isAddMenuModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-end justify-center bg-[#050505]/80 p-4 backdrop-blur-sm sm:items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[28px] border border-white/10 bg-[var(--panel)] p-6 shadow-2xl sm:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-2xl",
                                        children: "Adicionar ao cardápio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                        lineNumber: 1113,
                                        columnNumber: 354
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-[var(--muted)]",
                                        children: "Cadastre uma nova bebida ou comida com validação por etapa."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                        lineNumber: 1113,
                                        columnNumber: 418
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 1113,
                                columnNumber: 349
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: closeModal,
                                className: "flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm text-[var(--muted)] hover:bg-white/10 hover:text-white",
                                children: "x"
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 1113,
                                columnNumber: 535
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                        lineNumber: 1113,
                        columnNumber: 293
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex items-center justify-center gap-2",
                        children: [
                            1,
                            2,
                            3
                        ].map({
                            "OwnerOnboardingPage[(anonymous)()]": (step_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-2 flex-1 rounded-full ${modalStep >= step_3 ? "bg-[var(--gold)]" : "bg-white/10"}`
                                }, step_3, false, {
                                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                    lineNumber: 1114,
                                    columnNumber: 61
                                }, this)
                        }["OwnerOnboardingPage[(anonymous)()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                        lineNumber: 1113,
                        columnNumber: 734
                    }, this),
                    modalStep === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5 grid grid-cols-2 gap-2 text-center text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "OwnerOnboardingPage[<button>.onClick]": ()=>updateMenuField("type", "Comida")
                                        }["OwnerOnboardingPage[<button>.onClick]"],
                                        className: `rounded-2xl px-4 py-3 font-semibold transition-all ${newItem.type === "Comida" ? "bg-[linear-gradient(135deg,#ff8b36,#ff5f6d)] text-white shadow-lg" : "bg-white/5 text-[var(--muted)] hover:bg-white/10"}`,
                                        children: "Comida"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                        lineNumber: 1115,
                                        columnNumber: 147
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "OwnerOnboardingPage[<button>.onClick]": ()=>updateMenuField("type", "Bebida")
                                        }["OwnerOnboardingPage[<button>.onClick]"],
                                        className: `rounded-2xl px-4 py-3 font-semibold transition-all ${newItem.type === "Bebida" ? "bg-[linear-gradient(135deg,#4582ff,#24c6dc)] text-white shadow-lg" : "bg-white/5 text-[var(--muted)] hover:bg-white/10"}`,
                                        children: "Bebida"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                        lineNumber: 1117,
                                        columnNumber: 289
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 1115,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[24px] border border-dashed border-white/12 bg-white/4 p-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-[20px] bg-white/5 text-[var(--muted)]",
                                        children: "Foto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                        lineNumber: 1119,
                                        columnNumber: 391
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-[var(--text)]",
                                        children: "Adicionar foto de destaque"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                        lineNumber: 1119,
                                        columnNumber: 520
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-[var(--muted)]",
                                        children: "Formatos suportados: JPG e PNG"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                        lineNumber: 1119,
                                        columnNumber: 606
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 1119,
                                columnNumber: 295
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                        lineNumber: 1115,
                        columnNumber: 77
                    }, this) : null,
                    modalStep === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                    label: "Nome do item",
                                    value: newItem.name,
                                    onChange: {
                                        "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_16)=>updateMenuField("name", event_16.target.value)
                                    }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                                    placeholder: "Ex: Por\xE7\xE3o de fritas com bacon",
                                    error: menuItemErrors.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                    lineNumber: 1119,
                                    columnNumber: 801
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 1119,
                                columnNumber: 770
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedTextarea, {
                                    label: "Descricao curta",
                                    value: newItem.description,
                                    onChange: {
                                        "OwnerOnboardingPage[<ValidatedTextarea>.onChange]": (event_17)=>updateMenuField("description", event_17.target.value)
                                    }["OwnerOnboardingPage[<ValidatedTextarea>.onChange]"],
                                    placeholder: "Batata frita crocante com cheddar e bacon...",
                                    error: menuItemErrors.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                    lineNumber: 1121,
                                    columnNumber: 186
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 1121,
                                columnNumber: 155
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                        lineNumber: 1119,
                        columnNumber: 727
                    }, this) : null,
                    modalStep === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                label: "Valor (R$)",
                                value: newItem.price,
                                onChange: {
                                    "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_18)=>handlePriceChange(event_18.target.value)
                                }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                                placeholder: "00,00",
                                error: menuItemErrors.price
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 1123,
                                columnNumber: 247
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                label: "Quantidade / Estoque",
                                value: newItem.quantity,
                                onChange: {
                                    "OwnerOnboardingPage[<ValidatedInput>.onChange]": (event_19)=>updateMenuField("quantity", event_19.target.value)
                                }["OwnerOnboardingPage[<ValidatedInput>.onChange]"],
                                placeholder: "Ilimitado ou n\xFAmero",
                                hint: "Deixe vazio para ilimitado",
                                error: menuItemErrors.quantity
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 1125,
                                columnNumber: 115
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                        lineNumber: 1123,
                        columnNumber: 204
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex gap-3",
                        children: [
                            modalStep > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: prevModalStep,
                                className: "w-1/3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10",
                                children: "Voltar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 1127,
                                columnNumber: 235
                            }, this) : null,
                            modalStep < 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: nextModalStep,
                                className: `rounded-2xl bg-[var(--gold)] px-5 py-3 text-center text-sm font-semibold text-black transition-transform hover:scale-[1.02] ${modalStep > 1 ? "w-2/3" : "w-full"}`,
                                children: "Continuar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 1127,
                                columnNumber: 476
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleAddMenuItem,
                                className: "w-2/3 rounded-2xl bg-white px-5 py-3 text-center text-sm font-semibold text-black shadow-[0_16px_35px_rgba(255,255,255,0.2)] transition-transform hover:scale-[1.02]",
                                children: "Concluir cadastro"
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                                lineNumber: 1127,
                                columnNumber: 719
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/onboarding/page.tsx",
                        lineNumber: 1127,
                        columnNumber: 185
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/owner/onboarding/page.tsx",
                lineNumber: 1113,
                columnNumber: 153
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1113,
            columnNumber: 34
        }, this);
        $[223] = handleAddMenuItem;
        $[224] = isAddMenuModalOpen;
        $[225] = menuItemErrors;
        $[226] = modalStep;
        $[227] = newItem;
        $[228] = nextModalStep;
        $[229] = t101;
    } else {
        t101 = $[229];
    }
    let t102;
    if ($[230] !== t101 || $[231] !== t98) {
        t102 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-[var(--bg)] text-[var(--text)]",
            children: [
                t98,
                t100,
                t101
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1140,
            columnNumber: 12
        }, this);
        $[230] = t101;
        $[231] = t98;
        $[232] = t102;
    } else {
        t102 = $[232];
    }
    return t102;
}
_s(OwnerOnboardingPage, "SEsseUoBchNg2rSHA5F3NFOprVo=");
_c = OwnerOnboardingPage;
function _OwnerOnboardingPageMenuItemsMap2(draft_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuDraftCard, {
        draft: draft_0
    }, `preview-${draft_0.category}`, false, {
        fileName: "[project]/src/app/owner/onboarding/page.tsx",
        lineNumber: 1150,
        columnNumber: 10
    }, this);
}
function _OwnerOnboardingPageMenuItemsMap(draft) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuDraftCard, {
        draft: draft
    }, draft.category, false, {
        fileName: "[project]/src/app/owner/onboarding/page.tsx",
        lineNumber: 1153,
        columnNumber: 10
    }, this);
}
function _OwnerOnboardingPageMenuItemsReduce(acc, item_1) {
    return acc + item_1.items.length;
}
function _OwnerOnboardingPageOnboardingStagesMap(stage) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StageCard, {
        stage: stage
    }, stage.number, false, {
        fileName: "[project]/src/app/owner/onboarding/page.tsx",
        lineNumber: 1159,
        columnNumber: 10
    }, this);
}
function _OwnerOnboardingPagePrevModalStepSetModalStep(prev_5) {
    return Math.max(prev_5 - 1, 1);
}
function _OwnerOnboardingPageNextModalStepSetModalStep(prev_4) {
    return Math.min(prev_4 + 1, 3);
}
function StageCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45";
    }
    const { stage } = t0;
    let t1;
    if ($[1] !== stage.number) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)] font-display text-lg text-[#2f2100]",
            children: stage.number
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1180,
            columnNumber: 10
        }, this);
        $[1] = stage.number;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== stage.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-display text-xl",
            children: stage.title
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1188,
            columnNumber: 10
        }, this);
        $[3] = stage.title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== stage.description) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm leading-6 text-[var(--muted)]",
            children: stage.description
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1196,
            columnNumber: 10
        }, this);
        $[5] = stage.description;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t2 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1204,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t1 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-[auto_1fr] gap-4 rounded-[24px] border border-white/8 bg-white/4 p-4",
            children: [
                t1,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1213,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_c1 = StageCard;
function StepPill(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45";
    }
    const { children, active, onClick } = t0;
    const t1 = `rounded-2xl px-3 py-2 text-sm transition-colors ${active ? "bg-[var(--accent)] font-semibold text-white" : "bg-white/5 text-[var(--muted)]"}`;
    let t2;
    if ($[1] !== children || $[2] !== onClick || $[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClick,
            className: t1,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1238,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = onClick;
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_c2 = StepPill;
function ValidatedInput(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45";
    }
    const { label, value, placeholder, onChange, hint, type: t1, error } = t0;
    const type = t1 === undefined ? "text" : t1;
    let t2;
    if ($[1] !== label) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1268,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const t3 = `w-full rounded-2xl border px-4 py-3 text-base text-[var(--text)] outline-none transition-all sm:text-sm ${error ? "border-rose-400/70 bg-rose-500/8 focus:border-rose-300 focus:ring-1 focus:ring-rose-300" : "border-white/8 bg-white/5 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]"} placeholder-white/20`;
    let t4;
    if ($[3] !== onChange || $[4] !== placeholder || $[5] !== t3 || $[6] !== type || $[7] !== value) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: type,
            value: value,
            onChange: onChange,
            placeholder: placeholder,
            className: t3
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1277,
            columnNumber: 10
        }, this);
        $[3] = onChange;
        $[4] = placeholder;
        $[5] = t3;
        $[6] = type;
        $[7] = value;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== error || $[10] !== hint) {
        t5 = error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs leading-5 text-rose-300",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1289,
            columnNumber: 18
        }, this) : hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs leading-5 text-[var(--muted)]",
            children: hint
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1289,
            columnNumber: 91
        }, this) : null;
        $[9] = error;
        $[10] = hint;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t2 || $[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1298,
            columnNumber: 10
        }, this);
        $[12] = t2;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_c3 = ValidatedInput;
function ValidatedTextarea(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45";
    }
    const { label, value, placeholder, onChange, hint, error } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1326,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = `w-full rounded-2xl border px-4 py-3 text-base text-[var(--text)] outline-none transition-all sm:text-sm ${error ? "border-rose-400/70 bg-rose-500/8 focus:border-rose-300 focus:ring-1 focus:ring-rose-300" : "border-white/8 bg-white/5 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]"} placeholder-white/20`;
    let t3;
    if ($[3] !== onChange || $[4] !== placeholder || $[5] !== t2 || $[6] !== value) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            value: value,
            onChange: onChange,
            placeholder: placeholder,
            rows: 4,
            className: t2
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1335,
            columnNumber: 10
        }, this);
        $[3] = onChange;
        $[4] = placeholder;
        $[5] = t2;
        $[6] = value;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== error || $[9] !== hint) {
        t4 = error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs leading-5 text-rose-300",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1346,
            columnNumber: 18
        }, this) : hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs leading-5 text-[var(--muted)]",
            children: hint
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1346,
            columnNumber: 91
        }, this) : null;
        $[8] = error;
        $[9] = hint;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t1 || $[12] !== t3 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1355,
            columnNumber: 10
        }, this);
        $[11] = t1;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_c4 = ValidatedTextarea;
function Tag(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45";
    }
    const { children, active } = t0;
    const t1 = `rounded-full px-3 py-1.5 text-xs font-medium ${active ? "bg-[var(--gold)] text-[#2d2003]" : "border border-white/10 bg-white/6 text-[var(--text)]"}`;
    let t2;
    if ($[1] !== children || $[2] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1380,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c5 = Tag;
function MenuDraftCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45";
    }
    const { draft } = t0;
    let t1;
    if ($[1] !== draft.category) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-display text-xl",
            children: draft.category
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1402,
            columnNumber: 10
        }, this);
        $[1] = draft.category;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== draft.items) {
        t2 = draft.items.map(_MenuDraftCardDraftItemsMap);
        $[3] = draft.items;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1418,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-[22px] border border-white/8 bg-white/4 p-4",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1426,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_c6 = MenuDraftCard;
function _MenuDraftCardDraftItemsMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "rounded-2xl bg-black/14 px-3 py-2",
        children: item
    }, item, false, {
        fileName: "[project]/src/app/owner/onboarding/page.tsx",
        lineNumber: 1436,
        columnNumber: 10
    }, this);
}
function SummaryRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "100d83417a3bdd7295712eeae225de34698756d2abf64e537b9e6b9f61316c45";
    }
    const { label, value } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1452,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium text-white",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1460,
            columnNumber: 10
        }, this);
        $[3] = value;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between rounded-2xl bg-white/4 px-4 py-3",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/onboarding/page.tsx",
            lineNumber: 1468,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c7 = SummaryRow;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "OwnerOnboardingPage");
__turbopack_context__.k.register(_c1, "StageCard");
__turbopack_context__.k.register(_c2, "StepPill");
__turbopack_context__.k.register(_c3, "ValidatedInput");
__turbopack_context__.k.register(_c4, "ValidatedTextarea");
__turbopack_context__.k.register(_c5, "Tag");
__turbopack_context__.k.register(_c6, "MenuDraftCard");
__turbopack_context__.k.register(_c7, "SummaryRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d16a8183._.js.map