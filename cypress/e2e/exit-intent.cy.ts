describe('Exit Intent', () => {
  beforeEach(() => {
    cy.visit('/exit_intent');
  });

  it('Mouse Out of the Viewport Pane and See if Modal Appears', () => {
    cy.get('body').trigger('mouseleave', {clientX: 0, clientY: 0});
    cy.get('#ouibounce-modal').should('be.visible');
  });
});
