describe('Typos', () => {
  beforeEach(() => {
    cy.visit('/typos');
  });

  it('Avoid Typos Using contain.text', () => {
    cy.get('p').should('contain.text', `Sometimes you'll see a typo, other times you won't.`);
  });
});
