it('plays a local game', () => {
  cy.visit('/');
  cy.get('[data-test-id="gamecard-tictactoe"]').click();
  cy.url().should('equal', Cypress.config().baseUrl + '/play/tictactoe');
  cy.get('[data-testid=playbutton-tictactoe-local] > .MuiButton-label').click();
  cy.contains("Red's turn");
});

export {};
