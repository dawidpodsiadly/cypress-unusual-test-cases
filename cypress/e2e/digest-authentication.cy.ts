describe('Digest Authentication', () => {
  beforeEach(() => {
    cy.visit('/basic_auth', {
      auth: {
        username: 'admin',
        password: 'admin',
      },
    });
  });

  it('Digest Authentication', () => {
    cy.get('p').contains('Congratulations! You must have the proper credentials.').should('be.visible');
  });
});
