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
"[project]/src/app/owner/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OwnerDashboardPage
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
function OwnerDashboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7";
    }
    const [drawerOpen, setDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                    children: "99start"
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                    lineNumber: 19,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-white",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardHeader"].status
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                    lineNumber: 19,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden items-center gap-2 md:flex",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardNav"].map(_OwnerDashboardPageOwnerDashboardNavMap)
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "sticky top-0 z-40 rounded-[26px] border border-white/10 bg-[rgba(10,13,20,0.92)] px-4 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3",
                children: [
                    t0,
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "OwnerDashboardPage[<button>.onClick]": ()=>setDrawerOpen(true)
                        }["OwnerDashboardPage[<button>.onClick]"],
                        className: "flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-xl text-white md:hidden",
                        "aria-label": "Abrir menu",
                        children: "☰"
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                        lineNumber: 33,
                        columnNumber: 238
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 33,
                columnNumber: 173
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== drawerOpen) {
        t3 = drawerOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 bg-[#050505]/70 backdrop-blur-sm md:hidden",
            onClick: {
                "OwnerDashboardPage[<div>.onClick]": ()=>setDrawerOpen(false)
            }["OwnerDashboardPage[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-auto flex h-full w-[84vw] max-w-sm flex-col border-l border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.98),rgba(10,13,20,0.99))] p-5 shadow-2xl",
                onClick: _OwnerDashboardPageDivOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                                        children: "menu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 314
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-white",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardHeader"].title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 392
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                lineNumber: 44,
                                columnNumber: 309
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "OwnerDashboardPage[<button>.onClick]": ()=>setDrawerOpen(false)
                                }["OwnerDashboardPage[<button>.onClick]"],
                                className: "flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-lg text-white",
                                "aria-label": "Fechar menu",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                lineNumber: 44,
                                columnNumber: 469
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                        lineNumber: 44,
                        columnNumber: 258
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardNav"].map({
                            "OwnerDashboardPage[ownerDashboardNav.map()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileNavLink, {
                                    item: item_0,
                                    onNavigate: {
                                        "OwnerDashboardPage[ownerDashboardNav.map() > <MobileNavLink>.onNavigate]": ()=>setDrawerOpen(false)
                                    }["OwnerDashboardPage[ownerDashboardNav.map() > <MobileNavLink>.onNavigate]"]
                                }, item_0.href, false, {
                                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 70
                                }, this)
                        }["OwnerDashboardPage[ownerDashboardNav.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                        lineNumber: 46,
                        columnNumber: 215
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 rounded-[24px] border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardHeader"].status
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                        lineNumber: 50,
                        columnNumber: 67
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardHeader"].backHref,
                        onClick: {
                            "OwnerDashboardPage[<Link>.onClick]": ()=>setDrawerOpen(false)
                        }["OwnerDashboardPage[<Link>.onClick]"],
                        className: "mt-auto rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-center text-sm font-semibold text-white",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardHeader"].backLabel
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                        lineNumber: 50,
                        columnNumber: 215
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 44,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 42,
            columnNumber: 23
        }, this) : null;
        $[4] = drawerOpen;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
            intro: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardSummaryIntro"]
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardMetrics"].map(_OwnerDashboardPageOwnerDashboardMetricsMap)
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "order-1 flex h-full flex-col justify-between rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-6",
            children: [
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 grid gap-3 sm:grid-cols-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardActions"].map(_OwnerDashboardPageOwnerDashboardActionsMap)
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                    lineNumber: 74,
                    columnNumber: 315
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
            intro: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardRoutesIntro"]
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "grid gap-6 lg:grid-cols-[1.02fr_0.98fr]",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "order-2 rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)] sm:p-5",
                    children: [
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownerDashboardRouteSpotlights"].map(_OwnerDashboardPageOwnerDashboardRouteSpotlightsMap)
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/dashboard/page.tsx",
                            lineNumber: 88,
                            columnNumber: 264
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                    lineNumber: 88,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t3) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-[var(--bg)] text-[var(--text)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10",
                children: [
                    t2,
                    t3,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 95,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    return t9;
}
_s(OwnerDashboardPage, "i0pHI9YMbVyneVc1gk5xK0P2xMQ=");
_c = OwnerDashboardPage;
function _OwnerDashboardPageOwnerDashboardRouteSpotlightsMap(item_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RouteSpotlightCard, {
        item: item_1
    }, item_1.href, false, {
        fileName: "[project]/src/app/owner/dashboard/page.tsx",
        lineNumber: 104,
        columnNumber: 10
    }, this);
}
function _OwnerDashboardPageOwnerDashboardActionsMap(action) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionCard, {
        action: action
    }, action.title, false, {
        fileName: "[project]/src/app/owner/dashboard/page.tsx",
        lineNumber: 107,
        columnNumber: 10
    }, this);
}
function _OwnerDashboardPageOwnerDashboardMetricsMap(metric) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
        metric: metric
    }, metric.label, false, {
        fileName: "[project]/src/app/owner/dashboard/page.tsx",
        lineNumber: 110,
        columnNumber: 10
    }, this);
}
function _OwnerDashboardPageDivOnClick(event) {
    return event.stopPropagation();
}
function _OwnerDashboardPageOwnerDashboardNavMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopNavLink, {
        item: item
    }, item.href, false, {
        fileName: "[project]/src/app/owner/dashboard/page.tsx",
        lineNumber: 116,
        columnNumber: 10
    }, this);
}
function DesktopNavLink(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7";
    }
    const { item } = t0;
    let t1;
    if ($[1] !== item.icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            children: item.icon
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 131,
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
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 140,
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
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 148,
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
_c1 = DesktopNavLink;
function MobileNavLink(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7";
    }
    const { item, onNavigate } = t0;
    let t1;
    if ($[1] !== item.icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-lg",
            "aria-hidden": "true",
            children: item.icon
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 172,
            columnNumber: 10
        }, this);
        $[1] = item.icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== item.label) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: item.label
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 180,
            columnNumber: 10
        }, this);
        $[3] = item.label;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== item.href || $[6] !== onNavigate || $[7] !== t1 || $[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: item.href,
            onClick: onNavigate,
            className: "flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 text-sm font-semibold text-white",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 188,
            columnNumber: 10
        }, this);
        $[5] = item.href;
        $[6] = onNavigate;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_c2 = MobileNavLink;
function SectionHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7";
    }
    const { intro } = t0;
    let t1;
    if ($[1] !== intro.eyebrow) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
            children: intro.eyebrow
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 212,
            columnNumber: 10
        }, this);
        $[1] = intro.eyebrow;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== intro.title) {
        t2 = intro.title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mt-2 font-display text-3xl sm:text-4xl",
            children: intro.title
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 220,
            columnNumber: 24
        }, this) : null;
        $[3] = intro.title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== intro.description) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-[var(--muted)]",
            children: intro.description
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 228,
            columnNumber: 10
        }, this);
        $[5] = intro.description;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 236,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== intro.badge) {
        t5 = intro.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]",
            children: intro.badge
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 246,
            columnNumber: 24
        }, this) : null;
        $[11] = intro.badge;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 254,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_c3 = SectionHeader;
function MetricCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7";
    }
    const { metric } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            mint: "bg-emerald-500/12 text-emerald-300",
            gold: "bg-amber-500/12 text-amber-200",
            blue: "bg-sky-500/12 text-sky-200",
            rose: "bg-rose-500/12 text-rose-200"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const tones = t1;
    const t2 = `rounded-[24px] p-4 ${tones[metric.tone]}`;
    let t3;
    if ($[2] !== metric.label) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] uppercase tracking-[0.18em]",
            children: metric.label
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 290,
            columnNumber: 10
        }, this);
        $[2] = metric.label;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== metric.value) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 font-display text-2xl text-white",
            children: metric.value
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 298,
            columnNumber: 10
        }, this);
        $[4] = metric.value;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== metric.detail) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs leading-5 text-current/80",
            children: metric.detail
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 306,
            columnNumber: 10
        }, this);
        $[6] = metric.detail;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t2 || $[9] !== t3 || $[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 314,
            columnNumber: 10
        }, this);
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c4 = MetricCard;
function ActionCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7";
    }
    const { action } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            warm: "bg-[linear-gradient(135deg,#ff8b36,#ff5f6d)] text-white",
            cool: "bg-[linear-gradient(135deg,#4582ff,#24c6dc)] text-white",
            mint: "bg-[linear-gradient(135deg,#0dbb95,#66e4b5)] text-[#05241d]",
            neutral: "border border-white/10 bg-white/6 text-[var(--text)]"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const classes = t1;
    const t2 = `rounded-[24px] p-4 ${classes[action.tone]}`;
    let t3;
    if ($[2] !== action.title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-base font-semibold",
            children: action.title
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 352,
            columnNumber: 10
        }, this);
        $[2] = action.title;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== action.text) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm opacity-90",
            children: action.text
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 360,
            columnNumber: 10
        }, this);
        $[4] = action.text;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== action.href || $[7] !== t2 || $[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: action.href,
            className: t2,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 368,
            columnNumber: 10
        }, this);
        $[6] = action.href;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_c5 = ActionCard;
function RouteSpotlightCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a3e6954c91e143af1d32fed2846bb279d4d9d83f821909179f3c5c94e3839bf7";
    }
    const { item } = t0;
    let t1;
    if ($[1] !== item.icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,139,54,0.22),rgba(56,109,249,0.22))] text-2xl",
            children: item.icon
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 392,
            columnNumber: 10
        }, this);
        $[1] = item.icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== item.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-display text-2xl text-white",
            children: item.title
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 400,
            columnNumber: 10
        }, this);
        $[3] = item.title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== item.text) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm leading-6 text-[var(--muted)]",
            children: item.text
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 408,
            columnNumber: 10
        }, this);
        $[5] = item.text;
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
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 416,
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
            className: "flex items-start gap-4",
            children: [
                t1,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 425,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== item.badge) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]",
            children: item.badge
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 434,
            columnNumber: 10
        }, this);
        $[13] = item.badge;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t5 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-4",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 442,
            columnNumber: 10
        }, this);
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== item.cta) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white",
            children: item.cta
        }, void 0, false, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 451,
            columnNumber: 10
        }, this);
        $[18] = item.cta;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== item.href || $[21] !== t7 || $[22] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: item.href,
            className: "rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 transition hover:bg-white/8",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 459,
            columnNumber: 10
        }, this);
        $[20] = item.href;
        $[21] = t7;
        $[22] = t8;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    return t9;
}
_c6 = RouteSpotlightCard;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "OwnerDashboardPage");
__turbopack_context__.k.register(_c1, "DesktopNavLink");
__turbopack_context__.k.register(_c2, "MobileNavLink");
__turbopack_context__.k.register(_c3, "SectionHeader");
__turbopack_context__.k.register(_c4, "MetricCard");
__turbopack_context__.k.register(_c5, "ActionCard");
__turbopack_context__.k.register(_c6, "RouteSpotlightCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
]);

//# sourceMappingURL=_5284f673._.js.map