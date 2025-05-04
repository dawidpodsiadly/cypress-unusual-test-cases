import 'cypress-real-events/support';

describe('Hovers', () => {
  beforeEach(() => {
    cy.visit('/hovers');
  });

  it('After Hovering on the Photos the Data Should Appear under Each User', () => {
    cy.get('div.figure').eq(0).realHover();
    cy.get('div.figcaption h5').eq(0).should('have.text', 'name: user1').and('be.visible');
    cy.get('div.figcaption a').eq(0).should('have.text', 'View profile').and('be.visible');

    cy.get('div.figure').eq(1).realHover();
    cy.get('div.figcaption h5').eq(1).should('have.text', 'name: user2').and('be.visible');
    cy.get('div.figcaption a').eq(1).should('have.text', 'View profile').and('be.visible');

    cy.get('div.figure').eq(2).realHover();
    cy.get('div.figcaption h5').eq(2).should('have.text', 'name: user3').and('be.visible');
    cy.get('div.figcaption a').eq(2).should('have.text', 'View profile').and('be.visible');
  });
});
