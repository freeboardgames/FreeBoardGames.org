it('has a title', () => {
  cy.visit('/');
  cy.title().should('equal', 'Play Free Board Games Online - FreeBoardGames.org');
});

export {};
