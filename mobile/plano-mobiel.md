# Prompt de execucao para `99/start/mobile`

## Objetivo
Analise o projeto mobile em Expo, prepare a base para usar `tailwindcss` com `nativewind` e implemente as primeiras telas do produto com visual premium, responsivo e codigo bem organizado.

## Diretrizes obrigatorias
- Configurar Expo para funcionar com `tailwindcss` + `nativewind`.
- Manter componentes separados por dominio.
- Criar estrutura com `cta/components`, `login/components`, `cadastro/components` e `index.tsx` em cada diretorio principal.
- Preservar um padrao visual consistente entre gradientes, cards, formularios e botoes.
- Usar nomenclatura clara, componentes reutilizaveis e tipagem em TypeScript.
- Usar IA como apoio de implementacao, refinamento visual e aceleracao de iteracoes.
- Manter este `plano-mobiel.md` sempre atualizado conforme cada etapa for concluida ou ampliada.
- Priorizar responsividade real para mobile, evitando cortes, textos estourados e espacamentos rigidos em telas pequenas, medias e grandes.

## Processo de execucao
### Fase 1. Base visual e navegacao
- Estruturar features, componentes e fluxo entre telas.
- Garantir responsividade, navegacao local e consistencia visual.
- Implementar estados mockados para validar a experiencia antes da API.

### Fase 2. Formularios, mascaras e validacoes
- Aplicar mascaras em campos sensiveis.
- Implementar validacoes por campo e por etapa.
- Padronizar feedback visual com alertas, erros e estados de sucesso.

### Fase 3. Fluxos operacionais
- Implementar dashboard, configuracoes, comandas, mesas e modais.
- Garantir que cada fluxo funcione primeiro com dados locais controlados.
- Preparar cada tela para receber dados reais sem refatoracao estrutural grande.

### Fase 4. Integracao com API
- Mapear contratos esperados entre mobile e `../api`.
- Substituir mocks por chamadas reais por modulo.
- Tratar carregamento, erro, vazio, sucesso e atualizacao de dados.
- Validar autenticacao, onboarding, operacao e fechamento de pagamento ponta a ponta.

## Padrao por feature
- Cada feature deve ter `index.tsx` e pasta `components`.
- Sempre que houver formulario, incluir mascara, validacao e estado de erro.
- Sempre que houver acao critica, prever estado de loading, sucesso e falha.
- Sempre que houver lista operacional, prever estado vazio, carregando e dados reais.
- Sempre que houver integracao futura com API, deixar claro no plano quais dados entram e quais acoes saem.

## Preparacao para API
### Objetivo da proxima etapa
- Preparar o mobile para consumir a API do projeto em `../api`.
- Deixar claro quais telas dependem de autenticacao, cadastro, configuracoes, comandas, mesas e pagamentos.

### Modulos de API esperados
- Autenticacao: login, sessao atual e logout.
- Cadastro: criacao de estabelecimento e responsavel.
- Configuracoes: leitura e atualizacao dos dados da loja.
- Dashboard: resumo operacional, metricas e atalhos.
- Comandas: lista, detalhe, atualizacao de status e fechamento.
- Mesas: mapa de ocupacao, pedidos pendentes e acoes operacionais.
- Pagamentos: cartao, dinheiro, PIX, troco e confirmacao de fechamento.

### Contratos que o mobile precisa deixar prontos
- Tipos de entrada e saida por modulo.
- Estrutura de erros por campo e erros gerais de negocio.
- Estados de autenticacao e permissao por rota.
- Identificadores principais: `userId`, `storeId`, `orderId`, `tableId`, `paymentId`.
- Padrao de datas, moeda, status e metodos de pagamento.

### Estrutura recomendada para a integracao
- Criar futuramente em `mobile/src/services` a camada de API.
- Criar futuramente em `mobile/src/types` os contratos compartilhados do app.
- Centralizar ambiente e URL base em variaveis de ambiente.
- Evitar acoplar componentes visuais diretamente a `fetch`.

## Itens para executar
### 1. Preparacao da base
- Revisar o projeto Expo atual.
- Configurar `tailwindcss`, `nativewind`, `babel`, `metro` e arquivos auxiliares.
- Criar estrutura inicial de `src/features` e `src/shared`.

### 2. Tela Start
- A tela start deve seguir as referencias em `preview/01-cta`.
- Implementar hero principal com titulo forte, texto de apoio e dois CTAs.
- Implementar cards de beneficios.
- Implementar bloco "como funciona" com os tres passos.
- Implementar bloco de acessos disponiveis.

### 3. Tela de Login
- A tela de login deve seguir a referencia em `preview/01-cta/3-login.png`.
- Implementar cabecalho com retorno para a tela inicial.
- Implementar formulario com e-mail e senha.
- Implementar CTA principal para entrar no painel.
- Implementar CTA secundario para levar ao cadastro.
- Preparar a tela para consumir autenticacao real da API depois dos testes locais.

### 4. Tela de Cadastro
- A tela de cadastro deve seguir as referencias em `preview/02-cadastro`.
- Implementar cabecalho com navegacao de volta, titulo e descricao.
- Implementar progresso em etapas.
- Implementar fluxo de 3 etapas:
  - Estabelecimento
  - Endereco
  - Seguranca
- Implementar formularios, botoes de navegacao e estado visual das etapas.
- Na etapa de seguranca, exibir checklist de forca da senha e barra de progresso.
- Preparar o fluxo para envio futuro do payload de cadastro para a API.

### 5. Tela de Sucesso
- A tela de sucesso deve seguir as referencias em `preview/03-show`.
- Exibir confirmacao de cadastro concluido com resumo visual do estabelecimento.
- Exibir cards curtos com nome do responsavel, cidade e acesso protegido.
- Implementar CTA principal para ir ao dashboard.
- Implementar CTA secundario para voltar ao login.

### 6. Tela de Dashboard
- O dashboard deve seguir as referencias em `preview/04-dashboard`.
- Exibir cabecalho com contexto do estabelecimento e menu.
- Exibir resumo operacional do dia com cards de metricas.
- Exibir atalhos principais para configuracoes, comandas e mesas.
- Preservar o padrao visual premium com responsividade real para mobile.
- Preparar o painel para receber metricas reais da API.

### 7. Tela de Configuracoes
- A tela de configuracoes deve seguir as referencias em `preview/05-config`.
- Exibir navegação superior por áreas.
- Exibir resumo da configuracao com progresso e etapas por tema.
- Implementar a etapa "Dados da loja" com formulario validado.
- Aplicar mascaras em campos como `cnpj`, `telefone` e identificadores de recebimento quando fizer sentido.
- Conectar a entrada da tela pelo dashboard.
- Preparar a leitura e atualizacao dos dados da loja via API.

### 8. Tela de Comandas
- A tela de comandas deve seguir as referencias em `preview/06-comandas`.
- Exibir cabecalho com retorno ao dashboard e contexto da area.
- Exibir fila operacional com cards de comandas abertas, fechamento e pagamento.
- Exibir valor total, itens resumidos e status por comanda.
- Exibir a visualizacao de detalhe da comanda com itens, total a receber e formas de pagamento.
- Implementar acoes principais como abrir detalhe, atualizar status e marcar pagamento.
- Preparar a lista e o detalhe para leitura e mutacao via API.

### 9. Tela de Mesas
- A tela de mesas deve seguir as referencias em `preview/07-mesas`.
- Exibir mapa de mesas com ocupacao e status visual por cor.
- Exibir capacidade, pedidos e total por mesa quando aplicavel.
- Exibir lista de pedidos pendentes com acoes de aceitar ou recusar.
- Exibir regra visual para os estados das mesas como `livre`, `ocupada`, `reservada` e `bloqueada`.
- Conectar a entrada das telas de mesas e comandas pelo dashboard.
- Preparar o mapa para sincronizar status e pedidos em tempo real ou polling.

### 10. Modais de Pagamento
- Os modais de pagamento devem seguir as referencias em `preview/08-pag`.
- Abrir a partir do detalhe da comanda quando o usuario selecionar a forma de pagamento.
- Implementar modal de cartao com visual premium, tipo `credito` e `debito`, mascara de numero do cartao, validade e `cvv`.
- Implementar modal de dinheiro com troco inteligente, calculo de troco e selecao da forma de devolucao.
- Quando o troco for devolvido por PIX, exibir campo com validacao e mascara adequada para a chave informada.
- Implementar modal de PIX com QR Code, botao para copiar codigo e CTA de confirmacao de fechamento.
- Garantir modais mobile-first, reutilizaveis e consistentes com a linguagem visual do app.
- Preparar os modais para confirmar pagamento e fechamento via API.

## Ordem recomendada de implementacao restante
1. Implementar `comandas` com dados mockados e rotas locais.
2. Implementar modais de pagamento acoplados ao detalhe da comanda.
3. Implementar `mesas` com mapa e pedidos pendentes.
4. Revisar estados vazios, loading e erro nas telas operacionais.
5. Iniciar integracao com `../api` modulo por modulo.

## Checklist para iniciar a API
- Definir URL base e ambientes de desenvolvimento.
- Mapear endpoints existentes em `../api`.
- Confirmar formato de autenticacao e persistencia de sessao.
- Confirmar contratos de `comandas`, `mesas`, `dashboard` e `pagamentos`.
- Definir resposta padrao para erros de validacao e negocio.
- Alinhar nomes de status, enums e identificadores entre mobile e API.

## Criterios de aceite
- Projeto inicia com Expo usando `tailwindcss`.
- Tela `start` implementada com layout fiel ao preview.
- Tela `login` implementada com layout fiel ao preview.
- Tela `cadastro` implementada com fluxo visual de etapas.
- Tela `show` implementada com resumo de sucesso e CTA para o painel.
- Tela `dashboard` implementada com resumo operacional e atalhos.
- Tela `config` implementada com etapas e formulario validado.
- Tela `comandas` implementada com fila operacional e detalhe de pagamento.
- Tela `mesas` implementada com mapa de ocupacao e pedidos pendentes.
- Modais de pagamento implementados para cartao, dinheiro e PIX.
- Codigo organizado e pronto para expandir com as proximas telas do produto.

## Status atual
- Base Expo com `tailwindcss` e `nativewind` configurada.
- `babel-preset-expo` instalado para compatibilidade do bundler com a configuracao atual.
- `nativewind/babel` ajustado como preset para evitar erro de configuracao do Babel no bundler web.
- Camada responsiva compartilhada adicionada para largura de conteudo, tipografia e espacos em diferentes telas mobile.
- Mascaras e validacoes compartilhadas adicionadas para `cnpj`, `telefone`, `email`, obrigatoriedade e senha forte.
- Componente visual de alerta adicionado para feedback de erro, sucesso e aviso em formularios.
- Credenciais padrao de teste movidas para `.env` no login para acelerar homologacao local.
- Tela `start` implementada.
- Tela `login` implementada.
- Fluxo `start -> login -> cadastro` conectado.
- Tela `cadastro` implementada e conectada a tela de sucesso.
- Tela `show` implementada como conclusao do onboarding.
- Tela `dashboard` implementada como painel principal inicial.
- Fluxos `cadastro -> show -> dashboard` e `login -> dashboard` conectados.
- Tela `config` implementada com mascara, validacao e estrutura por etapas.
- Fluxo `dashboard -> config` conectado.
- Tela `comandas` implementada com lista operacional, detalhe da comanda e abertura de pagamento.
- Modais de pagamento implementados para `cartao`, `dinheiro` e `PIX`.
- Mascaras adicionadas para numero do cartao, validade, `cvv` e valor recebido em dinheiro.
- Fluxo `dashboard -> comandas` conectado.
- `07-mesas` analisado e pronto para implementacao como mapa de ocupacao e gestao de pedidos.
- Proxima etapa pratica apos testes: implementar `mesas` e conectar `comandas -> mesas`.
- Proxima grande etapa definida: preparar a integracao do mobile com `../api` apos concluir os fluxos operacionais restantes.
