describe('Notification Messages', () => {
  beforeEach(() => {
    cy.visit('/notification_message_rendered');
  });

  it('Notification Should be Successful', () => {
    cy.get('div.example a').click();
    cy.get('#flash').should('have.text', 'Action successful');
  });
});
