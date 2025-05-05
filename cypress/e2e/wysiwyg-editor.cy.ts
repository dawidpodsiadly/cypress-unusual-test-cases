describe('WYSIWYG Editor', () => {
  beforeEach(() => {
    cy.visit('/tinymce');
  });

  it('Verify Text in WYSIWYG Editor', () => {
    cy.get('#mce_0_ifr')
      .its('0.contentDocument')
      .should('not.be.empty')
      .then(cy.wrap)
      .find('#tinymce')
      .should('contain.text', 'Your content goes here');
  });
});
