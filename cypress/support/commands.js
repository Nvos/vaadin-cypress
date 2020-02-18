import 'cypress-wait-until';
import 'cypress-keycloak-commands';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const waitForVaadin = vaadin => {
  if (vaadin == null) {
    return false;
  }

  var clients = vaadin.clients;
  if (clients) {
    for (var client in clients) {
      if (clients[client].isActive()) {
        return false;
      }
    }

    return true;
  }

  return false;
};

Cypress.Commands.add('waitForVaadin', () => {
  cy.window()
    .its('vaadin')
    .should('not.be.undefined');

  cy.window()
    .its('vaadin')
    .waitUntil(v => {
      const result = waitForVaadin(v);
      console.warn('result', result);

      return result;
    });
});
