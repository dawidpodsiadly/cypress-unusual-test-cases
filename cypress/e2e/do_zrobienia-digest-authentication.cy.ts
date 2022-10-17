it('signs in', () => {
    cy.visit('/digest_auth', {
      auth: {
        username: 'admin',
        password: 'admin',        
        },
      })
})