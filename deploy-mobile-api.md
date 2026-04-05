# Deploy Mobile + API 99Start

## 1. Objetivo
- Explicar como a URL da API funciona no mobile.
- Deixar claro como preparar ambiente local, homologacao e producao.
- Registrar o passo a passo basico para deploy da API e do app Expo.

## 2. Como a URL da API funciona no mobile
- O mobile deve ler a URL da API por variavel de ambiente.
- No Expo, a variavel precisa comecar com `EXPO_PUBLIC_`.
- O nome adotado no projeto e:

```env
EXPO_PUBLIC_API_URL=http://127.0.0.1:5000/api/v1
```

- O projeto agora tambem aceita fallback opcional:

```env
EXPO_PUBLIC_API_FALLBACK_URL=https://api.seudominio.com/api/v1
EXPO_PUBLIC_ENABLE_API_FALLBACK=false
EXPO_PUBLIC_API_HEALTHCHECK_TIMEOUT_MS=2500
```

- A leitura fica centralizada em [config.ts](c:/prod/99start/mobile/src/services/config.ts).
- Os principais recursos expostos pelo app sao:
  - `API_BASE_URL`
  - `API_FALLBACK_URL`
  - `getApiUrl(...)`
  - `resolveApiBaseUrl()`
- Para montar endpoints com seguranca, use `getApiUrl("auth/login")`, `getApiUrl("auth/register")` e similares.
- Para descobrir qual URL responder melhor no momento, use `resolveApiBaseUrl()`.

## 3. Arquivos de ambiente do mobile

### 3.1. Desenvolvimento local
Arquivo: `mobile/.env`

Exemplo:
```env
EXPO_PUBLIC_API_URL=http://127.0.0.1:5000/api/v1
EXPO_PUBLIC_API_FALLBACK_URL=
EXPO_PUBLIC_ENABLE_API_FALLBACK=false
EXPO_PUBLIC_API_HEALTHCHECK_TIMEOUT_MS=2500
EXPO_PUBLIC_DEFAULT_LOGIN_EMAIL=admin@gmail.com
EXPO_PUBLIC_DEFAULT_LOGIN_PASSWORD=123123
EXPO_PUBLIC_MASTER_LOGIN_EMAIL=master@gmail.com
EXPO_PUBLIC_MASTER_LOGIN_PASSWORD=123123
```

### 3.2. Exemplo compartilhado
Arquivo: `mobile/.env.example`

- Serve como modelo para novos ambientes.
- Nao deve conter segredo real.

### 3.3. Regra importante sobre `localhost`
- `127.0.0.1` ou `localhost` funcionam quando o app e a API rodam no mesmo ambiente local, como web ou emulador na propria maquina.
- Se o app rodar em um celular fisico, `localhost` aponta para o proprio celular e nao para o seu computador.
- Nesse caso, troque para o IP da sua maquina na rede local:

```env
EXPO_PUBLIC_API_URL=http://192.168.0.10:5000/api/v1
```

## 4. Ambientes recomendados no mobile

### 4.1. Local
```env
EXPO_PUBLIC_API_URL=http://127.0.0.1:5000/api/v1
```

### 4.2. Teste em aparelho na mesma rede
```env
EXPO_PUBLIC_API_URL=http://192.168.0.10:5000/api/v1
```

### 4.3. Producao
```env
EXPO_PUBLIC_API_URL=https://api.seudominio.com/api/v1
```

## 4.4. Fallback automatico entre local e externa
- O app pode testar a URL principal em `/api/v1/health`.
- Se a principal falhar por rede, timeout ou indisponibilidade, ele pode tentar a fallback.
- Isso foi preparado em [config.ts](c:/prod/99start/mobile/src/services/config.ts).
- Exemplo:

```env
EXPO_PUBLIC_API_URL=http://192.168.0.10:5000/api/v1
EXPO_PUBLIC_API_FALLBACK_URL=https://api.seudominio.com/api/v1
EXPO_PUBLIC_ENABLE_API_FALLBACK=true
EXPO_PUBLIC_API_HEALTHCHECK_TIMEOUT_MS=2500
```

- Fluxo esperado:
  1. testar `EXPO_PUBLIC_API_URL`
  2. se falhar, testar `EXPO_PUBLIC_API_FALLBACK_URL`
  3. usar a primeira que responder com sucesso no `GET /health`

- Cuidado importante:
  - esse fallback e bom para desenvolvimento e homologacao
  - em producao, prefira uma unica URL oficial
  - se local e externa apontarem para bancos diferentes, o usuario pode perceber dados "sumindo" ao alternar ambiente

## 5. Como a API funciona no projeto
- A API carrega o arquivo `api/.env`.
- As configuracoes sao validadas em [env_validator.py](c:/prod/99start/api/app/config/env_validator.py).
- As configuracoes finais sao montadas em [settings.py](c:/prod/99start/api/app/config/settings.py).
- O projeto espera, no minimo:
  - `FLASK_ENV`
  - `APP_NAME`
  - `APP_HOST`
  - `APP_PORT`
  - `SECRET_KEY`
  - `JWT_SECRET_KEY`
  - `DB_DRIVER`
  - `DB_HOST`
  - `DB_PORT`
  - `DB_USER`
  - `DB_PASSWORD`
  - `DB_NAME`

## 6. Exemplo de `.env` da API para producao
Arquivo: `api/.env`

```env
FLASK_ENV=production
APP_NAME=99Start API
APP_HOST=0.0.0.0
APP_PORT=5000

SECRET_KEY=troque-esta-chave
JWT_SECRET_KEY=troque-esta-chave-jwt
JWT_ACCESS_TOKEN_EXPIRES_MINUTES=60
JWT_REFRESH_TOKEN_EXPIRES_DAYS=30

DB_DRIVER=postgresql
DB_HOST=seu-host-postgres
DB_PORT=5432
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_NAME=seu-banco
DB_SSL_MODE=require
```

## 7. Ordem correta de deploy
1. Publicar a API primeiro.
2. Validar a URL publica da API.
3. Atualizar `EXPO_PUBLIC_API_URL` no mobile para a URL publicada.
4. Gerar a build do mobile apontando para essa URL.

## 8. Deploy da API

### 8.1. O que precisa subir junto
- Codigo da pasta `api`.
- Dependencias de `requirements`.
- Variaveis do `api/.env`.
- Banco PostgreSQL acessivel.
- Migracoes em `api/migrations`.

### 8.2. Fluxo recomendado
1. Criar banco PostgreSQL no servidor ou provedor.
2. Configurar o `api/.env` com dados reais.
3. Instalar dependencias da API.
4. Rodar migracoes.
5. Subir o processo Flask com um servidor apropriado.
6. Expor a API por dominio ou subdominio com HTTPS.

### 8.3. URL final esperada
- O mobile deve apontar para algo como:

```text
https://api.seudominio.com/api/v1
```

- Exemplo de endpoint final:

```text
https://api.seudominio.com/api/v1/auth/login
```

## 9. Deploy do mobile com Expo / EAS

### 9.1. Regra principal
- A build do app precisa ser gerada com `EXPO_PUBLIC_API_URL` ja apontando para a API publicada.
- Nao gere build de producao ainda apontando para IP local.

### 9.2. Exemplo de ambiente de producao do mobile
```env
EXPO_PUBLIC_API_URL=https://api.seudominio.com/api/v1
EXPO_PUBLIC_DEFAULT_LOGIN_EMAIL=admin@gmail.com
EXPO_PUBLIC_DEFAULT_LOGIN_PASSWORD=123123
EXPO_PUBLIC_MASTER_LOGIN_EMAIL=master@gmail.com
EXPO_PUBLIC_MASTER_LOGIN_PASSWORD=123123
```

### 9.3. Comandos basicos do Expo
```bash
cd mobile
npm install
npx eas-cli login
npx eas-cli build:configure
npx eas-cli build -p android --profile production
```

### 9.4. Perfis existentes
- O projeto ja possui em [eas.json](c:/prod/99start/mobile/eas.json):
  - `development`
  - `preview`
  - `production`

## 10. Checklist antes de publicar

### 10.1. API
- `.env` preenchido
- banco acessivel
- migracoes aplicadas
- dominio HTTPS respondendo
- endpoints de `auth/register`, `auth/login` e `auth/me` testados

### 10.2. Mobile
- `EXPO_PUBLIC_API_URL` apontando para a API publicada
- sem referencias a `localhost` na build final
- login e cadastro testados contra a API publicada

## 11. Resumo pratico
- A API sobe primeiro.
- O mobile nunca deve fixar a URL da API no codigo da tela.
- O app deve consumir `process.env.EXPO_PUBLIC_API_URL`, hoje centralizado em [config.ts](c:/prod/99start/mobile/src/services/config.ts).
- Se quiser fallback automatico, use tambem:
  - `EXPO_PUBLIC_API_FALLBACK_URL`
  - `EXPO_PUBLIC_ENABLE_API_FALLBACK`
  - `EXPO_PUBLIC_API_HEALTHCHECK_TIMEOUT_MS`
- Local usa IP local ou `127.0.0.1`, dependendo de onde o app roda.
- Producao usa dominio publico HTTPS.
