it('shows 404 page, clicks link to go home', () => {
  cy.visit('/play/foo', { failOnStatusCode: false });
  cy.contains('Page Not Found');
  cy.contains('Go Home').click();
  cy.url().should('equal', Cypress.config().baseUrl + '/');
});

it('shows 404 page for unknown gamecode', () => {
  cy.visit('/play/foobarbaz', { failOnStatusCode: false });
  cy.contains('Page Not Found');
  cy.contains('Go Home').click();
  cy.url().should('equal', Cypress.config().baseUrl + '/');
});

export {};
