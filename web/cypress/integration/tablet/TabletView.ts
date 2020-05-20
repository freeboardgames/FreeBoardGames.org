it('visits GameInfo page on tablet', () => {
  cy.visit('/play/takesix');
  cy.get('[data-testid="TabletViewDiv"]').should('exist');
});

export {};
