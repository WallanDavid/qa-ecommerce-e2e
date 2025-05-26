# 🧪 QA Automatizado com Cypress - E2E para E-commerce

Este repositório contém um conjunto de testes automatizados de ponta a ponta (E2E) usando [Cypress](https://www.cypress.io/), aplicados em um fluxo completo de um sistema e-commerce fictício ou real.

> ✅ Automação de testes com foco em **qualidade de software**, **experiência do usuário** e **cobertura de casos críticos**.

---

## 📦 Tecnologias e Ferramentas

- **Cypress** — Framework E2E moderno e intuitivo  
- **Node.js** — Ambiente de execução  
- **Mocha** + **Chai** — Engine de testes e assertions  
- **VSCode** — Editor recomendado  
- **GitHub Actions** (em breve) — Para CI/CD automatizado  

---

## 📁 Estrutura do Projeto

qa-ecommerce-e2e/
├── cypress/
│ ├── e2e/ # Testes E2E escritos em JS
│ ├── fixtures/ # Dados simulados (mock)
│ └── support/ # Comandos e configs customizadas
├── cypress.config.js # Configurações do Cypress
├── package.json # Dependências e scripts NPM


---

## 🚀 Como Rodar os Testes Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/WallanDavid/qa-ecommerce-e2e.git
cd qa-ecommerce-e2e

2. Instale as dependências
npm install

3. Execute os testes com a interface do Cypress
npx cypress open


✅ Testes Implementados
- Cadastro de novo usuário
- Login com credenciais válidas
- Adição de produto no carrinho
- Finalização de compra
- Validação de mensagens de erro nos formulários

⚠️ Verifique a baseUrl no arquivo cypress.config.js para garantir que os testes apontem para o ambiente correto.


📸 Evidências (opcional)
Os testes podem gerar screenshots e vídeos automaticamente em caso de falha:

📁 cypress/screenshots/
📁 cypress/videos/


📄 Licença
Distribuído sob a licença MIT.
Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
Desenvolvido por Wallan Peixoto
GitHub: @WallanDavid
