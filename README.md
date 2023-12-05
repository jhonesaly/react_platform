# React Platform

Este é um projeto de estudo chamado React Platform, no qual foi desenvolvida uma plataforma simples utilizando React.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Utilizado para gerenciar a navegação na aplicação.
- **React Hook Form**: Biblioteca para gerenciar formulários de maneira eficiente.
- **Axios**: Cliente HTTP para realizar requisições à API.
- **CSS-in-JS (Styled Components)**: Utilizado para estilizar os componentes de forma modular.
- **React Strict Mode**: Configurado para detectar e alertar sobre práticas inseguras durante o desenvolvimento.
- **Json-server**: Fake database para realizar testes e aprendizado.

## Estrutura do Projeto

A estrutura do projeto é dividida da seguinte forma:

- **src/index.js**: Ponto de entrada da aplicação, onde o componente raiz é renderizado.
- **src/App.js**: Componente principal da aplicação, que configura o roteamento e carrega estilos globais.
- **src/components/Header/index.jsx**: Componente de cabeçalho contendo o logo, menu e a lógica de exibição do ícone do usuário.
- **src/pages/home/index.jsx**: Página inicial da aplicação, exibindo conteúdo dependendo do status de login.
- **src/pages/login/index.jsx**: Página de login, utilizando React Hook Form para gerenciar os formulários.
- **src/pages/signin/index.jsx**: Página de cadastro, utilizando React Hook Form para gerenciar os formulários.
- **src/services/api.js**: Configuração do cliente Axios para realizar chamadas à API.
- **src/services/AuthContext.js**: Contexto de autenticação utilizando React Context API.

## Como Executar o Projeto

1. Clone o repositório: `git clone https://github.com/jhonesaly/react-platform.git`
2. Instale as dependências: `npm install`
3. Inicie a aplicação: `npm start`
4. Inicie o banco de dados dentro da pasta 'db': `json-server --watch db.json --port 8001`

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

Este projeto foi desenvolvido como parte de estudos em programação e é destinado apenas para fins acadêmicos.
