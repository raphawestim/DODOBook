# DODOBook Backend

Este documento fornece uma visão geral do backend do DODOBook, uma plataforma para gestão de livros, grupos de estudo e muito mais. O backend é construído usando Fastify, Prisma e SQLite, proporcionando uma API robusta e eficiente.

## Tecnologias Utilizadas

- **[Fastify](https://www.fastify.io/)**: Um framework web rápido e de baixa sobrecarga para Node.js.
- **[Prisma](https://www.prisma.io/)**: Prisma é um ORM (Object Relational Mapping) que facilita o trabalho com bancos de dados em aplicações modernas.
- **[SQLite](https://sqlite.org/index.html)**: Um banco de dados relacional embutido que requer zero configuração.

## Funcionalidades

- **Autenticação de Usuários**: Registro e autenticação de usuários.
- **Gerenciamento de Livros**: Inclusão, pesquisa e listagem de livros.
- **Gerenciamento de Grupos de Estudo**: Criação e listagem de grupos de estudo com funcionalidades para definir privacidade e horários de encontro.
- **Pesquisa de Livros com Web Scraping**: Funcionalidades para buscar preços e informações de livros em outras plataformas via scraping.

## Configuração do Projeto

### Pré-requisitos

- Node.js
- npm (gerenciador de pacotes do Node.js)

### Instalação

Clone o repositório em sua máquina local:

```bash
git clone https://github.com/seuusuario/dodobook-backend.git
cd dodobook-backend
```
### Instale as dependências do projeto:
```bash
npm install
```
### Configuração do Ambiente
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
```bash
DATABASE_URL="file:./dev.db"
```
Este é o caminho para o seu arquivo de banco de dados SQLite.

### Executando o Projeto
Para iniciar o servidor, execute:
```bash
npm run dev
```
O servidor estará acessível em http://localhost:3000.

### Estrutura do Projeto
```bash
/
|-- src/
|   |-- routes/
|   |   |-- users.js
|   |   |-- books.js
|   |   |-- groups.js
|   |-- models/
|   |-- utils/
|   |-- server.ts
|-- prisma/
|   |-- schema.prisma
|-- .env
|-- .gitignore
|-- package.json
|-- README.md
```
src/: Contém todos os arquivos de código fonte.
src/routes/: Definições de rotas para a API.
src/models/: Modelos utilizados pelo Prisma.
src/utils/: Funções utilitárias, como web scraping.
prisma/schema.prisma: Definição dos modelos de dados.
.env: Arquivo para as variáveis de ambiente.
README.md: Este arquivo.

## Contribuindo
Para contribuir com o projeto, considere as seguintes etapas:

1. Faça um fork do projeto.
2. Crie uma nova branch para suas alterações.
3. Faça suas alterações.
4. Envie um pull request.