describe('Context Menu', () => {
  beforeEach(() => {
    cy.visit('/context_menu');
  });

  it('Checks Alert by Right Clicking on the Box', () => {
    cy.get('#hot-spot').rightclick('left');
    cy.on('window:alert', text => {
      expect(text).to.contains('You selected a context menu');
    });
  });
});
