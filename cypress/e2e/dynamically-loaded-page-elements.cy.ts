describe('Checks dynamically Loaded Page Elements', () => {
    beforeEach(() => {
        cy.visit('/dynamic_loading');
    })
    it('Checks element on page that is hidden', () => {
        cy.get('a[href="/dynamic_loading/1"]').click();
        cy.get('#finish h4').should('not.be.visible');
        cy.get('#start button').should('have.text', 'Start').click();
        cy.wait(2000);
        cy.get('#finish h4').should('be.visible').and('have.text', 'Hello World!');
    })
    
    it('Checks element rendered after the fact', () => {
        cy.get('a[href="/dynamic_loading/2"]').click();
        cy.get('#finish h4').should('not.exist');
        cy.get('#start button').should('have.text', 'Start').click();
        cy.wait(2000);
        cy.get('#finish h4').should('be.visible').and('have.text', 'Hello World!');
    })
})
