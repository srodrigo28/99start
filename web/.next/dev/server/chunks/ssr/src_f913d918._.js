module.exports = [
"[project]/src/data/owner-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/owner/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OwnerDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/owner-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function OwnerDashboardPage() {
    const [drawerOpen, setDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[var(--bg)] text-[var(--text)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "sticky top-0 z-40 rounded-[26px] border border-white/10 bg-[rgba(10,13,20,0.92)] px-4 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                                        children: "99start"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-white",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ownerDashboardHeader"].status
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden items-center gap-2 md:flex",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ownerDashboardNav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopNavLink, {
                                        item: item
                                    }, item.href, false, {
                                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setDrawerOpen(true),
                                className: "flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-xl text-white md:hidden",
                                "aria-label": "Abrir menu",
                                children: "☰"
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                drawerOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50 bg-[#050505]/70 backdrop-blur-sm md:hidden",
                    onClick: ()=>setDrawerOpen(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex h-full w-[84vw] max-w-sm flex-col border-l border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.98),rgba(10,13,20,0.99))] p-5 shadow-2xl",
                        onClick: (event)=>event.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                                                children: "menu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-sm text-white",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ownerDashboardHeader"].title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setDrawerOpen(false),
                                        className: "flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-lg text-white",
                                        "aria-label": "Fechar menu",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ownerDashboardNav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileNavLink, {
                                        item: item,
                                        onNavigate: ()=>setDrawerOpen(false)
                                    }, item.href, false, {
                                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 rounded-[24px] border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ownerDashboardHeader"].status
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ownerDashboardHeader"].backHref,
                                onClick: ()=>setDrawerOpen(false),
                                className: "mt-auto rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-center text-sm font-semibold text-white",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ownerDashboardHeader"].backLabel
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid gap-6 lg:grid-cols-[1.02fr_0.98fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "order-1 flex h-full flex-col justify-between rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    intro: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ownerDashboardSummaryIntro"]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ownerDashboardMetrics"].map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCard, {
                                            metric: metric
                                        }, metric.label, false, {
                                            fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 grid gap-3 sm:grid-cols-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ownerDashboardActions"].map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionCard, {
                                            action: action
                                        }, action.title, false, {
                                            fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/dashboard/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "order-2 rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)] sm:p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    intro: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ownerDashboardRoutesIntro"]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ownerDashboardRouteSpotlights"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RouteSpotlightCard, {
                                            item: item
                                        }, item.href, false, {
                                            fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/dashboard/page.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/dashboard/page.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/dashboard/page.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/owner/dashboard/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function DesktopNavLink({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: item.href,
        className: "flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-white/10 hover:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: item.icon
            }, void 0, false, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: item.shortLabel || item.label
            }, void 0, false, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/owner/dashboard/page.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
function MobileNavLink({ item, onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: item.href,
        onClick: onNavigate,
        className: "flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 text-sm font-semibold text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-lg",
                "aria-hidden": "true",
                children: item.icon
            }, void 0, false, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: item.label
            }, void 0, false, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/owner/dashboard/page.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
function SectionHeader({ intro }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                        children: intro.eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    intro.title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-2 font-display text-3xl sm:text-4xl",
                        children: intro.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-[var(--muted)]",
                        children: intro.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            intro.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]",
                children: intro.badge
            }, void 0, false, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/owner/dashboard/page.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
function MetricCard({ metric }) {
    const tones = {
        mint: "bg-emerald-500/12 text-emerald-300",
        gold: "bg-amber-500/12 text-amber-200",
        blue: "bg-sky-500/12 text-sky-200",
        rose: "bg-rose-500/12 text-rose-200"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-[24px] p-4 ${tones[metric.tone]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] uppercase tracking-[0.18em]",
                children: metric.label
            }, void 0, false, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 font-display text-2xl text-white",
                children: metric.value
            }, void 0, false, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs leading-5 text-current/80",
                children: metric.detail
            }, void 0, false, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/owner/dashboard/page.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
function ActionCard({ action }) {
    const classes = {
        warm: "bg-[linear-gradient(135deg,#ff8b36,#ff5f6d)] text-white",
        cool: "bg-[linear-gradient(135deg,#4582ff,#24c6dc)] text-white",
        mint: "bg-[linear-gradient(135deg,#0dbb95,#66e4b5)] text-[#05241d]",
        neutral: "border border-white/10 bg-white/6 text-[var(--text)]"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: action.href,
        className: `rounded-[24px] p-4 ${classes[action.tone]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base font-semibold",
                children: action.title
            }, void 0, false, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm opacity-90",
                children: action.text
            }, void 0, false, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/owner/dashboard/page.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
function RouteSpotlightCard({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: item.href,
        className: "rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 transition hover:bg-white/8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,139,54,0.22),rgba(56,109,249,0.22))] text-2xl",
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-2xl text-white",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm leading-6 text-[var(--muted)]",
                                        children: item.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]",
                        children: item.badge
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/dashboard/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white",
                children: item.cta
            }, void 0, false, {
                fileName: "[project]/src/app/owner/dashboard/page.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/owner/dashboard/page.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_f913d918._.js.map