describe('Inputs', () => {
  beforeEach(() => {
    cy.visit('/inputs');
  });

  it('Using up/down Arrows on the Keyboard Should Increase the Previously Provided Number', () => {
    cy.get('div.example input').type('7');
    cy.get('div.example input').type('{upArrow}');
    cy.get('div.example input').should('have.value', '8');
    cy.get('div.example input').type('{downArrow}');
    cy.get('div.example input').should('have.value', '7');
  });
});
