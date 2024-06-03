

<p align="center">
  <img src="logo.png" alt="DODOBook logo">
</p>
<h1 align="center">DODOBOOK</h1>

<p align="center">
  <img src="https://img.shields.io/badge/react-%5E17.0.1-blu" alt="">
  <img src="https://img.shields.io/badge/node.js-%5E14.15.1-green" alt="">
  <img src="https://img.shields.io/badge/express-%5E4.17.1-lightgrey" alt="">
  <img src="https://img.shields.io/badge/SQLite-%5E3.34.0-lightgrey" alt="">
  <img src="https://img.shields.io/badge/prisma-%5E2.20.1-blue" alt="">
  <img src="https://img.shields.io/badge/Google%20Books%20API-v1-green" alt="">
</p>

<!-- ![React](https://img.shields.io/badge/react-%5E17.0.1-blue)
![Node.js](https://img.shields.io/badge/node.js-%5E14.15.1-green)
![Express](https://img.shields.io/badge/express-%5E4.17.1-lightgrey)
![SQLite](https://img.shields.io/badge/SQLite-%5E3.34.0-lightgrey)
![Prisma](https://img.shields.io/badge/prisma-%5E2.20.1-blue)
![Google Books API](https://img.shields.io/badge/Google%20Books%20API-v1-green) -->

<!-- ![Logo do DODOBook](logo.png "Logo do DODOBook") -->
<p align=center>
  DODOBook é uma plataforma dedicada a facilitar o acesso a recursos educacionais, com foco na formação de grupos de estudo e na facilitação do acesso a materiais de leitura a preços acessíveis. Através de uma interface amigável, o DODOBook permite aos usuários buscar livros, criar e gerenciar grupos de estudo, e acessar informações de preços de livros através de técnicas de web scraping e APIs.
</p>

## Características do Projeto

<ul>
  <li><strong>Autenticação de Usuários:</strong> Registro e login de usuários.</li>
  <li><strong>Gerenciamento de Perfis:</strong> Usuários podem atualizar suas informações pessoais. ( <strong>EM BREVE</strong> )</li>
  <li><strong>Pesquisa de Livros:</strong> Integração com APIs para a busca de livros e informações relacionadas.</li>
  <li><strong>Grupos de Estudo:</strong> Criação e gerenciamento de grupos para discussões e compartilhamento de materiais por discord.</li>
  <li><strong>Publicação e Administração de Anúncios:</strong> Interface para publicar e gerenciar anúncios de grupos de estudo. ( <strong>EM BREVE</strong> )</li>
  <li><strong>Interface de Administração:</strong> Para gestão de usuários e conteúdos da plataforma. ( <strong>EM BREVE</strong> )</li>
  <li><strong>Feedback e Suporte:</strong> Sistema para os usuários enviarem feedback ou procurarem ajuda. ( <strong>EM BREVE</strong> )</li>
</ul>

## Funcionalidades
- **Cadastro e autenticação de usuários:** Permitindo que os usuários criem contas e se autentiquem na plataforma.
- **Busca de livros:** Usuários podem buscar livros utilizando a API do Google Books.
- **Criação e gerenciamento de grupos de estudo:** Os usuários podem criar grupos de estudo com um limite de membros e gerenciar sua participação.
- **Comparação de preços via web scraping:** Automatiza o processo de buscar o menor preço para um livro em diferentes lojas online.

## Tecnologias Utilizadas

### Front-End
O front-end do DODOBook é construído com as seguintes tecnologias, cada uma desempenhando um papel crucial na criação de uma experiência de usuário rica e responsiva:

- <strong>React.js:</strong> Utilizado como a biblioteca principal para construir a interface do usuário. O React é escolhido por sua eficiência em renderizar componentes de forma reativa, facilitando a construção de uma interface dinâmica e interativa.
- <strong>Next.js:</strong> Framework de React que permite funcionalidades como server-side rendering e static site generation, melhorando significativamente o tempo de carregamento e a otimização para motores de busca.
- <strong>Tailwind CSS:</strong> Framework CSS que utiliza uma abordagem de utility-first, permitindo a construção de designs customizados sem sair do contexto do HTML. Isso acelera o processo de design, mantendo tudo responsivo e adaptável a diferentes tamanhos de tela.
- <strong>Lucide Icons:</strong> Biblioteca de ícones que fornece uma grande variedade de ícones acessíveis e de alta qualidade para melhorar a interface visual do usuário.
- <strong>Figma:</strong> Usado para design e prototipação do UI/UX.

### Back-End
Para o back-end, as seguintes tecnologias foram escolhidas para garantir segurança, desempenho e escalabilidade:

- <strong>Node.js:</strong> Ambiente de execução JavaScript no servidor, escolhido por sua natureza não bloqueante que lida eficientemente com operações I/O, ideal para serviços web que esperam tráfego intenso.
- <strong>Express.js:</strong> Framework web minimalista e flexível para Node.js, ajudando na criação de rotas e na gestão de requisições HTTP de forma rápida e fácil.
- <strong>Prisma:</strong> ORM usado para facilitar o acesso e a gestão do banco de dados, permitindo a modelagem de dados e a realização de consultas com uma abordagem mais abstrata e segura.
- <strong>SQLite:</strong> Banco de dados leve que, juntamente com o Prisma, oferece uma solução eficaz para prototipagem e projetos de pequeno a médio porte. É fácil de configurar e não requer um servidor de banco de dados separado.
- <strong>jsonwebtoken:</strong> Utilizado para a criação de tokens de acesso que permitem a autenticação e autorização de usuários, garantindo que as operações sejam seguras e que os dados dos usuários estejam protegidos.

## FIGMA
https://www.figma.com/design/pOOKdOOjx99t5sjn0Q5C8Q/DODOBook-Academy?node-id=42-91&t=p8A1ZSJCNrdpoDsj-1

## Configuração do Projeto

### Pré-requisitos
- Node.js (Versão LTS recomendada)
- Gerenciador de pacotes (npm ou yarn)

### Instalação
-Clone o repositório para a sua máquina local:

```bash
git clone https://github.com/seuusuario/dodobook.git
cd dodobook
```
Instale as dependências em ambas as pastas, front-end e back-end:

```bash
# Para o backend
cd server
npm install

# Para o frontend
cd web
npm install
```
### Execução
Para rodar o backend:

```bash
cd backend
npm run dev
```
Para rodar o frontend:

```bash
cd frontend
npm run dev
```

## Contribuição
O DODOBook é um projeto em andamento contínuo, e contribuições são bem-vindas. Se você deseja contribuir, por favor:

1. Faça um fork do repositório.
2. Crie uma nova branch para suas mudanças.
3. Faça suas alterações.
3. Envie um pull request.







