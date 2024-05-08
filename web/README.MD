# DODOBook Frontend

Este repositório contém o frontend do DODOBook, uma plataforma dinâmica para gerenciamento de livros e grupos de estudo. O projeto utiliza Next.js e Tailwind CSS para uma interface rápida, responsiva e esteticamente agradável.

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Um framework React para produção que oferece renderização no lado do servidor e geração de sites estáticos.
- **[Tailwind CSS](https://tailwindcss.com/)**: Um framework CSS de utilidade-primeiro para a construção de designs customizados sem sair do seu HTML.
- **[ESLint](https://eslint.org/)**: Uma ferramenta de linting para JavaScript e TypeScript, promovendo melhores práticas e código consistente.
- **[Prettier](https://prettier.io/)**: Um formatador de código que suporta várias linguagens e integra-se com ESLint para garantir uma formatação consistente.

## Estrutura do Projeto
```bash
/
|-- components/ # Componentes React reutilizáveis
|-- pages/ # Páginas do Next.js
|-- styles/ # Arquivos de estilo global e configurações do Tailwind CSS
|-- public/ # Arquivos estáticos como imagens e ícones
|-- .eslintrc.json # Configurações do ESLint
|-- .prettierrc # Configurações do Prettier
|-- README.md # Documentação do projeto
|-- package.json # Metadados e dependências do projeto
```

## Configuração do Ambiente

### Pré-requisitos

Antes de iniciar, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar o Node.js em [nodejs.org](https://nodejs.org/).

### Instalação

Clone o repositório para a sua máquina local:

```bash
git clone https://github.com/seuusuario/dodobook-frontend.git
cd dodobook-frontend
```

### Instale as dependências:
```bash
npm install
```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```
Acesse http://localhost:3000 no seu navegador para ver a aplicação em execução.

### Scripts Disponíveis

Dentro do diretório do projeto, você pode rodar:

<li>npm run dev: Roda a aplicação em modo de desenvolvimento.</li>
<li>npm run build: Constrói a aplicação para produção.</li>
<li>npm start: Inicia um servidor Next.js para servir a aplicação construída.</li>
<li>npm run lint: Executa o linter ESLint para encontrar problemas no código.</li>
<li>npm run format: Formata o código usando Prettier.</li>

### Contribuindo

Contribuições são sempre bem-vindas! Para contribuir com o projeto, siga estes passos:

<li>Faça um fork do projeto.</li>
<li>Crie uma nova branch: git checkout -b sua-nova-feature.</li>
<li>Faça suas alterações e commit: git commit -am 'Adiciona alguma feature'.</li>
<li>Envie para a branch original: git push origin sua-nova-feature.</li>
<li>Crie um pull request.</li>

Este `README.md` fornece uma visão clara e concisa de seu projeto frontend, incluindo informações sobre tecnologias usadas, estrutura do projeto, como configurar e executar o projeto, além de como outros podem contribuir. Você pode ajustar os detalhes conforme necessário para melhor refletir seu projeto específico.

