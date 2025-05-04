describe('File Upload', () => {
  beforeEach(() => {
    cy.visit('/upload');
  });

  it('Upload File using Input', () => {
    cy.get('#file-upload').selectFile('cypress/downloads/upload-test-file.jpg', {action: 'select'});
    cy.get('#file-submit').click();
    cy.get('#uploaded-files').should('contain.text', 'upload-test-file.jpg');
  });

  it('Upload File using Drag and Drop', () => {
    cy.get('#drag-drop-upload').selectFile('cypress/downloads/upload-test-file.jpg', {action: 'drag-drop'});
    cy.get('#drag-drop-upload').should('contain.text', 'upload-test-file.jpg');
  });
});
