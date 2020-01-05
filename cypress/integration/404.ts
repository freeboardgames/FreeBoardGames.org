it('shows 404 page', () => {
  cy.visit('/foobarbaz404', { failOnStatusCode: false });
  cy.contains('Page Not Found');
});

export {};
