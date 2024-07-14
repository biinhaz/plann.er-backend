# Plann.er

O **Plann.er** é um planejador de viagens que permite cadastrar e atualizar novas viagens, atividades, links e convidar pessoas para participar. Este projeto foi desenvolvido com foco em fornecer uma API robusta e eficiente para o gerenciamento de viagens.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos.
- **Fastify**: Framework web para Node.js focado em performance e baixo overhead.
- **Zod**: Biblioteca de validação e parsing de esquemas.

## Funcionalidades

### Requisitos Funcionais

- [x] O usuário deve poder cadastrar uma nova viagem;
- [x] O usuário deve poder atualizar uma viagem existente;
- [x] O usuário deve poder adicionar atividades a uma viagem;
- [x] O usuário deve poder adicionar links relacionados à viagem;
- [x] O usuário deve poder convidar pessoas para participar de uma viagem;

### Regras de Negócio

- [x] O usuário só pode cadastrar uma viagem com uma data de início no futuro;
- [x] O usuário só pode atualizar viagens que ele criou;
- [x] As atividades devem estar associadas a uma viagem existente;
- [x] Os links devem estar associados a uma viagem existente;

## Documentação da API (Swagger)

Para documentação da API, acesse o link: [Plann.er API Documentation](https://example.com/docs)

## Banco de dados

Nessa aplicação vamos utilizar banco de dados relacional (SQL). Para ambiente de desenvolvimento seguiremos com o SQLite pela facilidade do ambiente.

### Diagrama ERD

<img src=".github/erd.svg" width="600" alt="Diagrama ERD do banco de dados" />

### Estrutura do Banco (SQL)

```sql
-- CreateTable
CREATE TABLE "trips" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "destination" TEXT NOT NULL,
    "starts_at" DATETIME NOT NULL,
    "ends_at" DATETIME NOT NULL,
    "is_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "activities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "occurs_at" DATETIME NOT NULL,
    "trip_id" TEXT NOT NULL,
    CONSTRAINT "activities_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "links" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "trip_id" TEXT NOT NULL,
    CONSTRAINT "links_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "participants" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "is_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "is_owner" BOOLEAN NOT NULL DEFAULT false,
    "trip_id" TEXT NOT NULL,
    CONSTRAINT "participants_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
```

## Licença

Este projeto está licenciado sob a MIT License.

## Contato

Para mais informações, entre em contato através do [dev.biamiranda@gmail.com](mailto:dev.biamiranda@gmail.com).

---

Feito com ❤️ por [Bia Miranda](https://github.com/biinhaz)