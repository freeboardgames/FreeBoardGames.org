it('shows 404 page, clicks link to go home', () => {
  cy.visit('/en/play/foo', { failOnStatusCode: false });
  cy.contains('Page Not Found');
  cy.contains('Go Home').click();
  cy.url().should('equal', Cypress.config().baseUrl + '/en');
});

it('shows 404 page for unknown gamecode', () => {
  cy.visit('/en/play/foobarbaz', { failOnStatusCode: false });
  cy.contains('Page Not Found');
  cy.contains('Go Home').click();
  cy.url().should('equal', Cypress.config().baseUrl + '/en');
});

export {};
