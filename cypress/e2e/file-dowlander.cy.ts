it('Verifies dowlanded files', () => {
    cy.visit('/download');
    cy.get('a[href="download/LambdaTest.txt"]').click();
    cy.readFile('cypress/downloads/LambdaTest.txt');
    cy.get('a[href="download/LambdaTest.txt"]');
})

