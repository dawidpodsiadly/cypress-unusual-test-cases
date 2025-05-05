describe('Large and Deep DOM', () => {
  beforeEach(() => {
    cy.visit('/large');
  });

  it('Get Row in Nested Numbering', () => {
    cy.get('#siblings div').contains('50.3').click();
  });

  it('Get Table Row', () => {
    cy.get('#large-table td').contains('5.14').parent();
  });
});
