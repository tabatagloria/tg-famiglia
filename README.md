<h1 align="center">Famiglia</h1>

<p align="center">Website para gerenciamento de árvore genealógica e criação de base de dados para pesquisas. O projeto foi desenvolvido como Trabalho de Conclusão de Curso de Análise e Desenvolvimento de Sistemas da Faculdade FATEC São José dos Campos - Prof. Jessen Vidal </p>

<p align="center">
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#prerequisitos">Pré-requisitos</a> • 
</p>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/), [Docker](https://www.docker.com/), [MySQL](https://www.mysql.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Backend

```bash
# Clone este repositório
$ git clone <git@github.com:tabatagloria/tg-famiglia.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd tg-famiglia

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ npm install ou yarn install

# Banco de dados:
# Altere as credencias dentro de /src/config/database.js;
# Rode yarn sequelize db:create-famiglia para criar o banco de dados;
# Rode yarn sequelize db:migrate para executar as migrations;

# Execute a aplicação
$ yarn dev

# O servidor iniciará na porta:3333 - acesse <http://localhost:3333>

# Para rodar o Frontend

# Acesse a pasta do projeto no terminal/cmd
$ cd tg-famiglia

# Vá para a pasta backend
$ cd frontebd

# Instale as dependências
$ npm install ou yarn install

# Execute a aplicação
$ npm start ou yarn start

# O serviço inciará na porta:3000 - acesse <http://localhost:3000>
```
### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [JWT](https://jwt.io/)
- [React](https://pt-br.reactjs.org/)
- [VS Code](https://code.visualstudio.com/)


