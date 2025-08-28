# Node.js GraphQL API - Rocketseat Plus

Este projeto é uma API GraphQL desenvolvida em Node.js, utilizando TypeScript, TypeORM, Apollo Server, e integrações modernas para gerenciamento de usuários e pets. O projeto foi construído como parte do curso da plataforma [Rocketseat](https://www.rocketseat.com.br/), seguindo as melhores práticas de arquitetura, organização de código e uso de decorators.

## Descrição

A API permite criar e consultar usuários e pets, relacionando-os entre si. Utiliza GraphQL para consultas e mutações, TypeORM para mapeamento objeto-relacional, e bcryptjs para hash de senhas. O projeto é modularizado, com separação clara entre entidades, resolvers, configuração de banco de dados e schema de ambiente.

---

## Estrutura de Pastas

- **src/app.ts**: Inicialização do servidor Express e Apollo Server.
- **src/server.ts**: Ponto de entrada do servidor.
- **src/config/db/data-source.ts**: Configuração da conexão com o banco de dados via TypeORM.
- **src/entities/**: Entidades do banco de dados (`User`, `Pet`).
- **src/env/schema.ts**: Definição do schema de variáveis de ambiente.
- **src/graphql/resolvers/**: Resolvers GraphQL para usuários e pets.

---

## Bibliotecas Utilizadas

- **[express](https://expressjs.com/)**: Framework web para Node.js.
- **[@apollo/server](https://www.apollographql.com/docs/apollo-server/)**: Servidor GraphQL.
- **[@as-integrations/express5](https://www.npmjs.com/package/@as-integrations/express5)**: Integração Apollo Server com Express.
- **[type-graphql](https://typegraphql.com/)**: Criação de schemas GraphQL usando classes e decorators TypeScript.
- **[typeorm](https://typeorm.io/)**: ORM para Node.js e TypeScript.
- **[reflect-metadata](https://www.npmjs.com/package/reflect-metadata)**: Suporte a decorators e metadados.
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**: Hash de senhas.
- **[pg](https://www.npmjs.com/package/pg)**: Driver PostgreSQL para Node.js.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Carregamento de variáveis de ambiente.
- **[typescript](https://www.typescriptlang.org/)**: Superset de JavaScript com tipagem estática.

---

## Decorators Utilizados

- **@Entity**: Marca uma classe como entidade do TypeORM.
- **@ObjectType, @Field, @ID**: Decorators do type-graphql para definir tipos e campos GraphQL.
- **@PrimaryGeneratedColumn, @Column, @ManyToOne, @BeforeInsert**: Decorators do TypeORM para definir colunas, relacionamentos e hooks.
- **@Resolver, @Query, @Mutation, @Arg, @FieldResolver, @Root**: Decorators do type-graphql para definir resolvers, queries, mutations e argumentos.

---

## Como Executar

1. Instale as dependências:
   ```sh
   pnpm install
   ```
2. Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias, baseando-se no arquivo `.env.example`.
3. Execute as migrations do TypeORM para criar as tabelas no banco de dados:
   ```sh
   pnpm typeorm migration:run
   ```
4. Inicie o servidor:
   ```sh
   pnpm dev
   ```

A API estará disponível em `http://localhost:3333/graphql`.

---

## Exemplos de Consultas e Mutações

### Consultas

- **Obter todos os usuários**:
  ```graphql
  query {
    users {
      id
      name
      email
    }
  }
  ```

- **Obter um usuário pelo ID**:
  ```graphql
  query {
    user(id: "1") {
      id
      name
      email
    }
  }
  ```

- **Obter todos os pets**:
  ```graphql
  query {
    pets {
      id
      name
      type
    }
  }
  ```

- **Obter um pet pelo ID**:
  ```graphql
  query {
    pet(id: "1") {
      id
      name
      type
    }
  }
  ```

### Mutações

- **Criar um novo usuário**:
  ```graphql
  mutation {
    createUser(data: {
      name: "João",
      email: "joao@example.com",
      password: "senha123"
    }) {
      id
      name
      email
    }
  }
  ```

- **Atualizar um usuário existente**:
  ```graphql
  mutation {
    updateUser(id: "1", data: {
      name: "João Silva",
      email: "joaosilva@example.com"
    }) {
      id
      name
      email
    }
  }
  ```

- **Excluir um usuário**:
  ```graphql
  mutation {
    deleteUser(id: "1") {
      id
      name
      email
    }
  }
  ```

- **Criar um novo pet**:
  ```graphql
  mutation {
    createPet(data: {
      name: "Rex",
      type: "dog",
      ownerId: "1"
    }) {
      id
      name
      type
    }
  }
  ```

- **Atualizar um pet existente**:
  ```graphql
  mutation {
    updatePet(id: "1", data: {
      name: "Rex II",
      type: "dog"
    }) {
      id
      name
      type
    }
  }
  ```

- **Excluir um pet**:
  ```graphql
  mutation {
    deletePet(id: "1") {
      id
      name
      type
    }
  }
  ```

---

## Considerações Finais

Este projeto é um exemplo completo de uma API GraphQL utilizando tecnologias modernas e boas práticas de desenvolvimento. Sinta-se à vontade para explorar, modificar e expandir o projeto conforme necessário. Para mais informações sobre cada tecnologia utilizada, consulte a documentação oficial de cada uma delas.

---
