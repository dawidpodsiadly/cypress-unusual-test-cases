it('checks if gallery button exists or not', () => {
  cy.visit('/disappearing_elements');
  cy.get("body").then(body => { 
    if (body.find('a[href="/gallery/"]').length > 0) {   
      cy.get('a').contains('Home').should('be.visible');
      cy.get('a').contains('About').should('be.visible');
      cy.get('a').contains('Contact Us').should('be.visible');
      cy.get('a').contains('Portfolio').should('be.visible');
      cy.get('a').contains('Gallery').should('be.visible').click();
      cy.url().should('include', 'gallery');
    } else {
      cy.get('a').contains('Home').should('be.visible');
      cy.get('a').contains('About').should('be.visible');
      cy.get('a').contains('Contact Us').should('be.visible');
      cy.get('a').contains('Portfolio').should('be.visible');
      cy.get('a').contains('Gallery').should('not.exist');
      cy.url().should('include', 'disappearing_elements');
    }
  })
})