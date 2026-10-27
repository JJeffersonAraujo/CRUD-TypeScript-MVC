# CRUD TypeScript MVC — API de Gestão de Tarefas

API RESTful simples para gerenciamento de tarefas (Tasks), desenvolvida com **Node.js**, **Express** e **TypeScript**, aplicando o padrão arquitetural **MVC (Model-View-Controller)** com persistência em memória.

---

## 1. OBJETIVO DO PROJETO

Demonstrar a aplicação prática dos conceitos fundamentais de desenvolvimento backend em TypeScript:
- Separação de responsabilidades utilizando camadas (Model, View, Controller e Service).
- Tipagem estática com TypeScript.
- Criação e roteamento de APIs REST com Express.
- Padronização de respostas JSON através de uma camada View dedicada.

---

## 2. TECNOLOGIAS UTILIZADAS

* **Node.js** (Ambiente de execução)
* **TypeScript** (Linguagem tipada)
* **Express** (Framework web minimalista)
* **ts-node** (Execução direta de arquivos TypeScript em desenvolvimento)

---

## 3. ARQUITETURA E ESTRUTURA DE PASTAS

A aplicação adota o padrão **MVC adaptado para APIs REST**, no qual:
- **Model:** Representa a entidade de dados (`Task`).
- **View:** Responsável exclusivamente por formatar e padronizar o envelope de resposta JSON (sucesso ou erro) enviado ao cliente HTTP.
- **Controller:** Recebe a requisição HTTP, extrai e valida parâmetros de entrada e chama o serviço correspondente.
- **Service:** Concentra a lógica de negócio e manipulação dos dados.

```text
CRUD-TypeScript-MVC/
├── src/
│   ├── controllers/
│   │   └── TaskController.ts   # Orquestração das requisições HTTP
│   ├── models/
│   │   └── Task.ts             # Entidade de dados
│   ├── routes/
│   │   └── taskRoutes.ts       # Definição das rotas REST
│   ├── services/
│   │   └── TaskService.ts      # Regras de negócio e armazenamento em memória
│   ├── views/
│   │   └── TaskView.ts         # Padronização de respostas JSON HTTP
│   └── server.ts               # Ponto de entrada e inicialização do servidor
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## 4. PRÉ-REQUISITOS

* **Node.js** (versão 18 ou superior instalada)
* **npm** (gerenciador de pacotes)

---

## 5. INSTALAÇÃO E EXECUÇÃO

### 1. Clonar o repositório:
```bash
git clone https://github.com/JJeffersonAraujo/CRUD-TypeScript-MVC.git
cd CRUD-TypeScript-MVC
```

### 2. Instalar as dependências:
```bash
npm install
```

### 3. Executar em modo de desenvolvimento:
```bash
npm run dev
```
O servidor será iniciado em: `http://localhost:3000/api`

### 4. Compilar para produção:
```bash
npm run build
npm start
```

---

## 6. ENDPOINTS EFETIVAMENTE IMPLEMENTADOS

Todas as rotas possuem o prefixo base `/api/tasks`.

| Método | Rota | Descrição | Status Sucesso | Status Erro |
| :--- | :--- | :--- | :---: | :---: |
| **GET** | `/api/tasks` | Lista todas as tarefas cadastradas | `200 OK` | - |
| **GET** | `/api/tasks/:id` | Retorna uma tarefa específica pelo ID | `200 OK` | `404 Not Found` / `400 Bad Request` |
| **POST** | `/api/tasks` | Cria uma nova tarefa | `201 Created` | `400 Bad Request` |
| **PUT** | `/api/tasks/:id` | Atualiza o título e/ou status de conclusão | `200 OK` | `400 Bad Request` |
| **DELETE** | `/api/tasks/:id` | Remove uma tarefa pelo ID | `200 OK` | `404 Not Found` / `400 Bad Request` |

---

## 7. EXEMPLOS DE REQUISIÇÕES

### 7.1. Criar Tarefa
* **Requisição:** `POST http://localhost:3000/api/tasks`
* **Headers:** `Content-Type: application/json`
* **Body:**
  ```json
  {
    "title": "Estudar TypeScript e Express"
  }
  ```
* **Resposta (201 Created):**
  ```json
  {
    "success": true,
    "data": {
      "id": 1,
      "title": "Estudar TypeScript e Express",
      "done": false
    }
  }
  ```

### 7.2. Listar Todas as Tarefas
* **Requisição:** `GET http://localhost:3000/api/tasks`
* **Resposta (200 OK):**
  ```json
  {
    "success": true,
    "data": [
      {
        "id": 1,
        "title": "Estudar TypeScript e Express",
        "done": false
      }
    ]
  }
  ```

### 7.3. Atualizar Tarefa (Concluir)
* **Requisição:** `PUT http://localhost:3000/api/tasks/1`
* **Headers:** `Content-Type: application/json`
* **Body:**
  ```json
  {
    "title": "Estudar TypeScript e Express (Revisado)",
    "done": true
  }
  ```
* **Resposta (200 OK):**
  ```json
  {
    "success": true,
    "data": {
      "id": 1,
      "title": "Estudar TypeScript e Express (Revisado)",
      "done": true
    }
  }
  ```

### 7.4. Deletar Tarefa
* **Requisição:** `DELETE http://localhost:3000/api/tasks/1`
* **Resposta (200 OK):**
  ```json
  {
    "success": true,
    "data": {
      "message": "Tarefa removida com sucesso"
    }
  }
  ```

---

## 8. LIMITAÇÕES CONHECIDAS

1. **Persistência em Memória:** Os dados são mantidos em uma estrutura de array volátil no `TaskService`. Caso o processo da aplicação seja reiniciado, os dados são redefinidos para o estado inicial vazio.
2. **Autenticação:** A aplicação não possui mecanismo de controle de acesso ou autenticação de usuários (projetada exclusivamente como laboratório de arquitetura MVC).
3. **Validação de Payload:** Validações de esquema de entrada são realizadas de forma básica e imperativa no serviço, sem uso de bibliotecas de validação como Zod ou Class-Validator.
