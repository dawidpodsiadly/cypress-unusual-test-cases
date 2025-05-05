describe('Status Codes', () => {
  beforeEach(() => {
    cy.visit('/status_codes');
  });

  it('Redirection - 200 Status Code', () => {
    cy.get('#redirect').click();
    cy.get('a').contains('200').click();
    cy.get('#content').should('contain.text', 'This page returned a 200 status code.');
  });

  it('Redirection - 301 Status Code', () => {
    cy.get('#redirect').click();
    cy.get('a').contains('301').click();
    cy.get('#content').should('contain.text', 'This page returned a 301 status code.');
  });

  it('Redirection - 404 Status Code', () => {
    cy.get('#redirect').click();
    cy.get('a').contains('404').click();
    cy.get('#content').should('contain.text', 'This page returned a 404 status code.');
  });

  it('Redirection - 500 Status Code', () => {
    cy.get('#redirect').click();
    cy.get('a').contains('500').click();
    cy.get('#content').should('contain.text', 'This page returned a 500 status code.');
  });
});
