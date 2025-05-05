describe('Dynamic Content', () => {
  beforeEach(() => {
    cy.visit('/dynamic_content');
  });

  it('Should Verify Text Changes after Page Refresh', () => {
    cy.get('div#content').eq(1).find('div.row').eq(0).invoke('text').then(initialText => {
      cy.reload();
      cy.get('div#content').eq(1).find('div.row').eq(0).invoke('text').should(reloadedText => {
          expect(reloadedText).to.not.eq(initialText);
        });
      });
  });
});
