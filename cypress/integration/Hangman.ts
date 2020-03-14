it('plays a local game', () => {
  // p1 setup
  cy.visit('/play/hangman/local');
  cy.contains('Player 1: Enter Word');
  cy.get('[data-test-id="playButton"]').should('be.disabled');
  cy.get('[data-test-id="wordTextField"]')
    .click()
    .type('fooword');
  cy.get('[data-test-id="hintTextField"]')
    .click()
    .type('foohint');
  cy.get('[data-test-id="playButton"]').should('not.be.disabled');
  cy.get('[data-test-id="playButton"]').click();

  // p2 setup
  cy.contains('Player 2: Enter Word');
  cy.get('[data-test-id="playButton"]').should('be.disabled');
  cy.get('[data-test-id="wordTextField"]')
    .click()
    .type('barword');
  cy.get('[data-test-id="hintTextField"]')
    .click()
    .type('barhint');
  cy.get('[data-test-id="playButton"]').should('not.be.disabled');
  cy.get('[data-test-id="playButton"]').click();

  // play game
  // we are p1
  cy.contains("Player 1's Turn");

  cy.get('[data-test-id="letter-A-cir"]')
    .should('have.css', 'fill')
    .and('eq', 'rgb(0, 0, 0)');
  // guess A
  cy.get('[data-test-id="letter-A"]').click();
  // guess is correct
  cy.get('[data-test-id="letter-A-cir"]')
    .should('have.css', 'fill')
    .and('eq', 'rgb(0, 230, 118)'); // green

  // guess Z
  cy.get('[data-test-id="letter-Z"]').click();
  // guess is wrong
  cy.get('[data-test-id="letter-Z-cir"]')
    .should('have.css', 'fill')
    .and('eq', 'rgb(255, 23, 68)'); // red

  // solve: BARWORD
  cy.get('[data-test-id="letter-B"]').click();
  cy.get('[data-test-id="letter-R"]').click();
  cy.get('[data-test-id="letter-W"]').click();
  cy.get('[data-test-id="letter-O"]').click();
  cy.get('[data-test-id="letter-D"]').click();

  // solved
  cy.contains('CORRECT');
  cy.get('[data-test-id="next-button"]').click();

  // p2's turn
  cy.contains("Player 2's Turn");
  cy.get('[data-test-id="letter-Z"]').click();
  cy.get('[data-test-id="letter-Z-cir"]')
    .should('have.css', 'fill')
    .and('eq', 'rgb(255, 23, 68)'); // red

  // we guess random letters
  cy.get('[data-test-id="letter-Q"]').click();
  cy.get('[data-test-id="letter-V"]').click();
  cy.get('[data-test-id="letter-P"]').click();
  cy.get('[data-test-id="letter-E"]').click();
  cy.get('[data-test-id="letter-A"]').click();
  cy.get('[data-test-id="letter-G"]').click();
  cy.get('[data-test-id="letter-S"]').click();
  cy.get('[data-test-id="letter-U"]').click();
  cy.get('[data-test-id="letter-L"]').click();

  // we are an awful player and lose
  cy.contains('INCORRECT');
  cy.contains('Player 1 won');
  cy.contains('FOOWORD');
});

export {};
