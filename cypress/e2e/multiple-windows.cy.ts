describe('Opening a new window', () => {
  beforeEach(() => {
    cy.visit('/windows');
  });

  it('Opening New Tab in the Same Window', () => {
    cy.get('div.example a').invoke('removeAttr', 'target').click();
    cy.get('h3').contains('New Window').should('be.visible');
  });
});
