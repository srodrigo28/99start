# Projeto: 99Start
Objetivo: evoluir a aplicacao para uso real em celular, com fluxo comercial claro, painel mobile e base pronta para administracao geral.

## Fase 1 - Base PWA e mobile
- Manifesto web configurado
- Icones gerados para instalacao
- Service worker registrado
- Banner de instalacao para Android
- Instrucao de instalacao manual para iPhone
- Navbar mobile com menu drawer na area logada

## Fase 2 - Estrutura da area logada
- Dashboard mobile-first com navegacao por drawer
- Padrao data-driven para tipos e mocks de interface
- Separacao entre tipagem e dados para futura integracao com API
- Evoluir mesas, comandas e onboarding para o mesmo padrao de navegacao

## Fase 3 - Configuracoes da loja
- Area Configuracoes no menu principal
- Etapa 1: dados da loja
- Campos: nome da loja, CNPJ, telefone, nome do responsavel, email e chave PIX
- Etapa 2: endereco e localizacao
- Campos: CEP, rua, numero, complemento, bairro, cidade, UF e localizacao
- Etapa 3: identidade da loja
- Campos: upload de logo, slug publico e validacoes visuais
- Etapa 4: categorias do negocio
- Definir categorias do estabelecimento para segmentacao do cadastro e filtros futuros
- Rascunho local salvo no navegador
- Recuperacao automatica do rascunho ao reabrir a rota

## Fase 4 - Admin geral
- Criada a rota /admin como base da administracao geral
- Navbar propria para visao administrativa
- Visao de multiplos estabelecimentos
- Cards de metricas globais
- Fila de pendencias administrativas
- Lista inicial de lojas com status, categoria, cidade e estados
- Contadores total de produtos cadastrados em geral pois preciso ter uma não de total de produtos geral cadastrados.
- Filtro por estabelecimentos e produtos cadadastrados
- Filtro por estabelecimentos por pedidos realizados
- Preparar contratos de dados para consumo real de API

## Proxima evolucao do admin
- CRUD de estabelecimentos
- Aprovar ou reprovar cadastros
- Gerenciar categorias globais      
- Moderar logos e slugs publicos
- Acompanhar status de onboarding por loja
- Integrar dashboard admin com API real

## Checklist de homologacao
- Abrir pelo navegador no celular
- Receber opcao de instalar
- Instalar sem erro
- Abrir em tela cheia
- Navegar entre dashboard, mesas, comandas, configuracoes e admin
- Validar menu drawer no mobile
- Validar recuperacao de rascunho em configuracoes
- Validar performance e estabilidade

## WPA Mobiel

Com o Next.js, você pode identificar se o usuário está acessando via celular e disparar aquele famoso botão ou pop-up de "Adicionar à Tela Inicial", fazendo o seu projeto se comportar como um aplicativo nativo instalado, abrindo em tela cheia sem a barra de endereços do navegador.

Aqui está o raio-x de como implementar isso na prática unindo Next.js e React:

### 1. Transformando o Next.js em PWA

Para o navegador do celular entender que o seu projeto "pode ser instalado", você precisa de duas coisas: um arquivo manifest.json (que diz o nome do app, as cores e os ícones) e um Service Worker (um script rodando no fundo).

### 2. A forma mais rápida e padrão de resolver isso no Next.js é utilizando o pacote next-pwa (ou @ducanh2912/next-pwa se estiver usando o App Router mais recente):
```
npm install @ducanh2912/next-pwa
```
Após a instalação, você envolve as configurações do seu next.config.js com esse plugin. Ele vai gerar automaticamente o Service Worker e deixar a sua aplicação pronta para instalação.

### 3. Detectando o Celular e Capturando o Evento
Os navegadores modernos (como o Chrome no Android) disparam um evento secreto chamado beforeinstallprompt quando percebem que o site é um PWA. Você precisa capturar esse evento no lado do cliente (Client Component) com um hook do React e usá-lo para renderizar o seu próprio botão estilizado (usando Tailwind CSS, por exemplo).