describe('Secure File Downloader', () => {
  beforeEach(() => {
    cy.visit('/download_secure', {
      auth: {
        username: 'admin',
        password: 'admin',
      },
    });
  });

  it('Download Secure File', () => {
    cy.get('a[href="download_secure/test_file.txt').click();
    cy.readFile('cypress/downloads/test_file.txt');
  });
});
