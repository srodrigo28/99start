# Implementação do Treinamento Laravel

Este arquivo organiza, em sequência didática, os pontos que ainda faltam no treinamento de Laravel para que o conteúdo saia de uma boa introdução visual e avance para uma formação mais completa, prática e aplicável em projeto real.

## Objetivo

Transformar o `intro-laravel.html` em uma trilha mais forte para:

- entender o Laravel como framework
- criar e configurar projeto corretamente
- enxergar o fluxo real da aplicação
- construir CRUD com segurança
- trabalhar com banco, autenticação, validação e testes
- só depois comparar e escolher kits de frontend com mais maturidade

## Diagnóstico atual

Hoje o treinamento já cobre bem:

- introdução ao Laravel
- origem e contexto do framework
- requisitos
- criação do projeto
- estrutura de pastas
- configuração inicial com `.env`
- comandos do dia a dia
- visão inicial sobre `PHPUnit` vs `Pest`
- arquivos principais
- opções de kits e ecossistema visual

O ponto principal que ainda falta é a camada de aplicação real: como uma funcionalidade nasce, passa pelas partes do framework e vira uma entrega completa.

## O que está faltando

### 1. Fluxo de requisição no Laravel

Falta uma seção explicando o caminho completo de uma requisição:

`rota -> controller -> request/validação -> model/service -> response/view/json`

Por que isso é importante:

- amarra a arquitetura do framework
- ajuda o aluno a entender onde cada arquivo entra
- reduz a sensação de que Laravel é apenas “um conjunto de pastas e comandos”

Sugestão de abordagem:

- mostrar uma rota simples
- apontar para um controller
- validar dados
- consultar ou salvar no banco
- devolver uma view ou JSON

### 2. Banco de dados e Eloquent na prática

Ainda falta um bloco dedicado a modelagem e acesso a dados.

Itens essenciais:

- `Model`
- `fillable`
- `casts`
- `find`, `where`, `first`, `get`
- relacionamentos `hasOne`, `hasMany`, `belongsTo`, `belongsToMany`
- eager loading com `with()`
- diferença entre query simples e relacionamento

Por que isso é essencial:

- Eloquent é uma das partes mais fortes do Laravel
- o aluno precisa sair sabendo ler e montar consultas reais

### 3. CRUD completo guiado

O treinamento ainda não costura as peças em um exemplo contínuo.

Sugestão:

criar um mini projeto didático, como `Produto`, `Post` ou `Categoria`, passando por:

- migration
- model
- controller
- request de validação
- rotas
- formulário Blade
- listagem
- edição
- exclusão

Por que isso é importante:

- transforma teoria em fluxo de trabalho
- mostra como as partes se conectam
- aumenta muito a retenção do aluno

### 4. Validação, middleware e autorização

Hoje esses assuntos aparecem diluídos, mas ainda não foram assumidos como etapa principal.

Conteúdo recomendado:

- validação inline
- `Form Request`
- mensagens de erro
- validação em português
- middleware `auth`, `guest` e custom
- `Gate` e `Policy`

Por que isso precisa entrar:

- esse é o momento em que o aluno deixa de só montar tela e começa a proteger regras de negócio

### 5. Autenticação e sessão

Falta explicar de forma direta:

- login
- logout
- sessão
- proteção de rotas
- usuário autenticado
- recuperação de senha

Mesmo que não seja uma seção longa, ela precisa existir porque:

- Laravel é muito usado para sistemas internos e administrativos
- autenticação é parte constante da vida real do framework

### 6. APIs e respostas JSON

O treinamento ainda está mais voltado para páginas web e kits de interface.

Falta incluir:

- `routes/api.php`
- controllers para API
- validação em endpoints
- `JsonResponse`
- API Resources
- diferença entre rota web e rota api

Por que isso importa:

- amplia muito a utilidade profissional do treinamento
- prepara o aluno para frontend desacoplado, mobile e integrações

### 7. Ambiente real e deploy

A configuração do `.env` entrou muito bem, mas ainda falta a visão de produção.

Conteúdo recomendado:

- `APP_ENV`
- `APP_DEBUG`
- cache de configuração
- cache de rota
- `storage:link`
- fila
- scheduler
- logs
- diferença entre local, homologação e produção

Por que isso importa:

- o aluno entende que rodar localmente é só uma parte do trabalho

### 8. Debug e observabilidade básica

Esse ponto ainda não aparece como competência prática.

Sugestão de conteúdo:

- `dd()`
- `dump()`
- logs em `storage/logs`
- leitura de erros comuns
- uso estratégico do `tinker`
- ferramentas opcionais como Telescope

Por que isso ajuda:

- diminui bloqueios
- acelera troubleshooting
- melhora autonomia

### 9. Testes com continuidade prática

A comparação entre `PHPUnit` e `Pest` ficou boa, mas ainda falta mostrar o que testar primeiro no Laravel.

Sequência recomendada:

- teste de rota
- teste de controller
- teste de validação
- teste com banco
- teste de autenticação
- diferença entre `Feature` e `Unit`

Ponto importante:

- `Pest` pode ser apresentado como experiência mais moderna
- `PHPUnit` continua como base essencial do ecossistema

## Sequência recomendada para o intro-laravel

Depois de `09. Arquivos principais`, a trilha pode evoluir assim:

### 10. Fluxo de requisição no Laravel

Explicar como a request atravessa a aplicação.

### 11. Banco de dados e Eloquent

Apresentar models, queries e relacionamentos.

### 12. CRUD completo na prática

Construir um exemplo ponta a ponta.

### 13. Validação, middleware e autorização

Proteger regras e controlar acesso.

### 14. Autenticação e sessão

Ensinar login, logout e rotas protegidas.

### 15. APIs e JSON

Mostrar endpoints e integração moderna.

### 16. Testando a aplicação na prática

Levar a teoria de PHPUnit/Pest para casos reais.

## Depois disso entram os kits

Somente depois dessa base mais sólida faz sentido seguir para:

- Blade
- Blade + Alpine.js
- Blade + Livewire
- React + Inertia
- Vue + Inertia
- Svelte + Inertia
- Filament

Essa ordem melhora a clareza porque:

- primeiro o aluno entende o Laravel
- depois entende como construir funcionalidades
- só então compara estratégias de interface

## Prioridade de implementação

Se formos implementar por etapas, a melhor ordem é:

1. Fluxo de requisição no Laravel
2. Banco de dados e Eloquent
3. CRUD completo na prática
4. Validação, middleware e autorização
5. Autenticação e sessão
6. APIs e JSON
7. Testes na prática
8. Deploy, produção e observabilidade

## Direção editorial

Ao escrever essas novas partes no `intro-laravel.html`, manter:

- cards visuais
- linguagem simples e direta
- boa sequência pedagógica
- exemplos curtos, mas reais
- modais para aprofundamento
- comparação clara entre teoria e prática

Também vale preservar a identidade visual atual:

- títulos fortes
- blocos explicativos curtos
- emojis com função didática
- exemplos de código em trechos suficientes para entendimento

## Conclusão

O treinamento atual já está bonito, organizado e com uma base introdutória forte. O próximo salto de qualidade está em incluir o miolo operacional do Laravel: fluxo, dados, CRUD, segurança, autenticação, API e testes práticos.

Esse arquivo passa a ser nossa referência para expandir o `intro-laravel.html` de forma organizada, sem perder a sequência didática.
