describe('Dropdown', () => {
  beforeEach(() => {
    cy.visit('/dropdown');
  });

  it('Select dropdown', () => {
    cy.get('#dropdown').select(1);
    cy.get('#dropdown option').eq(1).should('be.selected');

    cy.get('#dropdown').select(2);
    cy.get('#dropdown option').eq(2).should('be.selected');
  });
});
