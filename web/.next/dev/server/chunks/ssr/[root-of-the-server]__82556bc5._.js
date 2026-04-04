module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/owner/owner-access-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OwnerAccessForm",
    ()=>OwnerAccessForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const initialRegisterForm = {
    establishmentName: "",
    cnpj: "",
    ownerName: "",
    email: "",
    phone: "",
    cep: "",
    password: "",
    confirmPassword: ""
};
const initialLoginForm = {
    email: "",
    password: ""
};
const initialAddressForm = {
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: ""
};
const registerSteps = [
    {
        id: 1,
        emoji: "🏪",
        title: "Estabelecimento",
        text: "Dados principais do seu negócio."
    },
    {
        id: 2,
        emoji: "📍",
        title: "Endereço",
        text: "Localização para cadastro e operação."
    },
    {
        id: 3,
        emoji: "🔐",
        title: "Segurança",
        text: "Crie uma senha forte para acessar."
    }
];
function OwnerAccessForm({ mode }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [registerForm, setRegisterForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialRegisterForm);
    const [loginForm, setLoginForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialLoginForm);
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialAddressForm);
    const [registerErrors, setRegisterErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loginErrors, setLoginErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitMessage, setSubmitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [addressLookupMessage, setAddressLookupMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFetchingCep, setIsFetchingCep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const registerProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (currentStep === 4) return 100;
        return Math.round(currentStep / 3 * 100);
    }, [
        currentStep
    ]);
    const passwordStrength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const password = registerForm.password;
        let score = 0;
        if (password.length >= 8) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[a-z]/.test(password)) score += 1;
        if (/\d/.test(password)) score += 1;
        if (/[^A-Za-z0-9]/.test(password)) score += 1;
        if (score <= 2) {
            return {
                label: "Fraca",
                tone: "bg-rose-500",
                text: "Use mais caracteres, números e símbolos."
            };
        }
        if (score <= 4) {
            return {
                label: "Boa",
                tone: "bg-amber-400",
                text: "Está no caminho certo. Dá para reforçar mais."
            };
        }
        return {
            label: "Forte",
            tone: "bg-emerald-400",
            text: "Ótima senha para proteger seu acesso."
        };
    }, [
        registerForm.password
    ]);
    const updateRegisterField = (field, value)=>{
        setRegisterForm((prev)=>({
                ...prev,
                [field]: value
            }));
        setRegisterErrors((prev)=>({
                ...prev,
                [field]: undefined
            }));
        setSubmitMessage("");
    };
    const updateLoginField = (field, value)=>{
        setLoginForm((prev)=>({
                ...prev,
                [field]: value
            }));
        setLoginErrors((prev)=>({
                ...prev,
                [field]: undefined
            }));
        setSubmitMessage("");
    };
    const updateAddressField = (field, value)=>{
        setAddress((prev)=>({
                ...prev,
                [field]: value
            }));
        setRegisterErrors((prev)=>({
                ...prev,
                [field]: undefined
            }));
        setSubmitMessage("");
    };
    const handlePhoneChange = (value)=>{
        let digits = value.replace(/\D/g, "").slice(0, 11);
        if (digits.length > 0) {
            digits = digits.replace(/^(\d{2})(\d)/g, "($1) $2");
            digits = digits.replace(/(\d)(\d{4})$/, "$1-$2");
        }
        updateRegisterField("phone", digits);
    };
    const handleCnpjChange = (value)=>{
        const digits = value.replace(/\D/g, "").slice(0, 14);
        let formatted = digits;
        if (digits.length > 2) formatted = formatted.replace(/^(\d{2})(\d)/, "$1.$2");
        if (digits.length > 5) formatted = formatted.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        if (digits.length > 8) formatted = formatted.replace(/\.(\d{3})(\d)/, ".$1/$2");
        if (digits.length > 12) formatted = formatted.replace(/(\d{4})(\d)/, "$1-$2");
        updateRegisterField("cnpj", formatted);
    };
    const handleCepChange = async (value)=>{
        const digits = value.replace(/\D/g, "").slice(0, 8);
        const formatted = digits.length > 5 ? digits.replace(/^(\d{5})(\d)/, "$1-$2") : digits;
        updateRegisterField("cep", formatted);
        setAddressLookupMessage("");
        if (digits.length !== 8) return;
        setIsFetchingCep(true);
        try {
            const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
            const data = await response.json();
            if (data.erro) {
                setAddressLookupMessage("CEP não encontrado. Preencha o endereço manualmente.");
                return;
            }
            setAddress((prev)=>({
                    ...prev,
                    logradouro: data.logradouro || prev.logradouro,
                    bairro: data.bairro || prev.bairro,
                    cidade: data.localidade || prev.cidade,
                    uf: data.uf || prev.uf
                }));
            setAddressLookupMessage("Endereço localizado. Complete número e complemento, se necessário.");
        } catch  {
            setAddressLookupMessage("Não foi possível consultar o CEP agora. Preencha o endereço manualmente.");
        } finally{
            setIsFetchingCep(false);
        }
    };
    const validateRegisterStep = (step)=>{
        const errors = {};
        if (step === 1) {
            if (!registerForm.establishmentName.trim()) {
                errors.establishmentName = "Informe o nome do estabelecimento.";
            }
            if (registerForm.cnpj.replace(/\D/g, "").length !== 14) {
                errors.cnpj = "Digite um CNPJ válido com 14 números.";
            }
            if (!registerForm.ownerName.trim()) {
                errors.ownerName = "Informe o nome do responsável.";
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerForm.email)) {
                errors.email = "Digite um e-mail válido.";
            }
            if (registerForm.phone.replace(/\D/g, "").length < 10) {
                errors.phone = "Informe um telefone com DDD.";
            }
        }
        if (step === 2) {
            if (registerForm.cep.replace(/\D/g, "").length !== 8) {
                errors.cep = "Digite um CEP válido.";
            }
            if (!address.logradouro.trim()) errors.logradouro = "Informe o logradouro.";
            if (!address.numero.trim()) errors.numero = "Informe o número.";
            if (!address.bairro.trim()) errors.bairro = "Informe o bairro.";
            if (!address.cidade.trim()) errors.cidade = "Informe a cidade.";
            if (address.uf.trim().length !== 2) errors.uf = "Use a UF com 2 letras.";
        }
        if (step === 3) {
            if (registerForm.password.length < 8) {
                errors.password = "A senha precisa ter pelo menos 8 caracteres.";
            }
            if (passwordStrength.label === "Fraca") {
                errors.password = "Crie uma senha mais forte para continuar.";
            }
            if (registerForm.confirmPassword !== registerForm.password) {
                errors.confirmPassword = "As senhas precisam ser iguais.";
            }
        }
        setRegisterErrors((prev)=>({
                ...prev,
                ...errors
            }));
        return Object.keys(errors).length === 0;
    };
    const validateLogin = ()=>{
        const errors = {};
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) {
            errors.email = "Digite um e-mail válido.";
        }
        if (loginForm.password.length < 8) {
            errors.password = "A senha precisa ter pelo menos 8 caracteres.";
        }
        setLoginErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const goToNextStep = ()=>{
        if (!validateRegisterStep(currentStep)) {
            setSubmitMessage("Revise os campos destacados para avançar.");
            return;
        }
        setSubmitMessage("");
        if (currentStep < 4) {
            setCurrentStep((prev)=>prev + 1);
        }
    };
    const goToPreviousStep = ()=>{
        setSubmitMessage("");
        if (currentStep > 1 && currentStep < 4) {
            setCurrentStep((prev)=>prev - 1);
        }
    };
    const finishRegistration = ()=>{
        router.push("/owner/dashboard");
    };
    const handleLoginSubmit = (event)=>{
        event.preventDefault();
        if (!validateLogin()) {
            setSubmitMessage("Preencha e-mail e senha corretamente para entrar.");
            return;
        }
        setSubmitMessage("Acesso validado. Entrando no painel do proprietário...");
        router.push("/owner/dashboard");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,26,37,0.96),rgba(10,13,20,0.98))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.48)] sm:p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-[0.28em] text-[var(--gold)]",
                                children: mode === "register" ? "cadastro em etapas" : "acesso do proprietário"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-[var(--muted)]",
                                children: mode === "register" ? currentStep === 4 ? "cadastro concluído com sucesso" : "preencha uma etapa por vez para avançar sem rolagem longa" : "entre para acessar produtos, campanhas, mesas e comandas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner/owner-access-form.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-[var(--muted)]",
                        children: mode === "register" ? `${registerProgress}% concluído` : "acesso rápido"
                    }, void 0, false, {
                        fileName: "[project]/src/components/owner/owner-access-form.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[28px] border border-white/8 bg-[var(--panel)] p-5 sm:p-6",
                children: mode === "register" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-3",
                            children: registerSteps.map((step)=>{
                                const isActive = currentStep === step.id;
                                const isDone = currentStep > step.id || currentStep === 4;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `rounded-[24px] border px-4 py-4 transition-all duration-300 ${isActive ? "border-[var(--gold)] bg-white/8 shadow-[0_12px_30px_rgba(245,194,85,0.12)]" : isDone ? "border-emerald-400/30 bg-emerald-500/8" : "border-white/8 bg-white/4"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl",
                                                    children: isDone ? "✅" : step.emoji
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs uppercase tracking-[0.22em] text-[var(--muted)]",
                                                            children: [
                                                                "Etapa ",
                                                                step.id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-display text-lg text-white",
                                                            children: step.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 314,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-sm leading-6 text-[var(--muted)]",
                                            children: step.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 325,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, step.id, true, {
                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                    lineNumber: 304,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 transition-all duration-300",
                            children: [
                                currentStep === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-5 animate-[fadeIn_.35s_ease]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIntro, {
                                            emoji: "🏪",
                                            mobileTitle: "Dados do local",
                                            title: "Informações do estabelecimento",
                                            mobileText: "Preencha os dados principais.",
                                            text: "Vamos começar com os dados principais do seu negócio e da pessoa responsável."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 334,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                    label: "Nome do estabelecimento",
                                                    value: registerForm.establishmentName,
                                                    onChange: (event)=>updateRegisterField("establishmentName", event.target.value),
                                                    placeholder: "Ex: Restaurante Sabor da Casa",
                                                    hint: "Digite o nome comercial que será exibido para seus clientes.",
                                                    error: registerErrors.establishmentName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                    label: "CNPJ",
                                                    value: registerForm.cnpj,
                                                    onChange: (event)=>handleCnpjChange(event.target.value),
                                                    placeholder: "00.000.000/0000-00",
                                                    hint: "Informe o CNPJ do estabelecimento com 14 números.",
                                                    error: registerErrors.cnpj
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 342,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                    label: "Nome do responsável",
                                                    value: registerForm.ownerName,
                                                    onChange: (event)=>updateRegisterField("ownerName", event.target.value),
                                                    placeholder: "Ex: Mateus Vinicius",
                                                    error: registerErrors.ownerName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                    label: "E-mail",
                                                    type: "email",
                                                    value: registerForm.email,
                                                    onChange: (event)=>updateRegisterField("email", event.target.value),
                                                    placeholder: "voce@empresa.com",
                                                    error: registerErrors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 361,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                            label: "Telefone",
                                            value: registerForm.phone,
                                            onChange: (event)=>handlePhoneChange(event.target.value),
                                            placeholder: "(00) 00000-0000",
                                            hint: "Use DDD e o principal número de contato.",
                                            error: registerErrors.phone
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 379,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                    lineNumber: 333,
                                    columnNumber: 17
                                }, this) : null,
                                currentStep === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-5 animate-[fadeIn_.35s_ease]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIntro, {
                                            emoji: "📍",
                                            mobileTitle: "Endereço",
                                            title: "Endereço do estabelecimento",
                                            mobileText: "Informe onde seu negócio funciona.",
                                            text: "Agora vamos registrar a localização do seu negócio para manter tudo organizado."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 392,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                    label: "CEP",
                                                    value: registerForm.cep,
                                                    onChange: (event)=>void handleCepChange(event.target.value),
                                                    placeholder: "00000-000",
                                                    hint: isFetchingCep ? "Buscando endereço..." : "Ao informar o CEP, tentamos preencher o endereço automaticamente.",
                                                    error: registerErrors.cep
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedFeedback, {
                                                    tone: addressLookupMessage ? "info" : "neutral",
                                                    emoji: addressLookupMessage ? "✨" : "🧭",
                                                    text: addressLookupMessage || "Preencha os campos abaixo para continuar para a próxima etapa."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 400,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sm:col-span-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                        label: "Rua / Logradouro",
                                                        value: address.logradouro,
                                                        onChange: (event)=>updateAddressField("logradouro", event.target.value),
                                                        error: registerErrors.logradouro
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                    label: "Número",
                                                    value: address.numero,
                                                    onChange: (event)=>updateAddressField("numero", event.target.value),
                                                    error: registerErrors.numero
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                    label: "Complemento",
                                                    value: address.complemento,
                                                    onChange: (event)=>updateAddressField("complemento", event.target.value),
                                                    hint: "Opcional"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                    label: "Bairro",
                                                    value: address.bairro,
                                                    onChange: (event)=>updateAddressField("bairro", event.target.value),
                                                    error: registerErrors.bairro
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                    label: "Cidade",
                                                    value: address.cidade,
                                                    onChange: (event)=>updateAddressField("cidade", event.target.value),
                                                    error: registerErrors.cidade
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                    label: "UF",
                                                    value: address.uf,
                                                    onChange: (event)=>updateAddressField("uf", event.target.value.toUpperCase().slice(0, 2)),
                                                    placeholder: "SP",
                                                    error: registerErrors.uf
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 416,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                    lineNumber: 391,
                                    columnNumber: 17
                                }, this) : null,
                                currentStep === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-5 animate-[fadeIn_.35s_ease]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIntro, {
                                            emoji: "🔐",
                                            mobileTitle: "Criar senha",
                                            title: "Crie sua senha",
                                            mobileText: "Defina uma senha segura.",
                                            text: "Finalize seu cadastro com uma senha segura para proteger o acesso ao painel."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 462,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                    label: "Senha",
                                                    type: "password",
                                                    value: registerForm.password,
                                                    onChange: (event)=>updateRegisterField("password", event.target.value),
                                                    placeholder: "Mínimo de 8 caracteres",
                                                    hint: "Use letras maiúsculas, minúsculas, números e símbolos.",
                                                    error: registerErrors.password
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                                                    label: "Confirmar senha",
                                                    type: "password",
                                                    value: registerForm.confirmPassword,
                                                    onChange: (event)=>updateRegisterField("confirmPassword", event.target.value),
                                                    placeholder: "Repita a senha",
                                                    error: registerErrors.confirmPassword
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 470,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-[24px] border border-white/8 bg-white/4 p-4 transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold text-white",
                                                                    children: "Qualidade da senha"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                                    lineNumber: 493,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-xs leading-5 text-[var(--muted)]",
                                                                    children: passwordStrength.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                                    lineNumber: 494,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white",
                                                            children: passwordStrength.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 h-3 overflow-hidden rounded-full bg-white/8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-full rounded-full transition-all duration-500 ${passwordStrength.tone}`,
                                                        style: {
                                                            width: passwordStrength.label === "Fraca" ? "34%" : passwordStrength.label === "Boa" ? "68%" : "100%"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 grid gap-2 sm:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PasswordRule, {
                                                            ok: registerForm.password.length >= 8,
                                                            text: "Pelo menos 8 caracteres"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PasswordRule, {
                                                            ok: /[A-Z]/.test(registerForm.password),
                                                            text: "Uma letra maiúscula"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PasswordRule, {
                                                            ok: /[a-z]/.test(registerForm.password),
                                                            text: "Uma letra minúscula"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PasswordRule, {
                                                            ok: /\d/.test(registerForm.password),
                                                            text: "Um número"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                            lineNumber: 517,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 490,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                    lineNumber: 461,
                                    columnNumber: 17
                                }, this) : null,
                                currentStep === 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-5 text-center animate-[fadeIn_.4s_ease]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[linear-gradient(135deg,#22c55e,#14b8a6)] text-4xl shadow-[0_18px_45px_rgba(20,184,166,0.22)]",
                                            children: "🎉"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 525,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display text-3xl text-white",
                                                    children: "Boas-vindas ao 99Start"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base",
                                                    children: "Seu cadastro foi concluído com sucesso. Agora você já pode acessar o dashboard e começar a organizar seu estabelecimento."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 528,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-3 sm:grid-cols-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedFeedback, {
                                                    tone: "success",
                                                    emoji: "🏪",
                                                    text: registerForm.establishmentName || "Estabelecimento cadastrado"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedFeedback, {
                                                    tone: "success",
                                                    emoji: "📍",
                                                    text: `${address.cidade || "Cidade"}${address.uf ? ` - ${address.uf}` : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedFeedback, {
                                                    tone: "success",
                                                    emoji: "🔐",
                                                    text: "Acesso protegido com senha cadastrada"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 534,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: finishRegistration,
                                            className: "mx-auto block w-full max-w-md rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_35px_rgba(56,109,249,0.24)] transition-transform hover:scale-[1.01]",
                                            children: "Ir para o dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                            lineNumber: 539,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                    lineNumber: 524,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                            lineNumber: 331,
                            columnNumber: 13
                        }, this),
                        submitMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedFeedback, {
                            tone: "error",
                            emoji: "⚠️",
                            text: submitMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                            lineNumber: 551,
                            columnNumber: 15
                        }, this) : null,
                        currentStep < 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 sm:flex-row sm:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: goToPreviousStep,
                                    disabled: currentStep === 1,
                                    className: "rounded-2xl border border-white/10 bg-white/4 px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40",
                                    children: "Voltar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                    lineNumber: 556,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: goToNextStep,
                                    className: "rounded-2xl bg-[linear-gradient(135deg,#386df9,#24c6dc)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(56,109,249,0.22)] transition-transform hover:scale-[1.01]",
                                    children: currentStep === 3 ? "Finalizar cadastro" : "Próximo"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                    lineNumber: 564,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                            lineNumber: 555,
                            columnNumber: 15
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm text-[var(--muted)]",
                            children: [
                                "Já tem conta?",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/owner/login",
                                    className: "font-semibold text-white",
                                    children: "Entrar agora"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                    lineNumber: 576,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                            lineNumber: 574,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                    lineNumber: 298,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "space-y-4",
                    onSubmit: handleLoginSubmit,
                    autoComplete: "off",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                            label: "E-mail",
                            type: "email",
                            value: loginForm.email,
                            onChange: (event)=>updateLoginField("email", event.target.value),
                            placeholder: "voce@empresa.com",
                            error: loginErrors.email
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                            lineNumber: 583,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValidatedInput, {
                            label: "Senha",
                            type: "password",
                            value: loginForm.password,
                            onChange: (event)=>updateLoginField("password", event.target.value),
                            placeholder: "Digite sua senha",
                            hint: "Acesso direto ao painel do proprietário.",
                            error: loginErrors.password
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                            lineNumber: 591,
                            columnNumber: 13
                        }, this),
                        submitMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedFeedback, {
                            tone: "error",
                            emoji: "⚠️",
                            text: submitMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                            lineNumber: 601,
                            columnNumber: 30
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "block w-full rounded-2xl bg-[linear-gradient(135deg,#ff8b36,#ff5f6d)] px-5 py-3 text-center text-sm font-semibold text-white",
                            children: "Entrar no painel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                            lineNumber: 603,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm text-[var(--muted)]",
                            children: [
                                "Ainda não tem conta?",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/owner/register",
                                    className: "font-semibold text-white",
                                    children: "Criar cadastro"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                    lineNumber: 612,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/owner/owner-access-form.tsx",
                            lineNumber: 610,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                    lineNumber: 582,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner/owner-access-form.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
function StepIntro({ emoji, title, text, mobileTitle, mobileText }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-4 rounded-[24px] border border-white/8 bg-white/4 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(255,139,54,0.24),rgba(56,109,249,0.22))] text-2xl",
                children: emoji
            }, void 0, false, {
                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                lineNumber: 638,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-xl leading-tight text-white sm:text-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sm:hidden",
                                children: mobileTitle || title
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                lineNumber: 643,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                lineNumber: 644,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner/owner-access-form.tsx",
                        lineNumber: 642,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm leading-6 text-[var(--muted)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sm:hidden",
                                children: mobileText || text
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                lineNumber: 647,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: text
                            }, void 0, false, {
                                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                                lineNumber: 648,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owner/owner-access-form.tsx",
                        lineNumber: 646,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                lineNumber: 641,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner/owner-access-form.tsx",
        lineNumber: 637,
        columnNumber: 5
    }, this);
}
function AnimatedFeedback({ emoji, text, tone }) {
    const toneClass = {
        info: "border-sky-400/20 bg-sky-500/10 text-sky-100",
        success: "border-emerald-400/20 bg-emerald-500/10 text-emerald-100",
        error: "border-rose-400/20 bg-rose-500/10 text-rose-100",
        neutral: "border-white/10 bg-white/4 text-[var(--muted)]"
    }[tone];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-[22px] border px-4 py-3 transition-all duration-300 animate-[fadeIn_.35s_ease] ${toneClass}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm leading-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mr-2",
                    children: emoji
                }, void 0, false, {
                    fileName: "[project]/src/components/owner/owner-access-form.tsx",
                    lineNumber: 674,
                    columnNumber: 9
                }, this),
                text
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/owner/owner-access-form.tsx",
            lineNumber: 673,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/owner/owner-access-form.tsx",
        lineNumber: 672,
        columnNumber: 5
    }, this);
}
function PasswordRule({ ok, text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-2xl border px-3 py-2 text-sm transition-all duration-300 ${ok ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-100" : "border-white/8 bg-white/4 text-[var(--muted)]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-2",
                children: ok ? "✅" : "•"
            }, void 0, false, {
                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                lineNumber: 684,
                columnNumber: 7
            }, this),
            text
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner/owner-access-form.tsx",
        lineNumber: 683,
        columnNumber: 5
    }, this);
}
function ValidatedInput({ label, value, hint, placeholder, onChange, type = "text", error }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                lineNumber: 709,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                value: value,
                onChange: onChange,
                placeholder: placeholder,
                autoComplete: "off",
                className: `w-full rounded-2xl border px-4 py-3 text-base text-[var(--text)] outline-none transition-all sm:text-sm ${error ? "border-rose-400/70 bg-rose-500/8 focus:border-rose-300 focus:ring-1 focus:ring-rose-300" : "border-white/8 bg-white/5 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]"} placeholder-white/20`
            }, void 0, false, {
                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                lineNumber: 710,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs leading-5 text-rose-300",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                lineNumber: 723,
                columnNumber: 9
            }, this) : hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs leading-5 text-[var(--muted)]",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/owner/owner-access-form.tsx",
                lineNumber: 725,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owner/owner-access-form.tsx",
        lineNumber: 708,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__82556bc5._.js.map