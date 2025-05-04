describe('File Download', () => {
  beforeEach(() => {
    cy.visit('/download');
  });

  it('Verifies Dowlanded File', () => {
    cy.get('a[href="download/real.jpg').click();
    cy.readFile('cypress/downloads/real.jpg');
  });
});
