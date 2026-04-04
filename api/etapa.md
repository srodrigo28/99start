# Etapas da API 99Start

## 01. Preparacao do ambiente
- [x] Organizar o arquivo `.env` por areas.
- [x] Validar variaveis obrigatorias com teste automatizado.
- [x] Configurar `pytest` para a estrutura da API.
- [ ] Criar `.env.example` para versionamento seguro.

## 02. Bootstrap da aplicacao Flask
- [x] Criar `app factory`.
- [x] Criar `run.py` para inicializacao local.
- [x] Criar camada inicial de configuracoes.
- [x] Criar responses padronizadas.
- [x] Criar rota de healthcheck.

## 03. Modulo Auth
- [x] Criar estrutura modular de `auth`.
- [x] Criar rotas iniciais de `register`, `login` e `logout`.
- [x] Criar validacao basica de payload.
- [x] Criar testes de controller, service e repository.
- [ ] Implementar hash real de senha.
- [ ] Implementar JWT real de acesso e refresh.
- [ ] Criar rota `me`.
- [ ] Criar controle real de logout com invalidacao de sessao/token.

## 04. Modulo Establishments
- [x] Criar estrutura modular de `establishments`.
- [x] Criar rotas iniciais de listagem e cadastro.
- [x] Criar validacao basica de payload.
- [x] Criar testes de controller, service e repository.
- [ ] Criar modelagem completa do estabelecimento.
- [ ] Adicionar campos de configuracao da loja.
- [ ] Adicionar categorias, branding e configuracoes de impressao.
- [ ] Criar atualizacao cadastral segmentada.

## 05. Persistencia real em banco
- [x] Configurar SQLAlchemy.
- [x] Configurar conexao com PostgreSQL online.
- [x] Criar models iniciais `User` e `Establishment`.
- [x] Criar repositories reais usando ORM.
- [x] Configurar Flask-Migrate.
- [x] Criar primeira migration.

## 06. Seguranca real
- [x] Implementar hash de senha.
- [x] Implementar JWT access token.
- [x] Implementar JWT refresh token.
- [x] Criar protecao de rotas autenticadas.
- [ ] Criar perfis iniciais `owner` e `admin`. (`owner` ativo, `admin` ainda pendente)

## 07. Qualidade e testes
- [x] Garantir testes de ambiente.
- [x] Garantir testes de healthcheck.
- [x] Garantir testes iniciais por modulo.
- [ ] Criar fixtures compartilhadas.
- [ ] Criar factories para entidades principais.
- [ ] Criar testes de integracao com banco.
- [ ] Criar cobertura minima por modulo.

## 08. Proxima meta imediata
- [x] Substituir repositories em memoria por persistencia real no ORM.
- [x] Ligar `auth` ao model `User`.
- [x] Ligar `establishments` ao model `Establishment`.
- [x] Entregar cadastro real de estabelecimento com usuario proprietario.

## 09. Regra de acompanhamento
- [x] Atualizar este arquivo sempre que uma etapa for concluida.
- [x] Marcar cada item assim que a entrega estiver validada por teste.
- [ ] Registrar aqui as proximas fases conforme novos modulos entrarem.



