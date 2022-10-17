it('checks alert by right clicking on the box', () => {

  cy.visit('/context_menu');
  cy.get('#hot-spot').rightclick('left');
  cy.on('window:alert', (text) => {
    expect(text).to.contains('You selected a context menu');
  });
})
