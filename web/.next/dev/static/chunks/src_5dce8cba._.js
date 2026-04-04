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
"[project]/src/app/owner/tabs/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OwnerTabsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode.react/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/owner-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const selectedCommandItems = [
    {
        name: "3x heionekm",
        price: 75
    },
    {
        name: "1x carne espeto",
        price: 9
    },
    {
        name: "2x refrigerante lata",
        price: 14
    },
    {
        name: "1x porção de fritas",
        price: 28
    },
    {
        name: "1x molho da casa",
        price: 6
    },
    {
        name: "2x água com gás",
        price: 12
    }
];
const settingsDraftKey = "owner-settings-draft-v1";
const printFormatMeta = {
    "thermal-58": {
        label: "Bobina 58 mm",
        text: "Cupom compacto para impressora térmica pequena.",
        wrapper: "max-w-xs",
        receipt: "max-w-[300px] text-[12px]"
    },
    "thermal-80": {
        label: "Bobina 80 mm",
        text: "Cupom térmico mais largo, com melhor leitura para balcão.",
        wrapper: "max-w-sm",
        receipt: "max-w-[360px] text-[13px]"
    },
    a4: {
        label: "Folha A4",
        text: "Layout mais amplo para administrativo e impressão completa.",
        wrapper: "max-w-2xl",
        receipt: "max-w-[720px] text-sm"
    }
};
function OwnerTabsPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/owner/dashboard",
                                    className: "text-xs uppercase tracking-[0.32em] text-[var(--gold)]",
                                    children: "voltar para dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 229
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]",
                                    children: "comandas"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 354
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 71,
                            columnNumber: 178
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-3 font-display text-3xl sm:text-4xl",
                            children: "Controle de comandas"
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 71,
                            columnNumber: 509
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base",
                            children: "Aqui fica o centro da operacao: comandas abertas, total do consumo e acao de marcar como paga. O layout continua priorizando celular."
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 71,
                            columnNumber: 589
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 71,
                    columnNumber: 173
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/owner/tables",
                    className: "w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]",
                    children: "Ir para mesas"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 71,
                    columnNumber: 813
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                            children: "fila operacional"
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 78,
                            columnNumber: 99
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-2 font-display text-3xl sm:text-4xl",
                            children: "Priorize caixa e atendimento."
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 78,
                            columnNumber: 189
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 78,
                    columnNumber: 94
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-[var(--text)]",
                    children: "Filtrar status"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 78,
                    columnNumber: 284
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-6",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 grid gap-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerCommands"].map(_OwnerTabsPageOwnerCommandsMap)
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 85,
                    columnNumber: 266
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 px-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                            children: "detalhe da comanda"
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 92,
                            columnNumber: 207
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-[var(--muted)]",
                            children: "Exemplo de leitura da comanda selecionada no mobile."
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 92,
                            columnNumber: 299
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 92,
                    columnNumber: 180
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommandDetails, {}, void 0, false, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 92,
                    columnNumber: 409
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 px-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                children: "estados da comanda"
            }, void 0, false, {
                fileName: "[project]/src/app/owner/tabs/page.tsx",
                lineNumber: 99,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-[var(--bg)] text-[var(--text)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid gap-6 lg:grid-cols-[1.02fr_0.98fr]",
                        children: [
                            t2,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-6",
                                children: [
                                    t3,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]",
                                        children: [
                                            t4,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                                        label: "Ativa",
                                                        tone: "blue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 484
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                                        label: "Fechando",
                                                        tone: "amber"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 524
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                                        label: "Pagamento",
                                                        tone: "mint"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 568
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 456
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 282
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                lineNumber: 106,
                                columnNumber: 250
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                        lineNumber: 106,
                        columnNumber: 185
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/owner/tabs/page.tsx",
                lineNumber: 106,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = OwnerTabsPage;
function _OwnerTabsPageOwnerCommandsMap(tab) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabRow, {
        tab: tab
    }, tab.code, false, {
        fileName: "[project]/src/app/owner/tabs/page.tsx",
        lineNumber: 114,
        columnNumber: 10
    }, this);
}
function TabRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2";
    }
    const { tab } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            Ativa: "bg-sky-500/14 text-sky-200",
            Fechando: "bg-amber-500/14 text-amber-200",
            Pagamento: "bg-emerald-500/14 text-emerald-300"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const statusClasses = t1;
    let t2;
    if ($[2] !== tab.code) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-semibold",
            children: tab.code
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[2] = tab.code;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== tab.customer) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-[var(--muted)]",
            children: tab.customer
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[4] = tab.customer;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== tab.location) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-[var(--muted)]",
            children: tab.location
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[6] = tab.location;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== tab.createdAt) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-[var(--muted)]",
            children: tab.createdAt
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 165,
            columnNumber: 10
        }, this);
        $[8] = tab.createdAt;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t2 || $[11] !== t3 || $[12] !== t4 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 173,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    const t7 = `w-fit rounded-full px-3 py-1 text-xs ${statusClasses[tab.status]}`;
    let t8;
    if ($[15] !== t7 || $[16] !== tab.status) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t7,
            children: tab.status
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 185,
            columnNumber: 10
        }, this);
        $[15] = t7;
        $[16] = tab.status;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== tab.total) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-display text-2xl text-[var(--gold)]",
            children: tab.total
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this);
        $[18] = tab.total;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t8 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2 sm:items-end",
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[20] = t8;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
            children: [
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t6;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== tab.code || $[27] !== tab.items) {
        t12 = tab.items?.map({
            "TabRow[(anonymous)()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between rounded-2xl bg-black/14 px-3 py-2 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[var(--muted)]",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 221,
                            columnNumber: 166
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item.price
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 221,
                            columnNumber: 222
                        }, this)
                    ]
                }, `${tab.code}-${item.name}`, true, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 221,
                    columnNumber: 40
                }, this)
        }["TabRow[(anonymous)()]"]);
        $[26] = tab.code;
        $[27] = tab.items;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 space-y-2",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex flex-col gap-3 sm:flex-row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-4 py-2 text-sm font-semibold text-white",
                    children: "Abrir detalhe"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 239,
                    columnNumber: 65
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "rounded-2xl border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-[var(--text)]",
                    children: "Atualizar status"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 239,
                    columnNumber: 207
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== t11 || $[33] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-[24px] border border-white/8 bg-white/4 p-4",
            children: [
                t11,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[32] = t11;
        $[33] = t13;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    return t15;
}
_c1 = TabRow;
function LineItem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2";
    }
    const { name, price } = t0;
    let t1;
    if ($[1] !== name) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--muted)]",
            children: name
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 269,
            columnNumber: 10
        }, this);
        $[1] = name;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== price) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: price
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 277,
            columnNumber: 10
        }, this);
        $[3] = price;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between rounded-2xl bg-black/14 px-3 py-2 text-sm",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 285,
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
_c2 = LineItem;
function StatusPill(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2";
    }
    const { label, tone } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            blue: "bg-sky-500/14 text-sky-200",
            amber: "bg-amber-500/14 text-amber-200",
            mint: "bg-emerald-500/14 text-emerald-300"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const classes = t1;
    const t2 = `rounded-[22px] px-4 py-3 text-sm font-medium ${classes[tone]}`;
    let t3;
    if ($[2] !== label || $[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 321,
            columnNumber: 10
        }, this);
        $[2] = label;
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c3 = StatusPill;
function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
function formatCardNumber(value) {
    return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}
function formatExpiry(value) {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}
function parseMoneyInput(value) {
    const normalized = value.replace(/[^\d,.-]/g, "").replace(".", "").replace(",", ".");
    const amount = Number(normalized);
    return Number.isFinite(amount) ? amount : 0;
}
function CommandDetails() {
    _s();
    const [modalPixOpen, setModalPixOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalCardOpen, setModalCardOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalCashOpen, setModalCashOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalReceiptOpen, setModalReceiptOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastPaymentMethod, setLastPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Pix");
    const [cardName, setCardName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("HEIONEKM");
    const [cardNumber, setCardNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("4557 0900 1122 3344");
    const [cardExpiry, setCardExpiry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("12/28");
    const [cardCvv, setCardCvv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("123");
    const [cardType, setCardType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("credito");
    const [cashReceived, setCashReceived] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("150,00");
    const [changeMethod, setChangeMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dinheiro");
    const [pixChangeKey, setPixChangeKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cliente@pix.com");
    const [printFormat, setPrintFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("thermal-80");
    const [receiptBaseUrl, setReceiptBaseUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("http://localhost:3000");
    const CHAVE_PIX = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CHAVE_PIX || "01046038109";
    const NOME_RECEBEDOR = "MATEUS VINICIUS";
    const CIDADE = "GOIANIA";
    const totalValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CommandDetails.useMemo[totalValue]": ()=>selectedCommandItems.reduce({
                "CommandDetails.useMemo[totalValue]": (sum, item)=>sum + item.price
            }["CommandDetails.useMemo[totalValue]"], 0)
    }["CommandDetails.useMemo[totalValue]"], []);
    const valorPix = totalValue.toFixed(2);
    const valorBrl = formatCurrency(totalValue);
    const receivedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CommandDetails.useMemo[receivedValue]": ()=>parseMoneyInput(cashReceived)
    }["CommandDetails.useMemo[receivedValue]"], [
        cashReceived
    ]);
    const changeValue = Math.max(receivedValue - totalValue, 0);
    const missingValue = Math.max(totalValue - receivedValue, 0);
    const cardBrand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CommandDetails.useMemo[cardBrand]": ()=>{
            const digits = cardNumber.replace(/\D/g, "");
            if (digits.startsWith("4")) return "VISA";
            if (/^5[1-5]/.test(digits)) return "MASTERCARD";
            if (/^3[47]/.test(digits)) return "AMEX";
            return "CARTAO";
        }
    }["CommandDetails.useMemo[cardBrand]"], [
        cardNumber
    ]);
    const changeDescription = changeMethod === "pix" ? `Troco devolvido por PIX${pixChangeKey ? ` para ${pixChangeKey}` : ""}` : "Troco devolvido em dinheiro";
    const selectedFormat = printFormatMeta[printFormat];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandDetails.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setReceiptBaseUrl(window.location.origin);
            try {
                const rawDraft = window.localStorage.getItem(settingsDraftKey);
                if (!rawDraft) return;
                const parsed = JSON.parse(rawDraft);
                if (parsed.form?.printFormat) {
                    setPrintFormat(parsed.form.printFormat);
                }
            } catch  {
                return;
            }
        }
    }["CommandDetails.useEffect"], []);
    const payloadPix = `00020126430014br.gov.bcb.pix0121${CHAVE_PIX}5204000053039865405${valorPix}5802BR5915${NOME_RECEBEDOR}6007${CIDADE}62070503***6304`;
    const receiptUrl = `${receiptBaseUrl}/receipt/1766423921796`;
    const openReceipt = (paymentMethod)=>{
        setLastPaymentMethod(paymentMethod);
        setModalReceiptOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[28px] border border-white/8 bg-[var(--panel)] p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: "#1766423921796"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-[var(--muted)]",
                                        children: "Cliente: Heionekm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-[var(--muted)]",
                                        children: "Saraiva Bar · Balcao"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-fit rounded-full bg-amber-500/14 px-3 py-1 text-xs text-amber-200",
                                children: "Fechando"
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                        lineNumber: 405,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-3",
                        children: selectedCommandItems.map((item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LineItem, {
                                name: item_0.name,
                                price: formatCurrency(item_0.price)
                            }, item_0.name, false, {
                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                lineNumber: 415,
                                columnNumber: 47
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 flex items-center justify-between rounded-[22px] bg-white/4 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-[var(--muted)]",
                                children: "Total a receber"
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-3xl text-[var(--gold)]",
                                children: valorBrl
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 rounded-[22px] border border-white/8 bg-white/4 px-4 py-3 text-sm text-[var(--muted)]",
                        children: [
                            "Impressão atual: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-white",
                                children: selectedFormat.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                lineNumber: 424,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]",
                                children: "Pagar com:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setModalPixOpen(true),
                                        className: "flex items-center justify-center gap-2 rounded-2xl border border-[#32BCAD]/20 bg-[#32BCAD]/10 px-3 py-3 text-sm font-semibold text-[#32BCAD] transition-transform hover:scale-105",
                                        children: "💠 Pix"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setModalCashOpen(true),
                                        className: "flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-3 py-3 text-sm font-semibold text-emerald-200 transition-transform hover:scale-105",
                                        children: "💵 Dinheiro"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setModalCardOpen(true),
                                        className: "col-span-2 flex items-center justify-center gap-2 rounded-2xl border border-[#4e8cff]/20 bg-[linear-gradient(135deg,rgba(78,140,255,0.16),rgba(34,211,238,0.14))] px-3 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 sm:col-auto",
                                        children: "💳 Cartão"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                        lineNumber: 432,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-col gap-3 border-t border-white/5 pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>openReceipt(lastPaymentMethod),
                                    className: "rounded-2xl bg-[linear-gradient(135deg,#0dbb95,#66e4b5)] px-4 py-3 text-sm font-semibold text-[#05241d]",
                                    children: "Marcar Paga e Imprimir"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/owner/tabs/page.tsx",
                lineNumber: 404,
                columnNumber: 7
            }, this),
            modalPixOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `print-receipt-shell print-format-${printFormat} fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/80 p-4 backdrop-blur-sm`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm rounded-[28px] border border-white/10 bg-[var(--panel)] p-6 text-center shadow-2xl sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "flex items-center justify-center gap-2 font-display text-2xl text-[var(--gold)]",
                            children: "💠 Pagamento Pix"
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 443,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-[var(--muted)]",
                            children: [
                                "Mostre a tela para o cliente ou copie o código abaixo pelo valor exato de ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: valorBrl
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 135
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 444,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl bg-white p-2 shadow-inner",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                    value: payloadPix,
                                    size: 200
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 445,
                                    columnNumber: 110
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                lineNumber: 445,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 445,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "mt-6 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10",
                            onClick: ()=>navigator.clipboard.writeText(payloadPix),
                            children: "📄 Copiar Código (Copia e Cola)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 446,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setModalPixOpen(false);
                                openReceipt("Pix");
                            },
                            className: "mt-3 w-full rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_35px_rgba(56,109,249,0.2)]",
                            children: "Confirmar Fechamento"
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 447,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 442,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/owner/tabs/page.tsx",
                lineNumber: 441,
                columnNumber: 24
            }, this),
            modalCashOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `print-receipt-shell print-format-${printFormat} fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/80 p-4 backdrop-blur-sm`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,24,20,0.98),rgba(8,13,11,1))] p-5 shadow-2xl sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-[0.24em] text-emerald-300",
                                            children: "pagamento em dinheiro"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-2 font-display text-2xl text-white",
                                            children: "Troco inteligente"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm leading-6 text-[var(--muted)]",
                                            children: "Digite quanto foi recebido e escolha como devolver o troco ao cliente."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 460,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setModalCashOpen(false),
                                    className: "flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-lg text-white",
                                    "aria-label": "Fechar pagamento em dinheiro",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 456,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 rounded-[28px] border border-emerald-400/20 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.22),transparent_28%),linear-gradient(135deg,rgba(10,56,38,1),rgba(5,22,17,1))] p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-[0.22em] text-emerald-200/80",
                                    children: "Resumo do caixa"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 466,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid gap-3 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CashStat, {
                                            label: "Total da comanda",
                                            value: valorBrl
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 63
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CashStat, {
                                            label: "Recebido",
                                            value: formatCurrency(receivedValue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 117
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CashStat, {
                                        label: "Troco",
                                        value: formatCurrency(changeValue),
                                        highlight: true,
                                        wide: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 465,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldShell, {
                                    label: "Valor recebido em dinheiro",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: cashReceived,
                                        onChange: (event)=>setCashReceived(event.target.value),
                                        autoComplete: "off",
                                        inputMode: "decimal",
                                        className: "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--gold)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 62
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]",
                                            children: "Devolver troco por"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 475,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setChangeMethod("dinheiro"),
                                                    className: `rounded-2xl border px-4 py-3 text-sm font-semibold transition ${changeMethod === "dinheiro" ? "border-emerald-400/30 bg-emerald-500/12 text-white" : "border-white/10 bg-white/5 text-[var(--muted)]"}`,
                                                    children: "💵 Dinheiro"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setChangeMethod("pix"),
                                                    className: `rounded-2xl border px-4 py-3 text-sm font-semibold transition ${changeMethod === "pix" ? "border-sky-400/30 bg-sky-500/12 text-white" : "border-white/10 bg-white/5 text-[var(--muted)]"}`,
                                                    children: "💠 PIX"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, this),
                                changeMethod === "pix" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldShell, {
                                    label: "Chave PIX para devolver o troco",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: pixChangeKey,
                                        onChange: (event_0)=>setPixChangeKey(event_0.target.value),
                                        autoComplete: "off",
                                        className: "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--gold)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                        lineNumber: 482,
                                        columnNumber: 93
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 482,
                                    columnNumber: 41
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 471,
                            columnNumber: 13
                        }, this),
                        missingValue > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 rounded-[22px] border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100",
                            children: [
                                "Ainda faltam ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: formatCurrency(missingValue)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 156
                                }, this),
                                " para completar o pagamento."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 485,
                            columnNumber: 33
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mt-5 rounded-[22px] border px-4 py-3 text-sm ${changeMethod === "pix" ? "border-sky-400/20 bg-sky-500/10 text-sky-100" : "border-emerald-400/20 bg-emerald-500/10 text-emerald-100"}`,
                            children: changeMethod === "pix" ? `Troco de ${formatCurrency(changeValue)} será devolvido por PIX${pixChangeKey ? ` para ${pixChangeKey}` : ""}.` : `Troco de ${formatCurrency(changeValue)} será devolvido em dinheiro.`
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 485,
                            columnNumber: 240
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "print-hide mt-5 flex flex-col gap-3 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setModalCashOpen(false),
                                    className: "flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setModalCashOpen(false);
                                        openReceipt("Dinheiro");
                                    },
                                    className: "flex-1 rounded-2xl bg-[linear-gradient(135deg,#0dbb95,#66e4b5)] px-4 py-3 text-sm font-semibold text-[#05241d] shadow-[0_16px_35px_rgba(13,187,149,0.22)]",
                                    children: "Confirmar dinheiro"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 489,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 487,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 455,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/owner/tabs/page.tsx",
                lineNumber: 454,
                columnNumber: 25
            }, this),
            modalCardOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `print-receipt-shell print-format-${printFormat} fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/80 p-4 backdrop-blur-sm`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,21,31,0.98),rgba(8,11,18,1))] p-5 shadow-2xl sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-[0.24em] text-[var(--gold)]",
                                            children: "pagamento com cartão"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 501,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-2 font-display text-2xl text-white",
                                            children: "Checkout premium"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 502,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm leading-6 text-[var(--muted)]",
                                            children: [
                                                "Preencha os dados do cartão e confirme o recebimento de ",
                                                valorBrl,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 503,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setModalCardOpen(false),
                                    className: "flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-lg text-white",
                                    "aria-label": "Fechar pagamento com cartão",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 505,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 499,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(102,228,181,0.35),transparent_30%),linear-gradient(135deg,#102646,#0b1220_45%,#1e3d78_100%)] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.32)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-white/80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs uppercase tracking-[0.22em]",
                                            children: "99start pay"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 509,
                                            columnNumber: 80
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em]",
                                            children: cardType
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 509,
                                            columnNumber: 152
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 509,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-10 w-14 rounded-xl bg-[linear-gradient(135deg,#f7d774,#d8a92f)] shadow-inner"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 510,
                                            columnNumber: 77
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-display text-lg text-white/90",
                                            children: cardBrand
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 510,
                                            columnNumber: 175
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-8 font-display text-2xl tracking-[0.18em] text-white",
                                    children: cardNumber || "0000 0000 0000 0000"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex items-end justify-between gap-4 text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] uppercase tracking-[0.22em] text-white/60",
                                                    children: "titular"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 90
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-sm uppercase tracking-[0.12em]",
                                                    children: cardName || "NOME DO CLIENTE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 170
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 85
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] uppercase tracking-[0.22em] text-white/60",
                                                    children: "validade"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 272
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-sm tracking-[0.12em]",
                                                    children: cardExpiry || "00/00"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 353
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 267
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 512,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 508,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setCardType("credito"),
                                            className: `rounded-2xl border px-4 py-3 text-sm font-semibold transition ${cardType === "credito" ? "border-[var(--gold)] bg-[rgba(255,196,82,0.16)] text-white" : "border-white/10 bg-white/5 text-[var(--muted)]"}`,
                                            children: "Crédito"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 517,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setCardType("debito"),
                                            className: `rounded-2xl border px-4 py-3 text-sm font-semibold transition ${cardType === "debito" ? "border-[var(--gold)] bg-[rgba(255,196,82,0.16)] text-white" : "border-white/10 bg-white/5 text-[var(--muted)]"}`,
                                            children: "Débito"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 518,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldShell, {
                                    label: "Nome impresso no cartão",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: cardName,
                                        onChange: (event_1)=>setCardName(event_1.target.value.toUpperCase()),
                                        autoComplete: "off",
                                        className: "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--gold)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                        lineNumber: 521,
                                        columnNumber: 59
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 521,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldShell, {
                                    label: "Número do cartão",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: cardNumber,
                                        onChange: (event_2)=>setCardNumber(formatCardNumber(event_2.target.value)),
                                        autoComplete: "off",
                                        inputMode: "numeric",
                                        className: "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--gold)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/tabs/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 52
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 522,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldShell, {
                                            label: "Validade",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: cardExpiry,
                                                onChange: (event_3)=>setCardExpiry(formatExpiry(event_3.target.value)),
                                                autoComplete: "off",
                                                inputMode: "numeric",
                                                className: "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--gold)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                lineNumber: 524,
                                                columnNumber: 46
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldShell, {
                                            label: "CVV",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: cardCvv,
                                                onChange: (event_4)=>setCardCvv(event_4.target.value.replace(/\D/g, "").slice(0, 4)),
                                                autoComplete: "off",
                                                inputMode: "numeric",
                                                className: "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--gold)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                lineNumber: 525,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 525,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 523,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 515,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 rounded-[22px] border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100",
                            children: [
                                "Valor final no cartão: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: valorBrl
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 529,
                                    columnNumber: 155
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 529,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "print-hide mt-5 flex flex-col gap-3 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setModalCardOpen(false),
                                    className: "flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setModalCardOpen(false);
                                        openReceipt(cardType === "credito" ? "Cartão de crédito" : "Cartão de débito");
                                    },
                                    className: "flex-1 rounded-2xl bg-[linear-gradient(135deg,#4e8cff,#22d3ee)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(56,109,249,0.24)]",
                                    children: "Confirmar cartão"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 533,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 531,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 498,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/owner/tabs/page.tsx",
                lineNumber: 497,
                columnNumber: 25
            }, this),
            modalReceiptOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `print-receipt-shell print-format-${printFormat} fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/80 p-4 backdrop-blur-sm`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full ${selectedFormat.wrapper} rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,19,28,0.98),rgba(8,11,18,1))] p-5 shadow-2xl sm:p-6`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-[0.24em] text-[var(--gold)]",
                                            children: "fechamento concluído"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 545,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-2 font-display text-2xl text-white",
                                            children: "Comprovante pronto para imprimir"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 546,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm leading-6 text-[var(--muted)]",
                                            children: [
                                                "Formato escolhido: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-white",
                                                    children: selectedFormat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 94
                                                }, this),
                                                ". ",
                                                selectedFormat.text
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 544,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setModalReceiptOpen(false),
                                    className: "print-hide flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-lg text-white",
                                    "aria-label": "Fechar comprovante",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 543,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `print-receipt-card mt-5 rounded-[28px] border border-white/10 bg-white/4 p-5 ${selectedFormat.receipt}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 border-t border-dashed border-white/10 pt-4 text-center text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]",
                                    children: "cupom fiscal simplificado"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 552,
                                    columnNumber: 135
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-4 border-b border-white/8 pb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-display text-2xl text-white",
                                                    children: "Saraiva Bar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-[var(--muted)]",
                                                    children: "Comanda #1766423921796"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 554,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200",
                                            children: "Paga"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 558,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 553,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `mt-4 space-y-2 ${printFormat === "a4" ? "columns-2 gap-6 space-y-3" : ""}`,
                                    children: selectedCommandItems.map((item_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-sm text-[var(--muted)] break-inside-avoid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item_1.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: formatCurrency(item_1.price)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, `receipt-${item_1.name}`, true, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 562,
                                            columnNumber: 53
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 561,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 grid gap-3 rounded-[24px] bg-black/18 p-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReceiptRow, {
                                            label: "Cliente",
                                            value: "Heionekm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 569,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReceiptRow, {
                                            label: "Forma de pagamento",
                                            value: lastPaymentMethod
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 570,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReceiptRow, {
                                            label: "Formato",
                                            value: selectedFormat.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReceiptRow, {
                                            label: "Valor total",
                                            value: valorBrl,
                                            strong: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 572,
                                            columnNumber: 17
                                        }, this),
                                        lastPaymentMethod === "Dinheiro" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReceiptRow, {
                                            label: "Recebido",
                                            value: formatCurrency(receivedValue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 573,
                                            columnNumber: 53
                                        }, this) : null,
                                        lastPaymentMethod === "Dinheiro" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReceiptRow, {
                                            label: "Troco",
                                            value: formatCurrency(changeValue)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 574,
                                            columnNumber: 53
                                        }, this) : null,
                                        lastPaymentMethod === "Dinheiro" && changeValue > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReceiptRow, {
                                            label: "Devolução",
                                            value: changeDescription
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                                            lineNumber: 575,
                                            columnNumber: 72
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 568,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 552,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "print-hide mt-5 flex flex-col gap-3 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setModalReceiptOpen(false),
                                    className: "flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white",
                                    children: "Fechar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 580,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>window.print(),
                                    className: "flex-1 rounded-2xl bg-[linear-gradient(135deg,#f7b733,#fc4a1a)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(252,74,26,0.2)]",
                                    children: "Imprimir comprovante"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                                    lineNumber: 581,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tabs/page.tsx",
                            lineNumber: 579,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/tabs/page.tsx",
                    lineNumber: 542,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/owner/tabs/page.tsx",
                lineNumber: 541,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true);
}
_s(CommandDetails, "6gWbFV/FS6RRcYEeKldue2hHu0E=");
_c4 = CommandDetails;
function FieldShell(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2";
    }
    const { label, children } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 601,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== children || $[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 609,
            columnNumber: 10
        }, this);
        $[3] = children;
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c5 = FieldShell;
function CashStat(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2";
    }
    const { label, value, highlight, wide } = t0;
    const t1 = `rounded-[22px] px-4 py-3 ${highlight ? "bg-white/12 text-white" : "bg-black/14 text-emerald-50"} ${wide ? "w-full" : ""}`;
    let t2;
    if ($[1] !== label) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] uppercase tracking-[0.18em] text-current/70",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 635,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== value) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 font-display text-2xl",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 643,
            columnNumber: 10
        }, this);
        $[3] = value;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t1 || $[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 651,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_c6 = CashStat;
function ReceiptRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2d75bf05045d898238350a32ec17b93281902606c7d7aaec925764a6fa4de1c2";
    }
    const { label, value, strong } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[var(--muted)]",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 676,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = strong ? "font-semibold text-white" : "text-white";
    let t3;
    if ($[3] !== t2 || $[4] !== value) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2,
            children: value
        }, void 0, false, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 685,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = value;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t1 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-4",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tabs/page.tsx",
            lineNumber: 694,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_c7 = ReceiptRow;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "OwnerTabsPage");
__turbopack_context__.k.register(_c1, "TabRow");
__turbopack_context__.k.register(_c2, "LineItem");
__turbopack_context__.k.register(_c3, "StatusPill");
__turbopack_context__.k.register(_c4, "CommandDetails");
__turbopack_context__.k.register(_c5, "FieldShell");
__turbopack_context__.k.register(_c6, "CashStat");
__turbopack_context__.k.register(_c7, "ReceiptRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5dce8cba._.js.map