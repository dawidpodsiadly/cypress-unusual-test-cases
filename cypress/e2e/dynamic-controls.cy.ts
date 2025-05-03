describe('Dynamic Controls', () => {
  beforeEach(() => {
    cy.visit('/dynamic_controls');
  });

  it('Checks Add/Remove Checkbox', () => {
    cy.get('#checkbox-example button').should('have.text', 'Remove').click();
    cy.get('#message', {timeout: 10000}).should('be.visible').and('have.text', "It's gone!");
    cy.get('#checkbox').should('not.exist');

    cy.get('#checkbox-example button').should('have.text', 'Add').click();
    cy.get('#message', {timeout: 10000}).should('be.visible').and('have.text', "It's back!");
    cy.get('#checkbox').should('be.visible');
    cy.get('#checkbox-example button').should('have.text', 'Remove');
  });

  it('Checks Enable/Disable Input', () => {
    const inputText = 'I am testing for fun';

    cy.get('#input-example input').should('be.disabled');
    cy.get('#input-example button').should('have.text', 'Enable').click();
    cy.get('#message', {timeout: 10000}).should('be.visible').and('have.text', "It's enabled!");

    cy.get('#input-example input').type(inputText);
    cy.get('#input-example button').should('have.text', 'Disable').click();
    cy.get('#message', {timeout: 10000}).should('be.visible').and('have.text', "It's disabled!");
    cy.get('#input-example input').should('be.disabled').and('have.value', inputText);

    cy.get('#input-example button').should('have.text', 'Enable').click().should('have.text', 'Disable');
    cy.get('#input-example input').clear().type(`${inputText} Edited`).should('have.value', `${inputText} Edited`);
  });
});
