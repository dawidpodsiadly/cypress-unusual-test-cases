// Displays an ad on page load.
// If closed, it will not appear on subsequent page loads.

it('Closes entry ad', () => {
    cy.visit('/entry_ad');
    cy.get('.modal-title h3').should('be.visible');
    cy.get('.modal-footer p').click();
    cy.get('.modal-title h3').should('not.be.visible');
})

