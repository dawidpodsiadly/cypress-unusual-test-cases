describe('Broken Images', () => {
  beforeEach(() => {
    cy.visit('/broken_images');
  });

  it('Broken Images', () => {
    cy.intercept('GET', '/asdf.jpg').as('asdfJpg');
    cy.intercept('GET', '/hjkl.jpg').as('hjklJpg');
    cy.wait('@asdfJpg').its('response.statusCode').should('eq', 200);
    cy.wait('@hjklJpg').its('response.statusCode').should('eq', 200);
  });
});
