# Prompt de execucao para `99/start/mobile` area administrativa

## Objetivo
Criar um painel admin mobile no mesmo tema visual do app principal para acompanhar indicadores globais da operacao e administrar estabelecimentos cadastrados.

## Diretrizes obrigatorias
- Manter o mesmo padrao visual premium do app mobile atual.
- Priorizar mobile-first, responsividade real e leitura rapida dos indicadores.
- Separar a feature em `admin/components` com `index.tsx` proprio.
- Deixar o fluxo preparado para futura integracao com a API em `../api`.
- Atualizar este plano sempre que uma nova etapa admin for concluida ou ampliada.

## Processo de execucao
### Fase 1. Painel admin inicial
- Criar rota exclusiva para o perfil master.
- Exibir resumo global da plataforma.
- Exibir metricas principais do painel administrativo.
- Exibir menu mobile com atalhos de gestao e saida de sessao.

### Fase 2. Gestao de estabelecimentos
- Exibir lista de estabelecimentos cadastrados.
- Exibir status do estabelecimento, volume de produtos e pedidos.
- Exibir detalhe administrativo ao selecionar um estabelecimento.
- Exibir data de cadastro, telefone, cidade e estado.
- Adicionar busca por nome, cidade e telefone.
- Adicionar filtros por status do estabelecimento.
- Preparar entrada futura para filtros e detalhe completo por estabelecimento.

### Fase 3. Integracao com API
- Substituir dados mockados por dados reais do backend.
- Conectar autenticacao master.
- Conectar metricas administrativas e listagem de estabelecimentos.

## Modulos de API esperados
- Admin auth: login master, sessao e logout.
- Admin dashboard: totais globais e indicadores.
- Admin stores: listagem, status, filtros e detalhes.
- Admin analytics: total de produtos, total de pedidos e distribuicao por estabelecimento.

## Itens para executar
### 1. Login master
- Quando o usuario entrar com `master@gmail.com` e `123123`, deve navegar para o painel admin.
- As credenciais devem ficar no `.env`.
- O fluxo deve continuar suportando o login operacional atual.

### 2. Painel admin
- Exibir totais globais:
  - estabelecimentos cadastrados
  - produtos cadastrados
  - pedidos realizados
- clientes usando a plataforma
- Exibir resumo complementar com estabelecimentos ativos e receita total mockada.
- Exibir cards de leitura rapida para acompanhamento executivo.
- Exibir menu mobile com acao clara para sair e entrar com outro usuario.

### 3. Lista de estabelecimentos
- Exibir lista de estabelecimentos cadastrados.
- Mostrar nome, cidade, status, quantidade de produtos e pedidos.
- Mostrar tambem clientes, telefone e data de cadastro.
- Exibir um resumo do estabelecimento selecionado logo abaixo da lista.
- Permitir busca textual e filtro por status.
- Preparar a listagem para futura pagina de detalhe administrativo.

### 4. Detalhe administrativo do estabelecimento
- Criar tela dedicada para o estabelecimento selecionado.
- Exibir dados cadastrais e indicadores do estabelecimento.
- Exibir botao para voltar ao admin e botao para sair e trocar de usuario.

## Criterios de aceite
- `master@gmail.com` navega para o painel admin.
- O painel admin segue o mesmo padrao visual do app.
- Os totais globais ficam visiveis logo ao entrar.
- O menu mobile permite sair para trocar de usuario.
- A lista de estabelecimentos fica pronta para futura integracao com API.
- O detalhe do estabelecimento selecionado exibe informacoes gerenciais relevantes.
- Busca e filtros ajudam a localizar rapidamente o estabelecimento desejado.
- O detalhe completo do estabelecimento funciona em tela propria.

## Status atual
- Plano admin criado.
- Credenciais master definidas para ambiente local.
- Painel admin inicial implementado no mesmo tema visual do app.
- Login master conectado ao fluxo principal do mobile.
- Resumo global com clientes incluidos.
- Menu mobile admin com saida de sessao implementado.
- Lista inicial de estabelecimentos clicavel com resumo gerencial do item selecionado.
- Busca e filtros por status implementados na listagem admin.
- Tela de detalhe administrativo completa implementada por estabelecimento.
