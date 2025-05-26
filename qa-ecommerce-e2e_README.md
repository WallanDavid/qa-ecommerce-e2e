
# 🛒 QA Automatizado - E-commerce E2E com Cypress

Este projeto realiza a automação de testes E2E (End-to-End) em um fluxo de compra simples utilizando o site [SauceDemo](https://www.saucedemo.com/). O objetivo é simular a jornada do usuário em um e-commerce — desde o login até a finalização da compra.

## ✅ Funcionalidades testadas

- Login com credenciais válidas
- Adição de produto ao carrinho
- Preenchimento do checkout
- Finalização da compra
- Verificação de mensagem de sucesso

## 🧪 Execução dos testes

### 1. Clone o projeto e instale as dependências

```bash
git clone https://github.com/WallanDavid/qa-ecommerce-e2e.git
cd qa-ecommerce-e2e
npm install
```

### 2. Rodar o Cypress com interface visual

```bash
npm run cy:open
```

### 3. Rodar os testes em modo headless (terminal)

```bash
npm run cy:run
```

## 🧾 Resultado da última execução

```
✔  ecommerce.cy.js                          [ 1 passed | 0 failed ]
✔  Todos os testes passaram!
⏱️  Duração: ~4 segundos
📅  Execução: 26/05/2025 03:59
```

## 📁 Estrutura do projeto

```
qa-ecommerce-e2e/
├── cypress/
│   └── e2e/
│       └── ecommerce.cy.js    # Teste automatizado principal
├── node_modules/
├── package.json
└── README.md
```

## 🚀 Tecnologias

- [Cypress 14.4.0](https://docs.cypress.io/)
- Node.js v22+

---

**Autor:** Wallan David  
**Licença:** ISC
