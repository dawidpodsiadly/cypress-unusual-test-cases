describe('Form Authentication', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Wrong Username', () => {
    cy.get('#username').type('Random username');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('Wrong Password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('Random password');
    cy.get('button').click();
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('Correct Credentials and Logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.get('a.button').click();
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });
});
