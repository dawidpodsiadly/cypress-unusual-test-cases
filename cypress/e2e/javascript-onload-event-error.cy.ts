describe('JavaScript Onload Event Error', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', err => {
      if (err.message.includes('Cannot read properties of undefined')) {
        return false;
      }
    });
    cy.visit('/javascript_error');
  });

  it('Should Display a JavaScript Error Message in the Onload Event', () => {
    cy.get('p').should('contain.text', 'This page has a JavaScript error in the onload event.');
  });
});
