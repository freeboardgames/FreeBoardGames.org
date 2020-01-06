it('visits home page', () => {
  cy.visit('/');
  cy.contains('Free as in freedom');
});

export {};
