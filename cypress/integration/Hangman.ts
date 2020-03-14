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
    .and('eq', 'rgb(0, 230, 118)');
});

export {};
