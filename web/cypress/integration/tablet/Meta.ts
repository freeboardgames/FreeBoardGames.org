it('has a title', () => {
  cy.visit('/en');
  cy.title().should('equal', 'Play Free Board Games Online - FreeBoardGames.org');
});

export {};
