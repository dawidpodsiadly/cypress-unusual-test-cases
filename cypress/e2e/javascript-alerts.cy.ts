describe('JavaScript Alerts', () => {
  beforeEach(() => {
    cy.visit('/javascript_alerts');
  });

  it('Click for JS Alert', () => {
    cy.on('window:alert', text => {
      expect(text).to.equal('I am a JS Alert');
    });

    cy.get('button').contains('Click for JS Alert').click();
    cy.get('#result').should('have.text', 'You successfully clicked an alert');
  });

  it('Click for JS Confirm - Ok', () => {
    cy.on('window:alert', text => {
      expect(text).to.equal('I am a JS Confirm');
    });

    cy.get('button').contains('Click for JS Confirm').click();
    cy.get('#result').should('have.text', 'You clicked: Ok');
  });

  it('Click for JS Confirm - Cancel', () => {
    cy.on('window:confirm', text => {
      expect(text).to.equal('I am a JS Confirm');
      return false;
    });

    cy.get('button').contains('Click for JS Confirm').click();
    cy.get('#result').should('have.text', 'You clicked: Cancel');
  });

  it('Click for JS Prompt', () => {
    const promptText = 'Random Text';
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns(promptText);
    });

    cy.get('button').contains('Click for JS Prompt').click();
    cy.get('#result').should('have.text', `You entered: ${promptText}`);
  });
});
