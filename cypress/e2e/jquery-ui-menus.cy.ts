describe('JQueryUI - Menu', () => {
  beforeEach(() => {
    cy.visit('/jqueryui/menu#');
  });

  it('Choose "Back to JQuery UI" option', () => {
    cy.get('#menu a').contains('Enabled').click();
    cy.get('#menu a').contains('Back to JQuery UI').click();
    cy.get('div.description').should('be.visible');
    cy.url().should('not.contain', '/menu#');
  });
});
