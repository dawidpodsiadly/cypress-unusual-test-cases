describe('Basic Auth', () => {
  beforeEach(() => {
    cy.visit('/basic_auth', {
      auth: {
        username: 'admin',
        password: 'admin',
      },
    });
  });

  it('Basic Auth', () => {
    cy.get('p').contains('Congratulations! You must have the proper credentials.').should('be.visible');
  });
});
