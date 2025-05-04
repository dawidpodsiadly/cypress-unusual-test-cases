describe('Key Presses', () => {
  beforeEach(() => {
    cy.visit('/key_presses?');
  });

  it('Should Respond to Special Keyboard Keys', () => {
    cy.get('#target').type('1');
    cy.get('#result').should('contain.text', '1');
    cy.get('#target').type('A');
    cy.get('#result').should('contain.text', 'A');
    cy.get('#target').focus().type('{shift}');
    cy.get('#result').should('contain.text', 'SHIFT');
    cy.get('#target').type('{leftarrow}');
    cy.get('#result').should('contain.text', 'LEFT');
    cy.get('#target').type('{rightarrow}');
    cy.get('#result').should('contain.text', 'RIGHT');
    cy.get('#target').type('{uparrow}');
    cy.get('#result').should('contain.text', 'UP');
    cy.get('#target').type('{downarrow}');
    cy.get('#result').should('contain.text', 'DOWN');
  });
});
