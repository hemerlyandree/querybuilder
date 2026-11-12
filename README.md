# QueryBuilder

Projeto de estudo para praticar **versionamento de banco de dados com migrations**, usando **Knex.js** em uma API **Node.js**. As requisições HTTP foram testadas e monitoradas pelo **Insomnia**, para acompanhar na prática como cada chamada e cada migration alteram o banco de dados.

## Objetivos de aprendizado

- Entender como funciona o versionamento de banco de dados com migrations
- Criar, alterar e reverter tabelas de forma controlada (`up` e `down`)
- Usar o Query Builder do Knex para inserir, listar e atualizar dados
- Popular o banco com seeds
- Validar o comportamento da API e do banco usando o Insomnia

## Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Knex.js](https://knexjs.org/)
- [SQLite](https://www.sqlite.org/)
- [tsx](https://tsx.is/) (execução de TypeScript)
- [Insomnia](https://insomnia.rest/) (testes das requisições)

## Estrutura do projeto

```
.
├── src
│   ├── database
│   │   ├── migrations   # Histórico de alterações do banco
│   │   ├── seeds        # Dados iniciais
│   │   └── knex.ts      # Instância de conexão do Knex
│   └── server.ts        # API e rotas
├── knexfile.ts          # Configuração do Knex (banco, migrations e seeds)
├── tsconfig.json
└── package.json
