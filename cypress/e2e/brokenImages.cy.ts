it('Broken Images', () => {

    cy.intercept('GET', '/img/avatar-blank.jpg').as('avatarJpg');
    cy.intercept('GET', '/asdf.jpg').as('asdfJpg');
    cy.intercept('GET', '/hjkl.jpg').as('hjklJpg');

    cy.visit('/broken_images');

    cy.wait('@avatarJpg').its('response.statusCode').should('eq', 200);
    cy.wait('@asdfJpg').its('response.statusCode').should('eq', 200);
    cy.wait('@asdfJpg').its('response.statusCode').should('eq', 200);
});
