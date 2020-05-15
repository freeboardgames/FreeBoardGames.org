/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    matchImageSnapshot(value?: string, opts?: Object): Chainable<Element>;
  }
}
