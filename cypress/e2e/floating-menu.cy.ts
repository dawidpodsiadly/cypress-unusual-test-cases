describe('Floating Menu', () => {
  beforeEach(() => {
    cy.visit('/floating_menu');
  });

  it('Scroll to the Bottom of the Page and See if the Menu is Clickable', () => {
    cy.scrollTo('bottom');

    cy.get('#menu a[href="#home"]').click();
    cy.url().should('contain', '#home');

    cy.get('#menu a[href="#news"]').click();
    cy.url().should('contain', '#news');

    cy.get('#menu a[href="#contact"]').click();
    cy.url().should('contain', '#contact');

    cy.get('#menu a[href="#about"]').click();
    cy.url().should('contain', '#about');
  });
});
