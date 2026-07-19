# 🎮 Sistema Web para Comparação de Preços de Jogos Digitais

Este é o repositório do Trabalho Final da disciplina de Sistemas Web I. O projeto consiste em uma plataforma *Full-Stack* que permite aos usuários buscar jogos, comparar preços em diferentes lojas digitais, visualizar o histórico de valores e salvar seus títulos favoritos em uma *Wishlist* personalizada.

---

## 🛠️ Tecnologias Utilizadas

### Backend
*   **Node.js** com **NestJS** (Framework modular e arquitetura MVC)
*   **Prisma ORM** (Modelagem de dados e schemas)
*   **MongoDB** (Banco de dados NoSQL)
*   **Autenticação:** JWT (JSON Web Tokens) e bcrypt (Hashing de senhas)
*   **Integração:** Consumo da API externa *IsThereAnyDeal* (ITAD)

### Frontend
*   **React** com **Vite**
*   **Estilização:** CSS Modules
*   **Gráficos:** Recharts
*   **Roteamento:** React Router DOM

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
*   [Node.js](https://nodejs.org/en/) (Versão 18 ou superior)
*   Uma conta e um cluster no [MongoDB Atlas](https://www.mongodb.com/atlas/database) (ou MongoDB rodando localmente)
*   Uma chave de API (*API Key*) da [IsThereAnyDeal](https://api.isthereanydeal.com/)

---

## 🚀 Como Executar o Projeto

O projeto é dividido em duas partes principais: `backend` e `frontend`. É necessário rodar ambas para que o sistema funcione corretamente.

### 1. Configurando e Rodando o Backend

1. Abra o terminal e navegue até a pasta do servidor:
   ```bash
   cd backend
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install

    ```


3. Crie um arquivo `.env` na raiz da pasta `backend` e preencha com as suas credenciais baseadas no arquivo `.env.example` (se houver), ou utilize a estrutura abaixo:
    ```env
    # Configurações do Servidor
    PORT=3000

    # Banco de Dados (MongoDB)
    DATABASE_URL="mongodb+srv://<USUARIO>:<SENHA>@cluster.mongodb.net/nome-do-banco?retryWrites=true&w=majority"

    # Autenticação JWT
    TOKEN_SECRET="sua_chave_secreta_super_segura"
    TOKEN_EXPIRATION="7d"

    # API Externa (IsThereAnyDeal)
    ITAD_API_KEY="sua_api_key_aqui"

    ```


4. Gere o cliente do Prisma para sincronizar o schema com o MongoDB:
    ```bash
    npx prisma generate

    ```


5. Inicie o servidor em modo de desenvolvimento:
    ```bash
    npm run start:dev

    ```


> O servidor backend estará rodando na porta `http://localhost:3000`. O CORS já está configurado para aceitar requisições do frontend local.



---

### 2. Configurando e Rodando o Frontend

1. Abra um **novo terminal** e navegue até a pasta do cliente:
    ```bash
    cd frontend

    ```


2. Instale as dependências:
    ```bash
    npm install

    ```


3. Inicie o servidor de desenvolvimento do Vite:
    ```bash
    npm run dev

    ```


> O frontend estará disponível no seu navegador no endereço: `http://localhost:5173`.



---

## 📬 Testando as Rotas da API (Postman)

Todas as rotas do backend (Autenticação, Usuários, Jogos, Wishlist e Sincronização) foram documentadas e podem ser testadas diretamente pelo Postman.

Para facilitar a avaliação e o teste do sistema, disponibilizei uma *Collection* completa com exemplos de requisições (GET, POST, PATCH, DELETE) e o envio automático do Token JWT nos cabeçalhos (Headers).

🔗 **Link para o Workspace/Collection do Postman:**

> [Clique aqui para acessar a Collection do Postman](WebGames.postman_collection.json)

**Como usar a Collection:**

1. Clique no link acima para abrir o Postman na web ou no seu aplicativo desktop.
2. Faça um "Fork" da Collection para o seu Workspace ou faça o download do arquivo `.json` e importe manualmente.
3. Comece pela pasta de **Auth**: crie um usuário (`POST /user`), faça login (`POST /auth/login`) para gerar o token e utilize as demais rotas restritas.

---

## 👨‍💻 Autor

Desenvolvido por **Túlio Vilela Lopes** como requisito de Trabalho Final para a disciplina de Sistemas Web I.

