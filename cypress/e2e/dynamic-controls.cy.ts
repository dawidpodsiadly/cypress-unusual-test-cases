describe('Checks dynamic controls', () => {
    it('Checks Add/Remove button', () => {
        cy.visit('/dynamic_controls');
        cy.get('#checkbox input').should('be.visible').and('not.be.checked');
        cy.get('button').first().should('have.text', 'Remove');
        cy.get('#checkbox input').click().should('be.checked');
        cy.get('#checkbox input').click().should('not.be.checked');
        cy.get('button').first().click();
        cy.get('#message').should('be.visible').and('have.text', "It's gone!");  
        cy.get('#checkbox input').should('not.exist');
        cy.get('button').first().should('have.text', 'Add').click().should('have.text', 'Remove');
        cy.get('#message').should('be.visible').and('have.text', "It's back!");
        cy.get('#checkbox').click().should('be.checked');
        cy.get('#checkbox').click().should('not.be.checked');
    })

    it('Checks Enable/Disable button', () => {
        const inputText = 'I am testing for fun';
        cy.visit('/dynamic_controls');
        cy.get('#input-example input').should('be.disabled');
        cy.get('#input-example button').should('have.text', 'Enable').click().should('have.text', 'Disable');
        cy.get('#message').should('have.text', "It's enabled!");
        cy.get('#input-example input').type(inputText);
        cy.get('#input-example button').click().should('have.text', 'Enable');
        cy.get('#message').should('have.text', "It's disabled!");
        cy.get('#input-example input').should('be.disabled').and('have.value', inputText);
        cy.get('#input-example button').click().should('have.text', 'Disable');
        cy.get('#input-example input').clear().type(`${inputText} Edited`).should('have.value', `${inputText} Edited`);
    })
})