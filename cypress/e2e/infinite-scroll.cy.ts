describe('Infinite Scroll', () => {
  beforeEach(() => {
    cy.visit('/infinite_scroll');
  });

  it('When Scrolling Down the Page a new Section Should Appear.', () => {
    cy.get('div.jscroll-added').should('have.length', 2);
    cy.scrollTo('bottom');
    cy.get('div.jscroll-added').should('have.length', 3);
  });
});
