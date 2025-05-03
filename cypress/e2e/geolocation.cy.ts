describe('Form Authentication', () => {
  const latitude = 52.2297;
  const longitude = 21.0122;

  beforeEach(() => {
    cy.visit('/geolocation', {
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(cb => {
          cb({
            coords: {
              latitude,
              longitude,
            },
          });
        });
      },
    });
  });

  it('Coordinates Should be Visible and Redirection to Google Maps', () => {
    cy.get('button').click();
    cy.get('#lat-value').should('contain.text', latitude);
    cy.get('#long-value').should('contain.text', longitude);
    cy.get('#map-link a').should('have.attr', 'href', `http://maps.google.com/?q=${latitude},${longitude}`);
  });
});
