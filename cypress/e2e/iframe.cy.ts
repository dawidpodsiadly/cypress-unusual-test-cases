describe('iFrame', () => {
  beforeEach(() => {
    cy.visit('/frames');
  });

  it('Verify Text in iFrame', () => {
    cy.get('a[href="/iframe"]').click();
    cy.get('#mce_0_ifr')
      .its('0.contentDocument')
      .should('not.be.empty')
      .then(cy.wrap)
      .find('#tinymce')
      .should('contain.text', 'Your content goes here');
  });
});
