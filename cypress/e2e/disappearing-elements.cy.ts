describe('Disappearing Elements', () => {
  beforeEach(() => {
    cy.visit('/disappearing_elements');
  });

  it('Gallery button should exist', () => {
    cy.get('a').contains('Home').should('be.visible');
    cy.get('a').contains('About').should('be.visible');
    cy.get('a').contains('Contact Us').should('be.visible');
    cy.get('a').contains('Portfolio').should('be.visible');
    cy.get('a').contains('Gallery').should('be.visible');
  });
});
