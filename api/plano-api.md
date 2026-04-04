# Plano API 99Start

## 01. Visão geral
- Stack proposta: Python + Flask.
- Objetivo: construir uma API modular, orientada a MVC, com testes por módulo e baixo acoplamento para evoluir com segurança.
- A API deve nascer separada por domínios de negócio.
- Cada domínio terá estrutura própria de controller, service, repository, schema e testes.
- O foco é permitir que cada módulo seja desenvolvido, validado e publicado com risco reduzido.

## 02. Princípios da arquitetura
- MVC modular por domínio, não por camada global única.
- Services concentram regras de negócio.
- Controllers lidam apenas com request, response e validação de fluxo HTTP.
- Repositories concentram acesso a banco.
- Schemas cuidam de serialização, validação e contratos de entrada e saída.
- Models representam entidades persistidas.
- Tests ficam dentro de cada módulo para manter proximidade com a regra validada.
- Configurações sensíveis ficam fora do código, via env.

## 03. Estrutura sugerida de pastas
```text
api/
  app/
    __init__.py
    config/
      __init__.py
      settings.py
    core/
      __init__.py
      extensions.py
      database.py
      security.py
      errors.py
      logging.py
      responses.py
    modules/
      auth/
        __init__.py
        controller.py
        service.py
        repository.py
        model.py
        schema.py
        routes.py
        permissions.py
        tests/
          test_controller.py
          test_service.py
          test_repository.py
      establishments/
        __init__.py
        controller.py
        service.py
        repository.py
        model.py
        schema.py
        routes.py
        tests/
          test_controller.py
          test_service.py
          test_repository.py
      customers/
        __init__.py
        controller.py
        service.py
        repository.py
        model.py
        schema.py
        routes.py
        tests/
          test_controller.py
          test_service.py
          test_repository.py
      categories/
        __init__.py
        controller.py
        service.py
        repository.py
        model.py
        schema.py
        routes.py
        tests/
          test_controller.py
          test_service.py
          test_repository.py
      products/
        __init__.py
        controller.py
        service.py
        repository.py
        model.py
        schema.py
        routes.py
        tests/
          test_controller.py
          test_service.py
          test_repository.py
      tables/
        __init__.py
        controller.py
        service.py
        repository.py
        model.py
        schema.py
        routes.py
        tests/
          test_controller.py
          test_service.py
          test_repository.py
      tabs/
        __init__.py
        controller.py
        service.py
        repository.py
        model.py
        schema.py
        routes.py
        tests/
          test_controller.py
          test_service.py
          test_repository.py
      orders/
        __init__.py
        controller.py
        service.py
        repository.py
        model.py
        schema.py
        routes.py
        tests/
          test_controller.py
          test_service.py
          test_repository.py
      payments/
        __init__.py
        controller.py
        service.py
        repository.py
        model.py
        schema.py
        routes.py
        gateways.py
        tests/
          test_controller.py
          test_service.py
          test_repository.py
      receipts/
        __init__.py
        controller.py
        service.py
        repository.py
        model.py
        schema.py
        routes.py
        tests/
          test_controller.py
          test_service.py
          test_repository.py
      admin/
        __init__.py
        controller.py
        service.py
        repository.py
        model.py
        schema.py
        routes.py
        tests/
          test_controller.py
          test_service.py
          test_repository.py
    shared/
      __init__.py
      enums.py
      constants.py
      utils.py
      pagination.py
      filters.py
    tests/
      conftest.py
      factories.py
      test_healthcheck.py
  migrations/
  scripts/
  requirements/
    base.txt
    dev.txt
    prod.txt
  .env.example
  run.py
  pytest.ini
  README.md
```

## 04. Entidades iniciais
- User
- Establishment
- Category
- Product
- Table
- Tab
- Order
- Payment
- Receipt
- Customer
- AdminAudit

## 05. Responsabilidade de cada camada
- `controller.py`: recebe request, chama service e devolve response padronizada.
- `service.py`: implementa regras de negócio, valida fluxos e orquestra operações.
- `repository.py`: executa leitura e escrita no banco.
- `model.py`: define entidades e relacionamentos.
- `schema.py`: valida payloads e serializa respostas.
- `routes.py`: registra endpoints e blueprint do módulo.
- `tests/`: garante cobertura local do módulo em controller, service e repository.

## 06. Módulos iniciais recomendados
- `auth`
- `establishments`
- `categories`
- `products`
- `tables`
- `tabs`
- `orders`
- `payments`
- `receipts`
- `customers`
- `admin`

## 07. Padrão de testes por módulo
- `test_controller.py`: valida status HTTP, payload, autenticação e erros.
- `test_service.py`: valida regras de negócio, fluxos e casos de borda.
- `test_repository.py`: valida persistência, filtros e consultas.
- opcionais quando crescer: `test_schema.py`, `test_permissions.py`, `test_integration.py`.

## 08. Estratégia de banco de dados
- Começar com PostgreSQL para produção.
- Usar SQLAlchemy como ORM.
- Usar Flask-Migrate para versionamento de schema.
- Usar SQLite apenas em testes rápidos se fizer sentido, mas preferir ambiente de teste próximo ao PostgreSQL.

## 09. Segurança
- JWT para autenticação.
- Refresh token separado.
- Hash de senha com `passlib` ou `werkzeug.security`.
- Controle por perfis: `owner`, `admin`, futuramente `staff`.
- Rate limiting em auth e rotas sensíveis.
- Auditoria de ações críticas em pagamentos e admin.

## 10. Todas rotas previstas

### 10.1. Rotas Auth
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/refresh`
- `POST /api/v1/auth/logout`
- `GET /api/v1/auth/me`

### 10.2. Rotas Estabelecimentos
- `GET /api/v1/establishments`
- `POST /api/v1/establishments`
- `GET /api/v1/establishments/<id>`
- `PUT /api/v1/establishments/<id>`
- `PATCH /api/v1/establishments/<id>/status`
- `PATCH /api/v1/establishments/<id>/branding`
- `PATCH /api/v1/establishments/<id>/print-settings`

### 10.3. Rotas Admin
- `GET /api/v1/admin/dashboard`
- `GET /api/v1/admin/establishments`
- `PATCH /api/v1/admin/establishments/<id>/approve`
- `PATCH /api/v1/admin/establishments/<id>/reject`
- `GET /api/v1/admin/audits`
- `GET /api/v1/admin/categories`
- `POST /api/v1/admin/categories`

### 10.4. Rotas Clientes
- `GET /api/v1/customers`
- `POST /api/v1/customers`
- `GET /api/v1/customers/<id>`
- `PUT /api/v1/customers/<id>`

### 10.5. Rotas Categorias
- `GET /api/v1/categories`
- `POST /api/v1/categories`
- `PUT /api/v1/categories/<id>`
- `DELETE /api/v1/categories/<id>`

### 10.6. Rotas Produtos
- `GET /api/v1/products`
- `POST /api/v1/products`
- `GET /api/v1/products/<id>`
- `PUT /api/v1/products/<id>`
- `PATCH /api/v1/products/<id>/availability`

### 10.7. Rotas Mesas
- `GET /api/v1/tables`
- `POST /api/v1/tables`
- `GET /api/v1/tables/<id>`
- `PUT /api/v1/tables/<id>`
- `PATCH /api/v1/tables/<id>/status`

### 10.8. Rotas Comandas
- `GET /api/v1/tabs`
- `POST /api/v1/tabs`
- `GET /api/v1/tabs/<id>`
- `PATCH /api/v1/tabs/<id>/status`
- `PATCH /api/v1/tabs/<id>/close`

### 10.9. Rotas Pedidos
- `GET /api/v1/orders`
- `POST /api/v1/orders`
- `GET /api/v1/orders/<id>`
- `PUT /api/v1/orders/<id>`
- `DELETE /api/v1/orders/<id>`

### 10.10. Rotas Pagamentos
- `POST /api/v1/payments/pix`
- `POST /api/v1/payments/cash`
- `POST /api/v1/payments/card`
- `GET /api/v1/payments/<id>`

### 10.11. Rotas Comprovantes
- `GET /api/v1/receipts/<code>`
- `POST /api/v1/receipts`
- `GET /api/v1/receipts/<code>/public`

## 11. Convenções técnicas
- Responses padronizadas.
- Logs centralizados por request.
- Exceptions customizadas no `core/errors.py`.
- Blueprints registrados por módulo.
- DTO e schema como fronteira de entrada e saída.
- Nada de regra de negócio em route e controller.

## 12. Critérios de qualidade antes de cada release
- testes do módulo passando
- cobertura mínima acordada
- validação de payload de entrada e saída
- documentação do endpoint atualizada
- migração revisada
- logs e tratamento de erro validados

## 13. Ordem recomendada de implementação
- Fase 1: bootstrap do Flask, config por ambiente, banco, migrate, healthcheck, estrutura base de módulo, pytest e factories.
- Fase 2: módulo `auth`, módulo `establishments`, módulo `categories`.
- Fase 3: módulo `products`, módulo `tables`, módulo `tabs`, módulo `orders`.
- Fase 4: módulo `payments`, módulo `receipts`, módulo `customers`.
- Fase 5: módulo `admin`, auditoria, permissões avançadas, observabilidade e hardening.

## 14. Primeiro ataque recomendado
1. Estrutura base do Flask app factory.
2. Config e banco.
3. Auth completo.
4. Establishments completo.
5. Categories.

## 15. Resultado esperado dessa abordagem
- crescimento por blocos independentes
- menor risco de regressão
- testes próximos da regra de negócio
- manutenção mais fácil
- base pronta para mobile, painel web e admin geral

## 16. Status atual da execucao
- Bootstrap inicial do Flask criado.
- App factory criada com healthcheck em /api/v1/health.
- Modulo uth iniciado com rotas de egister, login e logout.
- Modulo stablishments iniciado com listagem e cadastro.
- Responses padronizadas em core/responses.py.
- Suite inicial de testes ativa por modulo.
- Proxima evolucao desta fase: persistencia real em PostgreSQL, hash de senha, JWT e modelagem SQLAlchemy.

