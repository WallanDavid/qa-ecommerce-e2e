// ecommerce.cy.js
describe('E-commerce E2E Test', () => {
  it('Deve fazer login, adicionar item e finalizar compra', () => {
    // Acessar o site
    cy.visit('https://www.saucedemo.com/');

    // Login
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Adicionar produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Ir para o carrinho
    cy.get('.shopping_cart_link').click();

    // Iniciar checkout
    cy.get('[data-test="checkout"]').click();

    // Preencher dados do comprador
    cy.get('[data-test="firstName"]').type('David');
    cy.get('[data-test="lastName"]').type('Wallan');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    // Finalizar pedido
    cy.get('[data-test="finish"]').click();

    // Validar mensagem de sucesso
    cy.contains('Thank you for your order!').should('be.visible');
  });
});
