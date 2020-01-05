it('successfully loads', () => {
  cy.visit('/');
  cy.contains('Free as in freedom');
});

export {};
