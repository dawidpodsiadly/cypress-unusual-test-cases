describe('Entry Ad', () => {
  beforeEach(() => {
    cy.visit('/entry_ad');
  });

  it('Closes entry ad', () => {
    cy.get('#modal div.modal-footer p').click();
    cy.get('#modal').should('not.be.visible');
  });
});
