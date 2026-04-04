module.exports = [
"[project]/src/app/icon--metadata.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/icon--metadata.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/apple-icon--metadata.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/apple-icon--metadata.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/owner-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/app/owner/tables/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OwnerTablesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/owner-data.ts [app-rsc] (ecmascript)");
;
;
;
function OwnerTablesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[var(--bg)] text-[var(--text)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/owner/dashboard",
                                            className: "text-xs uppercase tracking-[0.32em] text-[var(--gold)]",
                                            children: "voltar para dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tables/page.tsx",
                                            lineNumber: 18,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]",
                                            children: "mesas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tables/page.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-3 font-display text-3xl sm:text-4xl",
                                    children: "Gerenciamento de mesas"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base",
                                    children: "Visual operacional com leitura rapida em celular: numero da mesa, status, quantidade de pedidos e acesso ao detalhe."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tables/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/owner/tabs",
                            className: "w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[var(--muted)]",
                            children: "Ir para comandas"
                        }, void 0, false, {
                            fileName: "[project]/src/app/owner/tables/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/tables/page.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid gap-6 lg:grid-cols-[1.05fr_0.95fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,196,82,0.16),_transparent_24%),linear-gradient(180deg,rgba(18,24,36,0.96),rgba(9,12,19,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                                                    children: "mapa de mesas"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "mt-2 font-display text-3xl sm:text-4xl",
                                                    children: "Ocupacao e status em um toque."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/owner/tables/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-fit rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-[var(--text)]",
                                            children: "Nova mesa"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tables/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ownerTables"].map((table)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TableTile, {
                                            table: table
                                        }, table.number, false, {
                                            fileName: "[project]/src/app/owner/tables/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tables/page.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                                                    children: "pedidos pendentes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-[var(--muted)]",
                                                    children: "Quando uma mesa recebe pedido, o destaque precisa ser imediato."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/owner/tables/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-3",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$owner$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ownerTableAlerts"].map((alert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertCard, {
                                                    alert: alert
                                                }, `${alert.table}-${alert.customer}`, false, {
                                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tables/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 px-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                                                children: "regra visual"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/owner/tables/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/owner/tables/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendItem, {
                                                    label: "Livre",
                                                    tone: "emerald"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendItem, {
                                                    label: "Ocupada",
                                                    tone: "amber"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendItem, {
                                                    label: "Reservada",
                                                    tone: "sky"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendItem, {
                                                    label: "Bloqueada",
                                                    tone: "rose"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/owner/tables/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/owner/tables/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/owner/tables/page.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/owner/tables/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/owner/tables/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/owner/tables/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function TableTile({ table }) {
    const statusClasses = {
        Livre: "bg-emerald-500/14 text-emerald-300 border-emerald-400/20",
        Ocupada: "bg-amber-500/14 text-amber-200 border-amber-400/20",
        Reservada: "bg-sky-500/14 text-sky-200 border-sky-400/20",
        Bloqueada: "bg-rose-500/14 text-rose-200 border-rose-400/20"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: "/owner/tabs",
        className: `rounded-[24px] border p-4 text-center ${statusClasses[table.status]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display text-4xl",
                children: table.number
            }, void 0, false, {
                fileName: "[project]/src/app/owner/tables/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs uppercase tracking-[0.2em]",
                children: table.status
            }, void 0, false, {
                fileName: "[project]/src/app/owner/tables/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-sm",
                children: [
                    "Capacidade: ",
                    table.seats
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/owner/tables/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm",
                children: [
                    "Pedidos: ",
                    table.orders
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/owner/tables/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            table.total ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 font-semibold",
                children: table.total
            }, void 0, false, {
                fileName: "[project]/src/app/owner/tables/page.tsx",
                lineNumber: 123,
                columnNumber: 22
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/owner/tables/page.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
function AlertCard({ alert }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-[24px] border border-white/8 bg-white/4 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold",
                                children: alert.table
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/tables/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-[var(--muted)]",
                                children: alert.customer
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/tables/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-[var(--muted)]",
                                children: alert.item
                            }, void 0, false, {
                                fileName: "[project]/src/app/owner/tables/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/owner/tables/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-fit rounded-full bg-amber-500/14 px-3 py-1 text-xs text-amber-200",
                        children: alert.total
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/tables/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/owner/tables/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-col gap-3 sm:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/owner/tabs",
                        className: "rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-4 py-2 text-center text-sm font-semibold text-white",
                        children: "Aceitar pedido"
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/tables/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "rounded-2xl border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-[var(--text)]",
                        children: "Recusar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/owner/tables/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/owner/tables/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/owner/tables/page.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
function LegendItem({ label, tone }) {
    const classes = {
        emerald: "bg-emerald-500/14 text-emerald-300",
        amber: "bg-amber-500/14 text-amber-200",
        sky: "bg-sky-500/14 text-sky-200",
        rose: "bg-rose-500/14 text-rose-200"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-[22px] px-4 py-3 text-sm font-medium ${classes[tone]}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/src/app/owner/tables/page.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/owner/tables/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/owner/tables/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d56cfe8e._.js.map