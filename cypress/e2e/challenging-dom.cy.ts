describe('Challenging DOM', () => {
  beforeEach(() => {
    cy.visit('/challenging_dom');
  });

  it('Get Buttons', () => {
    cy.get('a.button').first().should('have.css', 'background-color', 'rgb(43, 166, 203)').and('be.visible');
    cy.get('a.alert').should('have.css', 'background-color', 'rgb(198, 15, 19)').and('be.visible');
    cy.get('a.success').should('have.css', 'background-color', 'rgb(93, 164, 35)').and('be.visible');
  });

  it('Get Edit/Delete', () => {
    cy.get('a[href="#edit"]').first().click();
    cy.url().should('contain', '/challenging_dom#edit');
    cy.get('a[href="#delete"]').first().click();
    cy.url().should('contain', '/challenging_dom#delete');
  });

  it('Get Canva', () => {
    cy.get('#canvas');
  });
});
