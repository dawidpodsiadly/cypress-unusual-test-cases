it('Basic authorization', () => {
  cy.visit('/basic_auth', {
    auth: {
      username: 'admin',
      password: 'admin',        
      },
    })
    cy.get('p').contains('Congratulations! You must have the proper credentials.').should('be.visible');
})