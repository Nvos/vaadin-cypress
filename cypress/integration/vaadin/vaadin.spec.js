/// <reference types="cypress" />

// It seems that it is required to set "Acces Type" in keycloak to public
// Otherwise it asks for secret

describe('Vaadin', () => {
  // beforeEach(() => {
  //   cy.kcLogout();
  //   cy.kcLogin('user1');
  //   cy.visit('/');
  // });

  // it('Just work', () => {
  // cy.contains('Click')
  //   .should('be.visible')
  //   .click();
  // });
  var i = 0;
  for (i = 0; i < 1; i++) {
    it('Just work 2', () => {
      cy.kcLogout();
      cy.kcLogin('user1');
      cy.visit('/');
      cy.waitForVaadin()
        .get('#username')
        .type('user');
      cy.waitForVaadin()
        .get('#password')
        .type('user');
      cy.waitForVaadin()
        .get('.v-button')
        .click();
      cy.waitForVaadin()
        .get('#result')
        .should('contain.text', 'useruser');
    });
  }
});
