Cypress.Commands.add('visitHomePage', () => {
  cy.visit('/');
});

Cypress.Commands.add('scrollToBottom', () => {
  cy.scrollTo('bottom');
});
