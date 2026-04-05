# Plano Mobile API 99Start

## 1. Objetivo desta fase
- Mapear a integracao entre `mobile` e `api`.
- Priorizar o fluxo de cadastro de estabelecimento e responsavel.
- Deixar `Google Auth` fora do escopo inicial.
- Organizar as etapas para ligar, testar e validar o fluxo ponta a ponta com seguranca.

## 2. Escopo imediato
- Mobile: tela de `cadastro`.
- API: modulos `auth` e `establishments`.
- Testes: validacao de contrato, cadastro real, login real e retorno de sessao.

## 3. O que existe hoje

### 3.1. Mobile
- O app Expo esta funcional com navegacao local em `App.tsx`.
- O fluxo `start -> login -> cadastro -> show -> dashboard` ja existe.
- A base de integracao agora existe em:
  - `mobile/src/services`
  - `mobile/src/types`
- O mobile ja resolve URL principal e fallback por ambiente.
- A tela de cadastro em [mobile/src/features/cadastro/index.tsx](c:/prod/99start/mobile/src/features/cadastro/index.tsx) possui 3 etapas:
  - estabelecimento
  - endereco
  - seguranca
- Na etapa de endereco:
  - o usuario informa o `CEP`
  - o app consulta o CEP e preenche `endereco`, `bairro` e `cidade`
  - o usuario digita manualmente apenas o `complemento`
- O cadastro hoje faz validacao local de:
  - nome do estabelecimento
  - cnpj
  - nome do responsavel
  - email
  - telefone
  - cep
  - endereco
  - complemento
  - bairro
  - cidade
  - senha e confirmacao
- O cadastro agora chama `POST /api/v1/auth/register`.
- O payload final enviado para a API compoe `address` com endereco preenchido pelo CEP + complemento digitado.
- Ao finalizar, o mobile recebe sessao real da API e avanca para a tela de sucesso.
- O login agora chama `POST /api/v1/auth/login`.
- A sessao atual fica em memoria no `App.tsx`.
- Ainda falta persistencia local de sessao e restauracao automatica ao abrir o app.

### 3.2. API
- A API Flask ja possui:
  - `POST /api/v1/auth/register`
  - `POST /api/v1/auth/login`
  - `POST /api/v1/auth/refresh`
  - `POST /api/v1/auth/logout`
  - `GET /api/v1/auth/me`
  - `GET /api/v1/establishments/`
  - `POST /api/v1/establishments/`
- O cadastro principal hoje acontece em `auth/register`.
- O `register` atual:
  - cria `establishment`
  - cria `user`
  - devolve `user`, `establishment`, `access_token` e `refresh_token`
- A API ja possui testes iniciais para `auth` e `establishments`.

## 4. Gaps encontrados no levantamento

### 4.1. Contrato mobile != contrato API
- O mobile usa nomes internos como:
  - `businessName`
  - `address`
  - `neighborhood`
  - `city`
  - `confirmPassword`
- A API espera no `register`:
  - `owner_name`
  - `email`
  - `password`
  - `establishment_name`
  - `cnpj`
  - `phone` opcional
- Hoje endereco, bairro e cidade nao sao persistidos pela API.

### 4.2. Persistencia incompleta para o cadastro real
- Gap resolvido na API:
  - `address`
  - `neighborhood`
  - `city`
- A persistencia do cadastro completo ja esta disponivel no backend.

### 4.3. Mobile ainda esta 100% mockado para auth
- Gap parcialmente resolvido:
  - o login owner ja consome a API
  - o cadastro ja envia payload real
  - a camada `services` ja existe
- O fluxo `master/admin` continua mockado e separado por escopo.

### 4.4. Sessao ainda nao foi conectada no app
- A API ja devolve tokens.
- O mobile ja mantem token, perfil e estabelecimento em memoria.
- Ainda falta armazenamento local para reaproveitar a sessao entre reinicios do app.

## 5. Decisao de escopo para agora
- Manter `Google Auth` para depois.
- Focar primeiro em:
  - cadastro mobile -> API
  - login mobile -> API
  - leitura de sessao basica
- So depois seguir para integracoes de dashboard, config e comandas.

## 6. Etapas marcadas

### Etapa 01. Levantamento e alinhamento
Status: concluida

- Mapear telas do mobile ligadas a auth e cadastro.
- Mapear endpoints reais da API.
- Identificar diferencas de payload, resposta e persistencia.

### Etapa 02. Definir contrato unico de cadastro
Status: concluida

- Fechar payload oficial entre mobile e API.
- Recomendacao inicial do payload:
```json
{
  "owner_name": "Mateus Vinicius",
  "email": "mateus@empresa.com",
  "password": "Senha@123",
  "establishment_name": "Restaurante Sabor da Casa",
  "cnpj": "12.345.678/0001-90",
  "phone": "(62) 99999-1234",
  "address": "Rua X, 120",
  "neighborhood": "Centro",
  "city": "Goiania"
}
```
- Confirmar tambem contrato de resposta para o mobile:
  - `user`
  - `establishment`
  - `access_token`
  - `refresh_token`
- Contrato adotado nesta fase:
  - `owner_name`
  - `email`
  - `password`
  - `establishment_name`
  - `cnpj`
  - `phone`
  - `address`
  - `neighborhood`
  - `city`

### Etapa 03. Ajustar a API para suportar o cadastro completo
Status: concluida

- Adicionar `address`, `neighborhood` e `city` em `establishments`.
- Criar migracao para essas colunas.
- Atualizar:
  - validacao do payload
  - model
  - repository
  - service
  - testes
- Garantir resposta consistente no `register`.
- Validacao concluida com `python -m pytest`: `16 passed`.

### Etapa 04. Criar base de integracao no mobile
Status: concluida

- Criar `mobile/src/services`.
- Criar `mobile/src/types` para contratos da API.
- Centralizar `baseURL` via ambiente.
- Criar cliente HTTP simples para:
  - `register`
  - `login`
  - `me`
- Concluido com:
  - `services/config.ts`
  - `services/api.ts`
  - `services/auth.ts`
  - `types/auth.ts`

### Etapa 05. Ligar a tela de cadastro na API
Status: concluida

- Transformar o payload do formulario para o contrato oficial.
- Enviar `POST /api/v1/auth/register`.
- Tratar estados:
  - loading
  - sucesso
  - erro geral
  - erro por campo
- So navegar para a tela de sucesso se o cadastro real retornar `201`.
- Implementado no mobile.

### Etapa 06. Ligar o login real na API
Status: concluida

- Substituir login mockado por `POST /api/v1/auth/login`.
- Salvar sessao basica no app.
- Direcionar o usuario autenticado para o dashboard.
- Deixar login master/admin separado do fluxo owner se necessario.
- Implementado para o fluxo owner.
- O fluxo master/admin continua local e separado.

### Etapa 07. Validar sessao minima
Status: em andamento

- Consumir `GET /api/v1/auth/me`.
- Confirmar carregamento do usuario e do estabelecimento apos login/cadastro.
- Definir comportamento inicial para token expirado.
- Parcial:
  - sessao real ja chega no login e cadastro
  - sessao ja fica em memoria no app
  - ainda falta `me`, persistencia local, refresh e restauracao

### Etapa 08. Testes integrados do fluxo
Status: pendente

- Testar cadastro feliz ponta a ponta.
- Testar e-mail ja existente.
- Testar CNPJ duplicado.
- Testar senha invalida.
- Testar campos obrigatorios ausentes.
- Testar login apos cadastro.
- Testar leitura de sessao com token valido.

### Etapa 09. Somente depois: Google Auth
Status: adiada

- Nao iniciar antes de estabilizar:
  - cadastro tradicional
  - login tradicional
  - sessao basica

## 7. Ordem pratica recomendada
1. Persistir a sessao localmente no mobile.
2. Validar restauracao com `GET /api/v1/auth/me`.
3. Preparar `refresh` e `logout`.
4. Levar sessao real para dashboard, config e modulos seguintes.

## 8. Critérios de aceite desta primeira fase
- O mobile envia cadastro real para a API.
- A API persiste responsavel e estabelecimento com endereco.
- O mobile recebe tokens no cadastro e no login.
- O app consegue identificar o estabelecimento autenticado.
- O fluxo de sucesso deixa de ser apenas mockado.
- `Google Auth` permanece fora desta entrega.

## 9. Proximo passo que vamos executar
- Avancar na `Etapa 07`:
  - persistir `access_token`, `refresh_token`, `user` e `establishment`
  - consumir `GET /api/v1/auth/me` na abertura do app
  - validar sessao antes de entrar no dashboard
  - depois preparar `refresh` e `logout`
