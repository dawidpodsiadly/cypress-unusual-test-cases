it('passes', () => {
  const dataTransfer = new DataTransfer();
  cy.visit('/drag_and_drop');

  cy.get('#column-a').as('firstBox').should('be.visible');
  cy.get('#column-b').as('secondBox').should('be.visible');
  cy.get('#columns header').first().as('firstHeader').should('contain', 'A');
  cy.get('#columns header').eq(1).as('secondHeader').should('contain', 'B');

  cy.get('@firstBox').trigger('dragstart', {dataTransfer})
  cy.get('@secondBox').trigger('drop', {dataTransfer})

  cy.get('@firstHeader').should('contain', 'B');
  cy.get('@secondHeader').should('contain', 'A');

  cy.get('@secondBox').trigger('dragstart', {dataTransfer})
  cy.get('@firstBox').trigger('drop', {dataTransfer})

  cy.get('@firstHeader').should('contain', 'A');
  cy.get('@secondHeader').should('contain', 'B');
})
