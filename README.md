# 🎉 Party Time

O **Party Time** é uma aplicação **fullstack MERN** (MongoDB, Express, React e Node.js) para gerenciamento de festas e serviços.  
Permite criar, editar e visualizar festas, além de gerenciar serviços relacionados.

---

## 📂 Estrutura do Projeto
```
/backend
├── controllers # Controladores da lógica de negócios (Party, Service)
├── db # Conexão MongoDB Atlas e mocks
├── models # Modelos Mongoose (Party, Service)
├── routes # Rotas da API (parties, services)
├── app.js # Configuração principal do servidor
└── package.json
```
```
/frontend
├── assets # Imagens e arquivos estáticos
├── src
│ ├── axios # Configuração do Axios para chamadas HTTP
│ ├── components # Componentes reutilizáveis (ex: NavBar)
│ ├── hook # Hooks customizados (ex: useToast)
│ ├── routes # Páginas (CreateParty, EditParty, Home, Party etc.)
│ ├── App.jsx # Componente raiz com React Router
│ ├── main.jsx # Ponto de entrada
│ └── index.css # Estilo global
├── index.html
└── package.json
```
---

## 🚀 Tecnologias Utilizadas

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) (MongoDB Atlas)
- REST API

### Frontend
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- Hooks (useState, useEffect, custom hooks)

---

## ⚙️ Como Rodar o Projeto

### 1. Clonar o repositório
```
git clone https://github.com/seu-usuario/party-time.git
cd party-time
2. Configurar variáveis de ambiente
No backend, crie um arquivo .env com:

MONGO_URI="sua-string-de-conexao-do-mongo-atlas"
PORT=5000
3. Rodar o Backend

cd backend
npm install
npm run dev
Servidor: http://localhost:5000

4. Rodar o Frontend
Em outro terminal:

cd frontend
npm install
npm run dev
App: http://localhost:5173

```
```
📌 Funcionalidades
Criar, editar e listar festas 🎊

Gerenciar serviços 🛠️

Navegação com React Router

Comunicação frontend ↔ backend via API REST

Persistência no MongoDB Atlas
```

📡 Endpoints da API
Parties
GET /parties → lista todas as festas

GET /parties/:id → busca uma festa específica

POST /parties → cria uma festa

PUT /parties/:id → atualiza uma festa

DELETE /parties/:id → remove uma festa

Services
GET /services → lista serviços

GET /services/:id → busca um serviço específico

POST /services → cria um serviço

PUT /services/:id → atualiza um serviço

DELETE /services/:id → remove um serviço

📷 Project Preview
<img width="1918" height="994" alt="image" src="https://github.com/user-attachments/assets/de846d79-f006-486a-be7a-55a0998fc329" />
<img width="1915" height="934" alt="image" src="https://github.com/user-attachments/assets/309484e8-8e1d-489f-9da2-ad5dcf0a2e81" />
<img width="1918" height="701" alt="image" src="https://github.com/user-attachments/assets/a694b40c-ebe8-4678-8d34-e6c010155701" />
<img width="544" height="846" alt="image" src="https://github.com/user-attachments/assets/969c245f-3a0b-4b5d-a429-f1bd1f05db94" />


