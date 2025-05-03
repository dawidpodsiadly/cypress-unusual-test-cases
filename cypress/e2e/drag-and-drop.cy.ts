describe('Drag and Drop', () => {
  beforeEach(() => {
    cy.visit('/drag_and_drop');
  });

  it('Moving the box should change the letter', () => {
    const dataTransfer = new DataTransfer();
    cy.get('#column-a').as('firstBox').should('be.visible');
    cy.get('#column-b').as('secondBox').should('be.visible');

    cy.get('@firstBox').trigger('dragstart', {dataTransfer});
    cy.get('@secondBox').trigger('drop', {dataTransfer});
    cy.get('@firstBox').should('contain', 'B');
    cy.get('@secondBox').should('contain', 'A');

    cy.get('@secondBox').trigger('dragstart', {dataTransfer});
    cy.get('@firstBox').trigger('drop', {dataTransfer});
    cy.get('@firstBox').should('contain', 'A');
    cy.get('@secondBox').should('contain', 'B');
  });
});
