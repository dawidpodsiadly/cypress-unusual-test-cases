it('Add/Remove Elements', () => {

    cy.visit('/add_remove_elements/');  

    cy.get('button.added-manually').should('not.exist');
    cy.get('button').contains('Add Element').click();
    cy.get('button.added-manually').should('exist').click();
    cy.get('button.added-manually').should('not.exist');
    
})