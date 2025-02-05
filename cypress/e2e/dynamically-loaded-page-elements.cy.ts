// It's common to see an action get triggered that returns a result dynamically. It does not rely on the page to reload or finish loading. 
// The page automatically gets updated (e.g. hiding elements, showing elements, updating copy, etc) through the use of JavaScript.
// There are two examples. One in which an element already exists on the page but it is not displayed. 
// And anonther where the element is not on the page and gets added in.

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
