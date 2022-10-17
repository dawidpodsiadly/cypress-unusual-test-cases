it('Get buttons', () => {

    cy.visit('/challenging_dom');

    cy.get('a.button').first().should('have.css', 'background-color', 'rgb(43, 166, 203)').and('be.visible');
    cy.get('a.alert').should('have.css', 'background-color', 'rgb(198, 15, 19)').and('be.visible');
    cy.get('a.success').should('have.css', 'background-color', 'rgb(93, 164, 35)').and('be.visible');

})

it.only('Get edit/delete', () => {

  cy.visit('/challenging_dom');
  
  cy.get('a[href="#edit"]').first().click();
  cy.url().should('contain', '/challenging_dom#edit');
  cy.get('a[href="#delete"]').first().click();
  cy.url().should('contain', '/challenging_dom#delete');
  
})

it('Get Canva', () => {

  cy.visit('/challenging_dom');
  
  cy.get('#canvas');

})
