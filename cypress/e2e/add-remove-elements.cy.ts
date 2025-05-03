describe('Add/Remove Elements', () => {
  beforeEach(() => {
    cy.visit('/add_remove_elements/');
  });

  it('Add/Remove Elements', () => {
    cy.get('button.added-manually').should('not.exist');
    cy.get('button').contains('Add Element').click();
    cy.get('button.added-manually').click();
    cy.get('button.added-manually').should('not.exist');
  });
});
