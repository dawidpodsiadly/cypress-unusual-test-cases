it('Verifies dowlanded files', () => {
    cy.visit('/download');
    cy.window().document().then(function (doc) {
        doc.addEventListener('click', () => {
          setTimeout(function () { doc.location.reload() }, 2000)
        })
        cy.get('a[href="download/Test.png').click()
      })

      cy.readFile('cypress/downloads/Test.png');
})
