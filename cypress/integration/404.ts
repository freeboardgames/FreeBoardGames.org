it('shows 404 page, clicks link to go home', () => {
  cy.visit('/foobarbaz404', { failOnStatusCode: false });
  cy.contains('Page Not Found');
  cy.contains('Go Home').click();
  cy.url().should('equal', Cypress.config().baseUrl + '/');
});

export {};
