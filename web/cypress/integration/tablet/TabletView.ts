it('visits GameInfo page on tablet', () => {
  cy.visit('/en/play/takesix');
  cy.get('[data-testid="TabletViewDiv"]').should('exist');
});

export {};
