// Context menu items are custom additions that appear in the right-click menu.
// Right-click in the box below to see one called 'the-internet'. When you click it, it will trigger a JavaScript alert.

it('checks alert by right clicking on the box', () => {
  cy.visit('/context_menu');
  cy.get('#hot-spot').rightclick('left');
  cy.on('window:alert', (text) => {
    expect(text).to.contains('You selected a context menu');
  });
})
