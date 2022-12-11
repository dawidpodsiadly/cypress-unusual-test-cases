it('Selects options in dropdown', () => {
    cy.visit('/dropdown');
    cy.get('#dropdown').select(1);
    cy.get('#dropdown option').eq(1).should('have.text', 'Option 1');
    cy.get('#dropdown').select(2);
    cy.get('#dropdown option').eq(2).should('have.text', 'Option 2');
})