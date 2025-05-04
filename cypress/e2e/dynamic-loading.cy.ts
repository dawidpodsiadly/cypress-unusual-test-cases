describe('Dynamic Loading', () => {
  beforeEach(() => {
    cy.visit('/dynamic_loading');
  });

  it('Checks Element on Page that is Hidden', () => {
    cy.get('a[href="/dynamic_loading/1"]').click();
    cy.get('#finish').should('not.be.visible');
    cy.get('#start button').should('have.text', 'Start').click();
    cy.get('#finish h4', {timeout: 10000}).should('be.visible').and('have.text', 'Hello World!');
  });

  it('Checks Element Rendered After the Fact', () => {
    cy.get('a[href="/dynamic_loading/2"]').click();
    cy.get('#finish').should('not.exist');
    cy.get('#start button').should('have.text', 'Start').click();
    cy.get('#finish h4', {timeout: 10000}).should('be.visible').and('have.text', 'Hello World!');
  });
});
