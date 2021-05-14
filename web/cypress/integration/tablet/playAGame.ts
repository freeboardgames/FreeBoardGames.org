it('plays a local game', () => {
  cy.visit('/en');
  cy.get('[data-testid="gamecard-tictactoe"]').click();
  cy.url().should('equal', Cypress.config().baseUrl + '/en/play/tictactoe');
  cy.get('[data-testid=playbutton-tictactoe-local] > .MuiButton-label').click();
  cy.contains("Red's turn");
});

export {};
