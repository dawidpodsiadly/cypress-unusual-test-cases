it('Check and uncheck', () => {
    cy.visit('/checkboxes');
    cy.get('input[type="checkbox"]').first().as('firstCheckbox').should('not.be.checked').check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(1).as("secondCheckbox").should('be.checked').uncheck().should('be.not.checked');
})